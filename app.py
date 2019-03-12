import numpy as np
import pandas as pd
import logging
import sqlalchemy
import datetime as dt
import sys
import os
import json
sys.path.append("static/assets/Resources/")
import config as c
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, MetaData, text
from sqlalchemy.pool import StaticPool
from flask import Flask, jsonify, render_template, request, redirect



logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.DEBUG)

#=======================
#    Database Connection
#=======================
#Heroku db environment variables
# usr = os.environ['username'] 
# pwd = os.environ['password']

usr = c.username 
pwd = c.password
dbName = c.dbName
dbHost = c.dbHost
dbPort = c.dbPort

# conn_string = f"{c.username}:{c.password}@etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qlmvsrhei7a78mbk"
# conn_string = f"{usr}:{pwd}@localhost:3306/{dbName}"
conn_string = f"{usr}:{pwd}@{dbHost}:{dbPort}/{dbName}"
engine = create_engine(f'mysql://{conn_string}')


# reflect sqliteDB into a new model Base
Base = automap_base()
# reflect tables into Base
Base.prepare(engine, reflect=True)

# Assign table refference to a vars
# StatesIndex = Base.classes.states_i_vw
# PropertyIndex = Base.classes.props_i_vw
# StatesView = Base.classes.states_vw
# Survey = Base.classes.class_survey

# Create Session obj
session = Session(engine)

#========================
#    Initialize Flask app
#========================
app = Flask(__name__)

#========================
#       Helper functions
#========================

#==========
#Get current survey results
#==========
# def surveyResults():
#     #Run query
#     with engine.connect() as con:
#         yes = con.execute("SELECT YES FROM class_survey").fetchall()
#         no = con.execute("SELECT NO FROM class_survey").fetchall()
#         idk = con.execute("SELECT IDK FROM class_survey").fetchall()
        
#         #Declare vars
#         yList = []
#         nList = []
#         iList = []

#         #Itterate throught list of tuples and push vote values into a list
#         for i in yes:
#             yList.append(int(i[0]))

#         for i in no:
#             nList.append(int(i[0]))

#         for k in idk:
#             iList.append(int(k[0]))
        
#         #Sum the lists and place into variables
#         yesTot = int(sum(yList))
#         noTot = int(sum(nList))
#         idkTot = int(sum(iList))

#         #Create plot arrays
#         yAxis = [yesTot, noTot, idkTot]
#         xAxis = ["Yes", "No", "I Don't Know"]

#         #Bundle both trace lists into a single list for the return value
#         results = []
#         results.extend((yAxis, xAxis))

#     return (results)


#========================
#          Publish Routes
#========================


#======================
#Root Get Route
#======================
@app.route("/")
def welcome():

    return (
       render_template("index.html")
        
    )

#======================
#Route to About the Team page
#======================
@app.route("/about")
def about():

    return (
       render_template("about.html")
        
    )

#=====================
#Route to Project Documentation Page
#=====================
@app.route("/documentation")
def documentation():
    
    return (
        render_template("documentation.html")        
    )

#======================
#Route to Test Cases Page
#======================
@app.route("/testcases")
def test_cases():
    with engine.connect() as con:    
        rsAfraid    = con.execute("Select model_name, prctCorrect from emo_grouped_results_vw where file_emotion = 'afraid'")
        rsAngry     = con.execute("Select model_name, prctCorrect from emo_grouped_results_vw where file_emotion = 'angry'")
        rsDisgusted = con.execute("Select model_name, prctCorrect from emo_grouped_results_vw where file_emotion = 'disgusted'")
        rsHappy     = con.execute("Select model_name, prctCorrect from emo_grouped_results_vw where file_emotion = 'happy'")
        rsNeutral   = con.execute("Select model_name, prctCorrect from emo_grouped_results_vw where file_emotion = 'neutral'")
        rsSad       = con.execute("Select model_name, prctCorrect from emo_grouped_results_vw where file_emotion = 'sad'")
        rsSurprised  = con.execute("Select model_name, prctCorrect from emo_grouped_results_vw where file_emotion = 'surprised'")
        rsMale      = con.execute("Select model_name, prctCorrect from gen_grouped_results_vw where file_gender = 'male'")
        rsFemale    = con.execute("Select model_name, prctCorrect from gen_grouped_results_vw where file_gender = 'female'")

        a_m = text("""SELECT model_name, prctCorrect FROM emo_grouped_results_vw WHERE model_name LIKE 'AM%'""")
        rsModelAM = con.execute(a_m)

        a_s = text("""SELECT model_name, prctCorrect FROM emo_grouped_results_vw WHERE model_name LIKE 'AS%'""")
        rsModelAS = con.execute(a_s)
        
        f_m = text("""SELECT model_name, prctCorrect FROM emo_grouped_results_vw WHERE model_name LIKE 'FM%'""")
        rsModelFM = con.execute(f_m)
        
        f_s = text("""SELECT model_name, prctCorrect FROM emo_grouped_results_vw WHERE model_name LIKE 'FS%'""")
        rsModelFS = con.execute(f_s)
        
        m_m = text("""SELECT model_name, prctCorrect FROM emo_grouped_results_vw WHERE model_name LIKE 'MM%'""")
        rsModelMM = con.execute(m_m)
        
        m_s = text("""SELECT model_name, prctCorrect FROM emo_grouped_results_vw WHERE model_name LIKE 'MS%'""")
        rsModelMS = con.execute(m_s)
        
    return (
        render_template("test_cases.html", rsAfraid=rsAfraid, rsAngry=rsAngry, rsDisgusted=rsDisgusted, rsHappy=rsHappy, rsNeutral=rsNeutral, rsSad=rsSad, rsSurprised=rsSurprised, rsMale=rsMale, rsFemale=rsFemale, rsModelAM=rsModelAM, rsModelAS= rsModelAS, rsModelFM= rsModelFM, rsModelFS= rsModelFS, rsModelMM= rsModelMM, rsModelMS=rsModelMS)
        
    )


#======================
#GET Route to pull results of survey from db for plot
#======================
@app.route("/apiV1.0/get_results")
def getResults():
    # results = surveyResults()
    
    # #Split results into two separate trace lists
    # xAxis = results[1]
    # yAxis = results[0]

    return (
        render_template("survey.html")
    )

#======================
#POST Route publish survey selection to db
#======================
# @app.route("/apiV1.0/post_results/<value>", methods=["GET", "POST"])
# def postResults(value):
#     print(value)
#     if request.method == "GET":
#         #Code to sql insert query statement
#         if value == "yes":
#             #instert a record with a yes value of 1
#             with engine.connect() as con:
#                 print(value)
#                 con.execute('INSERT INTO class_survey (YES) VALUES (1);')
#         elif value == "no":
#             #insert a rocord with a no value of 1
#             with engine.connect() as con:
#                 print(value)
#                 con.execute('INSERT INTO class_survey (NO) VALUES (1);')
#         elif value == "idk":
#             #insert a rocord with a idk value of 1
#             with engine.connect() as con:
#                 print(value)
#                 con.execute('INSERT INTO class_survey (IDK) VALUES (1);')
#     rvalue = request.method
#     return (
#         redirect("https://voter-influence.herokuapp.com/apiV1.0/get_results", code=302)        
#     )

#==============
#Project Outcomes page route
#==============
@app.route("/project_outcomes")
def admin():
    with engine.connect() as con:
        rsOutcome = con.execute('SELECT model_name, pct_correct FROM outcome_vw')

    return(render_template("project_outcomes.html", rsOutcome = rsOutcome))




if __name__ == '__main__':
    app.run(debug=True)

#Start app commands
# $ python app.py
#      or
#$ export FLASK_APP=app.py
#$ flask run

#App runs on local host (http://127.0.0.1:5000/)

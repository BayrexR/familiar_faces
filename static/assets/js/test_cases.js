//Global Variables
//-----------------
var modelAvgs = [];

//-----------------
//Helper Functions
//-----------------

//Average scores of an array
function avgScores(arr){
    var avg = 0;
    var tot = 0;
    for (var i=0; i<arr.length;i++){
        tot = tot += arr[i];
    };
    avg = tot / arr.length;
    var v = avg.toFixed();
    v = parseInt(v);
    console.log(v);
    modelAvgs.push(v);
    console.log(modelAvgs);

    return(modelAvgs);
};


//Split values into arrays for averaging
function getAvg(values, name){
    modelAvgs=[];
    var avg2 = [];
    var avg5 = [];
    var avg10 = [];
    var avg35 = [];
    var avg70 = [];  
    var avg =[];


    //Switch statement to isolate model sample size and push to appropriate array
    for (i = 0; i < name.length; i++){
        var size = name[i].substring(2);
        var val= 0;
        // console.log(size);
        switch (size) {
            case '2': val = parseFloat(values[i]);
                avg2.push(val);
            break;
            case '5' : val = parseInt(values[i]);
                avg5.push(val);
            break;
            case '10' : val = parseFloat(values[i]);
                avg10.push(val);
            break;
            case '35' : val = parseFloat(values[i]);
                avg35.push(val);
            break;
            default : val = parseFloat(values[i]);
                avg70.push(val);
        };
        console.log(avg2, avg5,avg10,avg35,avg70);
    };

    avgScores(avg2);
    avgScores(avg5);
    avgScores(avg10);
    avgScores(avg35);
    avgScores(avg70);

    //Async function to call avgScores function on each array in exact model size ascending order.
    // async function pushValues(){
    //     await avgScores(avg2);
    //     await avgScores(avg5);
    //     await avgScores(avg10);
    //     await avgScores(avg35);
    //     await avgScores(avg70);
    //     return Promise.resolve(modelAvgs);
    // };       
    // average = pushValues(); 
    // console.log(average);   

    return (modelAvgs);
}

//----------------
//End Helper Functions
//----------------


function createEmotionPlot() {

    // Trace1 Afraid
    var trace1 = {
        x: mpEModel,
        y: mpAfraid,
        text: mpAfraid,
        name: "Afraid",
        type: "bar"
    };
    
    // Trace 2 Angry
    var trace2 = {
        x: mpEModel,
        y: mpAngry,
        text: mpAngry,
        name: "Angry",
        type: "bar"
    };

    // Trace 3 Disgusted 
    var trace3 = {
        x: mpEModel,
        y: mpDisgusted,
        text: mpDisgusted,
        name: "Disgusted",
        type: "bar"
    };

    // Trace 4 Happy
    var trace4 = {
        x: mpEModel,
        y: mpHappy,
        text: mpHappy,
        name: "Happy",
        type: "bar"
    };

    // Trace 5 Happy
    var trace5 = {
        x: mpEModel,
        y: mpNeutral,
        text: mpNeutral,
        name: "Neutral",
        type: "bar"
    };

    // Trace 6 Sad
    var trace6 = {
        x: mpEModel,
        y: mpSad,
        text: mpSad,
        name: "Sad",
        type: "bar"
    };

    // Trace 7 Surprised
    var trace7 = {
        x: mpEModel,
        y: mpSurprised,
        text: mpSurprised,
        name: "Surprised",
        type: "bar"
    };

    // Combining both traces
    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Model'},
        yaxis: {title: 'Percentage Correct'},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        },    
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot-emotion-id", data, layout);
}    


function createGenderPlot() {

    // Trace1 Male
    var trace1 = {
        x: mpGModel,
        y: mpMale,
        text: mpMale,
        name: "Male",
        type: "line"
    };
    
    // Trace 2 Female
    var trace2 = {
        x: mpGModel,
        y: mpFemale,
        text: mpFemale,
        name: "Female",
        type: "line"
    };

    // Combining both traces
    var data = [trace1, trace2];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Model'},
        yaxis: {title: 'Percentage Correct'},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        }    
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot-gender-id", data, layout);
};    

function createAM_Plot() {
    getAvg(mp_AM, mpModelAM);
    var avgAM= modelAvgs;
    var names = ["AM2","AM5","AM10","AM35","AM70"];
    // Trace1 AM
    var trace1 = {
        x: names,
        y: avgAM,
        text: names,
        name: "AM",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct',
            range: [0, 105]},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        },
        
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model1-data-plot", data, layout);
};    

function createAS_Plot() {
    getAvg(mp_AS, mpModelAS);
    var avgAS= modelAvgs;
    var names = ["AS2","AS5","AS10","AS35","AS70"];
    // Trace1 AS
    var trace1 = {
        x: names,
        y: avgAS,
        text: names,
        name: "AS",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct',
            range: [0, 105]},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        }    
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model2-data-plot", data, layout);
};    

function createFM_Plot() {
    getAvg(mp_FM, mpModelFM);
    var avgFM= modelAvgs;
    var names = ["FM2","FM5","FM10","FM35","FM70"];
    // Trace1 AS
    var trace1 = {
        x: names,
        y: avgFM,
        text: names,
        name: "FM",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct',
            range: [0, 105]},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        }    
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model3-data-plot", data, layout);
};   

function createFS_Plot() {
    getAvg(mp_FS, mpModelFS);
    var avgFS= modelAvgs;
    var names = ["FS2","FS5","FS10","FS35","FS70"];
    // Trace1 FS
    var trace1 = {
        x: names,
        y: avgFS,
        text: names,
        name: "FS",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct',
            range: [0, 105]},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        }        
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model4-data-plot", data, layout);
};   

function createMM_Plot() {
    getAvg(mp_MM, mpModelMM);
    var avgMM= modelAvgs;
    var names = ["MM2","MM5","MM10","MM35","MM70"];
    // Trace1 AS
    var trace1 = {
        x: names,
        y: avgMM,
        text: names,
        name: "MM",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct',
            range: [0, 105]},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        }       
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model5-data-plot", data, layout);
};   


function createMS_Plot() {
    // console.log("Standard Values: "+mp_MS +" "+mpModelMS );
    //Call getAvg() to get average values
    getAvg(mp_MS, mpModelMS);
    var avgMS= modelAvgs;
    var names = ["MS2","MS5","MS10","MS35","MS70"];
    // console.log(avgMS);

    // Trace1 MS
    var trace1 = {
        x: names,
        y: avgMS,
        text: names,
        name: "MS",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct',
                range: [0, 105]},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        }
               
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model6-data-plot", data, layout);
};   


function init() {
    createEmotionPlot();
    createGenderPlot();
    createAM_Plot();
    createAS_Plot();
    createFM_Plot();
    createFS_Plot();
    createMM_Plot();
    createMS_Plot();
 };
 
 init();
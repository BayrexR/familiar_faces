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
        // Trace1 AM
        var trace1 = {
            x: mpModelAM,
            y: mp_AM,
            text: mpModelAM,
            name: "AM",
            type: "bar"
        };
        
        
        // Combining both traces
        var data = [trace1];
    
        // Create custom layout
        var layout = {
            xaxis: {title: 'Test Sample Size'},
            yaxis: {title: 'Percentage Correct'},
            range: [0, 100],
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
    // Trace1 AS
    var trace1 = {
        x: mpModelAS,
        y: mp_AS,
        text: mpModelAS,
        name: "AS",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct'},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        },
        range: [0, 100]    
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model2-data-plot", data, layout);
};    

function createFM_Plot() {
    // Trace1 AS
    var trace1 = {
        x: mpModelFM,
        y: mp_FM,
        text: mpModelFM,
        name: "FM",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct'},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        },
        range: [0, 100]    
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model3-data-plot", data, layout);
};   

function createFS_Plot() {
    // Trace1 FS
    var trace1 = {
        x: mpModelFS,
        y: mp_FS,
        text: mpModelFS,
        name: "FS",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct'},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        },
        range: [0, 100]        
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model4-data-plot", data, layout);
};   

function createMM_Plot() {
    // Trace1 AS
    var trace1 = {
        x: mpModelMM,
        y: mp_MM,
        text: mpModelMM,
        name: "MM",
        type: "bar"
    };
    
    
    // Combining both traces
    var data = [trace1];

    // Create custom layout
    var layout = {
        xaxis: {title: 'Test Sample Size'},
        yaxis: {title: 'Percentage Correct'},
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        },
        range: [0, 100]        
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model5-data-plot", data, layout);
};   


function createMS_Plot() {
    // Trace1 MS
    var trace1 = {
        x: mpModelMS,
        y: mp_MS,
        text: mpModelMS,
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
        },
               
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
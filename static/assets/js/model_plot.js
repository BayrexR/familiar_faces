

function createPlot() {
    // Determine value of 
    
    var traceName = "";
    var traceX = "";
    var traceY = [];
    var traceTitle = "";

    // 'If' statement for selected emotion
    if (selProp === "angry") {
        var traceName = "Angry";
        var traceX = "";
        var traceY = "--pull why value--";
        var traceTitle = "";
    }

    var trace1 = {
        // X axis for all sample sizes in this model (2, 5, 10, 35, 70)
        x: traceX,
        // y axis is the success rate (0-100%)
        y: traceY,            
        title: traceTitle,
        name: traceName,
        mode: 'lines+markers'
    };
    

    // Combining all traces
    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];

    // Create custom layout
    var layout = {
        //title: Success rate of model,
        yaxis: {title: 'Success Rate'},
        xaxis: {title: 'Sample Size'},
        margin: {},
        // Model Names
        legend: { 
            
        }    
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("model-plot", data, layout);
}    


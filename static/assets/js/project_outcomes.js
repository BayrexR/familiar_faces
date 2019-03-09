function createPlot(modelName, pctCorrect) {
  console.log(modelName, pctCorrect)
  // Trace1 for the Outcome (fixed axis)

  var trace1 = {
      x: modelName,
      y: pctCorrect,
      name: "Model Outcome",
      type: "bar"
  };

var data = [trace1];

    // Create custom layout
    var layout = {
      //title: "Model Outcomes",
      yaxis: {title: '% Correct'},
      margin: {
          t: 20, //top margin
          l: 50, //left margin
          r: 50, //right margin
          b: 140 //bottom margin
      }    
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot-id", data, layout);}
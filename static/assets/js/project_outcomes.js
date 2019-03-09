function getEmotionGroups(name, pct){

    console.log(name, pct);

    var emotion2 = [];
    var emotion5 = [];
    var emotion10 = [];
    var emotion35 = [];
    var emotion70 = [];

    var emotionPct2 = [];
    var emotionPct5 = [];
    var emotionPct10 = [];
    var emotionPct35 = [];
    var emotionPct70 = [];

    for (i = 0; i < name.length; i++){
        var size = name[i].substring(2);
        console.log(size);
        switch (size) {
            case '2': emotion2.push(name[i]);
                emotionPct2.push(pct[i]);
            break;
            case '5' : emotion5.push(name[i]);
                emotionPct5.push(pct[i]);
            break;
            case '10' : emotion10.push(name[i]);
                emotionPct10.push(pct[i]);
            break;
            case '35' : emotion35.push(name[i]);
                emotionPct35.push(pct[i]);
            break;
            default : emotion70.push(name[i]);
                emotionPct70.push(pct[i]);
        };
    };
    console.log(emotion2, emotion5, emotion10, emotion35, emotion70);
    return[emotion2, emotionPct2, emotion5, emotionPct5, emotion10, emotionPct10, emotion35, emotionPct35, emotion70, emotionPct70];
};

function createEmotionPlot(emotionModelName, emotionPctCorrect) {
  console.log(emotionModelName, emotionPctCorrect);
  // Trace1 for the Outcome (fixed axis)

    var gender2 = [];
    var gender5 = [];
    var gender10 = [];
    var gender35 = [];
    var gender70 = [];
    
    var traceNames = getEmotionGroups(emotionModelName, emotionPctCorrect);

    console.log("trace:" + traceNames);

  var EM2 = {
      x: traceNames[0],
      y: traceNames[1],
      name: "Sample Count 2",
      type: "bar"
  };

  var EM5 = {
    x: traceNames[2],
    y: traceNames[3],
    name: "Sample Count 5",
    type: "bar"
};

var EM10 = {
    x: traceNames[4],
    y: traceNames[5],
    name: "Sample Count 10",
    type: "bar"
};

var EM35 = {
    x: traceNames[6],
    y: traceNames[7],
    name: "Sample Count 35",
    type: "bar"
};

var EM70 = {
    x: traceNames[8],
    y: traceNames[9],
    name: "Sample Count 70",
    type: "bar"
};

var data = [EM2, EM5, EM10, EM35, EM70];

    // Create custom layout
    var layout = {
      //title: "Model Outcomes",
      yaxis: {title: '% Correct'},
      showlegend:true,
      margin: {
          t: 20, //top margin
          l: 50, //left margin
          r: 50, //right margin
          b: 140 //bottom margin
    
      } 
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("emotion-id", data, layout);}


function createGenderPlot(genderModelName, genderPctCorrect) {
console.log(genderModelName, genderPctCorrect)
// Trace1 for the Outcome (fixed axis)

    var trace1 = {
        x: genderModelName,
        y: genderPctCorrect,
        name: "Gender Outcome",
        type: "bar"
    };

    var data = [trace1];

        // Create custom layout
        var layout = {
        //title: "Model Outcomes",
        yaxis: {title: '% Correct'},
        showlegend:true,
        margin: {
            t: 20, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 140 //bottom margin
        
        } 
    };

      // Render the plot to the div tag with id "plot"
  Plotly.newPlot("gender-id", data, layout);}
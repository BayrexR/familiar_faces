// Helper function for generating emotion groups
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

// Helper function for generating gender groups
function getGenderGroups(name, pct){

    console.log(name, pct);

    var gender2 = [];
    var gender5 = [];
    var gender10 = [];
    var gender35 = [];
    var gender70 = [];
    var genderCeleb = [];

    var genderPct2 = [];
    var genderPct5 = [];
    var genderPct10 = [];
    var genderPct35 = [];
    var genderPct70 = [];
    var genderPctCeleb = [];

    for (i = 0; i < name.length; i++){
        var size = name[i].substring(1);
        console.log(size);
        switch (size) {
            case '2': gender2.push(name[i]);
                genderPct2.push(pct[i]);
            break;
            case '5' : gender5.push(name[i]);
                genderPct5.push(pct[i]);
            break;
            case '10' : gender10.push(name[i]);
                genderPct10.push(pct[i]);
            break;
            case '35' : gender35.push(name[i]);
                genderPct35.push(pct[i]);
            break;
            case '70' : gender70.push(name[i]);
            genderPct70.push(pct[i]);
            break;
            default : genderCeleb.push(name[i]);
                genderPctCeleb.push(pct[i]);
        };
    };
    console.log(gender2, gender5, gender10, gender35, gender70, genderCeleb);
    return[gender2, genderPct2, gender5, genderPct5, gender10, genderPct10, gender35, genderPct35, gender70, genderPct70, genderCeleb, genderPctCeleb];

};

function createEmotionPlot(emotionModelName, emotionPctCorrect) {
  console.log(emotionModelName, emotionPctCorrect);
  // Trace1 for the Outcome (fixed axis)
    
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
      yaxis: {title: '% Correct'},
      xaxis: {title: 'Model'},
      showlegend:true,
      margin: {
          t: 70, //top margin
          l: 50, //left margin
          r: 50, //right margin
          b: 70 //bottom margin
    
      } 
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("emotion-id", data, layout);}

//Plots gender chart
function createGenderPlot(genderModelName, genderPctCorrect) {
    console.log(genderModelName, genderPctCorrect);
    // Trace1 for the Outcome (fixed axis)
      
      var traceNames = getGenderGroups(genderModelName, genderPctCorrect);
  
      console.log("trace:" + traceNames);
  
      var G2 = {
          x: traceNames[0],
          y: traceNames[1],
          name: "Sample Count 2",
          type: "bar"
      };
    
      var G5 = {
        x: traceNames[2],
        y: traceNames[3],
        name: "Sample Count 5",
        type: "bar"
    };
    
    var G10 = {
        x: traceNames[4],
        y: traceNames[5],
        name: "Sample Count 10",
        type: "bar"
    };
    
    var G35 = {
        x: traceNames[6],
        y: traceNames[7],
        name: "Sample Count 35",
        type: "bar"
    };
    
    var G70 = {
        x: traceNames[8],
        y: traceNames[9],
        name: "Sample Count 70",
        type: "bar"
    };
    
    var GC = {
        x: traceNames[10],
        y: traceNames[11],
        name: "Celebrity - Sample Count 10",
        type: "bar"
    };

  var data = [G2, G5, G10, G35, G70, GC];
  
      // Create custom layout
      var layout = {
        yaxis: {title: '% Correct'},
        xaxis: {title: 'Model'},
        showlegend:true,
        margin: {
            t: 70, //top margin
            l: 50, //left margin
            r: 50, //right margin
            b: 70 //bottom margin
      
        } 
    };
  

    // Render the plot to the div tag with id "plot"
Plotly.newPlot("gender-id", data, layout);}
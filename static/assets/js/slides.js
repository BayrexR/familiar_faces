//Interval function to cycle through slide images.
let slides = [
    "../static/assets/img/collage3.png",
    "../static/assets/img/collage4.png",
    "../static/assets/img/collage5.png"
];

let counter = 0;

function flip(){
    setTimeout(function() {
        switch(counter){
            case 0: 
                document.getElementById("collage").setAttribute("src", slides[counter]);
                counter +=1;
            break;
            case 1:
                document.getElementById("collage").setAttribute("src", slides[counter]);
                counter +=1;
            break;
            case 2:
                document.getElementById("collage").setAttribute("src", slides[counter]);
                counter = 0;
            break;
            default: document.getElementById("collage").setAttribute("src", "../static/assets/img/collage2.png");
        };
        flip();
    }, 3000);
};


flip();

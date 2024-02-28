
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;

let vxBolinha = 3;


function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    circle(xBolinha,yBolinha,diametro);

    xBolinha += vxBolinha;
    console.log(xBolinha);

    if(xBolinha > width || xBolinha <0 ){

        vxBolinha *= -1;
    }

    if (yBolinha > height || yBolinha <0){
        speedY *= -1;
    }

    
}
    
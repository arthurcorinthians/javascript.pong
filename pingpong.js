//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
function setup () {
    //aqui vou criar minha "mesa"
        createCanvas (600,400);
}

function draw (){
    //aqui vou a cor da mesa
    //a cor da mesa é em rgb
    background (75, 0, 130);

    criaBolinha (xBolinha, yBolinha, tamBolinha)
}

//funcao bolinha
function criaBolinha (Xbolinha, yBolinha, tamBolinha){
    circle (xBolinha, yBolinha, tamBolinha);
}
//funcao em bolinha
function criaBolinha (xBolinha, yBolinha, tamBolinha){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}
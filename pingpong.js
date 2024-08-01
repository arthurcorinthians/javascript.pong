//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raioBolinha = tamBolinha/2;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

//aqui estou configurando a raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //função responsável pelo "desenho e animação da mesa"
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(128,128,0); 
    //chamando a função cria bolinha para criar a bolinha
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    //chamando a função mov bolinha
    moveBolinha();
    //chamando a borda
    bolinhaBorda();
 
    //criandoRaquete
    criaRaquete (xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    moveRaquete()
    colideRaquete();

}

//função bolinha
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    fill ("red");
    circle (xBolinha,yBolinha,tamBolinha);
}

//função move bolinha
function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}

//funcao responsavel por criar o retangulo que representa a raquete
function criaRaquete (xRaquete, yRaquete, larguraRaquete, alturaRaquete) {
    fill ("blue");
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
//funçao responsavel por movimentar a raquete
function movimentaRaquete(){

    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}
//funçao responsavel por quando a bolinha bater na raquete, retornar em direçao contraria
function colideRaquete(){

    if (xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){

        xvelocidadeBolinha *= -1;
    }
    }
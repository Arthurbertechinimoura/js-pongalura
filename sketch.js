//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

let trilhaa;
let ponto;
let raquetada;

function setup() {
  createCanvas(600, 400);
  trilhaa.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  // verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(87)) {
    yRaquete -= 10;
  }
  if(keyIsDown(83)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x,y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function movimentaRaqueteOponente(){
    if (keyIsDown(UP_ARROW)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaqueteOponente += 10;
    }
}

function incluiPlacar() {
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}
function incluiPlacar(){
    textAlign(CENTER);
    textSize(16);
    fill(color("blue"));
    rect(131, 10, 40, 20);
    fill(255);
    text(meusPontos, 150, 26);
    fill(color("red"));
    rect(430, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 450, 26);

}
function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 12) {
    pontosDoOponente += 1;
    ponto.play();
  }
}
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
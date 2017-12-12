//var gotas
var gotas = [];
var numGotas = 400;
//Parabrisas
var parabrisas = []
var numParabrisas = 2;

var posicion = []
var numPosicion = 48;
var segundos;
var tiempo = 0
function setup() {
  angleMode(DEGREES);
  var segundos=second(tiempo);
  var angulo = 0.0
  createCanvas(600, 300);
  for (var i = 0; i < numGotas; i = i + 1) {
    gotas[i] = new Gota();
  }
  for (var j = 0; j <= numParabrisas; j = j + 1) {
    parabrisas[j] = new Parabrisas();

  }
  for (var k = 0; k <= numPosicion; k = k + 1) {
    posicion[k] = new Posicion();
  }
}

function draw() {
  background(153, 0, 0);
  //eDIFICIOS DE FONDO
  noStroke()
  from = color(0, 0, 0);
  to = color(255, 255, 255);
  interA = lerpColor(from, to, 0.33);
  interB = lerpColor(from, to, 0.66);
  interC = lerpColor(from, to, 0.99);


  fill(from)

  rect(290, 400, -100, -200)
  rect(310, 400, 100, -200);


  fill(interA)

  rect(250, 450, -150, -300);
  rect(350, 450, 150, -300);

  fill(interB)

  rect(190, 550, -200, -450);
  rect(410, 550, 200, -450);

  //gotas callendo en el panoramico
  for (var i = 0; i < numGotas; i = i + 1) {

    //gotas[i].vidrio = true
    noStroke();
    gotas[i].dibujarse();
    gotas[i].moverse();
    if (gotas[i].y > 275) {
      gotas[i].y = random(25, 275);
    }
    for (var k = 0; k < numPosicion; k = k + 1) {
      
      tiempo = tiempo + 1;
      posicion[k].dibujarse();
      posicion[k + 1].y = posicion[k].y + 5
     if (millis(tiempo) % 2 == 0){
                   
        posicion[k].x = posicion[k].x +4* posicion[k].direccion;
     
     }

      if (posicion[k].x > 570) {
        posicion[k].direccion = -1
      } else if (posicion[k].x <= 70) {
        posicion[k].direccion = 1
      }

      var distCentro = dist(posicion[k].x, posicion[k].y, gotas[i].x, gotas[i].y);
      //var mouse=dist(mouseX, mouseY, gotas[i].x, gotas[i].y);
      if (distCentro < 20) {
        // gotas[i].vidrio = false;
        gotas[i].x = random(25, 575);
        gotas[i].y = random(25, 575);
        // gotas[i].dibujarse();

      }
    }
    // gotas[i].vidrio=true;
  }


  //Marco del carro
  noStroke()
  fill(75)
  beginShape();
  vertex(0, 30);
  vertex(50, 30);
  vertex(0, 300);

  endShape();
  beginShape();
  vertex(550, 30);
  vertex(600, 30);
  vertex(600, 300);

  endShape();
  beginShape();
  vertex(0, 0);
  vertex(600, 0);
  vertex(600, 30);
  vertex(0, 30);
  endShape();
  beginShape();
  vertex(0, 275);
  vertex(600, 275);
  vertex(600, 300);
  vertex(0, 300);
  endShape();
  //for (var j = 0; j <= numParabrisas; j = j + 1) {

  //parabrisas[j].dibujarse();
  //parabrisas[2].x = parabrisas[1].x + 235
  //parabrisas[j].x=parabrisas[j].x+1;

  /// }

}



function Gota() {
  this.x = random(25, 575);
  this.y = random(25, 275);
  this.tamanox = random(2, 8)
  this.tamanoy = random(2, 8)
  this.vidrio = true;

  this.dibujarse = function() {
    if (this.vidrio == true) {

      fill(100, 178, 255)
      ellipse(this.x, this.y, this.tamanox, this.tamanoy);

    }
    this.moverse = function() {
      this.x = this.x + random(-2, 2)
      this.y = this.y + random(0, 2)
    }
  }
  this.seca = function() {
    this.vidrio = false;
  }
}

function Parabrisas() {
  this.x = 70;
  this.direccion = 1;
  this.y = 30;
  this.tamano = 240;
  this.angulo = 0;

  this.dibujarse = function() {
    push()
    stroke(3);
    strokeWeight(3)
    fill(0);

    //Cuadrar posicion acà

    rect(this.x, this.y, 0, this.tamano);


    pop()
  }
  this.angulo = 0.0
  this.rotar = function() {

    this.angulo = this.angulo + this.direccion
    if (this.angulo < 0) {
      this.direccion = 5
    }
    if (this.angulo >= 80) {
      this.direccion = -5
    }

  }
}
//posicion
function Posicion() {
  this.x = 70; //(100;
  this.x1 = -50;
  this.direccion = 1;
  this.y = 30;
  this.tamano = 50;
  this.angulo = 0;
  //Arreglo para evaluar la posicion del parabrisas

  this.dibujarse = function() {
    push()
    stroke(3);
    strokeWeight(3)
    noFill();
    // translate(this.x, this.y);
    // rotate(this.angulo)
    //Cuadrar posicion acà

    ellipse(this.x, this.y, 4);
    //this.x1=this.x1+5



    pop()
  }
  this.moverse = function() {
    this.x = this.x + this.direccion

  }
  //   this.angulo = 0.0
  //   this.rotar = function() {

  //     this.angulo = this.angulo + this.direccion
  //     if (this.angulo < 0) {
  //       this.direccion = 10
  //     }
  //     if (this.angulo >= 80) {
  //       this.direccion = -10
  //     }

  //   }
}
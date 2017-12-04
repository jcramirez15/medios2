var estado = 0;
var músic;
var INTRO = 1;
var JUEGO = 2;
var OUTRO = 3;
var OVER = 4;
var estado1 = 0;
var estado2 = 0;
var estado3 = 0;
var tiempo = 0;
var colorFondo = 100;
//var gotas
var gotas = [];
var numGotas = 600;
//Pocision tejado
var posicion = [];
var numPosicion = 30;
//imagenes
var fondo;
var teja;
var caucho_1;
var caucho_1s;
var caucho_2;
var caucho_2s;
var caucho_3;
var caucho_3s;
var flor_1;
var flor_1s;
var flor_2;
var flor_2s;
var flor_3;
var flor_3s;
var monstera_1;
var monstera_1s;
var monstera_2;
var monstera_2s;
var monstera_3;
var monstera_3s;
//Contadores
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;

function preload() {
  fondo = loadImage("Fondo.png");
  teja = loadImage("techo.png");

  caucho_1 = loadImage("caucho_1.png");
  caucho_1s = loadImage("caucho_1_s.png");
  caucho_2 = loadImage("caucho_2.png");
  caucho_2s = loadImage("caucho_2_s.png");
  caucho_3 = loadImage("caucho_3.png");
  caucho_3s = loadImage("caucho_3_s.png");
  flor_1 = loadImage("flor_1.png");
  flor_1s = loadImage("flor_1_s.png");
  flor_2 = loadImage("flor_2.png");
  flor_2s = loadImage("flor_2_s.png");
  flor_3 = loadImage("flor_3.png");
  flor_3s = loadImage("flor_3_s.png");
  monstera_1 = loadImage("Monstera_1.png");
  monstera_1s = loadImage("Monstera_1_s.png");
  monstera_2 = loadImage("Monstera_2.png");
  monstera_2s = loadImage("Monstera_2_s.png");
  monstera_3 = loadImage("Monstera_3.png");
  monstera_3s = loadImage("Monstera_3_s.png");
  music = loadSound("shh_nes.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  estado = INTRO;
  music.setVolume(0.5);
  music.play();
  for (var i = 0; i < numGotas; i = i + 1) {
    gotas[i] = new Gota();
  }
  for (var j = 0; j < numPosicion; j = j + 1) {
    posicion[j] = new Posicion();
  }
}

function draw() {
  background(170, 146, 57);
  if (music.isPlaying()) { // .isPlaying() returns a boolean

  } else {
    music.play();
  }
  if (estado == INTRO) {
    contador1 = 0;
    contador2 = 0;
    contador3 = 0;
    background(fondo);
    fill(128, 112, 21);
    noStroke();
    //rect(0, height * 3 / 4, width, height / 4)
    fill(150, 193, 97);
    textAlign(CENTER);
    textSize(60);
    push();
    stroke(10);
    text("MATERAS", width / 2, height * 1 / 4);
    pop();
    textSize(40);
    text("Instrucciones", width * 1 / 4, height * 3 / 8)
    textSize(20);
    textAlign(LEFT);

    text("-Deja crecer las plantas hasta que lleguen a su etapa ad", width * 1 / 8, height * 4 / 8);
    text("-¡Tambien se pueden ahogar!", width * 1 / 8, height * 5 / 8);
  }

  //INICIA EL JUEGO!  INICIA EL JUEGO! INICIA EL JUEGO! INICIA EL JUEGO! INICIA EL JUEGO!
  else if (estado == JUEGO) {
    background(fondo);
    //gotas callendo 
    estado1 = 0;
    estado2 = 0;
    estado3 = 0;
    for (var i = 0; i < numGotas; i = i + 1) {

      gotas[i].vidrio = true;
      noStroke();
      gotas[i].dibujarse();
      gotas[i].moverse();
      if (gotas[i].y > windowHeight * 11 / 12) {
        gotas[i].y = random(0, 10);
      }
      var distancia1 = dist(mouseX - 10, height / 4, gotas[i].x, gotas[i].y);
      var distancia2 = dist(mouseX, +20, height / 4, gotas[i].x, gotas[i].y);
      var distancia3 = dist(mouseX + 50, height / 4, gotas[i].x, gotas[i].y);
      var distancia4 = dist(mouseX + 70, height / 4, gotas[i].x, gotas[i].y);
      if (distancia1 < 30 || distancia2 < 30 || distancia3 < 30 || distancia4 < 30) {
        gotas[i].y = random(0, height / 8);
        gotas[i].x = random(0, width);

      }
      //CONTADORES Y PLANTAS
      //PLANTA1---PLANTA1---PLANTA1---PLANTA1---PLANTA1---
      var distanciaMatera1 = dist(windowWidth / 4, windowHeight * 11 / 12, gotas[i].x, gotas[i].y);
      image(teja, mouseX - 50, height / 4 - 40, 180, 70);
      if (distanciaMatera1 < 30) {
        contador1 = contador1 + 1;
        gotas[i].y = random(0, 10);
      }

      if (contador1 < 20) {
        image(caucho_1s, windowWidth / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      } else if (contador1 < 60) {
        image(caucho_1, windowWidth / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      } else if (contador1 < 90) {
        image(caucho_2s, windowWidth / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      } else if (contador1 > 60 && contador1 < 120) {

        image(caucho_2, windowWidth / 8, windowHeight * 11 / 12, windowWidth / 6, -200);

      } else if (contador1 < 140) {
        image(caucho_3s, windowWidth / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      } else if (contador1 < 180) {

        image(caucho_3, windowWidth / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
        estado1 = 1;

      }
      if (contador1 > 180) {

        image(caucho_3s, windowWidth / 8, windowHeight * 11 / 12, windowWidth / 6, -200);

      }
      var distanciaMatera2 = dist(windowWidth / 2, windowHeight * 11 / 12, gotas[i].x, gotas[i].y);

      if (distanciaMatera2 < 30) {
        contador2 = contador2 + 1;
        gotas[i].y = random(0, height / 8);
      }
      if (contador2 < 10) {
        image(flor_1s, windowWidth * 3 / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      } else if (contador2 < 40) {
        image(flor_1, windowWidth * 3 / 8, windowHeight * 11 / 12, windowWidth / 6, -200);

      } else if (contador2 < 60) {
        image(flor_2s, windowWidth * 3 / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      } else if (contador2 > 40 && contador2 < 100) {
        image(flor_2, windowWidth * 3 / 8, windowHeight * 11 / 12, windowWidth / 6, -200);

      } else if (contador2 < 115) {
        image(flor_3s, windowWidth * 3 / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      } else if (contador2 > 100 && contador2 < 150) {
        image(flor_3, windowWidth * 3 / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
        estado2 = 1;
      } else if (contador2 > 160) {
        image(flor_3s, windowWidth * 3 / 8, windowHeight * 11 / 12, windowWidth / 6, -200);

      }

      //PLANTA3----PLANTA3----PLANTA3----PLANTA3----PLANTA3----
      var distanciaMatera3 = dist(windowWidth * 9 / 12, windowHeight * 11 / 12, gotas[i].x, gotas[i].y);


      if (distanciaMatera3 < 30) {
        contador3 = contador3 + 1;
        gotas[i].y = random(0, height / 8);
      }
      if (contador3 < 15) {
        image(monstera_1s, windowWidth * 7 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);

      } else if (contador3 < 40) {
        image(monstera_1, windowWidth * 7 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);

      } else if (contador3 < 55) {
        image(monstera_2s, windowWidth * 7 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);

      } else if (contador3 > 40 && contador2 < 90) {
        image(monstera_2, windowWidth * 7 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);

      } else if (contador3 < 110) {
        image(monstera_3s, windowWidth * 7 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);

      } else if (contador3 > 90 && contador2 < 140) {
        image(monstera_3, windowWidth * 7 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);
        estado3 = 1;
      } else if (contador3 > 140) {
        image(monstera_3s, windowWidth * 7 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);

      }
    }
    //image(flor_1,windowWidth*3/8,windowHeight*11/12,windowWidth/6,-200);

    fill(0)
    ///ellipse(mouseX,height/4,15,15)
    if (estado1 == 1 && estado2 == 1 && estado3 == 1 || (estado1 == 2 && estado2 == 2 && estado3 == 2)) {
      estado = OUTRO;
    }

  }
  //ACABA EL JUEGO!!ACABA EL JUEGO!!ACABA EL JUEGO!!ACABA EL JUEGO!!ACABA EL JUEGO!!ACABA EL JUEGO!!
  else if (estado == OUTRO) {
    if (estado1 == 1 && estado2 == 1 && estado3 == 1) {
      background(fondo);
      textAlign(CENTER);
      textSize(60);
      fill(212, 197, 106);
      text("¡¡Felicidades!!", width / 2, height / 2);
      image(monstera_3, windowWidth * 7 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);
      image(monstera_2, windowWidth * 6 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);
      image(flor_3, windowWidth * 3 / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      image(flor_2, windowWidth * 4 / 9, windowHeight * 13 / 14, windowWidth / 6, -200);
      image(caucho_3, windowWidth / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      image(caucho_3, windowWidth * 3 / 10, windowHeight * 14 / 15, windowWidth / 6, -200);
      if (contador1 > 180 || contador2 > 160 || contador3 > 140) {
        background(fondo);
        textAlign(CENTER);
        textSize(60);
        fill(212, 197, 106);
        text("¡¡Las mataste!!", width / 2, height / 2);
        image(monstera_3s, windowWidth * 7 / 8, windowHeight * 11 / 12, -windowWidth / 6, -200);
        //image(monstera_2s,windowWidth*6/8,windowHeight*11/12,-windowWidth/6,-200);
        image(flor_3s, windowWidth * 3 / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
        //image(flor_2s,windowWidth*3/8,windowHeight*13/14,windowWidth/6,-200);
        image(caucho_3s, windowWidth / 8, windowHeight * 11 / 12, windowWidth / 6, -200);
      }
    }



  }

}

function mouseDragged() {
  if (estado == INTRO) {} else if (estado == JUEGO) {
    colorFondo = mouseX;
  }
}

function keyReleased() {
  if (estado == INTRO) {
    estado = JUEGO;
  } else if (estado == JUEGO) {
    estado = OUTRO;
  } else {
    estado = INTRO;
  }
}

function mousePressed() {
  if (estado == INTRO) {} else if (estado == JUEGO) {} else {}
}

function mouseReleased() {}

function Gota() {
  this.x = random(0, windowWidth);
  this.y = random(25, windowHeight / 4);
  this.tamanox = random(8, 16);
  this.tamanoy = random(8, 16);
  this.vidrio = false;

  this.dibujarse = function() {
    if (this.vidrio == true) {

      fill(100, 178, 255, 50)
      ellipse(this.x, this.y, this.tamanox, this.tamanoy);
    }
    this.moverse = function() {
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(2, 8);
    }
  }
}


function Posicion() {
  this.x = mouseX - 30;
  this.y = height / 4;
  this.tamanox = 5;
  this.tamanoy = 5;

  this.dibujar = function() {
    fill(0);
    ellipse(this.x, this.y, this.tamanox, this.tamanoy);
  }
  this.mover = function() {
    this.x = mouseX - 30;
  }
}

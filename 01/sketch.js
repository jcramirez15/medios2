function setup() { 
  createCanvas(400, 450);
    
} 

function draw() { 
   background(239,234,215);
    
    
        
	fill(237,225,227);
    triangle(100,509,200,50,300,509);
    
    fill(222,201,19);
    noStroke();
    triangle(200,210,230,160,255,210);
    
    stroke(0,0,0);
    strokeWeight(4);
    noFill();
    triangle(100,509,200,50,300,509);
// regilla superior
    stroke(0,0,0);
    strokeWeight(3);
    line(343,0,343,274);
    strokeWeight(2);
    line(350,0,350,276);
    line(343-25,50,375,50);
    line(343-25,55,375,55);
    line(343-25,255,375,255);
    line(343-25,255-5,375,255-5);
     line(343-25,255-10,375,255-10);
    noFill();
    arc(352, 112, 50, 50, 20, 200);
    noStroke();
    fill(135,135,145);
    arc(100,160,50,50,0,0);
    strokeWeight(2);
    stroke(0,0,0)
    arc(280,220,50,50,0,0);
    stroke(175,173,183);
    fill(77,76,147);
    
    c1= color(95,96,147);
    c2=color(42,42,130);
    from = c1
    to = c2
	colorMode(RGB);
    interA= lerpColor(from,to,0.33);
    interB=lerpColor(from,to,0.66);
    
    fill(from);
    arc(280,220,40,40,0,0)
    noStroke();
    fill(interA);
    arc(280,220,37,37,0,0);
    fill(interB);
     arc(280,220,30,30,0,0);
    fill(to);
     arc(280,220,20,20,0,0);
    
 c1= color(230,227,215);
    c2=color(146,149,141);
    from = c1
    to = c2
    interA= lerpColor(from,to,0.25);
    interB=lerpColor(from,to,0.50);
    interC=lerpColor(from,to,0.75);
    fill(from);
    arc(200,350,70,70,0,0);
    fill(interA);
    arc(200,350,65,65,0,0);
    fill(interB);
    arc(200,350,50,50,0,0);
    fill(interC);
    arc(200,350,45,45,0,0);
    fill(to);
    arc(200,350,40,40,0,0);
// circulo del centro del triangulo
    strokeWeight(1);
    stroke(0,0,0);
    fill(237,225,227);
    arc(200,350,40,40,0,0);
    
//rectas que cruzan el triangulo
strokeWeight(2);
    
    line(3,170,320,350);
    line(10,245,320,350);
// cuadrado de la derecha
    fill(227,136,165);
    noStroke();    quad(20*4+100*2+70,40*4+100*2+50,40*4+100*2+70,40*4+100*2+50,40*4+100*2+70,20*4+100*2+50,20*4+100*2+70,20*4+100*2+50);
    
//Rectas hacia el cuadrado
    stroke(0,0,0);
    strokeWeight(3);
    line(330,450,380,420);
    stroke(203,196,89);
    line(330+6,450,386,420);
    stroke(0,0,0);
    line(270,450,400,380);
    line(250,450,380,380);
    line(200,450,320,400);
    stroke(144,80,70);
    line(200-6,450,320-6,400);
    stroke(66,101,68);
    noFill();
    strokeWeight(6);
    quad(130+7,460,180,405,375,480);
    stroke(0,0,0);
    strokeWeight(2);
    line(150,450,240,410);
    stroke(132,117,117);
    line(135,450,225,410);
    stroke(0,0,0);
    
    line(0,240,30,230);
    
    noFill();
    stroke(0,0,0);
    strokeWeight(6);
    quad(130,460,180,400,380,480);
    strokeWeight(2);
    arc(20,180,110,90,3,5);
    
//circulos de la izqu
    noStroke();
    c1= color(250,244,210);
    c2=color(234,235,200);
    from = c1
    to = c2
	colorMode(RGB);
    interA= lerpColor(from,to,0.25);
    interB=lerpColor(from,to,0.50);
    interC=lerpColor(from,to,0.75);
    fill(from);
    arc(0,370,150,150,0,0);
    fill(interA);
    arc(0,370,140,140,0,0);
    fill(interB);
    arc(0,370,135,135,0,0);
    fill(interC);
    arc(0,370,130,130,0,0);
    fill(to);
    arc(0,370,125,125,0,0);
    stroke(0,0,0);
    strokeWeight(1);
    fill(239,229,233);
    arc(0,370,120,120,0,0);
    strokeWeight(10);
    arc(0,370,70,70,0,0);
    strokeWeight(3);
    stroke(97,55,56);
    arc(0,370,65,65,0,0);
}

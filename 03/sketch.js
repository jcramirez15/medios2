var tiempo =0;
var velocidad=0;
function setup() { 
  createCanvas(600, 600);
} 

function draw() { 
  background(109,253,215);
  strokeWeight(2);
  stroke(106,0,255);
  line(0,400,600,400);
  line (300,400,0,470);
  line(300,400,0,400);
  line(300,400,600,470);
  line(300,400,0,460+120);
  //line(300,300,600,340);
 	line(300,400,450,600);
  //line(300,300,600,460);
  line(300,400,600,580);
  line(300,400,150,600);
  //line(300,300,300,600);
  line(300,400,300,600);
  //line(0,400+velocidad*4,600,400+velocidad*4);
  noFill();
  
  arc(300,400,velocidad*10,velocidad*8,0,-PI);
	velocidad=velocidad+1;
  noStroke();
  //SOL DEGRADADO
  from = color(255,120,0,100);
  to= color(109,253,215,0);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.44);
  interC=lerpColor(from,to,0.55);
  interD=lerpColor(from,to,0.66);
  interE=lerpColor(from,to,0.77);
  interF=lerpColor(from,to,0.88);
  interG=lerpColor(from,to,0.99);
  fill(from);
  ellipse(300,400,70,70);
  fill (interA);
  ellipse(300,400,100+10,100+10);
  fill (interB);
  ellipse(300,400,100+20,100+20);
  fill (interC);
  ellipse(300,400,100+40,100+40);
  fill (interD);
  ellipse(300,400,100+70,100+70);
  fill (interE);
  ellipse(300,400,100+130,100+130);
  fill (interF);
  ellipse(300,400,100+150,100+150);
  fill (interG);
  ellipse(300,400,100+250,100+250);
  if(velocidad*6>=700){
    velocidad=0;
  }
  tiempo=tiempo+1
  if(millis(tiempo)>0){
    fill(106,0,255,tiempo);
   		rect(0,0,600,400); 
  }
  if(millis(tiempo)>=3600){
    fill(255,20,197,tiempo);
   rect (0,0,600/3,400);
  }
   if(millis(tiempo)>=4400){
    fill(255,20,197,tiempo/2);
   rect (600/3,0,600/3,400);
  }
  if(millis(tiempo)>=5200){
    fill(255,20,197,tiempo/3);
   rect (2*600/3,0,600/3,400);
  }
  negro=0
  negro=negro+20
  if(millis(tiempo)>=6000){
   fill (0,0,0,negro*10)
    rect(0,400,600,600)
  }
  if(millis(tiempo)>=6800){
   fill (0,0,0,negro*12)
    rect(0,200,600,600)
  }
  if(millis(tiempo)>=7600){
   fill (0,0,0,negro*14)
    rect(0,0,600,200)
  }
  //luces
  for(i=1;i<10;i=i+1){
  if(millis(tiempo)>=8300+100*i){
      from = color(255,120,0,100);
  to= color(109,253,215,0);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.44);
  interC=lerpColor(from,to,0.55);
  interD=lerpColor(from,to,0.66);
  interE=lerpColor(from,to,0.77);
  interF=lerpColor(from,to,0.88);
  interG=lerpColor(from,to,0.99);
  fill(from);
  ellipse(300,400,70,70);
  fill (interA);
  ellipse(300,400,100+10,100+10);
  fill (interB);
  ellipse(300,400,100+20,100+20);
  fill (interC);
  ellipse(300,400,100+40,100+40);
  fill (interD);
  ellipse(300,400,100+70,100+70);
  fill (interE);
  ellipse(300,400,100+130,100+130);
  fill (interF);
  ellipse(300,400,100+150,100+150);
  fill (interG);
  ellipse(300,400,100+250,100+250);
  }
  if(millis(tiempo)>8300+100*i*2){
   	fill(0,0,0);
    rect(0,0,600,600); 
  }
  }
  for(i=1;i<10;i=i+1){
  if(millis(tiempo)>=9100+100*i){
      from = color(255,120,0,100);
  to= color(109,253,215,0);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.44);
  interC=lerpColor(from,to,0.55);
  interD=lerpColor(from,to,0.66);
  interE=lerpColor(from,to,0.77);
  interF=lerpColor(from,to,0.88);
  interG=lerpColor(from,to,0.99);
  fill(from);
  ellipse(100,150,70,70);
  fill (interA);
  ellipse(100,150,100+10,100+10);
  fill (interB);
  ellipse(100,150,100+20,100+20);
  fill (interC);
  ellipse(100,150,100+40,100+40);
  fill (interD);
  ellipse(100,150,100+70,100+70);
  fill (interE);
  ellipse(100,150,100+130,100+130);
  fill (interF);
  ellipse(100,150,100+150,100+150);
  fill (interG);
  ellipse(100,150,100+250,100+250);
  }
  if(millis(tiempo)>9100+100*i*2){
   	fill(0,0,0);
    rect(0,0,600,600); 
  }
  }
  for(i=1;i<10;i=i+1){
  if(millis(tiempo)>=10000+100*i){
      from = color(255,120,0,100);
  to= color(109,253,215,0);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.44);
  interC=lerpColor(from,to,0.55);
  interD=lerpColor(from,to,0.66);
  interE=lerpColor(from,to,0.77);
  interF=lerpColor(from,to,0.88);
  interG=lerpColor(from,to,0.99);
  fill(from);
  ellipse(350,150,150,150);
  fill (interA);
  ellipse(350,150,150+10,150+10);
  fill (interB);
  ellipse(350,150,150+20,150+20);
  fill (interC);
  ellipse(350,150,150+40,150+40);
  fill (interD);
  ellipse(350,150,150+70,150+70);
  fill (interE);
  ellipse(350,150,150+130,150+130);
  fill (interF);
  ellipse(350,150,150+150,150+150);
  fill (interG);
  ellipse(350,150,150+250,150+250);
  }
  if(millis(tiempo)>10000+100*i*2){
   	fill(0,0,0);
    rect(0,0,600,600); 
  }
  }
  //Edificios
  noStroke()
  from = color(0,0,0);
  to= color(255,255,255);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.66);
  interC=lerpColor(from,to,0.99);
  
  if(millis(tiempo)>12000){
   	fill(interA)
    
     rect( 290,400,-100,-200)
    	rect(310,400,100,-200);
    
    }
  if(millis(tiempo)>12700){
    fill(interB)
    
   rect(250,450,-150,-300) ;
    rect(350,450,150,-300);
  }
  if(millis(tiempo)>13400){
    fill(interC)
   
    rect(190,550,-200,-450);
    rect(410,550,200,-450);
  }
  //luces2
  for(i=1;i<10;i=i+1){
  if(millis(tiempo)>=14100+100*i){
     estrellax1=random(0,600)
    estrellay1=random(0,400)
    estrellax2=random(0,600)
    estrellay2=random(0,400)
    estrellax3=random(0,600)
    estrellay3=random(0,400)
    estrellax4=random(0,600)
    estrellay4=random(0,400)
    ellipse(estrellax1,estrellay1,5,5);
    ellipse(estrellax2,estrellay2,5,5);
    ellipse(estrellax3,estrellay3,5,5);
    ellipse(estrellax4,estrellay4,5,5);
      from = color(255,120,0,100);
  to= color(109,253,215,0);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.44);
  interC=lerpColor(from,to,0.55);
  interD=lerpColor(from,to,0.66);
  interE=lerpColor(from,to,0.77);
  interF=lerpColor(from,to,0.88);
  interG=lerpColor(from,to,0.99);
  fill(from);
  ellipse(100,100,70,70);
  fill (interA);
  ellipse(100,100,100+10,100+10);
  fill (interB);
  ellipse(100,100,100+20,100+20);
  fill (interC);
  ellipse(100,100,100+40,100+40);
  fill (interD);
  ellipse(100,100,100+70,100+70);
  fill (interE);
  ellipse(100,100,100+130,100+130);
  fill (interF);
  ellipse(100,100,100+150,100+150);
  fill (interG);
  ellipse(100,100,100+250,100+250);
    //desdeACA
    noStroke()
  from = color(0,0,0);
  to= color(255,255,255);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.66);
  interC=lerpColor(from,to,0.99);
  
  if(millis(tiempo)>12000){
   	fill(interA)
    
     rect( 290,400,-100,-200)
    	rect(310,400,100,-200);
    
    }
  if(millis(tiempo)>12700){
    fill(interB)
    
   rect(250,450,-150,-300) ;
    rect(350,450,150,-300);
  }
  if(millis(tiempo)>13400){
    fill(interC)
   
    rect(190,550,-200,-450);
    rect(410,550,200,-450);
  }
  }
  if(millis(tiempo)>14100+100*i*2){
   	fill(0,0,0);
    rect(0,0,600,600); 
    noStroke()
  from = color(0,0,0);
  to= color(255,255,255);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.66);
  interC=lerpColor(from,to,0.99);
  
  if(millis(tiempo)>12000){
   	fill(interA)
    
     rect( 290,400,-100,-200)
    	rect(310,400,100,-200);
    
    }
  if(millis(tiempo)>12700){
    fill(interB)
    
   rect(250,450,-150,-300) ;
    rect(350,450,150,-300);
  }
  if(millis(tiempo)>13400){
    fill(interC)
   
    rect(190,550,-200,-450);
    rect(410,550,200,-450);
  }
  }
  }
  for(i=1;i<10;i=i+1){
  if(millis(tiempo)>=14800+100*i){
     estrellax1=random(0,600)
    estrellay1=random(0,400)
    estrellax2=random(0,600)
    estrellay2=random(0,400)
    estrellax3=random(0,600)
    estrellay3=random(0,400)
    estrellax4=random(0,600)
    estrellay4=random(0,400)
    ellipse(estrellax1,estrellay1,5,5);
    ellipse(estrellax2,estrellay2,5,5);
    ellipse(estrellax3,estrellay3,5,5);
    ellipse(estrellax4,estrellay4,5,5);
      from = color(255,120,0,100);
  to= color(109,253,215,0);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.44);
  interC=lerpColor(from,to,0.55);
  interD=lerpColor(from,to,0.66);
  interE=lerpColor(from,to,0.77);
  interF=lerpColor(from,to,0.88);
  interG=lerpColor(from,to,0.99);
  fill(from);
  ellipse(400,150,70,70);
  fill (interA);
  ellipse(400,150,100+10,100+10);
  fill (interB);
  ellipse(400,150,100+20,100+20);
  fill (interC);
  ellipse(400,150,100+40,100+40);
  fill (interD);
  ellipse(400,150,100+70,100+70);
  fill (interE);
  ellipse(400,150,100+130,100+130);
  fill (interF);
  ellipse(400,150,100+150,100+150);
  fill (interG);
  ellipse(400,150,100+250,100+250);
  }
  if(millis(tiempo)>15500+100*i*2){
   	fill(0,0,0);
    rect(0,0,600,600); 
  }
  }
  for(i=1;i<10;i=i+1){
  if(millis(tiempo)>=15500+100*i){
     estrellax1=random(0,600)
    estrellay1=random(0,400)
    estrellax2=random(0,600)
    estrellay2=random(0,400)
    estrellax3=random(0,600)
    estrellay3=random(0,400)
    estrellax4=random(0,600)
    estrellay4=random(0,400)
    ellipse(estrellax1,estrellay1,5,5);
    ellipse(estrellax2,estrellay2,5,5);
    ellipse(estrellax3,estrellay3,5,5);
    ellipse(estrellax4,estrellay4,5,5);
      from = color(255,120,0,100);
  to= color(109,253,215,0);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.44);
  interC=lerpColor(from,to,0.55);
  interD=lerpColor(from,to,0.66);
  interE=lerpColor(from,to,0.77);
  interF=lerpColor(from,to,0.88);
  interG=lerpColor(from,to,0.99);
  fill(from);
  ellipse(300,150,90,90);
  fill (interA);
  ellipse(300,150,150+10,150+10);
  fill (interB);
  ellipse(300,150,150+20,150+20);
  fill (interC);
  ellipse(300,150,150+40,150+40);
  fill (interD);
  ellipse(300,150,150+70,150+70);
  fill (interE);
  ellipse(300,150,150+130,150+130);
  fill (interF);
  ellipse(300,15,150+150,150+150);
  fill (interG);
  ellipse(300,150,150+250,150+250);
  }
  if(millis(tiempo)>15500+100*i*2){
   	fill(0,0,0);
    rect(0,0,600,600); 
  }
  }
  //PLANO Y ESTRELLAS
  if (millis(tiempo)>11900){
    
    estrellax1=random(0,600)
    estrellay1=random(0,400)
    estrellax2=random(0,600)
    estrellay2=random(0,400)
    estrellax3=random(0,600)
    estrellay3=random(0,400)
    estrellax4=random(0,600)
    estrellay4=random(0,400)
    ellipse(estrellax1,estrellay1,5,5);
    ellipse(estrellax2,estrellay2,5,5);
    ellipse(estrellax3,estrellay3,5,5);
    ellipse(estrellax4,estrellay4,5,5);
    
    if(400+velocidad*7>600){
     velocidad=0 
    }
  }
  
  //Edificios
noStroke()
  from = color(0,0,0);
  to= color(255,255,255);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.66);
  interC=lerpColor(from,to,0.99);
  
  if(millis(tiempo)>16600){
   fill(interA)
    
   rect(250,450,-150,-300) ;
    rect(350,450,150,-300);
    stroke(90,90,90);
  line(0,400,600,400);
  line (300,400,0,470);
  line(300,400,0,400);
  line(300,400,600,470);
  line(300,400,0,460+120);
  //line(300,300,600,340);
 	line(300,400,450,600);
  //line(300,300,600,460);
  line(300,400,600,580);
  line(300,400,150,600);
  //line(300,300,300,600);
  line(300,400,300,600);
  line(0,400+velocidad*7,600,400+velocidad*7);
  noFill(); 
    }
  if(millis(tiempo)>18000){
    fill(interB)
   
    rect(190,550,-200,-450);
    rect(410,550,200,-450);
  }
 
 //Edificios callendo
 noStroke()
  from = color(0,0,0);
  to= color(255,255,255);
  interA=lerpColor(from,to,0.33);
  interB=lerpColor(from,to,0.66);
  interC=lerpColor(from,to,0.99);
  
  if(millis(tiempo)>19600){
   background(0,0,0);
    estrellax1=random(0,600)
    estrellay1=random(0,400)
    estrellax2=random(0,600)
    estrellay2=random(0,400)
    estrellax3=random(0,600)
    estrellay3=random(0,400)
    estrellax4=random(0,600)
    estrellay4=random(0,400)
    ellipse(estrellax1,estrellay1,5,5);
    ellipse(estrellax2,estrellay2,5,5);
    ellipse(estrellax3,estrellay3,5,5);
    ellipse(estrellax4,estrellay4,5,5);
    stroke(90,90,90);
  line(0,400,600,400);
  line (300,400,0,470);
  line(300,400,0,400);
  line(300,400,600,470);
  line(300,400,0,460+120);
  //line(300,300,600,340);
 	line(300,400,450,600);
  //line(300,300,600,460);
  line(300,400,600,580);
  line(300,400,150,600);
  //line(300,300,300,600);
  line(300,400,300,600);
  line(0,400+velocidad*7,600,400+velocidad*7);
  noFill(); 
     fill(interB)
   noStroke();
    rect(190,550,-200,-450);
    rect(410,550,200,-450);
    }
  if(millis(tiempo)>22000){
   background(0,0,0);
    estrellax1=random(0,600)
    estrellay1=random(0,400)
    estrellax2=random(0,600)
    estrellay2=random(0,400)
    estrellax3=random(0,600)
    estrellay3=random(0,400)
    estrellax4=random(0,600)
    estrellay4=random(0,400)
    ellipse(estrellax1,estrellay1,5,5);
    ellipse(estrellax2,estrellay2,5,5);
    ellipse(estrellax3,estrellay3,5,5);
    ellipse(estrellax4,estrellay4,5,5);
    stroke(90,90,90);
  line(0,400,600,400);
  line (300,400,0,470);
  line(300,400,0,400);
  line(300,400,600,470);
  line(300,400,0,460+120);
  //line(300,300,600,340);
 	line(300,400,450,600);
  //line(300,300,600,460);
  line(300,400,600,580);
  line(300,400,150,600);
  //line(300,300,300,600);
  line(300,400,300,600);
  line(0,400+velocidad*7,600,400+velocidad*7);
  noFill(); 
  }
 
}
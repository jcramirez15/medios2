function setup() {
	createCanvas(400, 400);
}

function draw() {
	colorMode(RGB)

	noStroke();
	var horas2; 
	//Color de sol/Luna
	sol=color(255, 197, 71)
	luna=color(255,255,255)
	//Cielo Noche
	noche= color(10, 20, 64);
	//CIELO 6PM-AM
	from = color(173, 138, 124);
	//CIELO MEDIO DIA
	to = color(226, 247, 250);
	colorMode(RGB); // Try changing to HSB.
	//Colores de 12 del dia a 6pm
	inter1 = lerpColor(from, to, 0.14285714285);
	inter2 = lerpColor(from, to, 0.14285714285 * 2);
	inter3 = lerpColor(from, to, 0.14285714285 * 3);
	inter4 = lerpColor(from, to, 0.14285714285 * 4);
	inter5 = lerpColor(from, to, 0.14285714285 * 5);
	inter6 = lerpColor(from, to, 0.14285714285 * 6);
	var horas = hour()
	var minutos = minute()
	var segundos=second()
	var horero = map(horas, 0, 12, 0, 359)
	var horero2= map(horas2,0,12,0,359)
	var minutero = map(minutos, 0, 60, 0, 200);
	var segundero = map(segundos,0,60,0,width);
	//Color del cielo dependiendo de las horas:
	//de 6pm a 6am el cielo solo tiene un color
	//de 6am a 6pm el cielo cambia dependiendo de la hora del dia

	if(horas>=18||horas<6){
		background(noche)	
		fill(noche)
	}
	
if(horas>12){
	horas2=horas-12
}
	if(horas==6){
		background(from);
		}
		if(horas==7){
		background(inter1);
		}
		if(horas==8){
		background(inter2);
		}
		if(horas==9){
		background(inter3);
		}
		if(horas==10){
		background(inter4);
		}
		if(horas==11){
		background(inter5);
		}
		if(horas==12){
		background(to);
		}
		//Cielo despues de las 12
		if(horas2==1){
		background(inter5);
		}
		if(horas2==2){
		background(inter4);
		}
		if(horas2==3){
		background(inter3);
		}
		if(horas2==4){
		background(inter2);
		}
		if(horas2==5){
		background(inter1);
		}
		if(horas2==6){
		background(from);
			
		}
	
	//Arena
	push()
	fill(211, 180, 123)
	rect(0,height*3/5,width,height)
	pop()
	//Comportamiento del sol de 6am a 12
	push()	
	translate(width/2,height*3/5)
	if(horas<13){
	rotate(horero)
		fill(sol)
		ellipse(-120,0,40,40);
	}
	pop()
	//Contador de minutos(cada bloque contribuye a una "construccion"
//cada minuto que pasa, esta torre aumenta)
	push()
	fill(34, 17, 15)
	translate(360,height*2.2*2/6+35)
	rect(0,0,25,-minutero)
	
	pop()
	
	
	//hombre empujando bloque (un paso por minuto)
	fill(133, 59, 41)
	rect(segundero, height*4/5, 30,40)
	fill(0,0,0)
	ellipse(segundero-4,height*(4/5)+10,8,8)
	stroke(0,0,0)
	strokeWeight(2)
	if(segundos%2==0){
	line(segundero-4,height*4/5+10,segundero-2,height*4/5+30)
	line(segundero-2,height*4/5+30,segundero-25,height*4/5+40)
	line(segundero-2,height*4/5+30,segundero-12,height*4/5+30)
	line(segundero-12,height*4/5+30,segundero-6,height*4/5+40)
	}
	else{
			line(segundero-4,height*4/5+10,segundero-2,height*4/5+30)
	line(segundero-2,height*4/5+30,segundero-25,height*4/5+40)
	line(segundero-2,height*4/5+30,segundero-12,height*4/5+30)
	line(segundero-12,height*4/5+30,segundero-19,height*4/5+40)
	}
		



}
	
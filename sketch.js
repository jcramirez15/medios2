function setup() { 
  createCanvas(400, 3*120);
  stroke(50,51,61);
} 

function draw() { 
  background(220);
 
  //primera linea
 
    noStroke()
    fill(211,202,173);
    rect(0,0,400,10);
 //PAtrones primera columna
  for( posx1=0;posx1<40; posx1=posx1+20){
   	//bloques
     for(posy1=10;posy1<=120;posy1=posy1+60){
       stroke(211,202,173);
       fill(24,39,39);   
      rect(posx1,posy1,20,60);
     }   
  }
  
    //Rayas claras
    i=0
    posy2=120
    for(posy2;posy2<=120*2;posy2=posy2+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(0,posy2,40,10);
      }
      else{
        fill(160,63,46);
        rect(0,posy2,40,10);
  }
    }
  //Rayas Oscuras
   i=0
    posy3=120*2
    for(posy3;posy3<=120*3;posy3=posy3+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(0,posy3,40,10);
      }
      else{
        fill(63,47,39);
        rect(0,posy3,40,10);
  }
    }
  //Columna2
  	//rayas claras
   i=0
    
    for(posy4=10;posy4<120;posy4=posy4+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(40,posy4,40,10);
      }
      else{
        fill(160,63,46);
        rect(40,posy4,40,10);
  }
    }
 //Rayas Oscuras
    i=0
    posy5=120
    for(posy5;posy5<=120*2;posy5=posy5+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(40,posy5,40,10);
      }
      else{
        fill(63,47,39);
        rect(40,posy5,40,10);
  }
    }
  //bloques OScuros
  for( posx2=40;posx2<40*2; posx2=posx2+20){
   	//bloques
     for( posy6=120*2;posy6<=120*3;posy6=posy6+60){
       stroke(211,202,173);
       fill(24,39,39);   
      rect(posx2,posy6,20,60);
     }   
  }
  //COlumna 3
   //Rayas Oscuras
    i=0
    posy7=10
    for(posy7;posy7<=120;posy7=posy7+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(40*2,posy7,40,10);
      }
      else{
        fill(63,47,39);
        rect(40*2,posy7,40,10);
  }
    }
  //bloques Claros
  for( posx3=40*2;posx3<40*3; posx3=posx3+20){
   	//bloques
     for( posy8=120*1;posy8<120*2;posy8=posy8+60){
       stroke(184,167,144);
       fill(211,202,173);  
      rect(posx3,posy8,20,60);
     }   
  }
  //RAyas claras
  i=0
    
    for(posy4=120*2;posy4<120*3;posy4=posy4+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(40*2,posy4,40,10);
      }
      else{
        fill(160,63,46);
        rect(40*2,posy4,40,10);
  }
    }
  //COlumna 8
   //Rayas Oscuras
    i=0
    posy7=10
    for(posy7;posy7<=120;posy7=posy7+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(40*7,posy7,40,10);
      }
      else{
        fill(63,47,39);
        rect(40*7,posy7,40,10);
  }
    }
  //bloques Claros
  for( posx3=40*7;posx3<40*8; posx3=posx3+20){
   	//bloques
     for( posy8=120*1;posy8<120*2;posy8=posy8+60){
       stroke(184,167,144);
       fill(211,202,173);  
      rect(posx3,posy8,20,60);
     }   
  }
  //RAyas claras
  i=0
    
    for(posy4=120*2;posy4<120*3;posy4=posy4+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(40*7,posy4,40,10);
      }
      else{
        fill(160,63,46);
        rect(40*7,posy4,40,10);
  }
    }
  //Columna 4
  	//bloques oscuros
  for( posx4=40*3;posx4<40*4; posx4=posx4+20){
   	
     for( posy9=10;posy9<=120;posy9=posy9+60){
       stroke(211,202,173);
       fill(24,39,39);   
      rect(posx4,posy9,20,60);
     }   
  }
  //RAyas claras
  i=0
    
    for(posy4=120;posy4<120*2;posy4=posy4+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(40*3,posy4,40,10);
      }
      else{
        fill(160,63,46);
        rect(40*3,posy4,40,10);
  }
    }
  //Rayas oscuras
  i=0
    posy7=120*2
    for(posy7;posy7<=120*3;posy7=posy7+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(40*3,posy7,40,10);
      }
      else{
        fill(63,47,39);
        rect(40*3,posy7,40,10);
  }
    }
  //Columna 10
  	//bloques oscuros
  for( posx4=40*9;posx4<40*10; posx4=posx4+20){
   	
     for( posy9=10;posy9<=120;posy9=posy9+60){
       stroke(211,202,173);
       fill(24,39,39);   
      rect(posx4,posy9,20,60);
     }   
  }
  //RAyas claras
  i=0
    
    for(posy4=120;posy4<120*2;posy4=posy4+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(40*9,posy4,40,10);
      }
      else{
        fill(160,63,46);
        rect(40*9,posy4,40,10);
  }
    }
  //Rayas oscuras
  i=0
    posy7=120*2
    for(posy7;posy7<=120*3;posy7=posy7+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(40*9,posy7,40,10);
      }
      else{
        fill(63,47,39);
        rect(40*9,posy7,40,10);
  }
    }
  //COlumna6
  //bloques oscuros
  for( posx4=40*5;posx4<40*6; posx4=posx4+20){
   	
     for( posy9=10;posy9<=120;posy9=posy9+60){
       stroke(211,202,173);
       fill(24,39,39);   
      rect(posx4,posy9,20,60);
     }   
  }
  //RAyas claras
  i=0
    
    for(posy4=120;posy4<120*2;posy4=posy4+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(40*5,posy4,40,10);
      }
      else{
        fill(160,63,46);
        rect(40*5,posy4,40,10);
  }
    }
  //Rayas oscuras
  i=0
    posy7=120*2
    for(posy7;posy7<=120*3;posy7=posy7+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(40*5,posy7,40,10);
      }
      else{
        fill(63,47,39);
        rect(40*5,posy7,40,10);
  }
    }
  //COLUMNA5
  	//Rayas Oscuras
    i=0
    posy7=10
    for(posy7;posy7<=120;posy7=posy7+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(40*4,posy7,40,10);
      }
      else{
        fill(63,47,39);
        rect(40*4,posy7,40,10);
  }
    }
  //bloques Claros
  for( posx3=40*4;posx3<40*5; posx3=posx3+20){
   	//bloques
     for( posy8=120*1;posy8<120*2;posy8=posy8+60){
       stroke(184,167,144);
       fill(211,202,173);  
      rect(posx3,posy8,20,60);
     }   
  }
  //RAyas claras
  i=0
    
    for(posy4=120*2;posy4<120*3;posy4=posy4+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(40*4,posy4,40,10);
      }
      else{
        fill(160,63,46);
        rect(40*4,posy4,40,10);
  }
    }
  //Columna7
  	//rayas claras
   i=0
    
    for(posy4=10;posy4<120;posy4=posy4+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(40*6,posy4,40,10);
      }
      else{
        fill(160,63,46);
        rect(40*6,posy4,40,10);
  }
    }
 //Rayas Oscuras
    i=0
    posy5=120
    for(posy5;posy5<=120*2;posy5=posy5+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(40*6,posy5,40,10);
      }
      else{
        fill(63,47,39);
        rect(40*6,posy5,40,10);
  }
    }
  //bloques OScuros
  for( posx2=40*6;posx2<40*7; posx2=posx2+20){
   	//bloques
     for( posy6=120*2;posy6<=120*3;posy6=posy6+60){
       stroke(211,202,173);
       fill(24,39,39);   
      rect(posx2,posy6,20,60);
     }   
  }
   //Columna9
  	//rayas claras
   i=0
    
    for(posy4=10;posy4<120;posy4=posy4+10){
     i=i+1
      if(i%2>0){
       fill(211,202,173);
        rect(40*8,posy4,40,10);
      }
      else{
        fill(160,63,46);
        rect(40*8,posy4,40,10);
  }
    }
 //Rayas Oscuras
    i=0
    posy5=120
    for(posy5;posy5<=120*2;posy5=posy5+10){
     i=i+1
      if(i%2>0){
       fill(184,167,144);
        rect(40*8,posy5,40,10);
      }
      else{
        fill(63,47,39);
        rect(40*8,posy5,40,10);
  }
    }
  //bloques OScuros
  for( posx2=40*8;posx2<40*9; posx2=posx2+20){
   	//bloques
     for( posy6=120*2;posy6<=120*3;posy6=posy6+60){
       stroke(211,202,173);
       fill(24,39,39);   
      rect(posx2,posy6,20,60);
     }   
  }
  
}
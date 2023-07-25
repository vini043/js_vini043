function setup() {
    createCanvas(400, 400);
    background("red");
  
  }
  
  function draw() {
    
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 15, 15); 
    }
    
    fill("#009688")
   stroke("white")
    
    
  
  }
  
  
  
  
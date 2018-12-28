var Cube;  // Declare object
var z = 0;
var camHeight = 400;
var cubes = [];
var lane = 0;

function setup() {
  createCanvas(710, 400);
  // Create object
  CubeL = new cubeL();
  CubeR = new cubeR();
  CubeL.z = 200;
  CubeR.z = 200;


  for(var i = 10;i > 0;i-=1){
    cubes[i] = round(random(0,2));
  }

}
var running = 1;
function draw() {



  translate(width/2,height/2);
  background(50, 89, 100);
  stroke(0,0,0);
  fill(255,255,255);

 if(running){
    z-=25;

    cubes[9] = round(random(0,2));
    var x = (lane*width/-2);
    if (z == -300){
      z = 0;
      for(var i = 1;i < 11;i+=1){

      cubes[i] = cubes[i+1];

      }

    }
    for(var i = 10;i > 0;i-=1){
      if(cubes[i] == 0){
        CubeL.x = x-400;
        CubeL.y = camHeight;
        CubeL.z = i * 300 + z;
        CubeL.display();
      }
      if(cubes[i] == 1){
        CubeR.x = x+400;
        CubeR.y = camHeight;
        CubeR.z = i * 300 + z;
        CubeR.display();
      }

      if(cubes[i] == 2){
        if(mouseX<width/2){
          CubeL.x = x;
          CubeL.y = camHeight;
          CubeL.z = i * 300 + z;
          CubeL.display();
        }else{
          CubeR.x = x;
          CubeR.y = camHeight;
          CubeR.z = i * 300 + z;
          CubeR.display();
        }
      }

    }

 }
}

// cube class
function cubeL() {
  this.x = 0;
  this.y = 0;
  this.z = 3;

  this.size = 200;

  this.display = function() {
    this.verts = [[-1,1,1], [-1,1,-1], [1,1,-1], [1,1,1], [-1,-1,-1], [1,-1,-1], [1,-1,1]];
    this.faces = [[2,3,6,5], [0,1,2,3], [1,2,5,4]];

    for(var f = 0;f < 3;f++){
      beginShape();
      for(var v = 0;v < 4;v++){
        p = -5 / (this.verts[this.faces[f][v]][1] - (this.z/20) -2)
        this.pointX = (this.verts[this.faces[f][v]][0] * this.size + this.x)*p;
        this.pointY = (this.verts[this.faces[f][v]][2] * this.size + this.y)*p;
        vertex(this.pointX, this.pointY);
      }
      endShape(CLOSE);
    }


  };
}

function cubeR() {
  this.x = 0;
  this.y = 0;
  this.z = 3;

  this.size = 200;

  this.display = function() {
    this.verts = [[1,1,1], [1,1,-1], [-1,1,-1], [-1,1,1], [1,-1,-1], [-1,-1,-1], [-1,-1,1]];
    this.faces = [[2,3,6,5], [0,1,2,3], [1,2,5,4]];

    for(var f = 0;f < 3;f++){
      beginShape();
      for(var v = 0;v < 4;v++){
        p = -5 / (this.verts[this.faces[f][v]][1] - (this.z/20) -2)
        this.pointX = (this.verts[this.faces[f][v]][0] * this.size + this.x)*p;
        this.pointY = (this.verts[this.faces[f][v]][2] * this.size + this.y)*p;
        vertex(this.pointX, this.pointY);
      }
      endShape(CLOSE);
    }


  };
}

function keyPressed() {
  if(keyCode == 37 && lane == 0){
   lane = -1;
  }

  if(keyCode == 37 && lane == 1){
   lane = 0;
  }

  if(keyCode == 39 && lane == 0){
   lane = 1;
  }

  if(keyCode == 39 && lane == -1){
   lane = 0;
  }

}

var isDrawing = false;
var drawing =  [];
var drawingStroke;
var drawColor = 255;
var strokeWeight=4;
var currentPath = [];
function setup() {
   
  var canvas = createCanvas(800,800);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
 
}

function startPath()
{
  isDrawing = true;
  currentPath = [] ;
  drawingStroke ={
    path:currentPath,
    myColorr:random(0,255),
    myColorg:random(0,255),
    myColorb:random(0,255),
     myWeight:random(5) 
    }
  drawing.push(drawingStroke);

}
function endPath()
{
  isDrawing = false;
}

function draw() 
{
  background(0);  
  if (isDrawing)
  {
    var point = {
      x:mouseX,
      y:mouseY
      
        }
currentPath.push(point);
  }


noFill();
for (var i = 0; i < drawing.length; i++) {
  var pathobj = drawing[i].path;
  stroke(drawing[i].myColorr,drawing[i].myColorg,drawing[i].myColorb);
  strokeWeight(drawing[i].myWeight);
  beginShape();
  for (var j = 0; j < pathobj.length; j++) {
  
      vertex(pathobj[j].x, pathobj[j].y);
  }
  endShape();
}
  
}
console.log("loaded");
document.writeln("loaded")
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
var c= Shape.Circle(100,100,50);
c.fillColor='green';
paper.view.draw();
var d;
for(var x=25;x<400;x+=50){
    for(var y=25; y<400; y+=50){
        d=Shape.Circle(x,y,20);
        d.fillColor='blue';
    }
}
/*var tool=new Tool();
tool.onMouseDown=function(event){
    var e=Shape.Circle(event.point.x,event.point.y,30);
    e.fillColor='yellow';
};*/
var f=Shape.Circle(100,450,40);
f.fillColor='black';
var text=new PointText(100,450);
text.justification='center';
text.fillColor='white';
text.fontSize=20;
text.content='hey all';
//paper.view.draw();
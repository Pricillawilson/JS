<<<<<<< HEAD

$(document).ready(function() {
    'use strict';
    console.log("main.js loaded");
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    var c= Shape.Circle(200,200,50);
    c.fillColor='green';
    paper.view.draw();
    });
=======
console.log("loaded");
document.writeln("loaded")
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
var c= Shape.Circle(200,200,50);
c.fillColor='green';
paper.view.draw();
var d;
for(var x=25;x<400;x+=50){
    for(var y=25; y<400; y+=50){
        d=Shape.Circle(x,y,20);
        d.fillColor='blue';
    }
}
var tool=new tool();
tool.onMousDown=function(event){
    var e=Shape.Circle(event.point.x,event.point.y,30);
    e.fillColor='yellow';
};
>>>>>>> eadbf961b2103653e4158242bf993b8ed427b090

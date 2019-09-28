
console.log("loaded");
document.writeln("loaded")
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
var c= Shape.Circle(250,500,50);
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
var f=Shape.Circle(100,500,50);
f.fillColor='black';
var text=new PointText(100,500);
text.justification='center';
text.fillColor='white';
text.fontSize=20;
text.content='hey all';
//paper.view.draw();
const sam1={name:'Prici',age:16};
const sam2={name:'Prici',classification:{kingdom:'Anamalia',phylum:'Chordata',class:'Mamalia'},};
console.log(sam2.classification.kingdom);
console.log(sam2.name);
const obj={};
obj.color="yellow";
console.log(obj.size);
console.log(obj.color);
sam2.speak=function(){return "MEOW!!";};
console.log(sam2.speak());
const s="hello";
console.log(s.toUpperCase());
const a1=[1,2,3,4]; //array containing numbers
const a2=[1,'three',3,null]; //array containing mixed types
const a3=[{name:"Ruby",hardness:9},{name:"Diamond",hardness:10},];//array containing objects
const a4=[[1,2,3],[2,4,5],];//array containing arrays
console.log(a1[0]);
console.log(a2[1]);
console.log(a3[0]['name']);
console.log(a4[0][1]);
console.log(a4.length);
console.log(a2[a2.length-1]);
a2[3]="star";
console.log(a2);
const now=new Date();
console.log(now);
const hallowen=new Date(2016,9,31);
const hallowenparty=new Date(2016,9,31,19,0);
console.log(hallowenparty.getFullYear());
console.log(hallowenparty.getMonth());
console.log(hallowenparty.getDate());
console.log(hallowenparty.getHours());
console.log(hallowenparty.getMinutes());
const numStr="33.33";
const num=Number(numStr);
const a=parseInt("16 volts",10);// "volts" is ignored,16 is parsed in base10
const b=parseInt("3a",16);//parse hexadecimal 3a
const cf=parseFloat("15.5 kph");//parseFloat always assume base 10
console.log(num);
console.log(a);
console.log(b);
console.log(cf);
const str=num.toString();
console.log(str);
const arr=[1,true,"hello"];
console.log(arr.toString());
const n=0;
const b1=!!n;
const b2=Boolean(n);
console.log(b1);
console.log(b2);
let funds=50;
while(funds>1 && funds<100)
{
    funds=funds+5;
    funds=funds-1;
    console.log(funds);
}
if(funds > 90)
console.log("There's money left!");
else {
console.log("I'm broke");
console.log("Time to quit.");
}





function setup(){
var bs = createCanvas(1000,1000)

}
let fir=100;
let sec=1000;
let  thir=0;

function draw(){
for(let i=0;i<10;i++){
line(fir,thir,fir,sec);
line(thir,fir,sec,fir);
fir=fir+100


    }
}   
var array = [[0,0,0,0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]];


function mouseClicked(){
    let x= Math.floor(mouseX/100)*100;
    let y= Math.floor(mouseY/100)*100;
    console.log(x,y);
   fill(255,0,0);
   rect(x,y,100,100);
    

}




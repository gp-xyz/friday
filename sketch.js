var sbs = []

var mysublines = [1,5,20,30,40,50];
var mydotcount = [1,5,10,15,20];
var xslide = [1,10,35,50];
var yslide = [1,10,35,50];
var howmany = [1,2,3,5,10];
var squares = [1,2,4,5,5,5,6];


function setup() {
  
  createCanvas(600, 800);
  background(0);

  var colorp1 = [color(140,160,233,255),color(0,0,133,20)]
  var colorjai = [color(197,156,255,255),color(233,187,83,20)]
  var thecolor = random([colorp1,colorjai]);
  var initcolor =thecolor[0];
  var finalcolor =thecolor[1];

  var laps = random(howmany);
  var sqrs = random(squares);
  for (let xx=0;xx<laps;xx++){
  let squarecount = 4
  var initx = 100 + 5*xx;
  var inity = 100+ 5*xx;
  var initscalar = 287-xx;
  var initborder = 9;
  var xoffset = random(xslide);
  var yoffset = random(yslide);
  var thesublines = random(mysublines)
  var thedotcount = random(mydotcount)

  for (let i =0; i < sqrs; i++){
    var thiscolor = lerpColor(initcolor,finalcolor,i/sqrs)

    sbs.push(new SpecialBox(initx,inity,initscalar,initborder,[thiscolor],thesublines,thedotcount));
    initx += initborder+xoffset;
    inity += initborder+yoffset;
    initscalar = initscalar - 2*initborder;

  }



  }
}

function draw() {

  for (let i =0; i < sbs.length; i++){
    sbs[i].show();
  }
}

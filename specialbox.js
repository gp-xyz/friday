class SpecialBox{
    constructor(x,y,scalar,bordersize,colors,sublines,dotcount){
        this.x=x;
        this.y=y;
        this.scalar = scalar;
        this.bordersize=bordersize;
        this.colors = colors;
        this.sublines = sublines;
        this.dotcount = dotcount;


    }
    show(){
        var tl = createVector(this.x,this.y);
        var tr = createVector(this.x+this.scalar,this.y);
        var bl = createVector(this.x,this.y+this.scalar);
        var br = createVector(this.x+this.scalar,this.y+this.scalar);

        // fill(this.colors[1]);
        stroke(this.colors[0]);
        // rect(this.x+3,this.y+3,this.scalar-6,this.scalar-6);
        this.spraywood(tl,tr,bl,br,this.bordersize,16,true,true)

        // noStroke();
        // fill(233,233,233,255);
        // circle(tl.x+this.scalar/2,tl.y+this.scalar/2,this.bordersize*2);
        
    }
    spraywood(tl,tr,bl,br,dotsize,er,includeSides=true,includetops=true){
        if (includetops){
        this.sprayline(tl,tr,this.sublines,this.dotcount,dotsize,er);
        this.sprayline(br,bl,this.sublines,this.dotcount,dotsize,er);
        }
        if (includeSides){
        this.sprayline(br,tr,this.sublines,this.dotcount,dotsize,er);
        this.sprayline(tl,bl,this.sublines,this.dotcount,dotsize,er);
        
        }
      
    }
    sprayline(a,b,sublines,dotcount,dotsize,er){
        


        strokeWeight(dotsize);
        for (let i=0;i<sublines;i++){
          var thix =a.x + map(i,0,sublines-1,0,b.x-a.x);
          var thiy =a.y + map(i,0,sublines-1,0,b.y-a.y);
          for (let j=0;j<dotcount;j++){
            // var xnois = noise(.01*j+.01*i);
            var dotx = thix+map(noise(69+i*.02+j*.02),0,1,0-er,er);
            var doty = thiy+map(noise(70+i*.02+j*.02),0,1,0-er,er);
            point(dotx,doty);
          }
          
        
        }
      
      
    }
}
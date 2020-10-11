class Dustbin {
    constructor(x,y,w,h){
        
        var options = {
            isStatic:true
        }

        this.w=w;
        this.h=h;
        this.image=loadImage("dustbingreen.png");
        this.body=Bodies.rectangle(x,y,w,h,options);
        
        World.add(world,this.body);
    }

    addImage(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y-100,this.w,this.h+200);
        }

    display(){

        fill(255);
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }

    
}

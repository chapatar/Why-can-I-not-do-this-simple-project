class Paper{
    
    constructor(x,y,r){
        
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:1.5,
            density:1.2
        }

        this.r=r;
        this.body=Bodies.circle(x,y,r/2-10,options);
        this.image=loadImage("paper.png");
    
        World.add(world,this.body);
    }

    display(){

    fill("white");
    var pos=this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);
    }

}
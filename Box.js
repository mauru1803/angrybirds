class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height, options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var posi=this.body.position;
        var angulo=this.body.angle;
        push();
        translate(posi.x,posi.y);
        rotate(angulo);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("red")
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}
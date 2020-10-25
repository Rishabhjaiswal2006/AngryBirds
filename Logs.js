class Logs{

    constructor(x,y,height,angle){

        var rest={
            'restitution' : 0.8,
            'density':0.3,
            'friction':5
        }

        this.body = Bodies.rectangle(x,y,20,height,rest);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(MYworld,this.body);
    }

    display(){
        var pos = this.body.position ;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("crimson");
        rect(0,0,this.width,this.height);
        pop();
    }
}
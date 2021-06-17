class Particle{
    constructor(x,y){
        var options = {
            restitution: 0.4
        }
        this.body = Bodies.circle(x,y,15,options);
        World.add(world,this.body);
        this.color = color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x,pos.y+20,15,15);
    }
}
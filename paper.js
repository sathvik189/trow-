class paper {
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            
        }
       
        this.x=x;
		    this.y=y;
       this.r=r
       this.body = Bodies.circle(this.x,this.y, this.r/2, options);
       this.image = loadImage("sprites/paper.png");
       World.add(world, this.body);
      }
      display(){
        
        var pos =this.body.position;
       // var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        image(this.image, 0, -150, this.radius/2);
       // rotate(angle);
       rectMode(CENTER);
       //fill("green");
        //ellipse(0, 0, this.r, this.r);
   
        pop();
      }
    }
    
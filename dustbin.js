class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=400;
		this.dustbinHeight=130;
		this.wallThickness=20;
		this.angle=0;	
		this.image = loadImage("sprites/dustbingreen.png");
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			image(this.image, 770,250,400,400);

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			//fill("red")
			stroke(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			//image(this.image, 0, 0, this.width,this.height);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			//fill("red")
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			//image(this.image, 0, 0, this.width,this.height);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			//fill("red")
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			
            pop()
    }
}
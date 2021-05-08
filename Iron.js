class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
		'density':30,
		'friction': 3,
		'restitution':0.8
	  }

		this.body=Bodies.rectangle(x,y, width, height, options)
		this.width = width
		this.height = height
		World.add(world, this.body);

	}
	display()
	{
			var Stonepos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(Stonepos.x, Stonepos.y);
			rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.width,this.height);
			pop()
	}

}
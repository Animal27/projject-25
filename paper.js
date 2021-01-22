class Paper{
    constructor(x,y,radius)
    {
        var options={
            isStatic :false,
            restitution :0.3,
            friction :0.5,
            densitiy :1.2
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
		World.add(world,this.body);
        this.pic = loadImage("paper.png")
    }
    display(){
		var paperpos=this.body.position;
        push()
		translate(paperpos.x,paperpos.y);
        imageMode(CENTER);  
        image(this.pic,paperpos.x,paperpos.y,this.body.radius);
        pop()
    }
}

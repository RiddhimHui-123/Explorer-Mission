class explorer{

constructor(x,y,width,height){

    var options={
     
            'friction':1.0,
            'density':1.0    
    }
    this.image=loadImage("sprites/explore.png");
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

}

   display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }


      moveLeft()
      { 
        this.body.x=this.body.x-12;
      }
    
      moveRight()
      { 
        this.body.x=this.body.x+12;
      }
    
      jump()
      { 
        this.body.velocityY=-21;
        }


}





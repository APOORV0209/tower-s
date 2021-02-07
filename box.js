class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image=loadImage("wood1.png")
    this.v=255
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    if(this.body.speed<5){
      push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    image(this.image,0, 0, this.width, this.height);
    pop();

    }
    else {
      push()
      this.v=this.v-5
      tint (255,this.v)
      image(this.image,pos.x, pos.y, this.width, this.height);


      pop();

    }
    
  }
  score(){
if(this.v<0 && this.v>-105){
score=score+5

}



  }
};


class Tower {
    constructor(x, y, width, height) {
      var options = {
      isStatic: true
      
      };
 
this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options)
      //add the option inside the rectangular body(challenge 2)
      World.add(world, this.body)
    }
display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
           image(towerImage, 0, 0, this.width, this.height)

  
  pop();
  }
}

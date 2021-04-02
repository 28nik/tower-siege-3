class Polygon {
          constructor(x, y, radius) {
              var options = {
                  'restitution':0.5,
                  'friction':1.5,
                  'density':2.0,
                   isStatic: false
              }
              this.body = Bodies.polygon(x, y,6, radius/2, options);
              this.radius = radius;
              this.image = loadImage('polygon.png');
              World.add(world, this.body);
      }
       
          display() {
              var pos =this.body.position;
              var angle = this.body.angle;
              push();
              translate(pos.x, pos.y);
              rotate(angle);
              imageMode(CENTER);
              stroke (10)
              image(this.image, 0, 0, this.radius, this.radius-5);
              pop();
          }
      }
      
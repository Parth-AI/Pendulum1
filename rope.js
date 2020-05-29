class Rope{
     constructor(body1,body2,offsetX,offsetY)
     {
          this.offsetX = offsetX;
          this.offsetY = offsetY;

          var options = {
               bodyA:body1,
               bodyB:body2,
               pointB:{x:this.offsetX,y:this.offsetY},
               //length:50
          }
          this.rope = Constraint.create(options)
          World.add(world,this.rope);
     }
     display(){
         /* var pointA = this.rope.bodyA.position;
          var pointB = this.rope.bodyB.position;*/

          strokeWeight(4);

         // line(pointA.x,pointA.y,pointB.x,pointB.y);

          line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y);
     }
}
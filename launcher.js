class launcher{
    constructor(body,anchor)
}

       var options={ bodyA:body,
        pointB:anchor,
        stifness:0.004,
        length:1

       }

       this.bodyA=body
       this.pointB=anchor
       this.launcher=Constraint.create(options)
       World.add(world,this.launcher)
    

    attach(body)
        this.launcher.bodyA=body;
    

    fly()
    {
        this.launcher.bodyA=null;
    }

    display()
    {
        if(this.launcher.bodyA)
        {
            var pointA=this.bodyA.position;
            var pointB=this.pointB

            dtrokeWeight(2);
            ListeningStateChangedEvent(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }







class Paper{
    constructor(x,y,r) {
        
        this.image=loadImage("paper.png") 
        this.x=x;
		this.y=y;
	    this.r=r;
    }
    display(){
        imageMode(CENTER);
      
    }       
};
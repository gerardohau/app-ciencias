function Fish(id) {
	this.id = id,
    this.positionX = 0,
    this.color= "white";
	this.fullName = function() {
		return this.id + " " + this.positionX;
    }
    

    this.aleatoriMovement= function (posX, actualY, direction, heigh){
        var x = posX;
        return ((-1)*((direction)*posX)*((direction)*posX)+heigh) ;
    }

    this.paint_fish= function(){
        var number_color= Math.floor(Math.random() * 5);
        
        switch(number_color){
            case 0: this.color="rgba(255,0,0,0.70)"; break;
            case 1: this.color="rgba(0,255,0,0.70)"; break;
            case 2: this.color="rgba(0,0,255,0.70)"; break;
            case 3: this.color="rgba(223, 83, 171, 0.70)"; break;
            default: this.color="rgba(255, 170, 0,0.70)"; break;
            
        }
    }

    this.escape = function (posX){
        var x = posX;
        var y=10;
        var y= (-1)*((x-3)*(x-3))/100000;
        return y;
    };

   /* this.jump = function(){

        var interval = setInterval(frame, 50);
        var num= id;
        function frame(){ 
            
                for(var x=0; x<10;x+=20){  
                    var fish_container = document.getElementById('animated-fish1');
                    var position = fish_container.getBoundingClientRect();
                    //fish_container.style.top = position.top - escape(position.left+x)+'px';
                    fish_container.style.left = position.left +10+ 'px'; 
                    x+=20;
            }  
        }
        return num;

}*/

}


/*
    this.parabolicMovement1= function(posX,actualY){
        var x = posX;
        var y = (-1*(posX)*(posX)+100)/5 ;
        return y;
    },
    this.parabolicMovement2= function(posX,actualY){
        var x = posX;
            return (-1*(posX)*(posX)+300)/5;
    },
    this.parabolicMovement3= function(posX,actualY){
        var x = posX;
           // return -1*(posX - 1)*(posX - 1)+100;
        return (-1*(posX-1)*(posX-1)+100)/5;
    },
    this.parabolicMovement4= function(posX, actualY){
        var x = posX;
            return (-1*(posX - 3)*(posX - 3)+100)/5;
    }
    this.parabolicMovement6= function(posX,actualY){
        var x = posX;
        var y = (-1*(posX)*(posX)+100)/5 ;
        return y;
    },
    this.parabolicMovement7= function(posX,actualY){
        var x = posX;
            return (-1*(posX)*(posX)+300)/5;
    },
    this.parabolicMovement8= function(posX,actualY){
        var x = posX;
           // return -1*(posX - 1)*(posX - 1)+100;
        return (-1*(posX-1)*(posX-1)+100)/5;
    },
    this.parabolicMovement9= function(posX, actualY){
        var x = posX;
            return (-1*(posX - 3)*(posX - 3)+100)/5;
    }


*/
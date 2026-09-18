"use strict";

function StickFigure(context){

    this.context = context;
    this.direction = 1; // 1 when going forward, 0 when going backwards
    this.angle = ((0 * Math.PI) / 180);

    StickFigure.prototype.drawTopOfSwing = function(){
        this.context.beginPath();
        this.context.rect(175,55,140,20);
        this.context.stroke();
    }

    StickFigure.prototype.drawSwingLine = function(){
        this.context.beginPath();
        this.context.moveTo(0,0);
        this.context.lineTo(0,215);
        this.context.stroke();
    }

    StickFigure.prototype.drawSwingSeat = function(){
        this.context.beginPath();
        this.context.rect(-30,215,60,22);
        this.context.stroke();
    }

    StickFigure.prototype.drawArm = function(){
        //upper arm
        this.context.beginPath();
        this.context.moveTo(17, 187);
        this.context.lineTo(35,165);
        this.context.stroke();

        //lower arm
        this.context.beginPath();
        this.context.moveTo(17, 187);
        this.context.lineTo(0,165);
        this.context.stroke();

        //hand
        this.context.beginPath();
        this.context.arc(0, 165, 8, 0, 2 * Math.PI);
        this.context.lineWidth = 2;
        this.context.stroke();
        this.context.fillStyle = "white";
        this.context.fill();
    }

    StickFigure.prototype.drawBody = function(){
        this.context.beginPath();
        this.context.moveTo(20,215);
        this.context.lineTo(45, 132);
        this.context.stroke();
    }

    StickFigure.prototype.drawSmile = function(){
        this.context.beginPath();
        this.context.arc(25, 110, 5, 0, 1 * Math.PI - 0.6);
        this.context.lineWidth = 2;
        this.context.stroke();
    }

    StickFigure.prototype.drawHead = function(){
        this.context.beginPath();
        this.context.ellipse(45, 100, 30, 33, Math.PI/4, 0, 2*Math.PI);
        this.context.lineWidth = 1;
        this.context.stroke();
    }

    StickFigure.prototype.drawLegs = function(){
        if (this.direction == 1){
            //drawing legs
            this.context.beginPath();
            this.context.moveTo(20,215);
            this.context.lineTo(-85,215);
            this.context.stroke();

            //drawing foot
            this.context.beginPath();
            this.context.moveTo(-85,215);
            this.context.lineTo(-88,197);
            this.context.stroke();
        } 
        else{
            //drawing upper leg
            this.context.beginPath();
            this.context.moveTo(20,215);
            this.context.lineTo(-40,215);
            this.context.stroke();
            
            //drawing lower leg
            this.context.beginPath();
            this.context.moveTo(-40,215);
            this.context.lineTo(-40,255);
            this.context.stroke();
            
            //drawing foot
            this.context.beginPath();
            this.context.moveTo(-40,255);
            this.context.lineTo(-55, 255);
            this.context.stroke();
            
        }
        
    }

    StickFigure.prototype.drawEyes = function(){
        if (this.direction == 1){
            this.context.beginPath();
            this.context.arc(32, 92, 1.5, 0, 2 * Math.PI);
            this.context.lineWidth = 2;
            this.context.stroke();
            this.context.fillStyle = "black";
            this.context.fill();
        } else {
            this.context.beginPath();
            this.context.moveTo(28, 92);
            this.context.lineTo(34,94);
            this.context.lineWidth = 2;
            this.context.stroke();
        }
    }

    // StickFigure.prototype.drawFrown = function(){
    //     this.context.beginPath();
    //     this.context.arc(27, 113, 5, 1.4 * Math.PI - 0.6, 2.2 * Math.PI - 0.6);
    //     this.context.lineWidth = 2;
    //     this.context.stroke();
    // }

    StickFigure.prototype.draw = function(){
        this.context.save();

        this.drawTopOfSwing();

        this.context.translate(245,75);
        this.context.rotate(this.angle);
        
        this.drawSwingLine();
        this.drawSwingSeat();
        this.drawArm();
        this.drawBody();
        this.drawSmile();
        this.drawHead();
        this.drawLegs();
        this.drawEyes();

        //Restoring the previously stored canvas.
        this.context.restore();
    }

    StickFigure.prototype.update = function(speed){ //have to add a speed as input to the function.
        var max_angle = (45*Math.PI)/180;
        var min_angle = -(45*Math.PI)/180;

        if (speed > 0){
            var default_angle = (0.65*Math.PI*speed)/180;

            if (this.direction == 1){
                this.angle += default_angle;
            }
            else{
                this.angle -= default_angle;
            }

            if (this.angle >= max_angle){
                this.direction = 0;
            }

            if (this.angle <= min_angle){
                this.direction = 1;
            }
        }
    }
}
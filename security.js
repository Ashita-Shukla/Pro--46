class Security {

    constructor(){

        this.access2 = createInput("Answer")
        this.access2.position(100,90);
        this.access2.style('background', 'lightpink');  

        this.button2 = createButton('Check');
        this.button2.position(100,120);
        this.button2.style('background', 'lightgrey');  

        this.access1 = createInput("Answer")
        this.access1.position(100,90);
        this.access1.style('background', 'lightpink');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');  
    }
    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
    }
}
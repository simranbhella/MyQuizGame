class Question {

    constructor() {
      this.input = createInput("Name");
      this.option1 = createButton('Everyone');
      this.question = createElement('h2');
      this.title = createElement('h2');
      this.option2 = createButton('Envelope');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("Question - What starts and ends with letter E but only has one letter")
        this.question.position(150,80);
        this.option1.html("1: Everyone ");
        this.option1.position(150, 80);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.input1.position(150,230);
    
    }
  
    

       
  
    
  }
(function () {

    function Question(question,answers, correct) { //need as inputs here is the question, the answers, and the correct answer
        this.question = question; //add property
        this.answers = answers;
        this.correct = correct;
        // So we set everything that we input into this constructor on the "this" variable of this function
        // That's the function constructor. Its the same as Class in Java
    }

    Question.prototype.displayQuestion = function () { //objectname.prorotype.methodname. Every function has a property called prototype
        console.log(this.question);
        for(i=0;i<this.answers.length;i++){
            console.log(i + ': ' + this.answers[i]);
        } //The object uses the method from the parent
    };
    Question.prototype.checkAnswer = function (ans, callback) {
        if (ans === this.correct){
            console.log('Correct Answer.');
            sc = callback(true);
        }else {
            console.log('Wrong Answer. Try again!');
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score + '\n' + '-----------------------');
    };

    var q1 = new Question('Is JavaScript the collest programming language in the world', ['Yes','No'], 0);
// the new operator creates a new empty object, then it calls the question function and sets the "this" variables
// to the new object empty object that was just created. The new object will be stored in q1, thefore, it points to the memory position

    var q2 = new Question('Whats the name of this course\'s teacher? ', ['John','Michael','Jonas'], 2);

    var q3 = new Question('Whats does best describe coding ', ['Boring','Hard','Fun','Tedious'], 2);

    var questions = [q1,q2,q3];

    function Score () { //Closures
        var sc = 0;
        return function (correct) {
            if (correct){sc++;}
            return sc;
        }
    }
    var keepScore = Score();

    NextQuestion();
     function NextQuestion() {


        var n = Math.floor(Math.random()*questions.length);

        questions[n].displayQuestion();

        var answer = prompt ('Please select the correct answer');
         console.log(answer);
        if (answer !== 'exit'){

            questions[n].checkAnswer(parseInt(answer), keepScore);
            NextQuestion();

        }

    }

    /*

    the method into the questions prototype property,

    which is the prototype of all of the instances so if all

    of the objects created through it.

    So of q1, q2, and q3.
    */
})(); // Immediately Invoked Function Expression is a JavaScript function that runs as soon as it is defined.
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// It keeps the code private to use as plugins. The variable within the expression can not be accessed from outside it.

//Every function expression is a constructor in Javascript

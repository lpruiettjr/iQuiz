// on load the website will have a button that will let you enter 
$(document).ready(() =>{

    
    $('button').on('click',() => {
        // console.log('hey');
        $('body').empty();
        
        askSomething();
    });
    //the question will appear to the page
    
    
    
    
    
    
    function askSomething () {
    $('button').empty();
    
    
    $.ajax({
        url: '/api/iQuiz/1',
        type: 'GET',
        success: function (data){
            // console.log(data);
            //the question
            let questions = data[0].question;
            // console.log(questions);
            // the answers 
            let correctAnswer = data[0].correct_answers;
            // console.log(correctAnswer);
            
            let wrongAnswer = data[0].wrong_answer;
            
            let wrongAnswer2 = data[0].wrong_answer2;
            
            let wrongAnswer3 = data[0].wrong_answer3;
            
            //assign elements to const 
            const container = $(`<div id = 'container' class = 'questions'>${questions}</div>`);
            const answerBox = $(`<button id='box1' class = 'button'>${correctAnswer}</button>`);
            const wrongBox = $(`<button id='box2' class = 'button'>${wrongAnswer}</button>`);
            const wrongBox2 = $(`<button id='box3' class = 'button'>${wrongAnswer2}</button>`);
            const wrongBox3 = $(`<button id='box4' class = 'button'>${wrongAnswer3}</button>`);
            // let inputvalue = $(`<input type = 'text' placeholder ='Type something' id = 'myInput'>`);
            
            //append to boxes
            $('body').append(container);
            $('body').append(answerBox);
            $('body').append(wrongBox);
            $('body').append(wrongBox2);
            $('body').append(wrongBox3);
            // $('body').append(inputValue);
            
            // wrap all the boxes together
            $('#box1').on('click',() => {
                alert("Congrats, you picked the right answer");
                let id = prompt('Would you like to play again?');
                
                
                console.log(id);                
                if(id === 'yes') {
                    console.log('red');
                    $('body').empty();
                    askSomething2();
                } else {
                    console.log('hey');
                    $('body').empty();
                    $('body').append('Thanks for playing');
                } 
                
                
            });
                 
            $('#box2').on('click', () => {
                alert('Sorry, please try again.');
            });
            
            $('#box3').on('click', () => {
                alert('Sorry, please try again.')
            });
            
            $('#box4').on('click', () => {
                alert('Sorry,please try again.')
            });
            
            
            
            
        } 
    });
}



function askSomething2 () {
    $('button').empty();
    
    
    $.ajax({
        url: '/api/iQuiz/2',
        type: 'GET',
        success: function (data){
            // console.log(data);
            //the question
            let questions = data[0].question;
            // console.log(questions);
            // the answers 
            let correctAnswer = data[0].correct_answers;
            // console.log(correctAnswer);
            
            let wrongAnswer = data[0].wrong_answer;
            
            let wrongAnswer2 = data[0].wrong_answer2;
            
            let wrongAnswer3 = data[0].wrong_answer3;
            
                        //assign elements to const 
                        const container = $(`<div id = 'container' class = 'questions'>${questions}</div>`);
                        const answerBox = $(`<button id='box1' class = 'button'>${correctAnswer}</button>`);
                        const wrongBox = $(`<button id='box2' class = 'button'>${wrongAnswer}</button>`);
                        const wrongBox2 = $(`<button id='box3' class = 'button'>${wrongAnswer2}</button>`);
                        const wrongBox3 = $(`<button id='box4' class = 'button'>${wrongAnswer3}</button>`);
                        // let inputvalue = $(`<input type = 'text' placeholder ='Type something' id = 'myInput'>`);
                        
                        //append to boxes
                        $('body').append(container);
                        $('body').append(answerBox);
                        $('body').append(wrongBox);
                        $('body').append(wrongBox2);
                        $('body').append(wrongBox3);
                        // $('body').append(inputValue);
                        
                        // wrap all the boxes together
                        $('#box1').on('click',() => {
                            alert("Congrats, you picked the right answer");
                            let id = prompt('Would you like to play again?');
                            
                            
                            console.log(id);                
                            if(id === 'yes') {
                                console.log('red');
                                $('body').empty();
                                askSomething();
                            } else {
                                console.log('hey');
                                $('body').empty();
                                $('body').append('Thanks for playing');
                            } 
                            
                            
                        });
                        
                        $('#box2').on('click', () => {
                            alert('Sorry, please try again.');
                        });
                        
                        $('#box3').on('click', () => {
                            alert('Sorry, please try again.')
                        });
                        
                        $('#box4').on('click', () => {
                            alert('Sorry,please try again.')
                        });
                        
                        
                        
                        
                    } 
                });
            }
            
            // function answer() {
                //     $.ajax ({
                    //         url:
                    //     })
                    // }
                    //the buttons will appearand clickable
                    //the correct answer will produce a congrats
                    // the wrong answer will produce a try again 
                    //prompt to play again or leave the app
                    });
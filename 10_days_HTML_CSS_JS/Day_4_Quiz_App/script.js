
let start_quiz = document.getElementById('start-quiz')
let instruction_box = document.getElementById('instruction-box')
let quiz_box = document.querySelector('.quiz-box')
let result_box = document.querySelector('.result-box')
let score = 0 ;

const quizQusetions = [
    {   question : "What does HTML stand for?" ,
        options : ["Hyper Trainer Marking Language" , "Hyper Text Markup Language" , "Hyper Text Marketing Language" , "Hyper Tool Multi Language"],
        correctAnswer : "Hyper Text Markup Language"
    } ,
    {   question : "Which HTML tag is used to display the largest heading?" ,
        options : ["<heading>" , "<h6>" , "<h1>" , "<head>"],
        correctAnswer : "<h1>"
    } ,
     {
    question: "Which CSS property controls the text size?",
    options: [
      "font-style",
      "text-size",
      "font-size",
      "text-style"
    ],
    correctAnswer: "font-size"
  },
  {
    question: "How do you include an external CSS file in HTML?",
    options: [
      "<css src='style.css'>",
      "<stylesheet>style.css</stylesheet>",
      "<link rel='stylesheet' href='style.css'>",
      "<style src='style.css'>"
    ],
    correctAnswer: "<link rel='stylesheet' href='style.css'>"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      "<!-- comment -->",
      "// comment",
      "** comment **",
      "# comment"
    ],
    correctAnswer: "// comment"
  },
  {
    question: "What will typeof null return in JavaScript?",
    options: [
      "null",
      "object",
      "undefined",
      "number"
    ],
    correctAnswer: "object"
  },
  {
    question: "Which method is used to write content into an HTML document using JavaScript?",
    options: [
      "document.write()",
      "document.writeln()",
      "console.log()",
      "window.print()"
    ],
    correctAnswer: "document.write()"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: [
      "font",
      "styles",
      "class",
      "style"
    ],
    correctAnswer: "style"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [
      "onmouseover",
      "onchange",
      "onmouseclick",
      "onclick"
    ],
    correctAnswer: "onclick"
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "v carName;",
      "variable carName;",
      "var carName;",
      "let carName;"
    ],
    correctAnswer: "let carName;"
  }
]

function deselectOptions() {
  const options = document.getElementsByName('options');
  options.forEach(option => option.checked = false);
}

function loadQuiz(){ 
    instruction_box.style.display = 'none';
    quiz_box.style.display = 'flex';

    let question = document.getElementById('question')
    let op1 = document.getElementById('op1Text')
    let op2 = document.getElementById('op2Text')
    let op3 = document.getElementById('op3Text')
    let op4 = document.getElementById('op4Text')
    let next_btn = document.getElementById('next-btn')
    let result = document.getElementById("result")

    let i = 0;

    console.log(quizQusetions.length);
    function changeQuestion(i){
        question.textContent = quizQusetions[i].question;
        console.log(quizQusetions[i].question);
        
        op1.textContent = quizQusetions[i].options[0];
        op2.textContent = quizQusetions[i].options[1];
        op3.textContent = quizQusetions[i].options[2];
        op4.textContent = quizQusetions[i].options[3];

    }

    changeQuestion(i++);
    next_btn.addEventListener('click',function(){
         if(document.querySelector('input[name="options"]:checked') === null){
            alert("Please select answer!!!")
         }
         let selectedOption = document.querySelector('input[name="options"]:checked').value;
         let selectedText = document.getElementById(`op${parseInt(selectedOption) + 1}Text`).textContent;

         console.log("i" + i);
         
         if(selectedText === quizQusetions[i-1].correctAnswer){
            score++;
            
         }
         console.log(score);
         if(i < 10){
            changeQuestion(i++);
         }else{
             result.textContent = score;
             quiz_box.style.display= 'none';
             result_box.style.display = 'flex';
         }
          
         deselectOptions(); 
    })
}

start_quiz.addEventListener('click',loadQuiz)

let restart_btn = document.getElementById('restart-btn')

function handleAction(e) {
  if (e.type === "click") {
    result_box.style.display = 'none';
    loadQuiz();
  }
}
restart_btn.addEventListener('click',handleAction);

const questions = [{
    id:0,
    q: "what is the full meaning of the acronym HTML?",
    a: [{text: "Hyper-Text Tranfer Protocol", isCorrect: false},
        {text: "Hyper-Text pre-processor", isCorrect: false},
        {text: "Hyper-text Markup Language", isCorrect: true},
        {text: "Hyper- text protocole secured", isCorrect:false}
]
},
{
    id:1,
    q: "what is the default port number of HTTPS?",
    a: [{text: "443", isCorrect: true, isSelected:false},
        {text: "21", isCorrect: false},
        {text: "80", isCorrect: false},
        {text: "3306", isCorrect:false}
]
},
{
    id:2,
    q: "what is the default port number of MySQL?",
    a: [{text: "8080", isCorrect: false},
        {text: "22", isCorrect: false},
        {text: "21", isCorrect: false},
        {text: "3306", isCorrect:true}
]
},
{
    id:3,
    q: "what is MySQL?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "structured query language", isCorrect:true}
]
},
{
    id:4,
    q: "what is javascrip",
    a: [{text: "programing languate", isCorrect: true},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "structured query language", isCorrect:false}
]
},
{
    id:5,
    q: "what is data?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "usefule information", isCorrect: true},
        {text: "high level language", isCorrect: false},
        {text: "structured query language", isCorrect:true}
]
},
{
    id:6,
    q: "what is MySQL?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "structured query language", isCorrect:true}
]
},
{
    id:7,
    q: "what is programing?",
    a: [{text: "act of writing code ", isCorrect: false},
        {text: "means of salving real world problems ussing defined methods", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "structured query language", isCorrect:true}
]
},
{
    id:8,
    q: "what is citec?",
    a: [{text: "a school", isCorrect: true},
        {text: "nothing", isCorrect: false},
        {text: "bekery", isCorrect: false},
        {text: "a church", isCorrect:false}
]
},
{
    id:9,
    q: "when designing what do you take into consideration?",
    a: [{text: "typography", isCorrect: true},
        {text: "pictures", isCorrect: false},
        {text: "color", isCorrect: false},
        {text: "nothing", isCorrect:false}
]
},
{
    id:10,
    q: "what is MySQL?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "structured query language", isCorrect:true}
]
},
{
    id:11,
    q: "what is maths?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "a languge used to salve problems", isCorrect:true}
]
},
{
    id:12,
    q: "what is java?",
    a: [{text: "programing languate", isCorrect: true},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "structured query language", isCorrect:false}
]
},
{
    id:13,
    q: "what is C++?",
    a: [{text: "programing languate", isCorrect: true},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "structured query language", isCorrect:false}
]
},
{
    id:14,
    q: "what is c++ used for?",
    a: [{text: "mobile developement", isCorrect: false},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "fame developement", isCorrect:true}
]
},
{
    id:15,
    q: "what is MySQL used for ?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "structured query language", isCorrect:true}
]
},
{
    id:16,
    q: "what is apache?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "server", isCorrect:true}
]
},
{
    id:17,
    q: "what is meaning of react.js?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "a library of javascript for frontend dev", isCorrect:true}
]
},
{
    id:18,
    q: "what is DOM?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "nothing", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "Document object model", isCorrect:true}
]
},
{
    id:19,
    q: "what is css?",
    a: [{text: "programing languate", isCorrect: false},
        {text: "low level language", isCorrect: false},
        {text: "high level language", isCorrect: false},
        {text: "cacanding style sheet", isCorrect:true}
]
},
]

//set start
var start = true;
// count for score
var score = 0;
//iterate
function iterate(id){

    //getting the result display selection
    var result = document.getElementsByClassName("result");
    result[0].innerText = score;

    //getting the questions
    const question = document.getElementById("question");

    //setting the question text
    question.innerText = questions[id].q;

    //getting the options
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");
    const op4 = document.getElementById("op4");


    //providing option text
    op1.innerText = questions[id].a[0].text;
    op2.innerText = questions[id].a[1].text;
    op3.innerText = questions[id].a[2].text;
    op4.innerText = questions[id].a[3].text;

    //providing the true or false value to the options
    op1.value = questions[id].a[0].isCorrect;
    op2.value = questions[id].a[1].isCorrect;
    op3.value = questions[id].a[2].isCorrect;
    op4.value = questions[id].a[3].isCorrect;

    var selected = "";

    //show selection for op1
    op1.addEventListener("click", () =>{
        op1.style.backgroundColor ="lightgodenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";

        selected = op1.value;

    })


    //show sellected op2
    op2.addEventListener("click", () =>{
        op1.style.backgroundColor ="lightskyblue";
        op2.style.backgroundColor = "lightgodenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";

        selected = op2.value;

    })

    //show selction for op3
    op3.addEventListener("click", () =>{
        op1.style.backgroundColor ="lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgodenrodyellow";
        op4.style.backgroundColor = "lightskyblue";

        selected = op3.value;

    })
    //show selection for op4
    op4.addEventListener("click", () =>{
        op1.style.backgroundColor ="lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgodenrodyellow";

        selected = op4.value;

    })

    //grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
    
    //evalute method
    evaluate[0].addEventListener("click", () =>{

        if(selected == "true"){
            
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            score++;
            
        } else{
            result[0].innerHTML = "False";
            result[0].style.color = "red"; 
        }

        
    })

}

if(start){
    iterate("0");
}

//previous button and method
//next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", ()=>{
    start = false;
    if(id < 19){
        id++;
        iterate(id);
        console.log(id);
    }
})

const prev =  document.getElementsByClassName("prev")[0];
prev.addEventListener("click", ()=>{
    start = true;
    if(id <=  id){
        id--;
        iterate(id);
        console.log(id)
    }
})

var btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{
    document.getElementsByClassName("score").innerText = score;
})


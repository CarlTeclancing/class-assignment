var openfirst = document.getElementById('f')
var opensecond = document.getElementById('s')
var openthird = document.getElementById('l')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn2')
function clickOpen(){
    if(openfirst.style.display = "none"){
        openfirst.style.display = "inline";
        btn1.style.display = "block"
        openthird.style.display = "none"
        openthird.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "none"
    }else{
        openfirst.style.display = "none"
    }
    
}
btn1.addEventListener("click", function cbtn(){
    openfirst.style.display = "none"
    btn1.style.display = "none"
})

function clickOpens(){
    if(opensecond.style.display = "none"){
        opensecond.style.display = "inline";
        btn2.style.display = "block"
        openfirst.style.display = "none"
        openthird.style.display = "none"
        btn1.style.display = "none"
        btn3.style.display = "none"
        
    }else{
        opensecond.style.display = "none"
    }
    
}
btn2.addEventListener("click", function(){
    opensecond.style.display = "none"
    btn2.style.display = "none"
})

function clickOpent(){
    if(openthird.style.display = "none"){
        openthird.style.display = "inline";
        btn3.style.display = "block"
        opensecond.style.display = "none"
        openfirst.style.display = "none"
        btn1.style.display = "none"

    }else{
        openthird.style.display = "none"
        
    }
    
}
btn3.addEventListener("click", function(){
    openthird.style.display = "none"
    btn3.style.display = "none"
})
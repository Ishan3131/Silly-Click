let btn = document.getElementById('btn');
let score = document.getElementById('score')
let timer = document.getElementById('timer')
let duration = 30;
let state = false;
let userScore = 0
let transitionDuration = .5;
let interval;
let transforms = [()=>{btn.style.transform += `rotate(${Math.random()*720}deg)`}, ()=>{btn.style.scale = `.2`}, ()=>{btn.style.borderRadius = '25px'}, ()=>{btn.style.borderRadius = '0'}]

function func(){
    btn.style.transform = `translate(${Math.random()*500}px, ${Math.random()*500}px)`;
    transforms[parseInt(Math.random()*4)]()

    if(!state && duration > 0){
        state = true;
        interval = setInterval(updateTimer,1000);
    }
    if(state){
        userScore++;
        score.innerText = userScore;
        if(userScore%10 == 0){
            if(transitionDuration > .31){
                transitionDuration -= .1;
            }
            btn.style.transitionDuration = `${transitionDuration}s`
        }
    }
}

function normal(){
    btn.style.scale = 1
}

function updateTimer(){
    if(duration > 0){
        duration--;
        timer.innerText = duration;
    }
    else{
        clearInterval(interval);
        state = false;
    }
}

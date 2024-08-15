let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#userScore")
const compScorePara= document.querySelector("#compScore")

const genCompChoice =()=>{
    const options=["rock","paper","scissor"];
    const randNo=Math.floor(Math.random()*3);
    return options[randNo];
};

const drawGame=()=>{
    // console.log("It's an draw")
    msg.innerText = "It's an draw!!"
    msg.style.backgroundColor = "#081b31"
}

const showWinners=(userWinners)=>{
    if(userWinners){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Won!!"
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose!!"
        msg.style.backgroundColor = "red"
    }
}

const playGame=(userChoice)=>{
    // console.log("User choice = " , userChoice)
    const compChoice = genCompChoice();
    // console.log("Comp choice = ", compChoice)
    if(userChoice==compChoice){
        drawGame()
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compChoice === "paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice === "scissor"?false:true;
        }else{
            userWin=compChoice === "rock"?false:true;
        }
        showWinners(userWin);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})

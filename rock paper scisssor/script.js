let user = 0;
let comp = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#message");

const userscore = document.querySelector("#user");
const compscore = document.querySelector("#comp");

const gencompchoice = (c) => {
    const option = ["rock", "paper", "scissors"]
    const randomidx = Math.floor(Math.random() * 3)
    return option[randomidx];
}

const drawgame = () => {
    msg.innerText = "Draw! Play again";
    msg.style.backgroundColor = "rgba(85, 116, 131, 1)";
}

const showwinner = (userwin, choiceid, compchoice) => {
    if (userwin) {
        user++;
        userscore.innerText = user;
        msg.innerText = `You Win! ${choiceid} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        comp++;
        compscore.innerText = comp
        msg.innerText = `You lose!${compchoice} beats ${choiceid}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (choiceid) => {
    const compchoice = gencompchoice();

    if (choiceid === compchoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if (choiceid === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (choiceid === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, choiceid, compchoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id")
        playgame(choiceid);


    })
})

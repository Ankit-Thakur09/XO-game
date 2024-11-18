let boxBtn = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msgBox = document.querySelector("#msg");
let newGamebtn = document.querySelector("#newGame");
let msgDiv = document.querySelector("#msgdiv");
let gameContainer = document.querySelector(".gameContainer")
let turnO = true;
const winArr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]

];

const resetGame = () => {
    enableBox();
    let turnO = true;
    msgDiv.classList.add("hidden");
    gameContainer.classList.remove("hidden");

}
const disableBox = () => {
    for (let box of boxBtn) {
        box.disabled = true;
    }
}
const enableBox = () => {
    for (let box of boxBtn) {
        box.disabled = false;

        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msgBox.innerText = `The winner is ${winner}`;
    msgDiv.classList.remove("hidden");
    gameContainer.classList.add("hidden");
}
checkWinner = () => {
    for (let pattern of winArr) {

        let pos1Val = boxBtn[pattern[0]].innerText;
        let pos2Val = boxBtn[pattern[1]].innerText;
        let pos3Val = boxBtn[pattern[2]].innerText;
        if (pos1Val != "" &&
            pos2Val != "" &&
            pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val == pos3Val) {
                console.log("winner")
                showWinner(pos1Val);
                disableBox();

            }
        }
    }

}
boxBtn.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            turnO = false;
            box.innerText = "O";
        } else {
            turnO = true;
            box.innerText = "X";
        }
        box.disabled = true;
        checkWinner();

    })
});

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)
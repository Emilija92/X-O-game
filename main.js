let container = document.querySelector('.container');
let symbol = "O";

// create table
createTable();

let boxes = document.querySelectorAll('.box');
//for(let i = 0; i<boxes.length; i++) {
    //boxes[i].addEventListener('click',addSymbol);
//}

boxes.forEach(box => box.addEventListener('click',addSymbol));

let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



function addSymbol() {
    this.removeEventListener('click',addSymbol);
    
    //if(symbol === "X") {
        //symbol = "O";
    //}else {
        //symbol = "X";
    //}

    (symbol === "X") ? symbol = "O" : symbol = "X";
    this.innerHTML = symbol;
    checkLines();
}



function checkLines() {
    lines.forEach(line => {
        let box1 = boxes[line[0]];
        let box2 = boxes[line[1]];
        let box3 = boxes[line[2]];
        if(box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML && box1.innerHTML !== "") {
            box1.style.background = "green";
            box2.style.background = "green";
            box3.style.background = "green";
            stopGame();
        }
    })
}

function stopGame() {
    boxes.forEach(box => box.removeEventListener('click',addSymbol));
}

function createTable() {
    let text = "";
    for(let i = 0; i < 9;i++) {
        text+= '<div class="box"></div>'
    }
    container.innerHTML = text;
}

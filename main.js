const words = [
    "apple", "bread", "chair", "drink", "happy", "light", "music", "plant", "smile", "table",
    "beach", "cloud", "dance", "earth", "flame", "grape", "heart", "blame", "jelly", "koala",
    "lemon", "melon", "north", "ocean", "piano", "queen", "raven", "sunny", "tiger", "union",
    "vivid", "waste", "xenon", "yield", "zebra", "adore", "brave", "clear", "dream", "eagle",
    "frost", "globe", "honor", "image", "jolly", "knife", "lucky", "mango", "novel", "olive",
    "peace", "quick", "robot", "sweet", "trust", "urban", "vocal", "whale", "xylor", "yacht",
    "zesty", "amber", "bloom", "candy", "delta", "ember", "fancy", "grill", "honey", "input",
    "jumps", "kneel", "latch", "mirth", "noble", "orbit", "plush", "quiet", "rider", "spice",
    "track", "unity", "vapor", "witty", "xerox", "youth", "zonal", "align", "baker", "cabin",
    "daisy", "elbow", "fable", "glaze", "hatch", "inbox", "jazzy", "karma", "lodge", "motel"
  ];

function chooseWord(words){
    const randnum = Math.floor(Math.random() * (words.length));
    const word = words[randnum].toUpperCase();
    return word;
}

function showAgain(){
    const button = document.getElementById("again");
    button.classList.remove("hidden")
}

function refreshPage(){
    location.reload();
}

const word = chooseWord(words);

const row1 = document.getElementById("6");
row1.children[0].focus()

let number = 0;
row1.addEventListener("input",(e)=>{
    if (number == 4){
        number = 3
    }   else if(number == -1){
        number = 0;
    }
    row1.children[number+1].focus();
    number += 1;
})

row1.addEventListener("keydown",(e)=>{  
    if(e.key == "Enter"){
        check()
    }   else if(e.key == "Backspace"){
        for(let i = 0 ; i <= word.length-1 ; i++){
            row1.children[i].value = null;
            row1.children[0].focus();
            number = 0;
        }
    }
})

let row = 1;
function check(){
    const wordArr = [...word]
    if(row <= 5){
        const answer = [];
        for(let i = 0 ; i <= word.length-1 ; i++){
            answer.push(document.getElementById("6").children[i].value);
        }
        const boxrow = document.getElementById(`${row}`);
        for(let i = 0 ; i <= word.length-1 ; i++){
            boxrow.children[i].value = answer[i]
            row1.children[i].value = null;
            row1.children[0].focus();
        }
        row+=1;
        number = 0;
        for(let i = 0 ; i <= word.length-1 ; i++){
            if(wordArr[i] == answer[i]){
                boxrow.children[i].id = "green";
            }   else if(word.includes(answer[i])){
                boxrow.children[i].id = "orange";
            }
        }
        if(answer.toString() == wordArr.toString()){
            console.log("YOU WIN")
            for(let i = 0 ; i <= wordArr.length-1 ; i++){
                row1.children[i].value = " ";
                row1.children[i].disabled;
            }
            showAgain()
        }
    }
    if(row == 6){
        for(let i = 0 ; i <= wordArr.length-1 ; i++){
            row1.children[i].value = wordArr[i];
            row1.children[i].disabled;
        }
        showAgain()
    }
}

console.log(word)


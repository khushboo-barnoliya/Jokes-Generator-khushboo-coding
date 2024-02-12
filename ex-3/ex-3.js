


let genBtn = document.getElementById("genBtn")

function generateJokes() {
    let arrayJokes = [
        {"joke": "<b>What did one snowflake say to another snowflake?</b><br>Ans: “Have an ice day!”"},
        {"joke": "<b>Why did the snowman sleep in the fridge?</b><br>Ans: Because it was the best place to chill."},
        {"joke": "<b>Why doesn’t Santa want to dress up too much this year?</b><br>Ans: He’s trying to keep a snow profile."},
        {"joke": "<b>What is everyone’s favourite meal during winter?</b><br>Ans: Brrr-eakfast!"},
        {"joke": "<b>Why did the snowman not want to eat carrot cake?</b><br>Ans: Because it tasted like his mucus!"},
        {"joke": "<b>What did one hand say to another hand?</b><br>Ans: “I glove you!”"},
        {"joke": "<b>What do you get when you cross a bee and a lizard?</b><br>Ans: A blizzard!"},
        {"joke": "<b>What does one need to create the perfect snowball?</b><br>Ans: No winter-ruptions."},
        {"joke": "<b>Why did one tree hug another tree?</b><br>Ans: Because they were experiencing love at frost sight!"},
        {"joke": "<b>What does the Sun say when it comes out after a long winter?</b><br>Ans: I came, I thaw, I conquered!”"}
    ]

    let para = document.getElementById('jokesPara');

    let index = Math.floor(Math.random() * arrayJokes.length - 1);
    para.innerHTML = arrayJokes[index].joke;
}
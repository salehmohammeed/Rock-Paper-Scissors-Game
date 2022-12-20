let option = document.querySelector(".option")
let playerImg = document.getElementById("playerImg");
let computerImg = document.getElementById("computerImg");
let winners = document.querySelector(".winner")
let win = document.getElementById("win");
let again = document.getElementById("again");
let images = ["rock","Paper","Scissors"]
let playerImgNum ;
function chooseImg(imgNum){
    playerImgNum = imgNum ;
    option.style.display = "none"
    playerImg.src = `img/${images[imgNum]}.jpg`
    randomizeImages()
}
function randomizeImages (){
    let randomIndex = Math.floor(Math.random()*images.length)
    computerImg.src = `img/${images[randomIndex]}.jpg`
    winner(playerImgNum , randomIndex);
}
function winner(playerNum , computerNum){
    let playerImgSelect = images[playerNum];
    let computerImgSelect = images[computerNum];
    if(playerImgSelect == "rock" && computerImgSelect=="Paper"){
        winners.style.display = "block"
        win.innerHTML = "The Computer"
    }
    if(playerImgSelect == "rock" && computerImgSelect=="Scissors"){
        winners.style.display = "block"
        win.innerHTML = "The Player"
    }
    if(playerImgSelect == "Paper" && computerImgSelect=="rock"){
        winners.style.display = "block"
        win.innerHTML = "The Player"
    }
    if(playerImgSelect == "Paper" && computerImgSelect=="Scissors"){
        winners.style.display = "block"
        win.innerHTML = "The Computer"
    }
    if(playerImgSelect == "Scissors" && computerImgSelect=="rock"){
        winners.style.display = "block"
        win.innerHTML = "The Computer"
    }
    if(playerImgSelect == "Scissors" && computerImgSelect=="Paper"){
        winners.style.display = "block"
        win.innerHTML = "The Player"
    }
    if(playerImgSelect == "rock" && computerImgSelect=="rock"){
        winners.style.display = "block"
        win.innerHTML = "No Winner"
        setInterval(function(){win.innerHTML+="."},1000);
        setTimeout(() => {
        location.reload();
        }, 4000);
        again.style.display = "none"
    }
    if(playerImgSelect == "Scissors" && computerImgSelect=="Scissors"){
        winners.style.display = "block"
        win.innerHTML = "No Winner"
        setInterval(function(){win.innerHTML+="."},1000);
        setTimeout(() => {
        location.reload();
        }, 4000);
        again.style.display = "none"
    }
    if(playerImgSelect == "Paper" && computerImgSelect=="Paper"){
        winners.style.display = "block"
        win.innerHTML = "No Winner"
        setInterval(function(){win.innerHTML+="."},1000);
        setTimeout(() => {
        location.reload();
        }, 4000);
        again.style.display = "none"
    }
}
function playAgain(){
    option.style.display = "block"
    playerImg.src = "img/player.jpg"
    computerImg.src = "img/computer.jpg"
    winners.style.display = "none"
    again.style.display = "block"
}

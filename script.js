function openGift(){

document.getElementById("gift-message").innerHTML=
"💖 Surprise! You are the greatest blessing in my life. Happy Birthday Thangachi! 🎂❤️";

launchConfetti();

document.querySelector("gift-box")
.style.display="none";

}

function launchConfetti(){

for(let i=0;i<100;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";
confetti.style.width="10px";
confetti.style.height="10px";
confetti.style.background=
`hsl(${Math.random()*360},100%,50%)`;

confetti.style.left=Math.random()*100+"vw";
confetti.style.top="-20px";

confetti.style.borderRadius="50%";

document.body.appendChild(confetti);

let fall=Math.random()*5+3;

confetti.animate([

{transform:"translateY(0px)"},
{transform:`translateY(${window.innerHeight}px)`}

],{

duration:fall*1000,
iterations:1

});

setTimeout(()=>{
confetti.remove();
},fall*1000);

}

}

const message = `🎂 Happy Birthday Thangachi ❤️

இனிய பிறந்தநாள் வாழ்த்துக்கள் ❤️

You are my favorite Sister👸🏻.

Thank you for all memories,
smiles and happiness.

Love You Forever 💖`;

let index = 0;

function startTyping(){

document.getElementById("typing")
.innerHTML="";

index=0;

document.querySelector(".surprise-btn")
.style.display="none";

typeEffect();

}

function typeEffect(){

if(index < message.length){

document.getElementById("typing")
.innerHTML += message.charAt(index);

index++;

setTimeout(typeEffect,50);

}

}

function playVideo(){

document
.getElementById("videoBox")
.style.display="block";

const video =
document.getElementById(
"birthdayVideo"
);

video.play();

document
.querySelector(".play-btn")
.style.display="none";

}
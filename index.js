//For First Player
let randomNumber1=Math.floor((Math.random()*6))+1;

let radomfolder1="/images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",radomfolder1);

//For Second Player
let randomNumber2=Math.floor((Math.random()*6))+1;

let radomfolder2="/images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",radomfolder2);

if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="Player One Won";
}if(randomNumber1<randomNumber2){
    document.querySelector("h2").innerHTML="Player second Won";
}else{
    document.querySelector("h2").innerHTML="Draw";
}
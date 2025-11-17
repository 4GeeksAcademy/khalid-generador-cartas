import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
 function getRandomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber);
  }
  
  const arrayCards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  const arrayIcon = ["♠","♣","♦","♥"]
  

  const numberCard = arrayCards[getRandomNumber(arrayCards.length)]
  const Icon = arrayIcon[getRandomNumber(arrayIcon.length)]
  
 
  document.getElementById('cardnumber').innerHTML = numberCard
  document.querySelector('.palo-superior').innerHTML = Icon
  document.querySelector('.palo-inferior').innerHTML = Icon
}









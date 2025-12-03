import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
  }

  const arrayCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const arrayIcon = ["♠", "♣", "♦", "♥"]
  const historial = [];

  function generarCarta() {
    const card = document.querySelector('.card');

    card.classList.add('shuffling');

    setTimeout(function () {
      const numberCard = arrayCards[getRandomNumber(arrayCards.length)]
      const Icon = arrayIcon[getRandomNumber(arrayIcon.length)]

      document.getElementById('cardnumber').innerText = numberCard
      document.querySelector('.palo-superior').innerText = Icon;
      document.querySelector('.palo-inferior').innerText = Icon;

      let colorCarta = "negra";
      if (Icon === "♥" || Icon === "♦") {
        card.style.color = "red";
        colorCarta = "roja";
      } else {
        card.style.color = "black";
        colorCarta = "negra";
      }

      historial.push({ numero: numberCard, palo: Icon, color: colorCarta });
      actualizarHistorial();

      card.classList.remove('shuffling');
    }, 300);
  }

  function actualizarHistorial() {
    const listaHistorial = document.getElementById('lista-historial');
    listaHistorial.innerText = '';

    for (let i = historial.length - 1; i >= 0; i--) {
      const cartaDiv = document.createElement('div');
      cartaDiv.className = 'carta-historial ' + historial[i].color;
      cartaDiv.innerText = historial[i].numero + historial[i].palo;
      listaHistorial.appendChild(cartaDiv);
    }
  }

  generarCarta();

  document.getElementById('newCard').addEventListener('click', generarCarta);

}
import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const maso = ['♦', '♥', '♠', '♣']

  const randommaso = (maso) => {
    const index = Math.floor(Math.random() * maso.length);
    return maso[index];
  }
  console.log(randommaso(maso));

  const numCarta = ["A" , "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]

  const randomCarta = (numCarta) => {
    const index2 = Math.floor(Math.random() * numCarta.length);
    return numCarta[index2];
  }

  const paloRandom = randommaso(maso);
  const cartaRandom = randomCarta(numCarta);


  document.querySelector("#maso1").innerText = paloRandom;
  document.querySelector("#carta").innerText = cartaRandom;
document.querySelector("#maso2").innerText = paloRandom;


};
import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notNumber, IMC } from "./utills.js";

//Variaveis = variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = function (event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMC(weight, height);
  const message = `seu IMC é ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

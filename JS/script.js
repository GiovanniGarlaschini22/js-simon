const numeriContainer = document.getElementById("numeri-container");
const timerElem = document.getElementById("timer");
const inputContainer = document.getElementById("input-container");
const risultato = document.getElementById("risultato");
const confermaBtn = document.getElementById("conferma");
const userIdField = document.getElementById("user-id");

/* Funzione per generare un nuovo ID utente */
const generaIdUtente = () => {
  const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
  return `ID${randomNum}`;
};

/* Assegnazione nuovo ID all'utente */
userIdField.value = generaIdUtente();

/* Generazione 5 numeri casuali */
const numeriCasuali = [];
for (let i = 0; i < 5; i++) {
  numeriCasuali.push(Math.floor(Math.random() * 50) + 1);
}
console.log("Numeri generati:", numeriCasuali);

/* Stampare numeri in pagina */
document.getElementById("numeri").innerHTML = numeriCasuali.join(", ");

/* Timer 30 secondi */
let counter = 30;
const timerInterval = setInterval(() => {
  counter--;
  timerElem.innerHTML = counter;

  if (counter === 0) {
    clearInterval(timerInterval);
    numeriContainer.style.display = "none";
    inputContainer.style.display = "block";
  }
}, 1000);

/* Pulsante conferma */
confermaBtn.addEventListener("click", () => {
  /* generazione nuovo ID utente */
  userIdField.value = generaIdUtente();

  const inputNumeri = [];
  for (let i = 1; i <= 5; i++) {
    const valore = parseInt(document.getElementById(`num${i}`).value);
    if (!isNaN(valore)) inputNumeri.push(valore);
  }

  let numeriIndovinati = [];
  for (let i = 0; i < inputNumeri.length; i++) {
    if (numeriCasuali.includes(inputNumeri[i]) && !numeriIndovinati.includes(inputNumeri[i])) {
      numeriIndovinati.push(inputNumeri[i]);
    }
  }
  /* stampare esiti */
  if (numeriIndovinati.length === numeriCasuali.length) {
    risultato.innerHTML = `Complimenti! Hai indovinato tutti i numeri! (${numeriIndovinati.join(", ")})`;
  } else if (numeriIndovinati.length > 0) {
    risultato.innerHTML = `Complimenti! Hai indovinato i seguenti numeri: ${numeriIndovinati.join(", ")}`;
  } else {
    risultato.innerHTML = "Spiacenti! Non hai indovinato nessun numero :(";
  }
});

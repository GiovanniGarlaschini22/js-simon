const numeriContainer = document.getElementById("numeri-container");
const timerElem = document.getElementById("timer");
const inputContainer = document.getElementById("input-container");
const risultatoTutti = document.getElementById("risultato-tutti");
const risultatoAlcuni = document.getElementById("risultato-alcuni");
const risultatoNessuno = document.getElementById("risultato-nessuno");
const confermaBtn = document.getElementById("conferma");
const userIdField = document.getElementById("user-id");
const alertContainer = document.getElementById("alert-container");
const alertMessage = document.getElementById("alert-message");

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
        confermaBtn.style.display = "block";
    }
}, 1000);

/* Funzione per stampare l'alert */
const mostraAlert = (messaggio) => {
    alertMessage.innerHTML = messaggio;
    alertContainer.style.display = "block";
    setTimeout(() => {
        alertContainer.style.display = "none";
    }, 3000);
};

/* Pulsante conferma */
confermaBtn.addEventListener("click", () => {
    /* generazione nuovo ID utente */
    userIdField.value = generaIdUtente();

    const inputNumeri = [];
    let validInput = true;

    for (let i = 1; i <= 5; i++) {
        const valore = document.getElementById(`num${i}`).value;

        /* Controlla se il valore è un numero */
        if (isNaN(valore) || valore.trim() === "") {
            validInput = false;
            break;
        }
        inputNumeri.push(parseInt(valore));
    }

    /* Se l'input non è valido, mostra un alert e interrompe l'operazione */
    if (!validInput) {
        alert("I valori inseriti non sono numeri! Inserire valori numerici.");
        return;
    }

    let numeriIndovinati = [];
    for (let i = 0; i < inputNumeri.length; i++) {
        if (numeriCasuali.includes(inputNumeri[i]) && !numeriIndovinati.includes(inputNumeri[i])) {
            numeriIndovinati.push(inputNumeri[i]);
        }
    }
    /* stampare esiti */
    if (numeriIndovinati.length === numeriCasuali.length) {
        risultatoTutti.innerHTML = `Complimenti! Hai indovinato tutti i numeri! (${numeriIndovinati.join(", ")})`;
    } else if (numeriIndovinati.length > 0) {
        risultatoAlcuni.innerHTML = `Complimenti! Hai indovinato i seguenti numeri: ${numeriIndovinati.join(", ")}`;
    } else {
        risultatoNessuno.innerHTML = "Spiacenti! Non hai indovinato nessun numero :(";
    }
});
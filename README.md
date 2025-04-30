# Simon Says

## Consegna
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

## Esecuzione logica

1. **Selezione degli Elementi DOM**
   - Utilizzo di `document.getElementById` per selezionare gli elementi necessari, come:
     - Container per i numeri.
     - Timer.
     - Container per gli input.
     - Campo di testo per l'ID utente.
     - Elemento per il risultato.

2. **Generazione dell'ID Utente**
   - Creazione di una funzione `generaIdUtente`:
     ```javascript
     const generaIdUtente = () => {
       const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
       return `ID${randomNum}`;
     };
     ```
   - Ogni volta che l'utente esegue un'operazione (ad esempio, clicca su "Conferma"), viene generato un nuovo ID casuale e assegnato al campo `user-id`.

3. **Generazione dei Numeri Casuali**
   - Creazione di un array vuoto `numeriCasuali`.
   - Utilizzo di un ciclo `for` per generare 5 numeri casuali compresi tra 1 e 50:
     ```javascript
     for (let i = 0; i < 5; i++) {
       numeriCasuali.push(Math.floor(Math.random() * 50) + 1);
     }
     ```
   - I numeri generati sono stampati in console per debug e visualizzati nella pagina.

4. **Timer di 30 Secondi**
   - Utilizzo di una variabile `counter` inizializzata a 30.
   - Impostazione di un intervallo con `setInterval` che decrementa il contatore ogni secondo:
     ```javascript
     const timerInterval = setInterval(() => {
       counter--;
       timerElem.innerHTML = counter;
       if (counter === 0) {
         clearInterval(timerInterval);
         numeriContainer.style.display = "none";
         inputContainer.style.display = "block";
       }
     }, 1000);
     ```
   - Alla fine del timer, i numeri scompaiono e gli input diventano visibili.

5. **Gestione dell'Input Utente**
   - Alla pressione del pulsante "Conferma", viene eseguito un evento `click`:
     ```javascript
     confermaBtn.addEventListener("click", () => {
     });
     ```
   - Vengono recuperati i valori degli input e salvati in un array.

6. **Verifica dei Numeri Indovinati**
   - Utilizzo di un ciclo per confrontare i numeri inseriti con quelli generati.
   - Creazione di un array `numeriIndovinati` che raccoglie i numeri correttamente indovinati.
   - Verifica dei seguenti casi:
     - **Tutti i numeri indovinati**:
       ```javascript
       if (numeriIndovinati.length === numeriCasuali.length) {
         risultato.innerHTML = `Complimenti! Hai indovinato tutti i numeri! (${numeriIndovinati.join(", ")})`;
       }
       ```
     - **Alcuni numeri indovinati**:
       ```javascript
       else if (numeriIndovinati.length > 0) {
         risultato.innerHTML = `Complimenti! Hai indovinato i seguenti numeri: ${numeriIndovinati.join(", ")}`;
       }
       ```
     - **Nessun numero indovinato**:
       ```javascript
       else {
         risultato.innerHTML = "Spiacenti! Non hai indovinato nessun numero :(";
       }

7. **Aggiornamento dell'ID Utente**
   - Ogni volta che l'utente clicca su "Conferma", viene generato un nuovo ID con la funzione `generaIdUtente`.

## Debug
- Tutti i numeri generati casualmente vengono stampati in console per verificare il corretto funzionamento del gioco.

## Note
- Il formato dell'ID utente è fisso: `ID0000`.
- L'ordine dei numeri inseriti dall'utente non influisce sul risultato.

## Bonus
- Inseriamo la validazione: se l'utente inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
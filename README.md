# Esercitazione: Completamento API Film con Express e SQLite

## Descrizione
L'obiettivo di questa esercitazione è completare un server Node.js che espone un'API REST per gestire un database di film. Il progetto utilizza **Express** come framework web e **SQLite** come database.

Il database è composto da una tabella `Film` con i seguenti campi:
* **titolo**: Testo (Chiave Primaria).
* **genere**: Testo.
* **durata**: Numero intero (minuti, > 0).
* **prezzo**: Numero decimale (>= 0).
* **punteggio**: Numero intero (> 0).

## Prerequisiti
Assicurati di aver installato le dipendenze necessarie eseguendo:
```bash
npm install
```
Le dipendenze principali includono `express`, `sqlite`, `sqlite3` e `cors`.

## Richieste per lo studente

Il file `server.js` contiene la struttura base del server, ma alcune rotte sono incomplete o mancanti. Completa le seguenti funzionalità:

### 1. Implementazione Rotta PUT `/film`
La rotta `app.put('/film')` è attualmente solo abbozzata. Devi implementarla in modo che:
* Riceva un oggetto JSON nel corpo della richiesta (`req.body`) contenente i dati di un film.
* Aggiorni i dati di un film esistente nel database basandosi sul **titolo**.
* Se il film non esiste, l'operazione deve gestire correttamente l'aggiornamento (o restituire un errore appropriato).

### 2. Implementazione Rotta DELETE `/:titolo`
La rotta `app.delete('/:titolo')` deve essere completata per permettere l'eliminazione di un film:
* Deve leggere il parametro `titolo` dall'URL.
* Deve eseguire una query SQL `DELETE` per rimuovere il film corrispondente dal database.

### 3. Implementazione Rotta POST `/film`
Aggiungi una nuova rotta per permettere l'inserimento di un nuovo film nel database tramite il metodo `POST`. Assicurati che i dati inviati rispettino i vincoli della tabella (es. durata e punteggio maggiori di zero).

### 4. Gestione degli Errori
Migliora le rotte esistenti e quelle nuove aggiungendo blocchi `try...catch` per gestire eventuali errori del database o richieste malformate, restituendo i codici di stato HTTP corretti (es. 400 per dati errati, 404 se un film non viene trovato).

## Come avviare il server
Per avviare il server sulla porta 3000, esegui il comando:
```bash
node server.js
```

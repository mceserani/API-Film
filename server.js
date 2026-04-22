import * as sqlite from "sqlite";
import sqlite3 from "sqlite3";
import express from "express";
import cors from "cors";

const db = await sqlite.open({
  filename: "./db.sqlite",
  driver: sqlite3.Database
});

await db.run(`CREATE TABLE IF NOT EXISTS "Film" ( 
"titolo"    TEXT NOT NULL, 
"genere"    TEXT NOT NULL, 
"durata"    INTEGER NOT NULL CHECK(durata > 0), 
"prezzo"    NUMERIC NOT NULL CHECK(prezzo >= 0), 
"punteggio" INTEGER NOT NULL CHECK(punteggio > 0), 
PRIMARY KEY("titolo") 
);`);

await db.run(`INSERT OR IGNORE INTO "Film" ("titolo", "genere", "durata", "prezzo", 
"punteggio") 
VALUES 
('Inception', 'Azione', 148, 2.99, 9), 
('Interstellar', 'Fantascienza', 169, 3.49, 9), 
('Il Re Leone', 'Animazione', 88, 2.99, 8), 
('Titanic', 'Romantico', 195, 3.99, 7), 
('Pulp Fiction', 'Crime', 154, 2.49, 9); `);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/films', async (req, res) => {
    const rows = await db.all('SELECT * FROM Film');
    res.json(rows);
});

app.put('/film');

app.delete('/:titolo');

app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});


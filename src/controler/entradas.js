import { openDb } from '../configDB.mjs';

export async function createTable(){
  openDb().then(db=>{
    db.exec('CREATE TABLE IF NOT EXISTS Entradas (id INTERGER PRIMARY KEY , nome TEXT, tipo TEXT )')
  })
}

export async function insertEntradas(entradas){
  openDb()
    .then(db=>{
      db.run('INSERT INTO Entradas (id, nome,tipo) VALUES (?, ?, ?)', [entradas.id, entradas.nome, entradas.tipo])
  })
}
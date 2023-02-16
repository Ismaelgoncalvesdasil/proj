import { openDb } from '../configDB.mjs';

export async function createTable(){
  openDb().then(db=>{
    db.exec('CREATE TABLE IF NOT EXISTS Entradas (id INTERGER PRIMARY KEY, nome TEXT, tipo TEXT )')
  })
}

export default async function insert(entradas){
  openDb()
    .then(db=>{
      db.run('INSERT INTO Entradas (nome,tipo) VALUES (?, ?)', [entradas.name, entradas.tipo])
  })
}
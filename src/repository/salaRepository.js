import { connection } from './connection.js';


export async function inserirSala(nome, usuario_Id) {
    const comando=`
    insert into sala (nome, usuario_Id)
    values (?,?)`

    const [info]= await connection.query(comando, [nome, usuario_Id]);
    return info.insertId
}


export async function buscarSalaPorId(salaId) {
    const comando =`
     select * from sala
     where id = ?`

    const[info] = await connection.query(comando, [ salaId ])
    return info[0];    
   
}


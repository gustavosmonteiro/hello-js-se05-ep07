
const festas = [
    { idfesta: 1, nomefesta: "forró na praia" },
    { idfesta: 2, nomefesta: "sertanejo na boate" },
    { idfesta: 3, nomefesta: "gafieira no bar" }
  ]
  
  const convidados = [
    { idconvidado: 1, nomeconvidado: "Joana" },
    { idconvidado: 2, nomeconvidado: "Carlos" },
    { idconvidado: 3, nomeconvidado: "Francisco" }
  ]
  
  const convites = [
    { idfesta: 1, idconvidado: 1 },
    { idfesta: 3, idconvidado: 1 },
    { idfesta: 1, idconvidado: 3 },
    { idfesta: 3, idconvidado: 3 },
    { idfesta: 2, idconvidado: 3 },
    { idfesta: 2, idconvidado: 2 }
  ]
  
  exports.up = knex => knex("festa").insert(festas)
    .then(_ => {
      return knex("convidado").insert(convidados)
    }).then(_ => {
      return knex("convite").insert(convites)
    })
  
  exports.down = knex => knex("festa").del()
    .whereIn("idfesta", festas.map(e => e.idfesta))
    .then(_ => {
      return knex("convidado").del()
        .whereIn("idconvidado", convidados.map(e => e.idconvidado))
    })

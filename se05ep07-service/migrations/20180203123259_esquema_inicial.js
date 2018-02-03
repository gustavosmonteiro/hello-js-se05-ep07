
exports.up = knex => knex.schema.createTable("festa", tb => {
    tb.increments("idfesta")
    tb.string("nomefesta").notNullable()
  }).createTable("convidado", tb => {
    tb.increments("idconvidado")
    tb.string("nomeconvidado").notNullable()
  }).createTable("convite", tb => {
    tb.integer("idfesta").notNullable()
      .references("festa.idfesta").onDelete("cascade")
    tb.integer("idconvidado").notNullable()
      .references("convidado.idconvidado").onDelete("cascade")
    tb.primary(["idfesta", "idconvidado"])
  })
  
  exports.down = knex => knex.schema
    .dropTable("convite")
    .dropTable("convidado")
    .dropTable("festa")
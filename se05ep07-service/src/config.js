// src/config.js
const cfg = require("../knexfile")
const knex = require("knex")(cfg.development)

const oncatch = res => err => {
  res.status(500).send(err)
  console.log(err)
}

exports.knex = knex
exports.oncatch = oncatch 
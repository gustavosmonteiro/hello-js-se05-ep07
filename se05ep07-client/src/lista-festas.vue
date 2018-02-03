<template>
  <md-list>
    <!-- lista-festas.vue -->
    <md-subheader>
      Lista de festas
    </md-subheader>
    <md-list-item v-for="f in festas" :key="f.idfesta">
      {{f.nomefesta}}
    </md-list-item>
    <md-list-item>
      <a href="/#/criar-festa">Nova</a>
    </md-list-item>
  </md-list>
</template>

<script>
const axios = require("axios");
const api = axios.create({
  baseURL: "http://127.0.0.1:3000"
});
module.exports = {
  name: "ListaFestas",
  created() {
    this.listfestas();
  },
  data() {
    return {
      festas: []
    };
  },
  methods: {
    listfestas() {
      api
        .get("/festa/list")
        .then(ret => {
          if (ret.status != 200) throw ret;
          this.festas = ret.data;
        })
        .catch(err => {
          console.log(err);
          alert("Erro ao recuperar festas");
        });
    }
  }
};
</script>

<style>

</style>
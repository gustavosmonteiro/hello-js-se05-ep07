<template>
  <form @submit.prevent="dosave">
    <md-input-container>
      <label>Nome da festa</label>
      <md-input v-model="festa.nomefesta" required></md-input>
    </md-input-container>
    <a href="/#/lista-festas">Voltar</a>
    <md-button type="submit" class="md-primary md-raised">Salvar</md-button>
  </form>
</template>

<script>
const axios = require("axios");
const api = axios.create({
  baseURL: "http://127.0.0.1:3000"
});
module.exports = {
  name: "CriarFesta",
  data: _ => ({festa:{nomefesta:""}}),
  methods: {
    dosave() {
      api
        .post("/festa/save", this.festa)
        .then(ret => {
          if (ret.status != 200) throw ret;
          this.festas = ret.data;
          this.$router.push("/lista-festas")
        })
        .catch(err => {
          console.log(err);
          alert("Erro ao salvar festa");
        });
    }
  }
};
</script>

<style>

</style>
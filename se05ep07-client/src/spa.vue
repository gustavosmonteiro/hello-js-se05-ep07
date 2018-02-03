<template>
  <div>
    <h1>BALADA VUE</h1>
    <router-view></router-view>
  </div>
</template>

<script>
const rotas = require("./routes");
const VueRouter = require("vue-router");

module.exports = {
  name: "Spa",
  router: new VueRouter({
    routes: [
      { path: "/" , redirect: "/lista-festas" },
      ...rotas
    ]
  })
};
</script>

<style>

</style>
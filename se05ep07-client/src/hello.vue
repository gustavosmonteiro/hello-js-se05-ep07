<template>
  <md-layout md-gutter>
    <md-layout md-gutter></md-layout>
    <md-layout md-gutter>
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">Hello world vue-material</div>
          <div class="md-subhead">Almighty counter</div>
        </md-card-header>
        <md-card-content>
          {{counter}}
        </md-card-content>
        <md-card-actions>
          <md-button @click="counter++">Action</md-button>
        </md-card-actions>
      </md-card>
    </md-layout>
    <md-layout md-gutter></md-layout>
  </md-layout>
</template>
<script>
module.exports = {
  name: "HelloVue",
  data: _ => ({ counter: 0 })
};
</script>
<style>

</style>
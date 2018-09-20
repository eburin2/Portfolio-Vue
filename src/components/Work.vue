<template>
    <div>
      <h1 class="head">WORK</h1>
      <br><br><br><br>
      <div class="row">
        <div class="col-xs-6  col-md-4">
          <app-controller></app-controller>
        </div>
        <div class="col-xs-6  col-md-4">
          <app-custom></app-custom>
        </div>
        <div class="col-xs-6  col-md-4">
          <app-sacrilicious></app-sacrilicious>
        </div>
        <div class="col-xs-6  col-md-4">
          <app-wax></app-wax>
        </div>
        <div class="col-xs-6  col-md-4">
          <app-debut></app-debut>
        </div>
      </div>
      <button id="homeWork" @click="navigateToHome" class="btn btn-primary">Go to HOME</button>
      <br><br>
    </div>
</template>

<script>
  import Controller from '../components/Controller.vue';
  import Custom from '../components/Custom.vue';
  import Sacrilicious from '../components/Sacrilicious.vue';
  import Wax from '../components/Wax.vue';
  import Debut from '../components/Debut.vue';


  export default {
    methods: {
      navigateToHome() {
        this.$router.push('/');
      }
    },
    components: {
      appController: Controller,
      appCustom: Custom,
      appSacrilicious: Sacrilicious,
      appWax: Wax,
      appDebut: Debut
    }
  }
</script>

<style>
  .head {
    font-family: 'futura';
  }

  #homeWork {
    margin-left: 2px;
    margin-top: -20px;
  }
</style>

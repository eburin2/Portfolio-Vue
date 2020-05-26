<template>
    <div>
      <br><br>
      <div class="row">
        <div class="col-xs-6  col-md-4">
          <app-TwelveToneConsulting></app-TwelveToneConsulting>
        </div>
        <div class="col-xs-6  col-md-4">
          <app-movie></app-movie>
        </div>
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
      </div>
    </div>
</template>

<script>

  import Controller from '../components/Controller.vue';
  import Custom from '../components/Custom.vue';
  import Sacrilicious from '../components/Sacrilicious.vue';
  import Wax from '../components/Wax.vue';
  import Movie from '../components/Movie.vue';
  import TwelveToneConsulting from '../components/12ToneConsulting.vue';

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
      appMovie: Movie,
      appTwelveToneConsulting: TwelveToneConsulting
    }
  }

</script>

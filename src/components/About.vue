<template>
  <div>
    <h1 class="head">about</h1>
    <div class="profile">
      <img id="elliot" src="https://s3-us-west-2.amazonaws.com/vuejs-portfolio-deploy/elliot.jpg">
    </div>
    <app-blurb></app-blurb>
    <br>
    <button class="button-main btn btn-primary" @click="navigateToHome">go to home</button>
    <br>
    <br>
  </div>
</template>


<script>
  import Blurb from '../components/Blurb.vue';

  export default {
      components: {
      appBlurb: Blurb
    },
    methods: {
      navigateToHome() {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

  .profile {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #elliot {
    width: 15%;
    height: 15%;
    max-width: 150px;
    min-width: 150px;
    border-radius: 50%;
  }


</style>

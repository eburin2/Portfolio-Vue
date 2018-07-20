<template>
  <div>
  <h1 class="head">RESUME</h1>
  <br><br>
  <div class="row">
    <div class="col-xs-12">
      <img class="img-responsive" id="resume" src="src/assets/ebw.png"/>
      <button id="resumeButton" @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    methods: {
      navigateToHome() {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  #resumeButton {
    margin-left: 20px;
    margin-top: -100px;
  }

  #resume {
    width: 1300px;
    height: 1550px;
  }
</style>

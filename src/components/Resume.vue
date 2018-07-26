<template>
  <div>
  <h1 class="head">RESUME</h1>
  <br><br>
  <div class="row">
    <div class="col-xs-12">
      <img class="img-responsive" id="resume" src="https://s3-us-west-2.amazonaws.com/vuejs-portfolio-deploy/resume.png"/>
      <button id="resumeButton" @click="navigateToHome" class="btn btn-primary">Go to Home</button>
      <br><br>
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

  #resumeButton {
    margin-left: 55px;
    margin-top: -35px;
  }
</style>

<template>
  <div>
    <h1 class="head">github</h1>
    <div class="flex-center">
      <a target="_blank" href="https://github.com/eburin2"><img id="github" src="https://s3-us-west-2.amazonaws.com/elliotburin.com/github.png"></a>
    </div>
    <br>
    <button class="button-main btn btn-primary" @click="navigateToHome">go to home</button>
    <br>
    <br>
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

  .flex-center {
    display: flex;
    justify-content: center;
  }

  #github {
    width: 22vw;
    max-width: 220px;
    min-width: 220px;
    border-radius: 50%;
  }


</style>

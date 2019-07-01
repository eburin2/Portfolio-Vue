<template>
  <div>
    <h1 class="head">GITHUB</h1>
    <div class="flex-center">
      <a target="_blank" href="https://github.com/eburin2"><img src="https://s3-us-west-2.amazonaws.com/elliotburin.com/github.png"></a>
    </div>
    <br>
    <button class="button-main btn btn-primary" @click="navigateToHome">Go to HOME</button>
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

<style>
  .flex-center {
    display: flex;
    justify-content: center;
  }
</style>

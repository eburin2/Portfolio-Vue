<template>
  <div>
    <h1 class="head">GITHUB</h1>
    <h2 class="head"><a target="_blank" href="https://github.com/eburin2">github</a></h2>
    <br>
    <button class="buttonMain btn btn-primary" @click="navigateToHome">Go to HOME</button>
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

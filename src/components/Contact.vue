<template>
  <div>
    <h1 class="head">CONTACT</h1>
    <h2 class="head">eburin2@gmail.com</h2>
    <br>
    <button id="contactButton" class="btn btn-primary" @click="navigateToHome">Go to HOME</button>
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
  h2:hover {
    text-decoration: underline
  }

  #contactButton {
    margin-top: 30px;
  }
</style>

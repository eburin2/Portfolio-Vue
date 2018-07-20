<template>
  <div>
    <h1>CONTACT</h1>
    <h2>eburin2@gmail.com</h2>
    <br><br>
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
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
</style>

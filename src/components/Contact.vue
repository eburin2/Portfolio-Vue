<template>
  <div>
    <h1>eburin2@gmail.com</h1>
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

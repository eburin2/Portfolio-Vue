<template>
  <div>
    <h1 class="head">contact</h1>
    <br>
    <p class="head"><a target="_blank" id="contact" href="mailto:eburin2@gmail.com">eburin2@gmail.com</a></p>
    <br>
    <button class="button-main btn btn-primary" @click="navigateToHome">go to home</button>
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
  #contact {
    color: #27418C;
    font-size: 24px;
  }
</style>

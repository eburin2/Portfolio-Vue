<template>
  <div>
    <h1 class="head">CONTACT</h1>
    <h2 class="head"><a target="_blank" href="mailto:eburin2@gmail.com">eburin2@gmail.com</a></h2>
    <br>
    <button class="button-main btn btn-primary" @click="navigateToHome">Go to HOME</button>
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

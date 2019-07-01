<template>
  <div>
    <h1 class="head">RESUME</h1>
    <br><br>
    <div class="row">
      <div class="col-xs-12">
        <object data="https://s3-us-west-2.amazonaws.com/elliotburin.com/embresume2019.pdf" type="application/pdf"  width="100%" height="1755px">
          <p class="pdf">It appears you don't have a PDF plugin for this browser.
          No biggie... you can <a href="https://s3-us-west-2.amazonaws.com/elliotburin.com/embresume2019.pdf">click here to
          download the PDF file.</a></p>
        </object>
        <button id="resumeButton" @click="navigateToHome" class="btn btn-primary">Go to HOME</button>
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
    margin-left: 2px;
    margin-top: 25px;
    margin-bottom: 50px;
  }

  .pdf {
    font-size: 24px;
    font-family: 'futura';
    margin-left: 20px;
  }

</style>

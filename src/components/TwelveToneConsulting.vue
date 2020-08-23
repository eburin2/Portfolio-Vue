<template>
  <div>
    <h1 class="head">12 tone consulting</h1>
    <p class="content"><span class="content-indent">I was hired by Brandon Bordenkircher, CEO of 12 Tone Consulting, to design and develop the company's website from the ground up.  Brandon hired me because he needed a website that clearly articulated the services that 12 Tone Consulting provided as well as translating their brand identity to the web.  I took on the project because Brandon trusted me in my web development and design skillset which gave me 100% creative independence.  As a result of my work, 12 Tone Consulting saw 40% increase in business and increased their web traffic by 85%.</span></p>

    <p class="content">"Elliot was flexible and built my website around my vision – all the while patiently explaining the pros and cons of various decisions so I could change my mind."</p>

    <p class="content">- Brandon Bordenkircher</p>
    <br>
    <a target="_blank" href="https://12toneconsulting.com"><span><h4 class="live-link">live website</h4></span></a>
    <br>
    <button id="twelve-button" class="button-main btn btn-primary" @click="navigateToHome">go to home</button>
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
  p {
    text-align: justify;
  }

  #twelve-button {
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
  }

 .live-link {
  margin-left: 20px;
  text-decoration: none;
 }

 a:hover {
   cursor: pointer;
   text-decoration: none;
 }
</style>

<template>
  <div>
    <div class="profile">
      <img id="elliot" src="https://s3-us-west-2.amazonaws.com/vuejs-portfolio-deploy/elliot.jpg">
    </div>
    <div>
      <app-blurb></app-blurb>
    </div>
  </div>
</template>

<script>
  import Blurb from '../components/Blurb.vue';
  export default {
    components: {
      appBlurb: Blurb
    }
  }

</script>

<style scoped>
    .profile {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    #elliot {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  </style>

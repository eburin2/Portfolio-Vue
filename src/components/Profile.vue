<template>
  <div>
    <div class="profile">
      <img id="elliot" src="https://s3-us-west-2.amazonaws.com/vuejs-portfolio-deploy/elliot.jpg">
    </div>
    <div>
      <app-blurb></app-blurb>
      <app-work></app-work>
    </div>
  </div>
</template>

<script>

  import Blurb from '../components/Blurb.vue';
  import Work from '../components/Work.vue';

  export default {
    components: {
      appBlurb: Blurb,
      appWork: Work
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
    width: 15vw;
    max-width: 150px;
    min-width: 150px;
    border-radius: 50%;
  }

</style>

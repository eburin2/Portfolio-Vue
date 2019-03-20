<template>
  <div>
    <h3>Sunlight Supply Inc.</h3>
    <a target="_blank" href="https://www.sunlightsupply.com/tools/quoterequestform?id=controller">
      <img class="img-responsive img-main" src="https://s3-us-west-2.amazonaws.com/vuejs-portfolio-deploy/sunny.png"/>
    </a>
  </div>
</template>



<style>

  .img-main {
    filter: brightness(84%) grayscale(85%);
    transition: filter 500ms ease-in-out;
    margin-bottom: 50px;
    width: 400px;
    height: 300px;
    padding-bottom: 20px;
  }

  .img-main:hover {
    filter: brightness(100%) grayscale(0%) !important;
  }

  h3 {
    font-family: 'futura';
    font-size: 30px;
    text-align: center;
    overflow-wrap: break-word;
    padding-left: 5px;
    padding-bottom: 5px;
    margin-top: -20px;
  }

  .head {
    font-family: 'futura';
  }

  #homeWork {
    margin-left: 2px;
    margin-top: -20px;
  }

  .button-main {
    margin-top: 0px;
    margin-left: 2px;
  }

</style>

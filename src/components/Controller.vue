<template>
  <div class="wrapper">
    <h3>Sunlight Supply Inc.</h3>
    <a target="_blank" href="https://www.sunlightsupply.com/tools/quoterequestform?id=controller">
      <img class="img-responsive sunlight" src="src/assets/sunny.png"/>
    </a>
  </div>
</template>

<script>
</script>

<style>
  .wrapper {
    box-sizing: border-box;
    position: relative;
    width: 100%
  }

  .sunlight {
    width: 100%;
    max-height: 300px;
    display: block;
    padding-bottom: 30px;
    filter: brightness(84%) grayscale(85%);
    transition: filter 500ms ease-in-out;
  }

  .sunlight:hover {
    filter: brightness(100%) grayscale(0%) !important;
  }

h3 {
  font-family: 'futura';
  font-size: 30px;
  padding-bottom: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
  position: absolute;
  top: -55px;
  left: -5%;
  display: inline-block;
  transform: translate(5%, 10%);
}

</style>

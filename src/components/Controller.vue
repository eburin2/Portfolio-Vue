<template>
  <div>
    <h3>Sunlight Supply Inc.</h3>
    <a target="_blank" href="https://www.sunlightsupply.com/tools/quoterequestform?id=controller">
      <img class="img-responsive sunlight" src="src/assets/sunny.png"/>
    </a>
  </div>
</template>

<script>
</script>

<style>
  .sunlight {
    width: 400px;
    height: 300px;
    padding-bottom: 20px;
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
  margin: auto;
  white-space: nowrap;
}

</style>

<template>
    <div>
      <p id="name">ELLIOT BURIN</p>
      <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a>HOME</a></router-link>
        <router-link to="/resume" tag="li" active-class="active"><a>RESUME</a></router-link>
        <router-link to="/github" tag="li" active-class="active"><a>GITHUB</a></router-link>
        <router-link to="/contact" tag="li" active-class="active"><a>CONTACT</a></router-link>
      </ul>
    </div>
</template>

<style scoped>

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid black;
    padding-bottom: 20px;
  }

  #name {
    font-family: 'futura';
    font-size: 45px;
    padding-top: 30px;
    font-weight: bold;
  }

  ul {
    padding-top: 60px;
    font-family: 'futura';
    font-size: 16px;
    margin-left: 10px;
  }

</style>

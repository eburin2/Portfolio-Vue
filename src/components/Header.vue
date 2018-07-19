<template>
    <div>
      <h1 id="name">ELLIOT BURIN</h1>
      <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a>Bio</a></router-link>
        <router-link to="/work" tag="li" active-class="active"><a>Work</a></router-link>
        <router-link to="/contact" tag="li" active-class="active"><a>Contact</a></router-link>

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
  }

  ul {
    padding-top: 20px;
    font-family: 'futura';
    font-size: 18px;
    margin-left: 10px;
  }
</style>

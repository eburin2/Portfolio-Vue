<template>
    <header>
      <div>
        <router-link to="/"><p id="name">elliot burin</p></router-link>
        <ul class="nav nav-pills">
          <router-link to="/" tag="li" active-class="active" exact><a class="link">home</a></router-link>
          <router-link to="/resume" tag="li" active-class="active"><a class="link">resume</a></router-link>
          <router-link to="/github" tag="li" active-class="active"><a class="link">github</a></router-link>
          <router-link to="/contact" tag="li" active-class="active"><a class="link">contact</a></router-link>
        </ul>
      </div>
      <div class="bar">
      </div>
    </header>
</template>

<style scoped>

div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  background-color: white;
}

.link {
  color: #27418C;
  font-family: 'repo';
  font-size: 18px;
}

.bar {
  width: 100%;
  height: 50px;
  border-bottom: 10px solid #27418C;
  border-top: 10px solid #27418C;
  background-color: #81C5E9;
}

#name {
  font-family: 'repo';
  font-size: 60px;
  padding-top: 30px;
  padding-bottom: 0;
  font-weight: bold;
  color: #27418C;
}

a {
  text-decoration: none;
}

ul {
  padding-top: 41px;
  font-family: 'futura';
  font-size: 16px;
  margin-left: 10px;
}

header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  width: 100%;
  display: block;
}


</style>

<template @click="this.isOpen">
    <header id="menu">
      <nav>
        <router-link to="/"><p id="name">elliot burin</p></router-link>
        <ul class="nav nav-pills">
          <router-link to="/" tag="li" active-class="active" exact><a class="link">home</a></router-link>
          <router-link to="/resume" tag="li" active-class="active"><a class="link">resume</a></router-link>
          <router-link to="/github" tag="li" active-class="active"><a class="link">github</a></router-link>
          <router-link to="/about" tag="li" active-class="active"><a class="link">about</a></router-link>
          <router-link to="/contact" tag="li" active-class="active"><a class="link">contact</a></router-link>
        </ul>
        <div id="hamburger" @click="toggle">
          <div class="burger-item"></div>
          <div class="burger-item"></div>
          <div class="burger-item"></div>
        </div>
        <div id="sidedrawer" v-show="isOpen" @click="toggle">
          <ul>
            <router-link to="/" tag="li" exact><a class="burg-li">home</a></router-link>
            <router-link to="/resume" tag="li"><a class="burg-li">resume</a></router-link>
            <router-link to="/github" tag="li"><a class="burg-li">github</a></router-link>
            <router-link to="/about" tag="li"><a class="burg-li">about</a></router-link>
            <router-link to="/contact" tag="li"><a class="burg-li">contact</a></router-link>
          </ul>
        </div>
      </nav>
      <div class="bar">
      </div>
    </header>
</template>

<style scoped>

#sidedrawer ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 3000;
  top: 0;
  right: 0;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.81);
}

.burg-li {
  color: white;
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
}

nav {
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
  font-family: 'repo';
  font-size: 16px;
  margin-left: 10px;
}

#hamburger {
  display: flex;
  flex-direction: column;
  height: 30px;
  width: 40px;
  margin-top: 45px;
  background: transparent;
  border: none;
  cursor: pointer;
  justify-content: space-between;
  display: none;
}

@media only screen and (min-width: 1000px) {
  #sidedrawer {
    display: none;
  }
}


@media only screen and (max-width: 1000px) {
  #name {
    font-size: 50px;
  }

  #hamburger {
    display: inherit;
  }

  .burger-item {
    background-color: #27418C;
    padding-bottom: 5px;
  }

  .nav {
    display: none;
  }
}
</style>

<script>
  export default {
    name: 'Header',
    data() {
        return {isOpen: false}
      },
      created() {
        window.addEventListener('click', (e) => {
          if (!this.$el.contains(e.target)){
            this.isOpen = false
          }
        })
    },
    methods: {
      toggle: function() {
        this.isOpen = !this.isOpen;
        },
    }
  }
</script>

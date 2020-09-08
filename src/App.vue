<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <app-header></app-header>
        <br><br>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from './components/Header.vue';

  export default {
    components: {
      appHeader: Header
    }
  }

</script>

<style>

  html, body {
    background-color: white;
  }

  header, #menu {
    position: sticky;
    top: 0px;
    z-index: 1;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .img-main {
    filter: brightness(84%) grayscale(85%);
    transition: filter 500ms ease-in-out;
    width: 100%;
    max-width: 360px;
    max-height: 360px;
    image-rendering: auto;
    height: 40vh;
    margin-bottom: 50px;
    margin-right: 0 !important;
    padding-right: 0 !important;
    z-index: 0;
  }

  .img-main:hover {
    filter: brightness(100%) grayscale(0%) !important;
  }

  .content {
    font-size: 20px;
    font-family: 'futura', 'sans serif';
    padding-top: 15px;
    margin-right: 20px;
    margin-left: 20px;
  }

  h3 {
    font-family: 'repo';
    text-align: center;
    overflow-wrap: break-word;
    padding-left: 5px;
    padding-bottom: 5px;
    margin-top: -20px;
    font-weight: bold;
    color: #27418C;
  }

  .content-indent {
    margin-left: 25px;
  }

  @font-face {
    src: url(/fonts/LubalinGraphStd-Demi.otf);
    font-family: 'repo';
  }

  .head {
    font-family: 'repo';
    color: #27418C;
  }

  #homeWork {
    margin-left: 2px;
    margin-top: -20px;
  }

  .button-main {
    margin-top: 0px;
    margin-left: 2px;
    font-family: 'repo';
  }

  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
        transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
        transform: translateY(-30);
    }
    100% {
      transform: translateY(0);
    }
  }


  @media only screen and (max-width: 800px) {

  .img-main {
    width: 44vw;
    height: 34vh;
    max-height: 350px;
    max-width: 350px;
    margin-right: 15px;
  }

  .sunlight {
    padding-left: 19px;
    padding-right: 12px;
  }

  #wax {
    padding-left: 35px;
    padding-right: 20px;
  }

  #debut {
    padding-left: 15px;
  }

  #dj {
    padding-left: 40px !important;
    padding-right: 35px;
  }

  #movies {
    padding-left: 50px;
    padding-right: 30px;
  }

  #twelve-tone {
    padding-left: 17px;
    padding-right: 10px;
  }

}

</style>

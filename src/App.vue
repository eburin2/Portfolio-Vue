<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
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

  .img-main {
    filter: brightness(84%) grayscale(85%);
    transition: filter 500ms ease-in-out;
    width: 100%;
    max-width: 350px;
    max-height: 350px;
    image-rendering: auto;
    height: 40vh;
    margin-bottom: 50px;
  }

  .img-main:hover {
    filter: brightness(100%) grayscale(0%) !important;
  }

  h3 {
    font-family: 'futura';
    text-align: center;
    overflow-wrap: break-word;
    padding-left: 5px;
    padding-bottom: 5px;
    margin-top: -20px;
    font-weight: 600;
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
    width: 47vw;
    height: 34vh;
    max-height: 350px;
    max-width: 350px;
    margin-right: 15px;
  }

  .sunlight {
    padding-left: 22px;
  }

  #wax {
    padding-left: 35px;
  }

  #debut {
    padding-left: 25px;
  }

  #dj {
    padding-left: 40px !important;
  }

  #movies {
    padding-left: 50px;
  }

  #serverless-guru {
    padding-left: 20px;
  }

}

</style>

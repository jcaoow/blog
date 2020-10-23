<template>
  <div id="app">
    <div class="cat-container">
      <canvas
        id="vuepress-cat"
        width="400"
        height="500"
        class="live2d"
        :style="style"
      ></canvas>
    </div>
    <router-view />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import live2dJSString from './plugins/live2d';
  export default {
    name: 'cat',
    data() {
      return {
        model: {
          whiteCat: '/live2d/cat/tororo.model.json'
        },
        style: null
      };
    },
    computed: {
      ...mapState({
        isShowCat: state => state.isShowCat
      })
    },
    mounted() {
      this.initCat();
    },
    methods: {
      initCat() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
          ? true
          : false;
        if (isMobile)  this.style = { width: '100px', height: '125px' };
        else this.style = { width: '200px', height: '250px' };
        if (!window.loadlive2d) {
          const script = document.createElement('script');
          script.innerHTML = live2dJSString;
          document.body.appendChild(script);
        }
        setTimeout(() => {
          window.loadlive2d(
            'vuepress-cat',
            this.model.whiteCat
          );
        }, 0);
      }
    }
  };
</script>

<style lang="less">
  @import url('./assets/css/common.less');

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .cat-container {
    position: fixed;
    right: 50px;
    bottom: 100px;
    color: #00adb5;
    z-index: 99999;
    #vuepress-cat {
      position: fixed;
      opacity: 0.9;
      right: 0px;
      bottom: -20px;
      z-index: 99999;
      pointer-events: none;
    }
  }
</style>

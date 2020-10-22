<template>
  <div id="app">
    <div class="cat-container" v-show="isLoaded">
      <canvas
        id="vuepress-cat"
        :width="style.width"
        :height="style.height"
        class="live2d"
      ></canvas>
    </div>
    <router-view />
  </div>
</template>

<script>
  import live2dJSString from './plugins/live2d';
  export default {
    name: 'cat',
    data() {
      return {
        isLoaded: true,
        model: {
          blackCat:
            'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-hijiki/assets/hijiki.model.json',
          whiteCat:
            'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.model.json'
        },
        style: {
          width: 200,
          height: 250
        }
      };
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
        if (isMobile) {
          this.isLoaded = false;
          return console.log('mobile do not load model');
        }
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

<style lang="less" scoped>
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

<template>
  <div id="app">
    <div class="cat-container">
      <canvas id="vuepress-cat" width="400" height="500" class="live2d" :style="style"></canvas>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import live2dJSString from './plugins/live2d';
export default {
  name: 'App',
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
      isShowCat: state => state.isShowCat,
      isPortrait: state => state.isPortrait
    })
  },
  watch: {
    isPortrait() {
      this.initCat();
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.initCat();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    ...mapMutations({
      setIsPortrait: 'SET_IS_PORTRAIT'
    }),
    initCat() {
      if (this.isPortrait) this.style = { width: '100px', height: '125px' };
      else this.style = { width: '200px', height: '250px' };
      if (!window.loadlive2d) {
        const script = document.createElement('script');
        script.innerHTML = live2dJSString;
        document.body.appendChild(script);
      }
      window.loadlive2d('vuepress-cat', this.model.whiteCat);
    },
    handleResize() {
      this.setIsPortrait();
    }
  }
};
</script>

<style lang="less">
@import url('./assets/css/reset.less');
@import url('./assets/css/common.less');

#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: #222831;
  font-size: 14px;
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
    transition: all 0.3s;
  }
}
</style>

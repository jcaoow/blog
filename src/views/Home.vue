<template>
  <div class="home-wrap" :class="{ 'home-portrait-wrap': isPortrait }" @click="handleClickBody">
    <top @handleShowMenu="handleShowMenu" />
    <div class="main-content">
      <div class="tech-menu-wrap">
        <tech-menu :class="`tech-menu ${showMenu ? 'show' : ''}`" />
      </div>
      <div class="tech-content-wrap">
        <tech-content />
      </div>
    </div>
    <foot />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Top from '../components/Top';
import Foot from '../components/Foot';
import TechMenu from '../components/Menu/TechMenu';
import TechContent from '../components/Content/TechContent';
export default {
  name: 'Home',
  components: {
    Top,
    Foot,
    TechMenu,
    TechContent
  },
  data() {
    return {
      mobileShowMenu: false
    };
  },
  computed: {
    ...mapState({
      isPortrait: state => state.isPortrait
    }),
    showMenu() {
      return !this.isPortrait || (this.isPortrait && this.mobileShowMenu);
    }
  },
  watch: {
    isPortrait(val) {
      if (val) this.mobileShowMenu = true;
    }
  },
  methods: {
    handleShowMenu() {
      this.mobileShowMenu = !this.mobileShowMenu;
    },
    handleClickBody() {
      if (!this.isPortrait) return;
      this.mobileShowMenu = false;
    }
  }
};
</script>
<style lang="less" scoped>
.home-wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
  display: flex;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
  .tech-menu-wrap {
    display: flex;
    position: relative;
    .tech-menu {
      background: #fff;
    }
  }
  .tech-content-wrap {
    flex: 1;
  }
}
.home-portrait-wrap {
  .tech-menu {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.2s;
    transform: translateX(-100%);
    &.show {
      left: -100%;
      transform: translateX(0);
    }
  }
}
</style>

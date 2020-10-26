<template>
  <div class="fixpx-top-wrap center-vertical">
    <i v-if="isPortrait" class="iconfont icon-caidan" @click.stop="handleShowMenu"></i>
    <span>技术空间</span>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Top',
  computed: {
    ...mapState({
      isPortrait: state => state.isPortrait
    })
  },
  methods: {
    handleShowMenu() {
      this.$emit('handleShowMenu');
    }
  }
};
</script>
<style lang="less" scoped>
.fixpx-top-wrap {
  font-size: 20px;
  font-weight: 600;
  padding: 14px 20px;
  i {
    font-size: 20px;
    padding-right: 6px;
  }
}
</style>

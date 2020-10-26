<template>
  <div class="tech-content-wrap">
    <div class="tech-content-title center-horizontal">{{ activeTech }}</div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      activeTech: state => state.activeTech
    })
  }
};
</script>
<style lang="less" scoped>
.tech-content-wrap {
  padding: 25px;
  .tech-content-title {
    font-size: 30px;
    font-weight: bold;
  }
}
</style>

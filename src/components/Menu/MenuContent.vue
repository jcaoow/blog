<template>
  <div class="menu-content" @click.stop>
    <div v-for="(item, index) in menuList" :key="index" class="menu-item">
      <div
        class="menu-item-title"
        :class="[`menu-item-title-${item.floor}`, `${item.active ? 'active' : ''}`]"
        @click="handleClickMenuItem(item)"
      >
        {{ item.title }}
      </div>
      <template v-if="item.children && item.children.length">
        <menu-content :menuList="item.children" @handleClear="handleClickMenuItem" />
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuContent',
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClickMenuItem(item) {
      if (item.floor <= 2) return;
      this.$emit('handleClear', item);
    }
  }
};
</script>
<style lang="less" scoped>
.menu-content {
  padding-left: 15px;
  .menu-item-title {
    padding: 8px 0;
    &.active {
      color: #00adb5;
      font-weight: bold;
    }
    &:hover {
      cursor: pointer;
      color: #00adb5;
    }
  }
  .menu-item-title-1 {
    font-weight: bold;
    font-size: 20px;
    padding-top: 5px;
    &:hover {
      cursor: default;
      color: #333333;
    }
  }
  .menu-item-title-2 {
    padding: 15px 0;
    &:hover {
      cursor: default;
      color: #333333;
    }
  }
}
</style>

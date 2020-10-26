<template>
  <div class="menu-wrap">
    <menu-content :menuList="menuList" @handleClear="handleClear" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import MenuContent from './MenuContent';
export default {
  name: 'TechMenu',
  components: {
    MenuContent
  },
  data() {
    return {
      menuList: [
        {
          title: 'Css',
          floor: 1,
          active: false,
          children: [
            {
              title: '技巧',
              floor: 2,
              active: false,
              children: [
                {
                  title: '垂直居中',
                  floor: 3,
                  active: false
                },
                {
                  title: '三栏布局',
                  floor: 3,
                  active: false
                },
                {
                  title: '三角形边框',
                  floor: 3,
                  active: false
                },
                {
                  title: '文字超出隐藏',
                  floor: 3,
                  active: false
                },
                {
                  title: '插入换行',
                  floor: 3,
                  active: false
                },
                {
                  title: '毛玻璃效果',
                  floor: 3,
                  active: false
                },
                {
                  title: '参数列表自适应对齐',
                  floor: 3,
                  active: false
                },
                {
                  title: '文字效果',
                  floor: 3,
                  active: false
                },
                {
                  title: 'tab栏底部选中效果',
                  floor: 3,
                  active: false
                },
                {
                  title: '圆形镂空',
                  floor: 3,
                  active: false
                },
                {
                  title: '三角形镂空',
                  floor: 3,
                  active: false
                },
                {
                  title: '多边形布局',
                  floor: 3,
                  active: false
                }
              ]
            },
            {
              title: '常用样式',
              floor: 2,
              active: false
            },
            {
              title: '常用组件',
              floor: 2,
              active: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    ...mapMutations({
      setActiveTech: 'SET_ACTIVE_TECH'
    }),
    handleClear(item) {
      this.clearListState(this.menuList, item.title);
    },
    clearListState(list, title) {
      list.forEach(item => {
        item.active = false;
        if (item.title === title) {
          item.active = true;
          this.setActiveTech(item.title);
        }
        if (item.children && item.children.length) this.clearListState(item.children, title);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.menu-wrap {
  box-sizing: border-box;
  width: 240px;
  height: 100%;
  overflow: auto;
  border-right: 1px solid #efefef;
  padding: 20px;
}
</style>

<template>
  <div>
    <span v-for="item in menulist" :key="item.id" style="margin:0 3px;">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menulist: [
        {
          id: 2,
          path: "/directive",
          name: "指令"
        },
        {
          id: 3,
          path: "/event",
          name: "事件"
        },
        {
          id: 4,
          path: "/modifier",
          name: "修饰符"
        },
        {
          id: 5,
          path: "/structure",
          name: "结构"
        },
        {
          id: 9,
          path: "/nested",
          name: "嵌套"
        },
        {
          id: 6,
          path: "/store",
          name: "vuex"
        },
        {
          id: 7,
          path: "/router",
          name: "路由"
        }
      ]
    };
  }
};
</script>

<style>
</style>

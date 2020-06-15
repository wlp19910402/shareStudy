<template>
  <div class="app">
    <Menu />
    加的内容
    <router-view>
      
      <div name="title">888988</div>
    </router-view>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
  name: "App",
  components: { Menu }
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 400px;
  margin: 60px auto 0;
}
ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 0;
}
a {
  color: rgb(121, 183, 185);
}
.router-link-exact-active.router-link-active {
  color: rgb(2, 97, 97);
}
.router-link-active {
  color: rgb(2, 97, 97);
}
</style>

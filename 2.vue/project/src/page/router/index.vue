<template>
  <div>
    <div>
      <router-link :to="{ name: 'mod1' }" style="margin:0 3px;"
        >mod1</router-link
      >
      <router-link :to="{ name: 'mod2' }" style="margin:0 3px;"
        >mod2</router-link
      >
      <router-link to="/router/8888" style="margin:0 3px;">默认</router-link>
    </div>
    <h3>路由{{ $route.params.id }}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Router"
};
</script>

<style>
</style>

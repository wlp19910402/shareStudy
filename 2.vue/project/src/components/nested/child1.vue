<template>
  <div>
    <span>{{ pa }},{{ pb }}</span>
    <input type="button" value="pb+1" @click="pbfn()" />
  </div>
</template>
<script>
export default {
  props: ["pa", "pb", "pbfn"]
};
</script>
<style>
</style>
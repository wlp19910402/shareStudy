<template>
  <div>
    {{ $parent.pa }},
    {{ $parent.pb }}
    <input type="button" value="pb+1" @click="pbfn()" />
  </div>
</template>
<script>
export default {
  props: ["parent"],
  methods: {
    pbfn() {
      this.$parent.pbAdd();
    }
  }
};
</script>
<style>
</style>
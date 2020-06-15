<template>
  <div>
    {{ $parent.pb }}
    <input type="button" value="emit" @click="pbfn()" />
  </div>
</template>
<script>
export default {
  methods: {
    pbfn() {
      this.$emit("pbAddon", 4);
    }
  }
};
</script>
<style>
</style>
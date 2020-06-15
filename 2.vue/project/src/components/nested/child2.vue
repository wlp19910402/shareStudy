<template>
  <div>{{ ca }},{{ cb }}</div>
</template>
<script>
export default {
  data: () => ({
    ca: "子级的参数",
    cb: 8
  }),
  created() {
    this.$on("onCbAdd", n => {
      this.cb += n;
    });
  },
  methods: {
    cbReduce() {
      this.cb--;
    }
  }
};
</script>
<style>
</style>
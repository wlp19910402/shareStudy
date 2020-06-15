<template>
  <div>
    <h2>父子级相互传参和控制</h2>
    <ul>
      <li>
        <label>子(props)操作父的方法和传参</label>
        <span>
          <Child1 :pa="pa" :pb="pb" :pbfn="pbAdd" />
        </span>
      </li>
      <li>
        <label>子使用($parent)操作父的方法和传参</label>
        <span>
          <Child3 :parent="this" :pa="pa" :pb="pb" />
        </span>
      </li>
      <li>
        <label>子级正常显示</label>
        <span><Child2 /> </span>
      </li>
      <li>
        <label>
          父($refs)操作子级的方法
          <input type="button" @click="pcbReduce()" value="cb-1" />
        </label>
        <span><Child2 ref="child2" /> </span>
      </li>
      <li>
        <label>
          父($emit)操作子($on)的方法
          <input
            type="button"
            @click="$refs.child2a.$emit('onCbAdd', 2)"
            value="+2"
          />
        </label>
        <span>
          <Child2 ref="child2a" />
        </span>
      </li>
      <li>
        <label>
          子($emit)操作父()的方法
        </label>
        <span>
          <Child4 v-on:pbAddon="pbAddon111" />
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import Child1 from "../components/nested/child1";
import Child2 from "../components/nested/child2";
import Child3 from "../components/nested/child3";
import Child4 from "../components/nested/child4";
export default {
  name: "Nested",
  components: { Child1, Child2, Child3, Child4 },
  data: () => ({
    pa: "父级",
    pb: 1
  }),
  methods: {
    pbAdd() {
      this.pb++;
    },
    pcbReduce() {
      this.$refs.child2.cbReduce();
    },
    pbAddon111(n) {
      console.log(n);
      this.pb += n;
    }
  }
};
</script>
<style>
</style>
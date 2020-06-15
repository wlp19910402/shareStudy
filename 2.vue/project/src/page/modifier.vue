<template>
  <div>
    <ul>
      <li>
        <label>stop阻止冒泡修饰符</label>
        <span>
          <div @click="fn2()">
            <input type="button" value="stop" @click.stop="fn1()" />
          </div>
        </span>
      </li>
      <li>
        <label>once-单次事件</label>
        <span>
          <div @click="fn2()">
            <input type="button" value="once" @click.once="fn1()" />
          </div>
        </span>
      </li>
      <li>
        <label>prevent-阻止默认事件</label>
        <span>
          <form action="index.html" method="post" @submit.prevent="submit()">
            <input type="submit" value="提交" />
          </form>
        </span>
      </li>
      <li>
        <label>.keycode</label>
        <span>
          <input type="text" @keydown.enter="fn1()" /><br />
          <input type="text" @keydown.13="fn2()" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Modifier",
  data() {
    return {
      name: "wlp"
    };
  },
  methods: {
    fn1() {
      alert(1);
    },
    fn2() {
      alert(2);
    },
    submit() {
      alert("阻止默认事件,不提交");
    }
  }
};
</script>

<style>
</style>

<template>
  <div>
    <ul>
      <li>
        <label>{{}}:</label>
        <span>{{ a }}+{{ b }}={{ parseInt(a) + b }}</span>
      </li>
      <li>
        <label>{{}}中写入表达式:</label>
        <span>{{ new Date().getFullYear() }}</span>
      </li>
      <li>
        <label>{{}}中调用方法:</label>
        <span>{{ all() }}</span>
      </li>
      <li>
        <label>v-bind绑定属性：</label>
        <span :class="['default', b == 234 ? 'active' : '']" :title="title"
          >hhh</span
        >
      </li>
      <li>
        <label>v-bind绑定图片地址</label>
        <span> <img :src="src"/></span>
      </li>
      <li>
        <label>v-model数据双向绑定</label>
        <span><input type="text" v-model="a"/></span>
      </li>
      <li>
        <label>v-text</label>
        <span v-text="html"></span>
      </li>
      <li>
        <label>v-html</label>
        <span v-html="html"></span>
      </li>
      <li>
        <label>slot</label>
        <span>
          <slot name="title"></slot>
          你好啊啊啊啊
          <slot></slot>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "Directive",
  data() {
    return {
      title: "标题2",
      a: "897",
      b: 234,
      src: logo,
      html: "<p>内容1</p><p>内容2</p>"
    };
  },
  methods: {
    all() {
      return parseInt(this.a) + this.b;
    }
  }
};
</script>

<style>
</style>



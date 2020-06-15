<template>
  <div>
    <ul>
      <li>
        <label>v-on</label>
        <span>
          {{ num }}
          <input type="button" @click="add()" value="+1" />
        </span>
      </li>
      <li>
        <label>v-if</label>
        <span v-if="show">
          {{ num }}
        </span>
      </li>
      <li>
        <label>v-show</label>
        <span v-show="show">
          {{ num }}
        </span>
      </li>
      <li>
        <label>v-for循环数组</label>
        <span>
          <p v-for="item in arrayData" :key="item.id">
            姓名：{{ item.name }}。。。年龄：{{ item.age }}
          </p>
        </span>
      </li>
      <li>
        <label>v-for循环json</label>
        <span>
          <p v-for="(val, key, index) in jsonData" :key="key">
            {{ index }}.{{ key }}:{{ val }}
          </p>
        </span>
      </li>
      <li>
        <label>v-for循环字符串</label>
        <span>
          <p v-for="(item, index) in string" :key="index">
            {{ index }}.{{ item }}
          </p>
        </span>
      </li>
      <li>
        <label>v-for循环数字</label>
        <span>
          <p v-for="i in num" :key="i">
            {{ i }}
          </p>
        </span>
      </li>
      <li>
        <label>v-pre</label>
        <span v-pre>
          <div>{{ num }}</div>
        </span>
      </li>
      <li>
        <label>v-cloak</label>
        <span v-cloak>
          <div>{{ num - 5 }}</div>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      num: 2,
      show: false,
      arrayData: [
        { id: 0, name: "wlp", age: 18 },
        { id: 1, name: "wl1", age: 18 },
        { id: 2, name: "wl2", age: 18 },
        { id: 3, name: "wl3", age: 18 }
      ],
      jsonData: {
        姓名: "wlp",
        年龄: 20
      },
      string: "name"
    };
  },
  methods: {
    add() {
      this.num++;
    }
  }
};
</script>

<style>
</style>

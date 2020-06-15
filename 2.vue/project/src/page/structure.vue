<template>
  <div>
    <ul>
      <li>
        <label>data</label>
        <span>
          {{ a }}
        </span>
      </li>
      <li>
        <label>methods</label>
        <span>
          <input type="button" value="alert" @click="fn()" />
        </span>
      </li>
      <li>
        <label>computed</label>
        <span>
          {{ a }}+{{ b }}={{ sum }}
          <input type="button" value="a+1" @click="a++" />
        </span>
      </li>
      <li>
        <label>computed + v-model</label>
        <span>
          <input type="text" v-model="familyName" /><br />
          <input type="text" v-model="giveName" /><br />
          <input type="text" v-model="name" />
        </span>
      </li>
      <li>
        <label>watch监听text属性</label>
        <span>
          <input type="text" v-model="text" />
        </span>
      </li>
      <li>
        <label>watch监听对象中的某个属性</label>
        <span>
          <input type="text" v-model="json.name" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Structure",
  data() {
    return {
      a: 12,
      b: 6,
      familyName: "张",
      giveName: "三丰",
      text: "你好啊",
      json: {
        name: "wlp"
      }
    };
  },
  computed: {
    sum() {
      return this.a + this.b;
    },
    name: {
      get() {
        return this.familyName + this.giveName;
      },
      set(value) {
        // this.familyName=value[0];
        // this.familyName= value.slice(0,1);
        this.familyName = value.substring(0, 1);
        // this.giveName=value.slice(1);
        this.giveName = value.substring(1);
      }
    }
  },
  methods: {
    fn() {
      alert(0);
    }
  },
  watch: {
    text() {
      this.a++;
      console.log(`text变化了，text=${this.text}`);
    },
    "json.name": function() {
      this.b++;
      console.log(`json.name发生变化了，json.name=${this.json.name}`);
    }
  }
};
</script>

<style>
</style>

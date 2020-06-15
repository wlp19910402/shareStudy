<template>
  <div>
    <ul>
      <li>
        <label>直接获取state里面的num</label>
        <span>
          {{ $store.state.num }}
        </span>
      </li>
      <li>
        <label>直接获取getters里面的CL_Name</label>
        <span>
          {{ $store.getters.CL_Name }}
        </span>
      </li>
      <li>
        <label>直接获取mutations里面的add()</label>
        <span>
          <input
            type="button"
            value="mutations"
            @click="$store.commit('add', 2)"
          />
        </span>
      </li>
      <li>
        <label>直接获取 actions 里面的add()</label>
        <span>
          <input
            type="button"
            value="actions"
            @click="$store.dispatch('add', 2)"
          />
        </span>
      </li>
      <li>
        <label>获取mapGetters里面的CL_Name</label>
        <span>
          {{ CL_Name }}
        </span>
      </li>
      <li>
        <label>获取mapState里面的num和name</label>
        <span> {{ num }},{{ name }} </span>
      </li>
      <li>
        <label>获取mapMutations里面的add2</label>
        <span>
          <input type="button" value="Mutation" @click="add2(2)" />
        </span>
      </li>
      <li>
        <label>获取mapActions里面的add</label>
        <span>
          <input type="button" value="actions" @click="add(2)" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Vuex",
  computed: {
    ...mapGetters(["CL_Name"]),
    ...mapState(["num", "name"])
  },
  methods: {
    ...mapActions(["add"]),
    ...mapMutations({ add2: "add" })
  }
};
</script>

<style>
</style>

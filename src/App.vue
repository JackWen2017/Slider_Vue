<template>
  <div id="app">
    <h1>Slider</h1>
    <div v-if="loading">
      <h2>讀取中...</h2>
    </div>
    <Slider v-else :list="list"/>
  </div>
</template>

<script>
import Slider from "./components/Slider";
export default {
  name: "app",
  components: {
    Slider
  },
  computed: {
    loading: {
      get() {
        return this.$store.state.isLoading;
      }
    },
    list: {
      get() {
        return this.$store.state.list;
      }
    }
  },
  async mounted() {
    await this.$store.dispatch("GET_LIST");
  }
};
</script>

<style>
html {
  color: #ff0;
  background-color: rgb(2, 4, 105);
  font-family: "微軟正黑體";
  text-align: center;
}
</style>

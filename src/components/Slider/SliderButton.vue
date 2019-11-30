<template>
  <div class="slider__button">
    <button class="btn" @click="reGetPic">刷新圖片</button>
    <button class="btn" v-if="listSize > 1" @click="switchAuto">{{ auto ? "手" : "自" }}動換圖</button>
    <button class="btn" v-if="listSize > 1" @click="switchLoop">{{ loop ? "不" : "" }}循環</button>
  </div>
</template>

<script>
export default {
  name: "SliderButton",
  props: {
    auto: {
      type: Boolean,
      required: true
    },
    listSize: {
      type: Number,
      required: true
    },
    loop: {
      style: Boolean,
      required: true
    }
  },
  methods: {
    reGetPic() {
      this.$store.dispatch("GET_LIST");
    },
    switchAuto() {
      this.$emit("update:auto", !this.auto);
    },
    switchLoop() {
      this.$emit("update:loop", !this.loop);
    }
  }
};
</script>

<style>
.btn {
  border: none;
  text-decoration: none;
  border-radius: 10px;
  height: 22px;
  font-size: 14px;
  width: 100px;
  background-color: rgb(0, 177, 0);
  font-weight: bold;
  margin: 10px;
}
.btn:hover {
  background-color: #0f0;
  color: rgb(27, 3, 248);
}
</style>

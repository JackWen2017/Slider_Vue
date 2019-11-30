<template>
  <div class="slider__nav">
    <div
      v-for="num in listSize"
      :key="num"
      :class="{ active: current === num - 1 }"
      class="dot"
      @click="changeCurrent(num - 1)"
    ></div>
    <div class="prev" @click="subCurrent()" v-if="showArrow(0)"/>
    <div class="next" @click="addCurrent()" v-if="showArrow(1)"/>
  </div>
</template>

<script>
let timer = null;
export default {
  name: "SliderNav",
  props: {
    listSize: {
      style: Number,
      required: true
    },
    current: {
      style: Number,
      required: true
    },
    play: {
      style: Boolean,
      required: true
    },
    loop: {
      style: Boolean,
      required: true
    }
  },
  methods: {
    changeCurrent(val) {
      this.$emit("update:current", val);
      this.setTimer();
    },
    addCurrent() {
      this.changeCurrent(this.current + 1);
    },
    subCurrent() {
      this.changeCurrent(this.current - 1);
    },
    showArrow(val) {
      let show =
        this.loop ||
        (val === 0 ? this.current > 0 : this.current < this.listSize - 1);
      return show;
    },
    setTimer() {
      this.clearTimer();
      if (this.listSize > 1 && this.play) {
        timer = setTimeout(this.addCurrent, 3000);
      }
    },
    clearTimer() {
      if (timer) clearTimeout(timer);
    }
  },
  mounted() {
    this.setTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  watch: {
    play: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          timer = setTimeout(this.setTimer, 3000);
        } else {
          this.clearTimer();
        }
      }
    }
  }
};
</script>

<style>
.slider__nav {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
.dot {
  cursor: pointer;
  display: inline-block;
  width: 2vh;
  padding-top: 2vh;
  height: 0;
  overflow: hidden;
  margin: 1vh 1.5vh;
  border-radius: 50%;
  background-color: #fff;
  text-indent: 100%;
  box-shadow: 0 0 5px rgb(2, 4, 105);
}
.dot.active {
  background-color: rgb(2, 4, 105);
  box-shadow: 0 0 5px #fff;
}
.prev,
.next {
  cursor: pointer;
}
.prev:before {
  content: "";
  position: absolute;
  left: 5%;
  bottom: 15%;
  margin: 1vh;
  border-top: 1vh solid rgba(0, 0, 0, 0);
  border-bottom: 1vh solid rgba(0, 0, 0, 0);
  border-right: 2vh solid #fff;
}

.next:before {
  content: "";
  position: absolute;
  right: 5%;
  bottom: 15%;
  margin: 1vh;
  border-top: 1vh solid rgba(0, 0, 0, 0);
  border-bottom: 1vh solid rgba(0, 0, 0, 0);
  border-left: 2vh solid #fff;
}
</style>

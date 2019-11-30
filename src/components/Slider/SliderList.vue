<template>
  <transition-group name="fade" tag="div" class="slider__list" appear>
    <SliderView
      v-for="pic in picList"
      :key="pic.id"
      :src="pic.src"
      v-show="pic.id === current + 1"
    />
  </transition-group>
</template>

<script>
import SliderView from "./SliderView";
export default {
  name: "SliderList",
  components: {
    SliderView
  },
  props: {
    current: {
      type: Number,
      required: true
    },
    picList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.slider__list {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>

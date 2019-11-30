<template>
  <div class="slider__view" :style="styleObject"/>
</template>

<script>
export default {
  name: "SliderView",
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    styleObject() {
      return {
        "background-image": `url(${this.src})`
      };
    }
  }
};
</script>

<style>
.slider__view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
</style>

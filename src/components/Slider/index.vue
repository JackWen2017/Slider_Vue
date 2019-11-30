<template>
  <div>
    <div
      v-if="list.length"
      class="slider"
      ref="stopArea"
      @mouseenter="focus = true"
      @mouseleave="focus = false"
    >
      <SliderList :picList="list" :current="current"/>
      <SliderNav
        v-if="listSize > 1"
        :listSize="listSize"
        :current.sync="current"
        :play="play"
        :loop="loop"
      />
    </div>
    <div v-else>
      <h2>OH!你的圖片被偷走了</h2>
    </div>
    <SliderButton :auto.sync="auto" :loop.sync="loop" :listSize="listSize"/>
  </div>
</template>

<script>
import SliderNav from "./SliderNav";
import SliderList from "./SliderList";
import SliderButton from "./SliderButton";
export default {
  name: "Slider",
  components: {
    SliderNav,
    SliderList,
    SliderButton
  },
  data() {
    return {
      nowPicIndex: 0,
      auto: true,
      focus: false,
      loop: true
    };
  },
  computed: {
    list: {
      get() {
        return this.$store.state.list;
      }
    },
    listSize: {
      get() {
        return this.list.length;
      }
    },
    current: {
      get() {
        return this.nowPicIndex;
      },
      set(val) {
        if (this.loop) {
          val = (val + this.listSize) % this.listSize;
        } else {
          val = val < 0 ? 0 : val > this.listSize - 1 ? this.listSize - 1 : val;
        }
        this.nowPicIndex = val;
      }
    },
    play: {
      get() {
        return this.auto && !this.focus;
      }
    }
  }
};
</script>

<style>
.slider {
  position: relative;
  width: 80%;
  height: 0;
  padding-top: 35%;
  background-color: #00124e;
  overflow: hidden;
  margin: auto;
  color: #eeff05;
}
</style>

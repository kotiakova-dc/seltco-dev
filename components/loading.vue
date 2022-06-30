<template lang="html">
  <div class="page-loader" v-if="loading">
    <span class="hero__herb-img herb-circle--animated">
      <img
        :src="require('@/assets/img/hero-slider/hero-herb5.png')"
        alt="Луговые травы"
        class="hero__herb hero__herb5"
      />
    </span>
    <p>Загрузка...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),

  methods: {
    start() {
      this.loading = false;
    },
    finish() {
      this.loading = false;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });

    const herbCircleAnimation = new TimelineMax({ repeat: -1 });
    herbCircleAnimation

      .to(".herb-circle--animated", 0.6, {
        background: "#CCD390",
        border: "6px solid #fff",
        ease: "power1.out",
      })
      .to(".herb-circle--animated", 0.6, {
        background: "#31264F",
        border: "10px solid #fff",
        ease: "power1.out",
      })
      .to(".herb-circle--animated", 0.6, {
        background: "#CCD390",
        border: "6px solid #fff",
        ease: "power1.out",
      });
  },
};
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 1000;
}
.hero__herb-img {
  background-color: #ccd390;
  border-radius: 50%;
  border: 6px solid #fff;
  overflow: hidden;
  height: 300px;
  width: 300px;
  position: absolute;
  box-sizing: border-box;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hero__herb {
  position: absolute;
}
</style>

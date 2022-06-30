<template>
  <header
    class="header"
    :class="{ 'header--hidden': !showHeader, [`header--view-${view}`]: true }"
  >
    <HeaderTop />
    <HeaderBottom />
  </header>
</template>

<script>
export default {
  props: {
    view: String,
    default: () => "default",
  },
  data() {
    return {
      showHeader: true,
      lastScrollPosition: 0,
    };
  },
  computed: {
    isDesktop() {
      return this.$mq === "xl" || this.$mq === "xl2";
    },
  },
  methods: {},
  mounted() {
    // На главной странице отключаем показ/скрытие при скролле
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
<style lang="scss"></style>

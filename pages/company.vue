<template>
  <div class="company">
    <Banner />
    <CompanyBanner />
    <ConceptBanner />
    <CompanyStory :width="width" />
    <CompanyConcept :items="concept" v-if="width > 680" />
    <template v-else>
      <div class="company-concept__title">
        <h2 class="company__concept-title">
          Концепция <br />
          <span>компании</span>
        </h2>
        <nuxt-link class="advantages__item-link" :to="{ name: 'concept' }">
          <p class="mb-0">Узнайте более подробно</p>
          <svgicon name="arrow-blue" />
        </nuxt-link>
      </div>
      <SolutionMobile :items="concept" />
    </template>
    <SliderTeamSlider />
    <News :width="width" :items="news" />
    <Feedback :enableWaveAnimation="true" />
    <Footer />
  </div>
</template>
<script>
export default {

  data() {
    return {
      concept: this.$store.state.concept,
      news: this.$store.state.news,
      width: 0,
    };
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateWidth);

    this.updateWidth();
  },
};
</script>
<style lang="scss">
</style>

<template>
  <header class="header">
    <div class="header__container">
      <a href="/" class="header__logo">
        <img :src="require('@/assets/img/main-logo.svg')" alt="Logo"
      /></a>
      <div class="header__btns">
        <b-button class="header__modal-btn" v-b-modal.hero-modal-about
          >О ферме</b-button
        >
        <b-button class="header__modal-btn" v-b-modal.hero-modal-about
          >Документы</b-button
        >
        <b-button class="header__modal-btn" v-b-modal.hero-modal-about
          >Новости</b-button
        >
      </div>
      <ul class="header__info">
        <li>
          <span class="header__ic">
            <img
              :src="require('@/assets/img/icons/address_ic.svg')"
              alt="Address"
          /></span>
          <p class="header__address">
            Санкт-Петербург, Спасский пер., дом 14/35, офис 1204
          </p>
        </li>
        <li>
          <span class="header__ic">
            <img :src="require('@/assets/img/icons/phone_ic.svg')" alt="Phone"
          /></span>
          <a class="header__tel" href="tel:+78127010471"
            ><span>8 812</span> <span class="p-uppercase"> 701 04 71</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  methods: {},
  mounted() {
    // console.log(this.$refs.body);
  },
};
</script>
<style lang="scss">
.header {
  position: absolute;
  margin-bottom: 25px;
  top: 0;
  left: 0;
  height: 70px;
  z-index: 101;
  background: transparent;
  width: 100%;
  &__logo {
    margin-right: 120px;
  }
  &__container {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    a,
    p {
      white-space: nowrap;
      color: $color-primary;
    }
  }

  &__btns {
    display: flex;
    align-items: center;

    .header__modal-btn {
      background: transparent;
      padding: 0;
      border: none;
      font-size: 20px;
      color: $color-primary;
      font-weight: 400;
      &:not(:last-of-type) {
        padding-right: 40px;
      }
    }
  }
  &__info {
    display: flex;
    align-items: center;
  }
}
.header__info {
  margin-left: auto;
  display: flex;
  align-items: flex-end;
  li {
    display: flex;
    align-items: center;

    p {
      font-size: 17px;
    }
    a {
      font-size: 20px;
    }
    .p-uppercase {
      font-size: 30px;
    }

    .header__ic {
      margin-right: 10px;
    }
    &:not(:last-of-type) {
      margin-right: 40px;
    }
  }
}
</style>

<template>
  <div>
    <HeaderTop />
    <HeroSlider />
  </div>
</template>

<script>
// сначала надо распаковать архив с кадрами. Где они?
// отключи сервер. который nuxt dev. Он иногда не дает перезаписать старые кадры
// Кадры залили. теперь ставим количество кадров.
</script>
<style lang="scss">
.arrow-up {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border: 1px solid $primary;
  z-index: 999999;
  border-radius: 50%;
  display: none;
  cursor: pointer;

  .arr-bl,
  .arr-w {
    position: absolute;
    height: 20px;
    top: 15px;
    left: 15px;
    transition: 0.2s ease-in-out;
  }

  .arr-w {
    transform: rotate(-90deg);
    opacity: 0;
  }

  &:hover {
    background: $primary;

    .arr-bl {
      opacity: 0;
      transition: 0.2s ease-in-out;
    }

    .arr-w {
      opacity: 1;
      top: 10px;
      left: 12px;
    }
  }
}

#fullpage-promo {
  overflow-x: hidden;
}

/* start promo-slides */
#fullpage-promo {
  height: auto !important;
  overflow: hidden;
  transition: opacity 0.3s !important;
  opacity: 1;

  > .js-section-normal-scroll {
    height: auto !important;
  }

  &.inactive {
    opacity: 0;
  }
}

.promo-slides-container {
  overflow: hidden;
}

.promo-slide .container {
  height: 100vh;
  display: flex;
}

.promo-slides {
  display: none;

  &.active {
    display: block;
  }
}

.anim-bottle {
  position: absolute;
  left: 0;
  display: block;
  height: 100%;
  top: 0;
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  pointer-events: none;
}

#anim-water-container {
  width: 60%;
}

.anim-bottle canvas {
  display: block;
  width: 110%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%) !important;
}

.promo-slide--water .anim-bottle canvas {
  width: 100%;
}

.anim-bottle__inner {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.anim-bottle--img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  transition: 0.3s top linear, 1.5s left ease;
  z-index: 999;
}

.promo-slide-trigger {
  position: absolute;
  right: 0;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: 1px solid #dedee3;
  background: #fff;
  z-index: 9999;
  cursor: pointer;
  width: 290px;
  box-sizing: border-box;
  @include tr((color, border-color));

  svg {
    width: 40px;
    height: auto;
    margin-right: 30px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: $primary;
    color: $primary;
  }
}

.promo-slide-trigger img {
  margin-right: 30px;
  width: 54px;
  height: 90px;
  object-fit: contain;
  object-position: center;
}

.promo-slide {
  position: relative;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
}

.hidden {
  display: none !important;
}

.promo-slide__content {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1260px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.promo-slide--beer-1,
.promo-slide--water-1 {
  z-index: 2;
}

.promo-slide__content.left {
  justify-content: flex-start;
}

.promo-slide__content-inner {
  width: 60%;
  flex-basis: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &:before {
    content: attr(data-num);
    position: absolute;
    font-size: 1100px;
    line-height: 0.5;
    pointer-events: none;
    font-weight: 800;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.7s 0.4s;
    top: 45%;
    transform: translateY(-50%);
    left: 20%;
    color: #f6f6f6;
  }

  &.safari:before {
    top: 65%;
  }
}

.promo-slide__content.left .promo-slide__content-inner:before {
  left: 0;
}

.promo-slide__mobile-img {
  display: none;

  img {
    width: 100%;
  }

  margin-bottom: 70px;
}

.js-section.active .promo-slide__content-inner:before {
  opacity: 1;
}

.js-section.active .promo-slide__bg {
  opacity: 1;
}

.js-promo-slide-last .promo-slide__bg {
  transform: translateY(-90%);
  left: 0;
}

.promo-slide__title {
  font-weight: 700;
  font-size: 56px;
  line-height: 1.2;
  color: #1b2ac9;
  position: relative;
  z-index: 1;

  &--small {
    font-size: 48px;
    max-width: 540px;
  }
}

.promo-slide__title.big {
  font-size: 96px;
}

.promo-slide__desc {
  margin-left: 5px;
  margin-top: 20px;
  font-size: 30px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
}

.promo-slide__items {
  margin-top: 30px;
}

.promo-slide__items ul {
  margin: 0;
  padding: 0;
  font-size: 24px;
  position: relative;
  z-index: 1;
}

.promo-slide__items ul li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  list-style: none;
  line-height: 1.45;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.promo-slide__items ul li::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: calc(50% - 6px);
  left: 0;
  background: linear-gradient(271.8deg, #1b2ac9 -0.56%, #0073f0 100.44%);
}

.promo-slide__bg {
  position: absolute;
  left: -200px;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  transition: opacity 0.7s 0.3s;
  max-width: 1811px;
}

.promo-slide__go-down {
  background-color: transparent;
  width: 47px;
  height: 47px;
  @include tr((background-color));
  border-radius: 50%;
  margin-top: 50px;
  border: 1px solid $primary;
  display: flex;
  justify-content: center;
  align-items: center;

  svg path {
    @include tr((fill));
  }

  &:hover {
    background-color: $primary;

    svg path {
      fill: white;
    }
  }
}

.promo-slide--beer-1 {
  .promo-slide__content-inner {
    width: 60%;
    flex-basis: 60%;
  }
}

.promo-slide--beer-3 .promo-slide__content-inner:before,
.promo-slide--beer-4 .promo-slide__content-inner:before {
  left: -10%;
}

.block__title {
  font-weight: 900;
  font-size: 48px;
  color: $black-dark;
  margin-bottom: 70px;

  span {
    color: $primary;
  }

  @media (max-width: 860px) {
    font-size: 32px;
    margin-bottom: 50px;
  }
  @media (max-width: 550px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
}

.after-slides-section {
  padding-top: 40px;
}

@include down("xl") {
  .promo-slide__title.big {
    font-size: 80px;
  }
  .promo-slide__title {
    font-size: 60px;
  }
  .promo-slide__title--small {
    font-size: 46px;
  }
  .promo-slide__content-inner:before {
    font-size: 600px;
  }
  .promo-slide__desc {
    font-size: 24px;
  }
  .promo-slide__items ul li {
    font-size: 18px;
  }
}

@media screen and (max-width: 1400px) {
  .promo-slide__bg {
    max-width: 1411px;
    left: 0;
  }
}

@include down("lg") {
  .promo-slide {
    height: auto;
    padding-bottom: 130px;

    .container {
      display: block;
      height: auto;
      padding-left: 0;
      padding-right: 0;
    }

    .anim-bottle {
      display: none;
    }
  }

  .promo-slide--beer-1,
  .promo-slide--water-1 {
    padding-bottom: 100px;
  }

  // .promo-slide--beer-3,
  // .promo-slide--water-3 {
  //   .promo-slide__content-inner:before {
  //     top: 20px;
  //   }
  // }
  .promo-slide--beer-4,
  .promo-slide--water-4 {
    .promo-slide__content-inner:before {
      top: 0px;
    }
  }
  .promo-slide-last {
    padding-bottom: 120px;
  }
  .promo-slide__content {
    padding: 0;
    margin: 0;
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
  }
  .promo-slide__content-inner {
    width: 100%;
    flex-basis: 100%;
    padding-left: 23px;
    padding-right: 23px;

    &:before {
      font-size: 400px;
      opacity: 1;
      top: 10px;
      transform: none;
      left: auto !important;
      right: 20px;
    }
  }

  .promo-slide__title,
  .promo-slide__desc,
  .promo-slide__items {
    max-width: 384px;
  }

  .promo-slide__items ul li {
    font-size: 18px;

    &:before {
      top: 0.4em;
    }
  }

  // .promo-slide__content-inner:before {
  //   top: -10px;
  // }

  .promo-slide-last .promo-slide__title {
    font-size: 31px;
  }

  .promo-slide__mobile-img {
    width: 100%;
    display: block;
  }

  .promo-slide__mobile-img img {
    width: 100%;
  }

  .promo-slide--beer-1 .promo-slide__content-inner,
  .promo-slide--water-1 .promo-slide__content-inner {
    width: 100%;
    flex-basis: 100%;
  }

  .promo-slide--beer-1 .promo-slide__mobile-img,
  .promo-slide--water-1 .promo-slide__mobile-img {
    margin-top: 20px;
    margin-bottom: -140px;
    margin-right: -40px;
    text-align: right;

    img {
      width: auto;
    }
  }

  .promo-slide__content-inner:before {
    z-index: -1;
  }

  .promo-slide__title {
    font-size: 32px;

    &--small {
      max-width: 340px;
    }
  }
  .promo-slide__title.big {
    font-size: 48px;
  }
  .promo-slide__desc {
    font-size: 18px;
  }
  .promo-slide__go-down {
    display: none;
  }

  .promo-slide__bg {
    display: none;
  }
  .promo-slide-trigger {
    display: none;
  }
  .promo-slide__button {
    max-width: 288px;
    font-size: 18px;
    height: 51px;
    padding-bottom: 2px;
  }
  .block__title--frontpage {
    max-width: 350px;
  }

  .block__title--frontpage--wide {
    max-width: 360px;
  }
}

@include down("md") {
  .promo-slide--beer-1,
  .promo-slide--water-1 {
    padding-bottom: 60px;
  }

  .promo-slide--beer-1 .promo-slide__mobile-img,
  .promo-slide--water-1 .promo-slide__mobile-img {
    margin-right: -20px;
    margin-bottom: -100px;
    top: -26px;
    margin-top: 0;
    margin-left: auto;
  }

  .promo-slide--beer-1 .promo-slide__mobile-img img,
  .promo-slide--water-1 .promo-slide__mobile-img img {
    max-width: 100%;
  }

  .promo-slide__content-inner:before {
    right: 0;
    left: auto;
    z-index: -1;
    top: -30px;
    line-height: 0.7;
  }
}

@include down("sm") {
  .promo-slide__title--small {
    font-size: 26px;
    max-width: 300px;
  }
  .promo-slide .promo-slide__content-inner:before {
    top: -30px;
    right: auto;
    left: 0;
  }

  .promo-slide--beer-2,
  .promo-slide--water-2 {
    .promo-slide__content-inner:before {
      top: 0;
      margin-left: -4px;
    }
  }
  .promo-slide--beer-3,
  .promo-slide--water-3 {
    .promo-slide__content-inner:before {
      top: 14px;
    }
  }
  .promo-slide--beer-4,
  .promo-slide--water-4 {
    .promo-slide__content-inner:before {
      top: 87px;
    }
  }
}

@media screen and (max-width: 350px) {
  .promo-slide__content-inner {
    padding-left: 15px;
    padding-right: 15px;
  }
}

/* end promo-slides */
</style>

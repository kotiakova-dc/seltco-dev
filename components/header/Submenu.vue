<!--<template>
  <div class="submenu">
    <nuxt-link
      class="submenu__item"
      v-for="(item, idx) in submenu"
      :key="idx"
      :to="item.link"
      :style="`background-image: url('${require(`../../assets/img/${item.img}`)}')`"
    >
      <div class="submenu__item-wrap">
        <h4 class="submenu__item-title">{{ item.title }}</h4>
        <div class="submenu__item-btn"><svgicon name="arrow-slider" /></div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    submenu: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
.submenu {
  display: grid;
  transition: 0.3s ease-out;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 75px;
  left: 0;
  grid-template-columns: repeat(2, 220px);
  gap: 2px;
  z-index: 10;
  &__item-wrap {
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0.713542) 28.65%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__item {
    cursor: pointer;
    height: 155px;
    background: $white;
    background-repeat: no-repeat;
    background-size: 0%;
    box-shadow: 0px 2px 2px 1px rgb(0 0 0 / 16%);
    overflow: hidden;

    &-title {
      font-size: 14px;
      transition: 0.3s ease-out;
      color: #57595a;
    }
    &-btn {
      width: 40px;
      height: 40px;
      margin-left: -6px;
      svg rect {
        &:first-child {
          fill: #57595a;
        }
      }
    }
    &:hover {
      background-size: 100%;
      .submenu__item-title {
        color: #1b2ac9;
      }

      .submenu__item-btn {
        svg rect {
          &:first-child {
            fill: #1b2ac9;
          }
        }
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -29px;
    left: -6px;
    background: url("~assets/svg/angle.svg") no-repeat;
    width: 100%;
    height: 40px;
    z-index: -1;
  }
}
</style>
 <a href="#" class="btn btn--glassmorph">О ферме</a> 
    <div class="hero-slider__dots"></div>

    <svg class="go go-next" width="32" height="55" viewBox="0 0 40 55">
      <polyline points="3 3 30 28 3 53"></polyline>
    </svg>
    <svg class="go go-prev" viewBox="0 0 40 55">
      <polyline points="28 3 3 28 28 53"></polyline>
    </svg>
    <div class="hero-slider">
      <div class="hero-slide active" id="slide01">
        <div class="cows-container">
          <div class="cow-1">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-1.png')"
              alt="Корова"
              class="cow-body-1 img-absolute"
            />

            <img
              :src="require('@/assets/img/hero-slider/cow-tail-1.png')"
              alt="Корова"
              class="cow-tail-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-1.png/')"
              alt="Корова"
              class="cow-head-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-left-1.png')"
              alt="Корова"
              class="cow-ear-left-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-right-1.png/')"
              alt="Корова"
              class="cow-ear-right-1 img-absolute"
            />
          </div>
          <div class="cow-2">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-2.png')"
              alt="Корова"
              class="cow-body-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-tail-2.png')"
              alt="Корова"
              class="cow-tail-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-leg-2.png')"
              alt="Корова"
              class="cow-leg-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-2.png')"
              alt="Корова"
              class="cow-head-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-left-2.png')"
              alt="Корова"
              class="cow-ear-left-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-right-2.png')"
              alt="cow"
              class="cow-ear-right-2 img-absolute"
            />
          </div>
          <div class="cow-3">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-3.png')"
              alt="Корова"
              class="cow-body-3 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-3.png')"
              alt="Корова"
              class="cow-head-3 img-absolute"
            />
          </div>
          <div class="cow-4">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-4.png')"
              alt="Корова"
              class="cow-body-4 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-4.png')"
              alt="Корова"
              class="cow-head-4 img-absolute"
            />
          </div>
          <div class="cows-sm">
            <img
              :src="require('@/assets/img/hero-slider/cows-sm-body.png')"
              alt="Корова"
              class="cows-body-sm img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-sm-head1.png')"
              alt="Корова"
              class="cows-head-sm1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-sm-head2.png')"
              alt="Корова"
              class="cows-head-sm2 img-absolute"
            />
          </div>
        </div>
        <div class="grass-animated1">
          <img
            :src="require('@/assets/img/hero-slider/grass-anim1.png')"
            alt="Травинка"
            class="grass-anim grass-anim1"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim2.png')"
            alt="Травинка"
            class="grass-anim grass-anim2"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim3.png')"
            alt="Травинка"
            class="grass-anim grass-anim3"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim4.png')"
            alt="Травинка"
            class="grass-anim grass-anim4"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim5.png')"
            alt="Травинка"
            class="grass-anim grass-anim5"
          />
        </div>

        <div class="grass-container-2">
          <div class="grass-animated2">
            <img
              :src="require('@/assets/img/hero-slider/grass-anim6.png')"
              alt="Травинка"
              class="grass-anim grass-anim6"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim7.png')"
              alt="Травинка"
              class="grass-anim grass-anim7"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim8.png')"
              alt="Травинка"
              class="grass-anim grass-anim8"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim9.png')"
              alt="Травинка"
              class="grass-anim grass-anim9"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim10.png')"
              alt="Травинка"
              class="grass-anim grass-anim10"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim11.png')"
              alt="Травинка"
              class="grass-anim grass-anim11"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim12.png')"
              alt="Травинка"
              class="grass-anim grass-anim12"
            />
          </div>

          <img
            :src="require('@/assets/img/hero-slider/grass3.png')"
            alt=""
            class="grass3 img-absolute"
          />

          <img
            :src="require('@/assets/img/hero-slider/grass2.png')"
            alt=""
            class="grass2 img-absolute"
          />
        </div>

        <img
          :src="require('@/assets/img/hero-slider/grass1.png')"
          alt=""
          class="grass1 img-absolute"
        />

        <img
          :src="require('@/assets/img/hero-slider/scene1.png')"
          alt=""
          class="scene1 img-absolute"
        />
      </div>
      <div class="hero-slide" id="slide02">
        <div class="hero__overlay"></div>
        <div class="cows-container">
          <div class="cow-1">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-1.png')"
              alt="Корова"
              class="cow-body-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-tail-1.png')"
              alt="Корова"
              class="cow-tail-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-1.png')"
              alt="Корова"
              class="cow-head-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-left-1.png')"
              alt="Корова"
              class="cow-ear-left-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-right-1.png')"
              alt="Корова"
              class="cow-ear-right-1 img-absolute"
            />
          </div>
          <div class="cow-2">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-2.png')"
              alt="Корова"
              class="cow-body-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-tail-2.png')"
              alt="Корова"
              class="cow-tail-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-leg-2.png')"
              alt="Корова"
              class="cow-leg-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-2.png')"
              alt="Корова"
              class="cow-head-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-left-2.png')"
              alt="Корова"
              class="cow-ear-left-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-right-2.png')"
              alt="cow"
              class="cow-ear-right-2 img-absolute"
            />
          </div>
          <div class="cow-3">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-3.png')"
              alt="Корова"
              class="cow-body-3 img-absolute"
            />
            <img
              src="img/cow-head-3.png"
              alt="Корова"
              class="cow-head-3 img-absolute"
            />
          </div>
          <div class="cow-4">
            <img
              src="img/cow-body-4.png"
              alt="Корова"
              class="cow-body-4 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-4.png')"
              alt="Корова"
              class="cow-head-4 img-absolute"
            />
          </div>
          <div class="cows-sm">
            <img
              src="img/cows-sm-body.png"
              alt="Корова"
              class="cows-body-sm img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-sm-head1.png')"
              alt="Корова"
              class="cows-head-sm1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-sm-head2.png')"
              alt="Корова"
              class="cows-head-sm2 img-absolute"
            />
          </div>
        </div>
        <div class="grass-animated1">
          <img
            :src="require('@/assets/img/hero-slider/grass-anim1.png')"
            alt="Травинка"
            class="grass-anim grass-anim1"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim2.png')"
            alt="Травинка"
            class="grass-anim grass-anim2"
          />
          <img
            src="img/grass-anim3.png"
            alt="Травинка"
            class="grass-anim grass-anim3"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim4.png')"
            alt="Травинка"
            class="grass-anim grass-anim4"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim5.png')"
            \
            alt="Травинка"
            class="grass-anim grass-anim5"
          />
        </div>

        <div class="grass-container-2">
          <div class="grass-animated2">
            <img
              :src="require('@/assets/img/hero-slider/grass-anim6.png')"
              alt="Травинка"
              class="grass-anim grass-anim6"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim7.png')"
              alt="Травинка"
              class="grass-anim grass-anim7"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim8.png')"
              alt="Травинка"
              class="grass-anim grass-anim8"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim9.png')"
              alt="Травинка"
              class="grass-anim grass-anim9"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim10.png')"
              alt="Травинка"
              class="grass-anim grass-anim10"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim11.png')"
              alt="Травинка"
              class="grass-anim grass-anim11"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim12.png')"
              alt="Травинка"
              class="grass-anim grass-anim12"
            />
          </div>
          <picture
            ><source srcset="img/grass3.webp" type="image/webp" />
            <img src="img/grass3.png" alt="" class="grass3 img-absolute"
          /></picture>
          <picture
            ><source srcset="img/grass2.webp" type="image/webp" />
            <img src="img/grass2.png" alt="" class="grass2 img-absolute"
          /></picture>
        </div>
        <picture
          ><source srcset="img/grass1.webp" type="image/webp" />
          <img src="img/grass1.png" alt="" class="grass1 img-absolute"
        /></picture>

        <picture
          ><source srcset="img/scene1.webp" type="image/webp" />
          <img src="img/scene1.png" alt="" class="scene1 img-absolute"
        /></picture>
        <div class="hero__herbs-container">
          <span class="hero__herb-img"
            ><img
              :src="require('@/assets/img/hero-slider/hero-herb1.png')"
              alt="Луговые травы"
              class="hero__herb hero__herb1"
          /></span>
          <span class="hero__herb-img">
            <img
              :src="require('@/assets/img/hero-slider/hero-herb2.png')"
              alt="Луговые травы"
              class="hero__herb hero__herb2"
            />
          </span>

          <span class="hero__herb-img">
            <img
              :src="require('@/assets/img/hero-slider/hero-herb3.png')"
              alt="Луговые травы"
              class="hero__herb hero__herb3"
            />
          </span>
          <span class="hero__herb-img">
            <img
              :src="require('@/assets/img/hero-slider/hero-herb4.png')"
              alt="Луговые травы"
              class="hero__herb hero__herb4"
            />
          </span>
          <span class="hero__herb-img herb-circle--animated">
            <img
              src="img/hero-herb5.png"
              alt="Луговые травы"
              class="hero__herb hero__herb5"
            />
          </span>
        </div>
      </div>
      <div class="hero-slide" id="slide03">
        <div class="grass-animated1">
          <img
            :src="require('@/assets/img/hero-slider/grass-anim1.png')"
            alt="Травинка"
            class="grass-anim grass-anim1"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim2.png')"
            alt="Травинка"
            class="grass-anim grass-anim2"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim3.png')"
            alt="Травинка"
            class="grass-anim grass-anim3"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim4.png')"
            alt="Травинка"
            class="grass-anim grass-anim4"
          />
          <img
            :src="require('@/assets/img/hero-slider/grass-anim5.png')"
            alt="Травинка"
            class="grass-anim grass-anim5"
          />
        </div>

        <div class="grass-container-2">
          <div class="grass-animated2">
            <img
              :src="require('@/assets/img/hero-slider/grass-anim6.png')"
              alt="Травинка"
              class="grass-anim grass-anim6"
            />
            <img
              :src="require('@/assets/img/hero-slider/grass-anim7.png')"
              alt="Травинка"
              class="grass-anim grass-anim7"
            />
          </div>
          <picture
            ><source srcset="img/grass3.webp" type="image/webp" />
            <img src="img/grass3.png" alt="" class="grass3 img-absolute"
          /></picture>
          <picture
            ><source srcset="img/grass2.webp" type="image/webp" />
            <img src="img/grass2.png" alt="" class="grass2 img-absolute"
          /></picture>
        </div>
        <picture
          ><source srcset="img/grass1.webp" type="image/webp" />
          <img src="img/grass1.png" alt="" class="grass1 img-absolute"
        /></picture>

        <picture
          ><source srcset="img/scene1.webp" type="image/webp" />
          <img src="img/scene1.png" alt="" class="scene1 img-absolute"
        /></picture>
        <div class="cows-container">
          <div class="cow-1">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-1.png')"
              alt="Корова"
              class="cow-body-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-tail-1.png')"
              alt="Корова"
              class="cow-tail-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-1.png')"
              alt="Корова"
              class="cow-head-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-left-1.png')"
              alt="Корова"
              class="cow-ear-left-1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-right-1.png')"
              alt="Корова"
              class="cow-ear-right-1 img-absolute"
            />
          </div>
          <div class="cow-2">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-2.png')"
              alt="Корова"
              class="cow-body-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-tail-2.png')"
              alt="Корова"
              class="cow-tail-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-leg-2.png')"
              alt="Корова"
              class="cow-leg-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-2.png')"
              alt="Корова"
              class="cow-head-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-left-2.png')"
              alt="Корова"
              class="cow-ear-left-2 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-right-2.png')"
              alt="cow"
              class="cow-ear-right-2 img-absolute"
            />
          </div>
          <div class="cow-3">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-3.png')"
              alt="Корова"
              class="cow-body-3 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-3.png')"
              alt="Корова"
              class="cow-head-3 img-absolute"
            />
          </div>
          <div class="cow-4">
            <img
              :src="require('@/assets/img/hero-slider/cow-body-4.png')"
              alt="Корова"
              class="cow-body-4 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-head-4.png')"
              alt="Корова"
              class="cow-head-4 img-absolute"
            />
          </div>
          <div class="cows-sm">
            <img
              :src="require('@/assets/img/hero-slider/cows-sm-body.png')"
              alt="Корова"
              class="cows-body-sm img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-sm-head1.png')"
              alt="Корова"
              class="cows-head-sm1 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-sm-head2.png')"
              alt="Корова"
              class="cows-head-sm2 img-absolute"
            />
          </div>
        </div>

        <picture
          ><source srcset="img/scene1.webp" type="image/webp" />
          <img src="img/scene1.png" alt="" class="scene2 img-absolute"
        /></picture>
        <picture
          ><source srcset="img/scene3.webp" type="image/webp" />
          <img src="img/scene3.png" alt="" class="scene3 img-absolute"
        /></picture>
        <div class="cow-5">
          <div class="cow-head-cont-5">
            <img
              :src="require('@/assets/img/hero-slider/cow-head-5.png')"
              alt="Корова"
              class="cow-head-5 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-left-5.png')"
              alt="Корова"
              class="cow-ear-left-5 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-ear-right-5.png')"
              alt="Корова"
              class="cow-ear-right-5 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-eyes-5.png')"
              alt="Корова"
              class="cow-eyes-5 img-absolute"
            />
            <img
              :src="require('@/assets/img/hero-slider/cow-eyes-close-5.png')"
              alt="Корова"
              class="cow-eyes-5 cow-eyes-close-5 img-absolute"
            />
          </div>
          <img
            :src="require('@/assets/img/hero-slider/cow-body-5.png')"
            alt="cow"
            class="cow-body-5 img-absolute"
          />
        </div>
      </div>
      <div class="hero-slide" id="slide04">
        <picture
          ><source srcset="img/scene3.webp" type="image/webp" />
          <img src="img/scene3.png" alt="" class="scene33 img-absolute"
        /></picture>

        <picture
          ><source srcset="img/scene4.webp" type="image/webp" />
          <img src="img/scene4.png" alt="" class="scene4 img-absolute"
        /></picture>
      </div>
      <div class="hero-slide" id="slide05">
        <div class="hero-slide__btns">
          <a
            href="#"
            class="btn btn--glassmorph hero-slide__btn"
            data-popup="#popup"
            >О ферме</a
          >
          <a href="#" class="btn btn--glassmorph hero-slide__btn">Документы</a>
          <a href="#" class="btn btn--glassmorph hero-slide__btn">Новости</a>
        </div>

        <img
          :src="require('@/assets/img/hero-slider/scene4.png')"
          alt=""
          class="scene4-scaled img-absolute"
        />

        <img
          :src="require('@/assets/img/hero-slider/scene5.png')"
          alt=""
          class="scene5 img-absolute"
        />
      </div>
    </div>
    <div class="next-section"></div>
    <div class="next-section"></div>
    <div class="next-section"></div>
  </div>
  <div class="fullscreen-banner__wrap">
    <Header />
    <div class="fullscreen-banner" v-if="$route.name === 'solutions'">
      <div>
        <picture class="fullscreen-banner__img">
          <source
            :srcset="require('@/assets/img/2-640.jpg')"
            type="image/png"
            media="(max-width: 640px)"
          />
          <img :src="require('@/assets/img/2.jpg')" alt="bg" />
        </picture>
      </div>
      <h1 class="fullscreen-banner__title">Готовые решения</h1>
    </div>
    <div
      class="fullscreen-banner fullscreen-banner--partners"
      v-if="$route.name === 'partners'"
    >
      <div>
        <picture class="fullscreen-banner__img">
          <source
            :srcset="require('@/assets/img/banner-partners640.jpg')"
            type="image/png"
            media="(max-width: 640px)"
          />
          <img :src="require('@/assets/img/banner-partners.jpg')" alt="bg" />
        </picture>
      </div>
      <h1 class="fullscreen-banner__title">Партнерам</h1>
    </div>
    <div
      class="fullscreen-banner fullscreen-banner--partners"
      v-if="$route.name === 'concept'"
    >
      <div>
        <picture class="fullscreen-banner__img">
          <source
            :srcset="require('@/assets/img/concept-640.jpg')"
            type="image/png"
            media="(max-width: 640px)"
          />
          <img :src="require('@/assets/img/concept.jpg')" alt="bg" />
        </picture>
      </div>

      <h1 class="fullscreen-banner__title text-center">
        Концепция <br />
        компании
      </h1>
    </div>
    <div class="fullscreen-banner" v-if="$route.name === 'company'">
      <div>
        <picture class="fullscreen-banner__img">
          <source
            :srcset="require('@/assets/img/company640.jpg')"
            type="image/png"
            media="(max-width: 640px)"
          />
          <img :src="require('@/assets/img/company.jpg')" alt="bg" />
        </picture>
      </div>

      <h1 class="fullscreen-banner__title text-center">О компании</h1>
    </div>
  </div> 
  </div>
</template>
<script>
import ModalLarge from "@/components/ModalLarge";
import ModalMedium from "@/components/ModalMedium";

export default {
  name: "App",
  components: {
    ModalLarge,
    ModalMedium,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    openModal() {
      this.visible = true;
      let bodyLock = document.querySelector("body");
      bodyLock.classList.add("lock");
    },
    close() {
      this.visible = false;
      let bodyLock = document.querySelector("body");
      bodyLock.classList.remove("lock");
    },
  },
};
</script>
<style lang="scss">
.hero {
  height: 100vh;
  widows: 100vw;
  background-image: url("~assets/img/hero-slider/scene1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.hero-slide__btns {
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 50%;
  top: 74%;
  transform: translateX(-50%);
}
.hero-slide__btn {
  position: relative;
  &:nth-child(2) {
    margin-left: 80px;
    margin-right: 80px;
  }
}
</style>
-->

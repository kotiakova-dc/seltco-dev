<template>
  <div>
    <div class="hero__container" id="container">
      <div class="wrapper" id="wrapper">
        <div class="hero-slide__btns">
          <b-button
            @click="pauseScrollTrigger"
            class="btn btn--glassmorph hero-slide__btn"
            v-b-modal.hero-modal-about
            >О ферме</b-button
          >
          <b-button
            @click="pauseScrollTrigger"
            class="btn btn--glassmorph hero-slide__btn"
            v-b-modal.hero-modal-docs
            >Документы</b-button
          >
          <b-button
            @click="pauseScrollTrigger"
            class="btn btn--glassmorph hero-slide__btn"
            v-b-modal.hero-modal-news
            >Новости</b-button
          >
        </div>

        <img
          :src="require('@/assets/img/hero-slider/grass2.png')"
          alt=""
          class="grass2 img-absolute"
        />
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

        <img
          :src="require('@/assets/img/hero-slider/scene-main.svg')"
          alt=""
          class="scene1"
        />
        <div class="hero__overlay"></div>
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
              :src="require('@/assets/img/hero-slider/hero-herb5.png')"
              alt="Луговые травы"
              class="hero__herb hero__herb5"
            />
          </span>
        </div>

        <img
          :src="require('@/assets/img/hero-slider/scene-main2.svg')"
          alt=""
          class="scene2"
        />
      </div>
    </div>

    <!--
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
      </div>
      <div class="hero-slide" id="slide02">
        <div class="hero__overlay"></div>

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
              :src="require('@/assets/img/hero-slider/hero-herb5.png')"
              alt="Луговые травы"
              class="hero__herb hero__herb5"
            />
          </span>
        </div>
      </div>
      <div class="hero-slide" id="slide03">
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
      <div class="hero-slide" id="slide04"></div>
      <div class="hero-slide" id="slide05">
        <img
          :src="require('@/assets/img/hero-slider/scene5.png')"
          alt=""
          class="scene3 img-absolute"
        />
      </div>
    </div> -->
    <div class="next-section"></div>
    <div class="next-section"></div>
    <div class="next-section"></div>

    <ModalsHeroAbout v-on:test="doSmth" />
    <ModalsHeroDocs />
    <ModalsHeroNews />
  </div>
</template>
<script>
import SmoothScrollbar from "smooth-scrollbar";
export default {
  methods: {
    scrollAnimation() {
      let bodyScrollBar = SmoothScrollbar.init(document.body, {
        damping: 0.1,
        delegateTo: document,
        speed: 0.2,
        overscrollDamping: 0.1,
        overscrollEffect: "glow",
      });

      bodyScrollBar.setPosition(0, 0);
      bodyScrollBar.track.xAxis.element.remove();

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value;
          }
          return bodyScrollBar.scrollTop;
        },
      });

      bodyScrollBar.addListener(ScrollTrigger.update);
      // remove fix when scrolled past last point scrolltrigger
      const addFixedBg = () => {
        const scrollContent = document.querySelector(".scroll-content");
        scrollContent.classList.add("fix-scroll");
      };
      addFixedBg();
      const removeFixedBg = () => {
        const scrollContent = document.querySelector(".scroll-content");
        scrollContent.classList.remove("fix-scroll");
      };

      gsap.registerPlugin("ScrollTrigger");
      ScrollTrigger.create({
        trigger: "#container",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "+=18000",
        toggleActions: "restart pause resume pause",
        onEnterBack: () => addFixedBg(),
        onLeave: () => removeFixedBg(),
        onLeaveBack: () => removeFixedBg(),
      });

      let scene = gsap.timeline();

      let part0_tl = gsap.timeline({
        scrollTrigger: {
          start: 0,
          end: 2000,
          scrub: 1,
        },
      });
      let part1_tl = gsap.timeline({
        scrollTrigger: {
          start: 3000,
          end: 4000,
          scrub: 1,
        },
      });
      let part2_tl = gsap.timeline({
        scrollTrigger: {
          start: 4000,
          end: 6000,
          scrub: 1,
        },
      });

      let part3_tl = gsap.timeline({
        scrollTrigger: {
          start: 6000,
          end: 8000,
          scrub: 1,
        },
      });
      let part4_tl = gsap.timeline({
        scrollTrigger: {
          start: 8000,
          end: 12000,
          scrub: 1,
        },
      });
      let part5_tl = gsap.timeline({
        scrollTrigger: {
          start: 12000,
          end: 14000,
          scrub: 1,
        },
      });
      let part6_tl = gsap.timeline({
        scrollTrigger: {
          start: 14000,
          end: 16000,
          scrub: 1,
        },
      });
      let part7_tl = gsap.timeline({
        scrollTrigger: {
          start: 16000,
          end: 18000,
          scrub: 1,
        },
      });
      // TIMELINE: Part 0
      part0_tl
        // NEW ANIMATION
        ///
        .fromTo(
          ".scene1",
          {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
          },
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 0,
          }
        )
        .fromTo(
          ".scene2",
          {
            opacity: 0,
          },
          {
            opacity: 0,
          }
        )
        .fromTo(
          ".grass2",
          {
            yPercent: 30,
          },
          {
            yPercent: -95,

            ease: "sine.out",
          }
        )
        .fromTo(
          ".hero__herbs-container",
          {
            opacity: 0,
          },
          {
            opacity: 1,

            ease: "sine.out",
          },
          "-=0.3"
        );
      // TIMELINE: Part 1
      part1_tl
        // NEW ANIMATION
        .fromTo(
          ".cows-container",
          {
            scale: 1,
            yPercent: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            ease: "sine.out",
          }
        )
        ///
        .fromTo(
          ".scene1",
          {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
          },
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 0,
          }
        )
        .fromTo(
          ".scene2",
          {
            opacity: 0,
          },
          {
            opacity: 0,
          }
        )
        .fromTo(
          ".grass2",
          {
            yPercent: -95,
          },
          {
            yPercent: -95,
            ease: "sine.out",
          }
        )
        .fromTo(
          ".hero__herbs-container",
          {
            opacity: 1,
          },
          {
            opacity: 1,
            ease: "sine.out",
          }
        );
      // .fromTo(
      //   ".grass1",
      //   {
      //     x: 0,
      //     y: 0,
      //   },
      //   {
      //     x: 0,
      //     y: 500,

      //     ease: "sine.out",
      //   }
      // )

      // TIMELINE: Part 2
      part2_tl
        // NEW ANIMATION
        .fromTo(
          ".cows-container",
          {
            scale: 1,
            yPercent: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            ease: "sine.out",
          }
        )
        ///
        .fromTo(
          ".scene2",
          {
            opacity: 0,
          },
          {
            opacity: 0,
          }
        )
        .fromTo(
          ".scene1",
          {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
          },
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
          }
        )
        .fromTo(
          ".grass2",
          {
            yPercent: -95,
          },
          {
            yPercent: 30,

            ease: "sine.out",
          }
        )
        .fromTo(
          ".hero__herbs-container",
          {
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 0.2,
            ease: "sine.out",
          },
          "-=0.1"
        );

      // TIMELINE: Part 3
      part3_tl
        // NEW ANIMATION
        .fromTo(
          ".cows-container",
          {
            scale: 1,
            yPercent: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            ease: "sine.out",
          }
        )
        ///
        .fromTo(
          ".scene2",
          {
            opacity: 0,
          },
          {
            opacity: 0,
          }
        )
        .fromTo(
          ".scene1",
          {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
          }
        )
        .fromTo(
          ".grass2",
          {
            yPercent: 30,
          },
          {
            yPercent: 30,
            ease: "sine.out",
          }
        )
        .fromTo(
          ".hero__herbs-container",
          {
            opacity: 0,
          },
          {
            opacity: 0,
          }
        );

      // TIMELINE: Part 4
      part4_tl
        .fromTo(
          ".scene1",
          {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
          },
          {
            scale: 5,
            xPercent: -30,
            yPercent: -60,

            ease: "expoScale(1, 5)",
          },
          "-=0.5"
        )
        .fromTo(
          ".scene2",
          {
            opacity: 0,
          },
          {
            opacity: 0,
          }
        )

        // NEW ANIMATION
        .fromTo(
          ".cows-container",
          {
            scale: 1,
            yPercent: 0,
          },
          {
            scale: 3,
            yPercent: 30,
            ease: "expoScale(1, 3)",
          },
          "-=0.5"
        );

      ///
      // .fromTo(
      //   ".grass1",
      //   {
      //     x: 0,
      //     opacity: 1,
      //     y: 200,
      //   },
      //   {
      //     y: 500,
      //     duration: 1,

      //     ease: "sine.out",
      //   }
      // )

      // TIMELINE: Part 5
      part5_tl
        // NEW ANIMATION
        ///
        .fromTo(
          ".scene1",
          {
            scale: 5,
            xPercent: -30,
            yPercent: -60,
          },
          {
            scale: 27.09,
            yPercent: -448.9,
            xPercent: -129.1,
            ease: "expoScale(5, 27.09)",
          }
        )
        .fromTo(
          ".scene2",
          {
            opacity: 0,
          },
          {
            opacity: 0,
          },
          "-=0.3"
        );
      part6_tl.fromTo(
        ".scene2",
        {
          scale: 1,
          yPercent: 0,
          xPercent: 0,
          opacity: 0,
        },
        {
          scale: 1,
          yPercent: 0,
          xPercent: 0,
          opacity: 1,
          duration: 0,
          ease: "sine.out",
        }
      );
      part7_tl

        // NEW ANIMATION
        ///
        .fromTo(
          ".scene2",
          {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
            opacity: 1,
          },
          {
            scale: 14,
            yPercent: -60,
            xPercent: -20,
            opacity: 1,
            ease: "sine.out",
          }
        );

      // TIMELINE: Main
      scene

        .set(".grass1", { x: 0, y: 0 })
        .set(".grass2", { x: 0, yPercent: 100 })
        .set(".scene1", { xPercent: 0, yPercent: 0, scale: 1 })
        .set(".scene2", { xPercent: 0, yPercent: 0, scale: 1, opacity: 0 })
        .set(".hero__herbs-container", { opacity: 0 })

        .set(".cow-5", { xPercent: 200, yPercent: 0 })
        .add(part0_tl)
        .add(part1_tl)
        .add(part2_tl)
        .add(part3_tl)
        .add(part4_tl)
        .add(part5_tl)
        .add(part6_tl)
        .add(part7_tl);
    },

    pauseScrollTrigger() {
      // ScrollTrigger.kill();
    },
    doSmth() {
      //console.log(1)
    },
  },
  mounted() {
    this.scrollAnimation();
    // window.addEventListener("click", function (event) {
    // if (
    //   document.querySelector("body").classList.contains("modal-open") &&
    //   event.target != this.document.querySelectorAll(".modal-content")
    // ) {
    // this.document
    //   .querySelector(".scroll-content")
    //   .classList.add("fix-scroll");
    // this.document
    //   .querySelector(".scrollbar-track-y")
    //   .classList.add("d-none");
    // }
    // });
  },
};
</script>
<style lang="scss">
.d-none {
  display: none !important;
}
.hero-slide__btns {
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 50%;
  top: 74%;
  transform: translateX(-50%);
}
.hero-slide__btn {
  &:nth-child(2) {
    margin-left: 80px;
    margin-right: 80px;
  }
}

.hero__herbs-container {
  position: absolute;

  max-width: 1200px;
  width: 100%;
  height: auto;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.hero__herb {
  position: relative;
}
.grass-animated1 {
  position: absolute;
  bottom: 0;
  z-index: 92;
  width: 100vw;
}

/// next-section
.next-section {
  height: 100vh;
  width: 100vw;
  background: #6a8086;
}
.body-fixed {
  overflow-x: scroll;
  position: fixed;
  height: 100%;

  width: 100vw;
}

.scene3 {
  z-index: 38;
}
.scene4-scaled {
  z-index: 10;
  width: 100vw;
  top: 0;
  height: 100%;
}
//////////////// HERBS DESCRIPTION
//////////////// LAST SLIDE BUTTONS
.hero-slide__btns {
  position: absolute;
  z-index: 300;
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

.hero__herb-img {
  background-color: #ccd390;
  border-radius: 50%;
  border: 6px solid #fff;
  overflow: hidden;
  height: 177px;
  width: 177px;
  position: relative;
  box-sizing: border-box;
}
.hero__herb {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.next-section {
  height: 100vh;
  width: 100vw;
  background: #6a8086;
}
.body-fixed {
  overflow-x: scroll;
  position: fixed;
  height: 100%;

  width: 100vw;
}

F .hero-slide__btns {
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 50%;
  top: 74%;
  transform: translateX(-50%);
}
.img-absolute {
  position: absolute;
}
.hero__container {
  width: 100%;
  height: 100vh !important;
  display: grid;
  place-items: center;
  position: fixed;
  overflow: hidden;
}
.wrapper {
  width: 100%;
  max-width: 100vw;
  height: 100%;
  position: fixed !important;
  overflow: hidden;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.grass1 {
  position: absolute;
  z-index: 10;
  width: 100vw;
  bottom: 0;
}
.grass2 {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  bottom: -100%;
}
.scene1,
.scene2 {
  position: absolute;
  z-index: 1;

  top: 0;

  bottom: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: 57% 50%;
}
/* slide 2 */
.hero__herbs-container {
  position: absolute;

  max-width: 1200px;
  width: 100%;
  height: auto;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.hero__herb {
  position: relative;
}
.hero__herb-img {
  background-color: #ccd390;
  border-radius: 50%;
  border: 6px solid #fff;
  overflow: hidden;
  height: 177px;
  width: 177px;
  position: relative;
  box-sizing: border-box;
}
.hero__herb {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hero__herb1 {
  top: 53%;
}
.hero__herb2 {
  top: 56%;
}
.hero__herb3 {
  top: 59%;
}
.hero__herb4 {
  top: 59%;
}
.hero__herb5 {
  top: 56%;
}
/* slide 3 */
.cow-5 {
  position: absolute;
  display: block;
  z-index: 39;
  max-width: 890px;
  width: 100%;
  height: 960px;
  top: 68%;
  left: 100%;
}
.cow-head-cont-5 {
  position: absolute;
  z-index: 100;
}
.cow-head-5 {
  z-index: 101;
  top: -201px;
  left: -68px;
}
.cow-ear-left-5 {
  top: -152px;
  left: -52px;
}
.cow-ear-right-5 {
  top: -51px;
  left: 153px;
}
.cow-eyes-5 {
  z-index: 102;
  left: -21px;
  top: -35px;
}
.cow-eyes-close-5 {
  opacity: 0;
}

section {
  height: 100vh;
  width: 100vw;
  display: block;
  background-color: #ccd390;
}
[data-scrollbar] {
  display: block;
  position: relative;
}
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scroll-area {
  position: relative;
  height: 100%;
}
.fix-scroll {
  position: fixed;
  transform: none !important;
}
.scrollbar-track {
  position: absolute;
  opacity: 0;
  z-index: 1;
  background: #3a0c53;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: opacity 0.5s 0.5s ease-out;
  transition: opacity 0.5s 0.5s ease-out;
}

.scrollbar-track.show,
.scrollbar-track:hover {
  opacity: 1;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

.scrollbar-track-x {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

.scrollbar-track-y {
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
}

.scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 0;
}

.cows-container {
  z-index: 4;
  max-width: 1500px;
  height: 100%;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  overflow: hidden;
}
.cow-1 {
  position: absolute;
  display: block;
  z-index: 100;
  max-width: 470px;
  width: 100%;
  height: 400px;
  top: 58vh;
  right: -53px;
}
.cow-2 {
  position: absolute;
  display: block;
  z-index: 99;
  max-width: 300px;
  width: 100%;
  height: 200px;
  top: 62vh;
  left: 94px;
}
.cow-3 {
  position: absolute;
  display: block;
  z-index: 97;
  max-width: 200px;
  width: 100%;
  height: 122px;
  top: 70vh;
  right: 396px;
}
.cow-4 {
  position: absolute;
  display: block;
  z-index: 95;
  max-width: 130px;
  width: 100%;
  height: 80px;

  top: 72vh;
  left: 528px;
}
.cow-5 {
  position: absolute;
  display: block;
  z-index: 39;
  max-width: 890px;
  width: 100%;
  height: 960px;
  top: 68%;
  left: 60%;
}
.cows-body-sm {
  z-index: 102;
}
.cows-sm {
  position: absolute;
  display: block;
  z-index: 90;
  max-width: 130px;
  width: 100%;
  height: 55px;
  top: 70vh;
  right: 627px;
}
.img-absolute {
  position: absolute;
  display: block;
}
.cow-tail-1 {
  right: 88px;
  top: 150px;
}
.cow-head-1 {
  top: 19px;
  left: 28px;
  z-index: 101;
}
.cow-ear-left-1 {
  top: 23px;
  left: 36px;
}
.cow-ear-right-1 {
  top: 68px;
  left: 108px;
}
/* cow 2 */
.cow-tail-2 {
  top: 53px;
}
.cow-leg-2 {
  right: 61px;
  top: 154px;
}
.cow-head-2 {
  top: 25px;
  right: -21px;
  z-index: 101;
}
.cow-ear-left-2 {
  top: 36px;
  right: 31px;
  z-index: 100;
}
.cow-ear-right-2 {
  top: 43px;
  right: -14px;
}
/* cow 3*/
.cow-head-3 {
  top: 6px;
  left: -1px;
  z-index: 101;
}
/* cow 4*/
.cow-head-4 {
  top: -5px;
  right: 0px;
  z-index: 101;
}
/* cow 5 & 6*/
.cows-head-sm1 {
  top: 0px;
  left: 41px;
  z-index: 101;
}
/* cow 5 */
.cow-head-cont-5 {
  position: absolute;
  z-index: 100;
}
.cow-head-5 {
  z-index: 101;
  top: -201px;
  left: -68px;
}
.cow-ear-left-5 {
  top: -152px;
  left: -52px;
}
.cow-ear-right-5 {
  top: -51px;
  left: 153px;
}
.cow-eyes-5 {
  z-index: 102;
  left: -21px;
  top: -35px;
}
.cow-eyes-close-5 {
  opacity: 0;
}
.cows-head-sm2 {
  top: 16px;
  right: 35px;
  z-index: 101;
}
</style>

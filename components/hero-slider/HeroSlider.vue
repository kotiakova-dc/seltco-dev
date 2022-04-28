<template>
  <div>
 <div class="hero-slide__btns">
         
  
      <b-button class="btn btn--glassmorph hero-slide__btn" v-b-modal.hero-modal-about>О ферме</b-button>
 <b-button class="btn btn--glassmorph hero-slide__btn" v-b-modal.hero-modal-docs>Документы</b-button>
 <b-button class="btn btn--glassmorph hero-slide__btn" v-b-modal.hero-modal-news>Новости</b-button>

        </div>
    <div class="hero-slider__dots"></div>

    <!-- <svg class="go go-next" width="32" height="55" viewBox="0 0 40 55">
      <polyline points="3 3 30 28 3 53"></polyline>
    </svg>
    <svg class="go go-prev" viewBox="0 0 40 55">
      <polyline points="28 3 3 28 28 53"></polyline>
    </svg> -->

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
            <img :src="require('@/assets/img/hero-slider/cow-head-3.png')"
        
              alt="Корова"
              class="cow-head-3 img-absolute"
            />
          </div>
          <div class="cow-4">
            <img :src="require('@/assets/img/hero-slider/cow-body-4.png')"
           
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
          <img :src="require('@/assets/img/hero-slider/grass-anim3.png')"
           
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
         
            <img :src="require('@/assets/img/hero-slider/grass3.png')"  alt="" class="grass3 img-absolute"
          />
          
            <img :src="require('@/assets/img/hero-slider/grass2.png')"  alt="" class="grass2 img-absolute"
          />
        </div>
       
          <img :src="require('@/assets/img/hero-slider/grass1.png')"  alt="" class="grass1 img-absolute"
        />

        
          <img :src="require('@/assets/img/hero-slider/scene1.png')" alt="" class="scene1 img-absolute"
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
            <img :src="require('@/assets/img/hero-slider/hero-herb5.png')"
          
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
         
            <img :src="require('@/assets/img/hero-slider/grass3.png')"  alt="" class="grass3 img-absolute"
          />
         
            <img :src="require('@/assets/img/hero-slider/grass2.png')"  alt="" class="grass2 img-absolute"
          />
        </div>
       
          <img :src="require('@/assets/img/hero-slider/grass1.png')"  alt="" class="grass1 img-absolute"
        />

       
          <img  :src="require('@/assets/img/hero-slider/scene1.png')"  alt="" class="scene1 img-absolute"
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

       
          <img :src="require('@/assets/img/hero-slider/scene1.png')" alt="" class="scene2 img-absolute"
        />
       
          <img :src="require('@/assets/img/hero-slider/scene3.png')"  alt="" class="scene3 img-absolute"
        />
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
        
          <img :src="require('@/assets/img/hero-slider/scene3.png')"  alt="" class="scene33 img-absolute"
        />

        
          <img :src="require('@/assets/img/hero-slider/scene4.png')" alt="" class="scene4 img-absolute"
        />
      </div>
      <div class="hero-slide" id="slide05">
       

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
    <div class="next-section">

</div>
    <div class="next-section"></div>
    <div class="next-section"></div>

    <ModalsHeroAbout />
    <ModalsHeroDocs />
    <ModalsHeroNews/>
  </div>

 
</template>
<script>
import $ from "jquery";
export default {
mounted() {


const cowOneAnimation = new TimelineMax({ repeat: -1 });
const cowTwoAnimation = new TimelineMax({ repeat: -1 });
const cowThreeAnimation = new TimelineMax({ repeat: -1 });
const cowFourAnimation = new TimelineMax({ repeat: -1 });
const cowSmAnimation = new TimelineMax({ repeat: -1 });
const cowFiveAnimation = new TimelineMax({ repeat: -1 });

cowOneAnimation
  // head
  .to(".cow-head-1", 2, {
    rotation: -30,
  })
  .to(".cow-head-1", 2, {
    rotation: 0,
    delay: 2,
  })
  .to(
    ".cow-tail-1",
    2,
    {
      rotation: 45,
      transformOrigin: "left top",
    },
    "-=4"
  )
  //left ear
  .to(
    ".cow-ear-left-1",
    3,
    {
      rotation: -40,
      y: 30,
      x: 7,
      transformOrigin: "left bottom",
    },
    "-=6"
  )
  .to(
    ".cow-ear-left-1",
    3,
    {
      rotation: 0,
      y: 0,
      x: 0,
    },
    "-=2"
  )
  // right ear
  .to(
    ".cow-ear-right-1",
    3,
    {
      rotation: -30,

      transformOrigin: "left bottom",
    },
    "-=7"
  )
  .to(
    ".cow-ear-right-1",
    3,
    {
      rotation: 0,

      transformOrigin: "left bottom",
    },
    "-=3"
  )
  // tail
  .to(
    ".cow-tail-1",
    2,
    {
      rotation: 0,
      transformOrigin: "left top",
    },
    "-=3"
  );

cowTwoAnimation

  .to(".cow-leg-2", 2, {
    rotation: -27,
    y: 7,
    x: 2,
    //delay: 4,
    transformOrigin: "left top",
  })
  .to(".cow-leg-2", 0.5, {
    rotation: 0,
    y: 0,
    x: 0,
  })
  .to(".cow-head-2", 2, {
    rotation: 10,
    x: 10,
    transformOrigin: "top top",
  })
  .to(
    ".cow-ear-left-2",
    2,
    {
      rotation: 15,

      transformOrigin: "right bottom",
    },
    "-=2"
  )
  .to(
    ".cow-ear-right-2",
    2,
    {
      rotation: -5,
      x: 2,
      y: -2,

      transformOrigin: "left bottom",
    },
    "-=2"
  )
  .to(
    ".cow-head-2",
    2,
    {
      rotation: 0,
      x: 0,
      delay: 5,
    },
    "-=4"
  )
  .to(".cow-ear-left-2", 2, {
    rotation: 0,
    delay: 4,
  })
  .to(
    ".cow-ear-right-2",
    2,
    {
      rotation: 0,
      x: 0,
      y: 0,
    },
    "-=2"
  )
  .to(
    ".cow-tail-2",
    2,
    {
      rotation: 10,
      transformOrigin: "right top",
    },
    "-=2"
  )
  .to(".cow-tail-2", 2, {
    rotation: 0,
    transformOrigin: "right top",
  });

cowThreeAnimation
  .to(".cow-head-3", 1, {
    rotation: 20,
    x: 18,
    y: 5,
    delay: 1.5,
    transformOrigin: "right top",
  })
  .to(".cow-head-3", 1, {
    rotation: 0,
    x: 0,
    y: 0,
    delay: 3,
    transformOrigin: "right top",
  });

cowFourAnimation
  .to(".cow-head-4", 1, {
    rotation: -30,
    x: -14,
    y: 5,
    delay: 3,
    transformOrigin: "left top",
  })
  .to(".cow-head-4", 1, {
    rotation: 0,
    x: 0,
    y: 0,
    delay: 1,
  });

cowSmAnimation

  .to(".cows-head-sm1", 1, {
    rotation: -10,
    x: -3,
    //delay: 3,
    transformOrigin: "left top",
  })
  .to(".cows-head-sm1", 1, {
    rotation: 0,
    x: 0,
    y: 0,
  })
  .to(
    ".cows-head-sm2",
    1,
    {
      rotation: -2,
      x: -2,
      y: -1,
      //delay: 3,
      transformOrigin: "right top",
    },
    "-=1.9"
  )
  .to(".cows-head-sm2", 1, {
    rotation: 0,
    x: 0,
    y: 0,
    //delay: 1,
  });
cowFiveAnimation

  .to(".cow-head-cont-5", 1, {
    rotation: -35,
    y: 43,
    transformOrigin: "right top",
    delay: 3,
  })

  .to(
    ".cow-ear-right-5",
    0.5,
    {
      rotation: 35,
      y: -23,
      x: -30,
      transformOrigin: "left bottom",
      delay: 2,
    },
    "-=0.4"
  )
  .to(
    ".cow-ear-left-5",
    0.5,
    {
      rotation: -30,
      y: -43,
      transformOrigin: "right bottom",
    },
    "-=0.4"
  )
  .to(".cow-eyes-5", 0.2, {
    opacity: 0,
  })
  .to(
    ".cow-eyes-close-5",
    {
      opacity: 1,
    },
    "-=0.1"
  )
  .to(".cow-eyes-5", {
    opacity: 1,
  })
  .to(".cow-eyes-close-5", {
    opacity: 0,
  })

  .to(
    ".cow-ear-right-5",
    0.2,
    {
      rotation: 0,
      y: 0,
      x: 0,
      transformOrigin: "left bottom",
    },
    "-=0.2"
  )
  .to(
    ".cow-ear-left-5",
    0.2,
    {
      rotation: 0,
      y: 0,
      transformOrigin: "right bottom",
    },
    "-=0.2"
  )
  .to(
    ".cow-head-cont-5",
    0.5,
    {
      rotation: 0,
      y: 0,
      delay: 1,
    },
    "-=1.3"
  );

///////////////
const grassAnimated1 = new TimelineMax({ repeat: -1 });
const grassAnimated2 = new TimelineMax({ repeat: -1 });
const grassAnimated3 = new TimelineMax({ repeat: -1 });
const grassAnimated4 = new TimelineMax({ repeat: -1 });
const grassAnimated5 = new TimelineMax({ repeat: -1 });
const grassAnimated6 = new TimelineMax({ repeat: -1 });
const grassAnimated7 = new TimelineMax({ repeat: -1 });
const grassAnimated8 = new TimelineMax({ repeat: -1 });
const grassAnimated9 = new TimelineMax({ repeat: -1 });
const grassAnimated10 = new TimelineMax({ repeat: -1 });
const grassAnimated11 = new TimelineMax({ repeat: -1 });
const grassAnimated12 = new TimelineMax({ repeat: -1 });

grassAnimated1
  .to(".grass-anim1", 4, {
    rotation: -10,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim1", 4, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimated2
  .to(".grass-anim2", 6, {
    rotation: 20,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim2", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimated3
  .to(".grass-anim3", 6, {
    rotation: 20,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim3", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimated4
  .to(".grass-anim4", 6, {
    rotation: -10,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim4", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimated5
  .to(".grass-anim5", 6, {
    rotation: -7,
    x: -14,
    y: 5,
    delay: 2,
    transformOrigin: "bottom",
  })
  .to(".grass-anim5", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimated6
  .to(".grass-anim6", 7, {
    rotation: 6,

    transformOrigin: "bottom",
  })
  .to(".grass-anim6", 7, {
    rotation: 0,
  });
grassAnimated7
  .to(".grass-anim7", 9, {
    rotation: -10,
    x: -14,
    y: 5,
    delay: 0.7,

    transformOrigin: "bottom",
  })
  .to(".grass-anim7", 9, {
    rotation: 0,
    x: 0,
    y: 0,
    delay: 0.7,
  });
grassAnimated8
  .to(".grass-anim8", 8, {
    rotation: 4,
    delay: 0.3,

    transformOrigin: "bottom",
  })
  .to(".grass-anim8", 8, {
    rotation: 0,
    delay: 0.3,
  });
grassAnimated9
  .to(".grass-anim9", 7, {
    rotation: -3,
    transformOrigin: "bottom",
  })
  .to(".grass-anim9", 7, {
    rotation: 0,
  });
grassAnimated10
  .to(".grass-anim10", 7, {
    rotation: 4,
    transformOrigin: "bottom",
  })
  .to(".grass-anim10", 7, {
    rotation: 0,
  });
grassAnimated11
  .to(".grass-anim11", 10, {
    rotation: -6,
    transformOrigin: "bottom",
  })
  .to(".grass-anim11", 10, {
    rotation: 0,
  });
grassAnimated12
  .to(".grass-anim12", 5, {
    rotation: 10,
    transformOrigin: "bottom",
  })
  .to(".grass-anim12", 5, {
    rotation: 0,
  });

//////////////
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
//  =========================  xxxxx  ==========================
/// cows
//gsap.from(".cows-container", { scale: 0, y: 0 });
gsap.set(".hero-slider__dots", { autoAlpha: 1, xPercent: -50, yPercent: -50 });

gsap.set(".hero-slide", { autoAlpha: 0, xPercent: 0 });
gsap.set(".hero-slide.active", { autoAlpha: 1, xPercent: 0 });
gsap.set(".go", { autoAlpha: 1, yPercent: -50 });
gsap.set(".scene3", { opacity: 0 });

gsap.set(".scene4", { opacity: 0 });

gsap.set(".scene5", { opacity: 0});
gsap.set(".cow-5", { xPercent:120});
//gsap.set(".hero-slide__btns", { opacity:0});

//transform: scale(0.09) translate(-198px, 413px);
var slides = $(".hero-slide"),
  activeSlide = $(".slide.active"),
  next = $(".go-next"),
  prev = $(".go-prev"),
  moveSlideTL = gsap.timeline(),
  lines = $("h1");
// cow disappear
const cowDisapear = new TimelineMax({});
// Animaciones individuales para cada slider ======

const allSlides = [].slice.call(slides);
let animations = [];

for (let [i] of allSlides.entries()) {
  animations[i] = gsap.timeline({});
}

animations[0].
 reverse();

animations[1]
  // changes

  ////
  .to("#slide01 .grass1", {
    yPercent: 100,
  })

  .to(
    ".scene1",
    {
      scale: 3,
      y: 100,  delay:-0.8,  ease: "expoScale(1, 3, power2.inOut)",
    },
    "-=0.9"
  )
  .to(
    ".cows-container",
    {
      scale: 2,
      y: 100,  delay:-0.8, ease: "expoScale(1,2, power2.inOut)",
    },
    "-=0.9"
  )
  .to(
    ".grass-container-2",
    {
      y: -813,
      delay:-0.8
    },
    "-=0.9"
  )
  .to(".grass-animated2", {
    y: 0, delay:-0.8
  }, "-=0.9")

  .to(".hero__overlay", {
    autoAlpha: 1, delay:-0.8
  }, "-=0.9")
  .to(".hero__herbs-container", {
    autoAlpha: 1, delay:-0.7
  })

  .reverse();

animations[2]

  .to(".scene2", {
    scale: 5.6,
    yPercent: -94,
    xPercent: -9.5,
    duration: 0.1,
    ease: "expoScale(1, 5.6, power2.inOut)",
    //translate(-9.5%, -94%) scale(5.6)
  })
  .to(".scene3", {
    opacity: 1,delay:0
  })
  .to(
    ".cows-container",
    {
      scale: 6,
      yPercent: -60,
      duration: 0.3, ease: "expoScale(1, 6, power2.inOut)",
    },
    "-=0.6"
  ).to(".grass-animated1", {
  y
  :500
},"-=0.9").to(".cow-5", {
  xPercent:50,
  delay:1
},"-=0.6")
  .to(
    " .grass1",
    {
      yPercent: 200,
    },
    "-=1.5"
  )
  .to(
    " .grass2",
    {
      yPercent: 200,
    },
    "-=0.9"
  )
  .to(
    ".grass-container-2",
    {
      y: 0,
  
    }
  )

  .reverse();

animations[3]

  .to(".scene33", {
    opacity: 1,
    duration: 0.6,
    delay: 1,
  })  
  .to(".scene33", {
    scale: 10.9,
    opacity: 1,
    duration: 0.2,
    delay: 0.4,
    yPercent: -41,
    xPercent: 11,
    ease: "expoScale(1, 10.9, power2.inOut)",
    //translate(11%, -41%) scale(10.9)
  })
  .to(".scene4", {
    opacity: 1,
  })

  .reverse();

animations[4]
  .to(
    ".scene4-scaled",

    {
      scale: 26,
      duration: 0.3,
      yPercent: -324.5,
      xPercent: 2,
      ease: "expoScale(1, 26, power2.inOut)",
 delay:0.3,
    }
    
  )
  .to(
    ".scene5",

    {
     
      scale: 1,
      opacity: 1,
    })
  // ).to(
  //   ".hero-slide__btns",

  //   {
     
     
  //     opacity: 1,
  //   }
  // )
  .reverse();

//translate(11%, -42%) scale(11)

const animationLast = new TimelineMax();
animationLast.to(".scene", { scale: 1 }).reverse();
// const showCow = new TimelineMax({ paused: true });
// showCow.to(".cow-5", 1, {
//   xPercent: -120,
// });
// function onMouseWheel(event) {
//   //Normalize event wheel delta

//   var delta =
//     event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

//   if (delta < -1) {
//     //scrolling down -> next slide

//     if (!moveSlideTL.isActive()) {
//       // check again in a second

//       var slideFrom = $(".hero-slide.active");
//       var sectionToIndex = slides.index(slideFrom);

//       console.log(sectionToIndex);
//       /// conditions
//       // GO 2 SLIDE
//       if (sectionToIndex === 0 && !animations[1].isActive()) {
//         animations[1].reverse();
//         var slideTo = slides.eq(sectionToIndex + 1);
//         moveToSlide(slideFrom, slideTo);
//       }
//       // GO 3 SLIDE
//       if (sectionToIndex === 1 && !animations[1].isActive()) {
//         animations[1].reverse();

//         setTimeout(function () {
//           slideTo = slides.eq(sectionToIndex + 1);
//           moveToSlide(slideFrom, slideTo);
//         }, 4000);
//       }
//       // GO 4 SLIDE
//       if (sectionToIndex === 2 && !animations[2].isActive()) {
//         // animations[3].reverse(0).kill();

//         setTimeout(function () {
//           slideTo = slides.eq(sectionToIndex + 1);
//           moveToSlide(slideFrom, slideTo);
//         }, 2000);

//         animations[3].play();
//       }
//       // GO 5 SLIDE
//       if (sectionToIndex === 3 && !animations[3].isActive()) {
//         animations[4].play();

//         setTimeout(function () {
//           slideTo = slides.eq(sectionToIndex + 1);
//           moveToSlide(slideFrom, slideTo);
//         }, 3000);
//       }
//     }
//   } else if (delta > 1) {
//     // -> prev

//     if (!moveSlideTL.isActive()) {
//       if (!moveSlideTL.isActive()) {
//         var slideFrom = $(".hero-slide.active"),
//           sectionToIndex = slides.index(slideFrom);
//         console.log(sectionToIndex);
//         // GO BACK TO 1 SLIDE
//         if (sectionToIndex === 1 && !animations[1].isActive()) {
//           animations[1].reverse();
//           setTimeout(function () {
//             slideTo = slides.eq(sectionToIndex - 1);
//             moveToSlide(slideFrom, slideTo);
//           }, 2000);
//         }
//         // GO BACK TO 2 SLIDE
//         else if (sectionToIndex === 2 && !animations[2].isActive()) {
//           animations[2].reverse(0);
//           setTimeout(function () {
//             slideTo = slides.eq(sectionToIndex - 1);
//             moveToSlide(slideFrom, slideTo);
//           }, 3000);
//         }
//         // GO BACK TO 3 SLIDE
//         else if (sectionToIndex === 3) {
//           animations[3].reverse();
//           cowFiveAnimation.kill();
//           setTimeout(function () {
//             slideTo = slides.eq(sectionToIndex - 1);
//             moveToSlide(slideFrom, slideTo);
//           }, 2000);
//           animations[2].reverse(0).kill();
//         } // GO BACK TO 4
//         else if (sectionToIndex === 4 && !animations[4].isActive()) {
//           slideTo = slides.eq(sectionToIndex - 1);
//           moveToSlide(slideFrom, slideTo);
//           animations[4].reverse(0);
//         }
//       }
//     }
//   }
//   //event.preventDefault();
// }

// ============================
function dotClick() {
  var slideFrom = $(".hero-slide.active"),
    sectionToIndex = $(this).index(),
    sectionToIndex = $(this).index(),
    slideTo = slides.eq(sectionToIndex);

  var indexFrom = slideFrom.index();

  // console.log(
  //   slideFrom,
  //   "from: " + indexFrom,
  //   "to: " + sectionToIndex,
  //   "slideTo: " + slideTo
  // );

  //if(slideFrom !== slideTo && !moveSlideTL.isActive()) {  // not working

  if (indexFrom !== sectionToIndex && !moveSlideTL.isActive()) {
    moveToSlide(slideFrom, slideTo);
  }
}

// =============================
function nextClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".hero-slide.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex !== slides.length - 1) {
      slideTo = slides.eq(sectionToIndex + 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

function prevClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".hero-slide.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex != 0) {
      slideTo = slides.eq(sectionToIndex - 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

// ==============================
function moveToSlide(slideFrom, slideTo) {
  gsap.set(".go", { autoAlpha: 0 }); // ????

  if (slides.index(slideFrom) < slides.index(slideTo)) {
    // vorwärts

    moveSlideTL = gsap
      .timeline({
        onComplete: setActiveSlide,
        onCompleteParams: [slideTo, slideFrom],
      })
      .to(slideTo, {
        xPercent: 0,
        autoAlpha: 1,
        className: "hero-slide active",
      })
      .to(slideFrom, {
        xPercent: 0,
        autoAlpha: 0,
        duration: 0.7,
        className: "hero-slide",
      })
      .set(slideFrom, { xPercent: 0, autoAlpha: 1 });
  } else {
    moveSlideTL = gsap
      .timeline({
        onComplete: setActiveSlide,
        onCompleteParams: [slideTo, slideFrom],
      })
      .set(slideTo, {
        xPercent: 0,
        autoAlpha: 1,
        className: "hero-slide active",
      })
      .to(slideTo, { xPercent: 0, duration: 0.7, autoAlpha: 1 })
      .to(slideFrom, {
        xPercent: 0,
        duration: 0.7,
        autoAlpha: 0,
        className: "hero-slide",
      });
  }
}

function setActiveSlide(active, last) {
  var currentSlideIndex = slides.index(active);
  var lastSlideIndex = slides.index(last);

  animations[currentSlideIndex].reversed(false);
  animations[lastSlideIndex].progress(0).reversed(true);

  gsap.to(".hero-slider__dot.active", {});
  $(".hero-slider__dot.active").removeClass("active");
  $(".hero-slider__dot").eq(currentSlideIndex).addClass("active");
  gsap.to(".hero-slider__dot.active", {});

  if (currentSlideIndex == 0) {
    gsap.set(".go-prev", { autoAlpha: 0 });
  } else {
    gsap.set(".go-prev", { autoAlpha: 1 });
  }
  if (currentSlideIndex == slides.length - 1) {
    gsap.set(".go-next", { autoAlpha: 0 });
  } else {
    gsap.set(".go-next", { autoAlpha: 1 });
  }
}

// ================================
function init() {
  for (var i = 0; i < slides.length; i++) {
    var navDots = $("<div></div>")
      .addClass("hero-slider__dot")
      .appendTo(".hero-slider__dots");
    gsap.set(".hero-slider__dot:first-child", {
      className: "hero-slider__dot active",

      transformOrigin: "center",
    });
    navDots.on("click", dotClick);
  }

  if (slides[0]) {
    gsap.set(".go-prev", { autoAlpha: 0 });
  }

  next.on("click", nextClick);
  prev.on("click", prevClick);

  // $(window).on("mousewheel DOMMouseScroll", onMouseWheel);

  //$(window).on("touchmove", onMouseWheel);

  gsap.set(".hero-slide.active", { xPercent: 0 });
}

init();
$(document).ready(function () {
  var slide01 = $("#slide01");
  if (slide01.hasClass("active")) {

  }
});
$(".hero-slider").bind(
  "mousewheel DOMMouseScroll",
  function onMouseWheel(event) {
    event.preventDefault();
    //Normalize event wheel delta

    var delta =
      event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

    if (delta < -1) {
      //scrolling down -> next slide

      if (!moveSlideTL.isActive()) {
        // check again in a second

        var slideFrom = $(".hero-slide.active");
        var sectionToIndex = slides.index(slideFrom);

        console.log(sectionToIndex);
        /// conditions
        // GO 2 SLIDE
        if (sectionToIndex === 0 && !animations[1].isActive()) {
          animations[1].reverse();
          var slideTo = slides.eq(sectionToIndex + 1);
          moveToSlide(slideFrom, slideTo);
        }
        // GO 3 SLIDE
        if (sectionToIndex === 1 && !animations[1].isActive()) {
           slideTo = slides.eq(sectionToIndex + 1);
            moveToSlide(slideFrom, slideTo);
  
          setTimeout(function () {
                   animations[1].reverse();
          }, 3000);
         
         
          cowFiveAnimation.play();
        }
        // GO 4 SLIDE
        if (sectionToIndex === 2 && !animations[2].isActive()) {
          // animations[3].reverse(0).kill();
   
 
            slideTo = slides.eq(sectionToIndex + 1);
            moveToSlide(slideFrom, slideTo);
  

          animations[3].play();
        }
        // GO 5 SLIDE
        if (sectionToIndex === 3 && !animations[3].isActive()) {
          slideTo = slides.eq(sectionToIndex + 1);
            moveToSlide(slideFrom, slideTo);

          setTimeout(function () {
             animations[4].play();
          }, 1000); 
        
        }
      }
    } else if (delta > 1) {
      // -> prev

      if (!moveSlideTL.isActive()) {
        if (!moveSlideTL.isActive()) {
          var slideFrom = $(".hero-slide.active"),
            sectionToIndex = slides.index(slideFrom);
          console.log(sectionToIndex);
          // GO BACK TO 1 SLIDE
          if (sectionToIndex === 1 && !animations[1].isActive()) {
            animations[1].reverse();
            setTimeout(function () {
              slideTo = slides.eq(sectionToIndex - 1);
              moveToSlide(slideFrom, slideTo);
            }, 2000);
          }
          // GO BACK TO 2 SLIDE
          else if (sectionToIndex === 2 && !animations[2].isActive()) {
            //  showCow.pause();
            animations[2].reverse(1);
            slideTo = slides.eq(sectionToIndex - 1);
            moveToSlide(slideFrom, slideTo);
            // setTimeout(function () {
            //   slideTo = slides.eq(sectionToIndex - 1);
            //   moveToSlide(slideFrom, slideTo);
            // }, 4000);
          }
          // GO BACK TO 3 SLIDE
          else if (sectionToIndex === 3  && !animations[3].isActive()) {
            animations[3].reverse();
         
            setTimeout(function () {
              slideTo = slides.eq(sectionToIndex - 1);
              moveToSlide(slideFrom, slideTo);
            }, 1000); 
          
           
        
        
            animations[2].reverse(0).kill();
          } // GO BACK TO 4
          else if (sectionToIndex === 4 && !animations[4].isActive()) {
              animations[4].reverse(0);
            setTimeout(function () {
              slideTo = slides.eq(sectionToIndex - 1);
              moveToSlide(slideFrom, slideTo);
            }, 1000); 

           
           
             
              
              animations[3].reverse(0).kill()
              
           
          }
        }
      }
    }
    //event.preventDefault();
  }
);

}
};
</script>
<style lang="scss">

.hero {
  height: 100vh;
  widows: 100vw;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
.hero-slider__dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: inherit;
  z-index: 100;
  visibility: hidden;
}
.hero-slider__dot {
  position: relative;
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.5);

  border-radius: 50%;
  border: 1px solid transparent;
  margin-right: 7px;
  float: left;
  cursor: pointer;
}
.hero-slider__dot.active {
  background-color: $color-primary;
  opacity: 0.8;
}
.hero-slider__dot:last-of-type {
  margin-right: 0px;
}

.hero-slider__dot:hover {
  background-color: rgba(255, 255, 255, 0.65);
  box-shadow: inset 0 0 0 3px #fff;
}

.go {
  width: 25px;
  stroke: #fff;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  z-index: 12;
}

.go-prev,
.go-next {
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 5px;
}

.go-next {
  left: calc(100% - 32px);
}

.hero-slider {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  max-height: 1920px;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
 
}
.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#slide02 .wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  height: 100px;
  overflow: hidden;
}

.scene4,
.scene5,
.scene3,
.scene33,
.scene {
  z-index: 100;
  width: 100vw;
  height: auto;
  top: 0;
}
.scene3 {
  z-index: 10;
}
.grass2 {
  bottom: -74%;
  z-index: 96;
  width: 100vw;
  height: auto;
}
.grass1 {
  z-index: 91;
  bottom: -5%;
  width: 100vw;
  height: auto;
}
.scene1,
.scene2,
.scene3,
.scene33,
.scene4,
.scene5 {
  z-index: 10;
  width: 100vw;
  top: 0;
  height: 100%;
}
.scene4 {
  z-index: 121;
}
#slide01 {
  background-image: url("~assets/img/hero-slider/scene1.png");
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
.grass-animated2 {
  position: absolute;
  bottom: 0;
  z-index: 99;
  width: 100vw;
}
.grass-container-2 {
  position: absolute;
  bottom: -813px;
  z-index: 99;
  width: 100vw;
}
.grass2 {
  bottom: 0px;
  width: 100vw;
}
.grass3 {
  z-index: 1000;
  bottom: 0;
  width: 100vw;
}
.grass-anim {
  position: absolute;
  bottom: 0;
  left: 0;
}
.grass-anim1 {
  left: 60px;
}
.grass-anim2 {
  left: 41%;
}
.grass-anim3 {
  left: 8%;
}
.grass-anim4 {
  left: 85%;
}
.grass-anim5 {
  left: 70%;
}
.grass-anim6 {
  left: 5%;
  bottom: 116px;
}
.grass-anim7 {
  left: 76%;
  bottom: 131px;
}
.grass-anim8 {
  left: 57%;
  bottom: 0px;
}
.grass-anim9 {
  left: 84%;
  bottom: 44px;
}
.grass-anim10 {
  left: 87%;
  bottom: 56px;
}
.grass-anim11 {
  left: 1%;
  bottom: 294px;
}
.grass-anim12 {
  left: 22%;
  bottom: 52px;
}

.hero__overlay {
  width: 100vw;
  height: 100%;
  position: absolute;
  top:0;
  background: transparent;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 100;
  opacity: 0;
}

.cows-container {
  z-index: 90;
  max-width: 1500px;
  height: 100%;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
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
#slide03 .scene1 {
  opacity: 0;
}

/* hero herbs */
.scene53,
.scene43 {
  width: 100vw;
  height: auto;
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
.scene5-test {
  z-index: 120;

  opacity: 1;
  transform-origin: center center;
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
  top:74%;
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


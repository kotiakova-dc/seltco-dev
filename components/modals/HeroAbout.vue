<template>
  <div>
   
 

  <b-modal id="hero-modal-about" title="О ферме" >
     <ul class="modal-nav">
          <li class="modal-link"><a href="#sec-1" v-smooth-scroll>Section 1</a></li>
              <li class="modal-link"><a href="#sec-2" v-smooth-scroll>Section 2</a></li>
      <li class="modal-link"><a href="#sec-3" v-smooth-scroll>Section 3</a></li>
    </ul>

    <ul class="modal-list">
    <section id="sec-1">CONTENT 1</section>

<section id="sec-2">CONTENT 2 </section>
<section id="sec-3">CONTENT 3</section>
    </ul>
  </b-modal>

  </div>
</template>

<script>

export default {
  
  
};
</script>
<style lang="scss" scoped>
.modal-nav {
  position: fixed;
  
  background: #eee;
}
section {
  height: 100vh;
  background: rgb(178, 178, 197);
  margin-top: 500px;
  width:400px
}
p {
  font-weight: 400;
font-size: 13px;
line-height: 20px;
   color: $color-primary;
}

</style>



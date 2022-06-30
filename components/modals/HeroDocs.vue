<template>
  <div>
    <div>
 

  <b-modal id="hero-modal-docs" title="Документы">
   <div class="modal__content">
       <ul id="hero-docs">
           <li v-for="doc in docs" :key="doc.id"><img
          :src="require('@/assets/img/hero-slider/pdf_ic.svg')"
          alt=""
          class="pdf-icon"
        /> <p>{{doc.name}}</p></li>
       </ul>
   </div>
  </b-modal>
</div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          docs: [
         {
            id:1,
            name:'ОТЧЕТ об итогах голосования на внеочередном общем собрании акционеров АО Сельцо от 24.12.2021.pdf 14.5 Мб,24 декабря в 13:10'
         },
           {
            id:2,
            name:'Сообщение о проведении внеочередного общего собрания акционеров АО Сельцо 23 декабря 2021 г. (Обновленный).pdf 713 кб, 03 декабря в 14:10'
         },
          {
            id:3,
            name:'ОТЧЕТ об итогах голосования на внеочередном общем собрании акционеров АО Сельцо от 24.12.2021.pdf 14.5 Мб,24 декабря в 13:10'
         },
          {
            id:4,
            name:'Отчет об итогах голосования на годовом собрании акционеров АО Сельцо 28.06.2021 г.pdf 2.7 Мб, 30 июня в 12:08'
         },
          {
            id:5,
            name:'Сообщение о проведении годового общего собрания акционеров АО Сельцо в 2021 году.pdf 580.7 кб, 08 июня в 13:27'
         },
          {
            id:6,
            name:'ОТЧЕТ об итогах голосования на внеочередном общем собрании акционеров АО Сельцо от 24.12.2021.pdf 14.5 Мб,24 декабря в 13:10'
         },
          ]
      }
  },
 
  
};
</script>
<style lang="scss" scoped>
.modal-header {
    font-size: 20px;
   color: $color-primary;
}
p {
  font-weight: 400;
font-size: 13px;
line-height: 20px;
   color: $color-primary;
}

</style>



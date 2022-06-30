<template>
  <div>
    <b-modal id="hero-modal-about" title="О ферме" v-model="modalShow">
      <b-container>
        <b-button @click="$emit('test')" class="modal-close"
          >CLOSE USING THIS BUTTON</b-button
        >
        <b-row>
          <b-col cols="12">
            <div
              id="listgroup-ex"
              style="position: relative; overflow-y: auto; height: 300px"
            >
              <b-row
                v-for="el in history"
                class="list-item"
                :key="el.id"
                :id="el.id"
              >
                <b-col cols="1"
                  ><h4>{{ el.date }}</h4>
                </b-col>
                <b-col cols="9">
                  <h4>{{ el.title }}</h4>
                  <p>{{ el.text }}</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="1">
            <b-list-group v-b-scrollspy:listgroup-ex>
              <b-list-group-item
                v-for="el in history"
                :key="el.id"
                v-bind:href="`#` + `${el.id}`"
                >{{ el.date }}</b-list-group-item
              >
            </b-list-group>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false,

      history: [
        {
          id: "item1",
          date: 2022,
          title: "Наши дни",
          text: `
          Предприятие вводит в эксплуотацию собственный высокотехнологичный молокоперерабатывающий завод «Молочная Культура», расположенный в 5-минутной удалённости от фермы. Здание построенного завода находится в бывшей усадьбе Н. И. Корфа восстановленной и признанной памятником архитектуры. 
        `,
        },
        {
          id: "item2",
          date: 2013,
          title: "Реновация",
          text: `
          Предприятие вводит в эксплуотацию собственный высокотехнологичный молокоперерабатывающий завод «Молочная Культура», расположенный в 5-минутной удалённости от фермы. Здание построенного завода находится в бывшей усадьбе Н. И. Корфа восстановленной и признанной памятником архитектуры. 
         
        `,
        },
        {
          id: "item3",
          date: 2006,
          title: "Новое начало",
          text: `
          С весны 2006 года ЗАО «Сельцо» входит в группу компаний «Артис». Именно с этого момента началось возрождение предприятия.
        `,
        },
        {
          id: "item4",
          date: 1990,
          title: "Перестройка",
          text: `
          С весны 2006 года ЗАО «Сельцо» входит в группу компаний «Артис».
        `,
        },
        {
          id: "item5",
          date: 2022,
          title: "Наши дни",
          text: `
          Предприятие вводит в эксплуотацию собственный высокотехнологичный молокоперерабатывающий завод «Молочная Культура», расположенный в 5-минутной удалённости от фермы. Здание построенного завода находится в бывшей усадьбе Н. И. Корфа восстановленной и признанной памятником архитектуры. 
        `,
        },
        {
          id: "item6",
          date: 2013,
          title: "Реновация",
          text: `
          Предприятие вводит в эксплуотацию собственный высокотехнологичный молокоперерабатывающий завод «Молочная Культура», расположенный в 5-минутной удалённости от фермы. Здание построенного завода находится в бывшей усадьбе Н. И. Корфа восстановленной и признанной памятником архитектуры. 
         
        `,
        },
        {
          id: "item7",
          date: 2006,
          title: "Новое начало",
          text: `
          С весны 2006 года ЗАО «Сельцо» входит в группу компаний «Артис». Именно с этого момента началось возрождение предприятия.
        `,
        },
        {
          id: "item8",
          date: 1990,
          title: "Перестройка",
          text: `
          С весны 2006 года ЗАО «Сельцо» входит в группу компаний «Артис».
        `,
        },
      ],
    };
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>
<style lang="scss" scoped>
.col-10,
.modal-body,
.col-12,
.col-1,
.container {
  padding: 0 !important;
  h4 {
    font-size: 20px;
    color: $color-primary;
  }
}
.list-item {
  margin-bottom: 50px;
  h4,
  p {
    font-size: 20px;
    color: $color-primary;
  }
}
.row {
  flex-wrap: nowrap !important;
  justify-content: unset;
}
.list-group-item-action {
  color: $color-primary;
  font-size: 20px;
  margin-bottom: 32px;
}
#listgroup-ex {
  height: 100%;
}
</style>

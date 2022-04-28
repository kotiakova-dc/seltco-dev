<template>
  <div>
    <b-modal id="hero-modal-news" title="Новости">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div
              id="listgroup-ex"
              style="position: relative; overflow-y: auto; height: 300px"
            >
              <b-row id="year-1">
                <b-col cols="1"><h4>2021</h4></b-col>

                <b-col cols="9"
                  ><ul>
                    <li class="list-item" v-for="el in y2021" :key="el.id">
                      <h4>{{ el.title }}</h4>
                      <a href="#" class="news-more">Подробнее</a>
                    </li>
                  </ul></b-col
                >
              </b-row>

              <b-row id="year-2">
                <b-col cols="1"><h4>2020</h4></b-col>

                <b-col cols="9"
                  ><ul>
                    <li class="list-item" v-for="el in y2020" :key="el.id">
                      <h4>{{ el.title }}</h4>
                      <a href="#" class="news-more">Подробнее</a>
                    </li>
                  </ul></b-col
                >
              </b-row>
              <b-row id="year-3">
                <b-col cols="1"><h4>2019</h4></b-col>

                <b-col cols="9"
                  ><ul>
                    <li class="list-item" v-for="el in y2019" :key="el.id">
                      <h4>{{ el.title }}</h4>
                      <a href="#" class="news-more">Подробнее</a>
                    </li>
                  </ul></b-col
                >
              </b-row>

              <h4 id="year-4">2018</h4>

              <h4 id="year-5">2017</h4>
            </div>
          </b-col>
          <b-col cols="1">
            <b-list-group v-b-scrollspy:listgroup-ex>
              <b-list-group-item href="#year-1">2021</b-list-group-item>
              <b-list-group-item href="#year-2">2020</b-list-group-item>
              <b-list-group-item href="#year-3">2019</b-list-group-item>
              <b-list-group-item href="#year-4">2018</b-list-group-item>
              <b-list-group-item href="#year-5">2017</b-list-group-item>
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
      y2021: [
        {
          id: "event1",
          title: `ОТЧЕТ об итогах голосования`,
          link: "",
        },
        {
          id: "event2",
          title: `Сообщение о проведении внеочередного общего собрания акционеров АО Сельцо 23 декабря 2021 г.`,
          link: "",
        },
        {
          id: "event3",
          title: `Отчет об итогах голосования на годовом собрании акционеров АО Сельцо 28.06.2021 г`,
          link: "",
        },
        {
          id: "event4",
          title: `Сообщение о проведении годового общего собрания акционеров АО Сельцо в 2021 году`,
          link: "",
        },
        {
          id: "event5",
          title: `Отчет об итогах голосования на внеочередном общем собрании акционеров АО «Сельцо» 09.03.2021 г.`,
          link: "",
        },
        {
          id: "event6",
          title: `Проведение внеочередного общего собрания акционеров АО «Сельцо» 09.03.2021г.`,
          link: "",
        },
      ],
      y2020: [
        {
          id: "event1",
          title: `ОТЧЕТ об итогах голосования`,
          link: "",
        },
        {
          id: "event2",
          title: `Сообщение о проведении внеочередного общего собрания акционеров АО Сельцо 23 декабря 2021 г.`,
          link: "",
        },
        {
          id: "event3",
          title: `Отчет об итогах голосования на годовом собрании акционеров АО Сельцо 28.06.2021 г`,
          link: "",
        },
        {
          id: "event4",
          title: `Сообщение о проведении годового общего собрания акционеров АО Сельцо в 2021 году`,
          link: "",
        },
        {
          id: "event5",
          title: `Отчет об итогах голосования на внеочередном общем собрании акционеров АО «Сельцо» 09.03.2021 г.`,
          link: "",
        },
        {
          id: "event6",
          title: `Проведение внеочередного общего собрания акционеров АО «Сельцо» 09.03.2021г.`,
          link: "",
        },
      ],
      y2019: [
        {
          id: "event1",
          title: `ОТЧЕТ об итогах голосования`,
          link: "",
        },
        {
          id: "event2",
          title: `Сообщение о проведении внеочередного общего собрания акционеров АО Сельцо 23 декабря 2021 г.`,
          link: "",
        },
        {
          id: "event3",
          title: `Отчет об итогах голосования на годовом собрании акционеров АО Сельцо 28.06.2021 г`,
          link: "",
        },
        {
          id: "event4",
          title: `Сообщение о проведении годового общего собрания акционеров АО Сельцо в 2021 году`,
          link: "",
        },
        {
          id: "event5",
          title: `Отчет об итогах голосования на внеочередном общем собрании акционеров АО «Сельцо» 09.03.2021 г.`,
          link: "",
        },
        {
          id: "event6",
          title: `Проведение внеочередного общего собрания акционеров АО «Сельцо» 09.03.2021г.`,
          link: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.news-more {
  color: $color-tertiary;
  &:hover {
    text-decoration: underline;
  }
}
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
.list-group-item-action {

  &:hover,&:active,&:focus {
    color: inherit;
    background-color: inherit;
  }
    
}
</style>



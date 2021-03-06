export const state = () => ({
  headerLinks: [
    {
      title: "Решения",
      link: { name: "solutions" },
      icon: true,
      submenu: [
        {
          title: "Пиво",
          img: "nav1.png",
          id: 1,
          link: { name: "solutions-slug", params: { slug: "beer" } },
        },
      ],
    },
    {
      title: "Продукция",
      link: { name: "products" },
      icon: true,
      submenu: [
        {
          title: "Кеги",
          img: "nav2.png",
          id: 1,
          slug: "kegs",
          link: "",
        },
        {
          title: "Комплектующие",
          img: "nav3.png",
          id: 2,
          link: { name: "accessories" },
        },
      ],
    },
    {
      title: "Партнерам",
      link: { name: "partners" },
      icon: true,
      submenu: [
        {
          title: "Ценообразование",
          link: { name: "prices" },
          img: "nav4.png",
          id: 1,
        },
        {
          title: "Поставка продукции",
          link: { name: "shipment" },
          img: "nav5.png",
          id: 2,
        },
        {
          title: "Поддержка и сервис",
          link: { name: "service" },
          img: "nav6.png",
          id: 3,
        },
        {
          title: "Вопросы и ответы",
          link: { name: "questions" },
          img: "nav7.png",
          id: 4,
        },
        {
          title: "Документы",
          link: { name: "docs" },
          img: "nav8.png",
          id: 5,
        },
      ],
    },
    {
      title: "Концепция",
      link: { name: "concept" },
      icon: true,
      submenu: [
        {
          title: "Качество",
          img: "nav9.png",
          id: 1,
          link: { name: "concept-slug", params: { slug: "kachestvo" } },
        },
      ],
    },
    {
      title: "Компания",
      link: { name: "company" },
      icon: true,
      submenu: [
        {
          title: "Оборудование",
          link: { name: "equipment" },
          img: "nav10.png",
          id: 1,
        },
        {
          title: "Новости и статьи",
          link: { name: "news" },
          img: "nav11.png",
          id: 2,
        },
        {
          title: "Партнеры и отзывы",
          link: { name: "reviews" },
          img: "nav12.png",
          id: 3,
        },
        {
          title: "Карьера",
          link: { name: "career" },
          img: "nav13.png",
          id: 4,
        },
        {
          title: "Наша команда",
          link: { name: "team" },
          img: "nav14.png",
          id: 5,
        },
        {
          title: "Сертификаты",
          link: { name: "certificates" },
          img: "nav15.png",
          id: 6,
        },
      ],
    },
    {
      title: "Контакты",
      link: { name: "contacts" },
      icon: false,
    },
  ],
  solutions: [
    {
      id: 1,
      title: "Вода",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
      img: "s1.png",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution1.png",
      svg: "water",
      svgHover: "water-w",
    },
    {
      id: 2,
      title: "Пиво",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img: "s2.png",
      img1: "beer.jpg",
      img2: "beer1.jpg",
      imgbtn: "solution2.png",
      svg: "beer",
      svgHover: "beer-w",
    },
    {
      id: 3,
      title: "Квас",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img: "s3.png",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution3.png",
      svg: "kvass",
      svgHover: "kvass-w",
    },
    {
      id: 4,
      title: "Сидр",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img: "s4.png",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution4.png",
      svg: "cider",
      svgHover: "cider-w",
    },
    {
      id: 5,
      title: "Вино",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img: "s1.png",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution5.png",
      svg: "vine",
      svgHover: "vine-w",
    },
    {
      id: 6,
      title: "Кофе",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img: "s2.png",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution6.png",
      svg: "coffe",
      svgHover: "coffe-w",
    },
  ],
  //преимущества, группы товаров должны быть с апи индивидуального продукта
  advantages: [
    {
      id: 1,
      title: "Эстетика упаковки",
      list: [
        "Низкая теплопроводность",
        "Гарантия герметичности фитинга",
        "Стерильная среда внутри кега",
      ],
      img: "adv1.png",
      imgMobile: "adv1-m.png",
      num: "num1",
    },
    {
      id: 2,
      title: "Выгодная логистика",
      list: [
        "Отсутствует необходимость возврата тары",
        "ПЭТ-КЕГ в 16 раз легче металлической ",
        "Фура вмещает на 25% больше",
      ],
      img: "adv2.png",
      imgMobile: "adv2-m.png",
      num: "num2",
    },
    {
      id: 3,
      title: "Сокращение издержек производства",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
      img: "adv3.png",
      imgMobile: "adv3-m.png",
      num: "num3",
    },
    {
      id: 4,
      title: "Легкий и быстрый переход с металла на ПЭТ",
      list: [
        "Не требуется сложная перенастройка оборудования",
        "Не требуется инвестиций в оборудование",
        "Сопровождение и поддержка от технических специалистов компании ПЭТ-Эксперт",
      ],
      img: "adv4.png",
      imgMobile: "adv4-m.png",
      num: "num4",
    },
  ],
  productsGroup: [
    {
      id: 1,
      img: "product1.jpg",
      title: "Преформы для бутылей 19 л.",
      article: "арт. 387194",
    },
    {
      id: 2,
      img: "product2.jpg",
      title: "Преформы для бутылей 19 л.",
      article: "арт. 387194",
    },
    {
      id: 3,
      img: "product3.jpg",
      title: "Крышка для ПЭТ кега 20 л.",
      article: "арт. 387191",
    },
    {
      id: 4,
      img: "product4.jpg",
      title: "Ручка для переноса 7∅",
      article: "арт. 387192",
    },

    {
      id: 5,
      img: "product5.jpg",
      title: "Преформы для бутылей 19 л.",
      article: "арт. 387194",
    },

    {
      id: 6,
      img: "product5.jpg",
      title: "Преформы для бутылей 19 л.",
      article: "арт. 387194",
    },
  ],
  partners: [
    {
      id: 1,
      slug: "prices",
      link: { name: "prices" },
      img: "p1.jpg",
      imgMobile: "p1-m.jpg",
      title: "Ценообразование",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
    },
    {
      id: 2,
      slug: "shipment",
      link: { name: "shipment" },
      img: "p2.jpg",
      imgMobile: "p2-m.jpg",
      title: "Поставка продукции",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
    },
    {
      id: 3,
      img: "p3.jpg",
      slug: "service",
      link: { name: "service" },
      imgMobile: "p3-m.jpg",
      title: "Поддержка и сервис",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
    },
    {
      id: 4,
      slug: "questions",
      link: { name: "questions" },
      img: "p4.jpg",
      imgMobile: "p4-m.jpg",
      title: "Вопросы и ответы",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
    },
    {
      id: 5,
      img: "p5.jpg",
      slug: "docs",
      link: { name: "docs" },
      imgMobile: "p5-m.jpg",
      title: "Документы",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
    },
  ],
  prices: [
    {
      id: 1,
      title: "Фактор №1",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством.",
      img: "f1.jpg",
      imgMobile: "f1-m.jpg",
      num: "num1",
    },
    {
      id: 2,
      title: "Фактор №2",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством.",
      img: "f2.jpg",
      imgMobile: "f2-m.jpg",
      num: "num2",
    },
    {
      id: 3,
      title: "Фактор №3",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством.",
      img: "f3.jpg",
      imgMobile: "f3-m.jpg",
      num: "num3",
    },
  ],
  shipment: [
    {
      id: 1,
      title: "Гибкое сотрудничество",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
        "Разморозка денежных средств заложеных в тару",
        "Отсутствие технического обслуживания и мойки",
        "Разморозка денежных средств заложеных в тару",
        "Отсутствие технического обслуживания и мойки",
      ],
      img: "shipment1.jpg",
    },
    {
      id: 2,
      title: "Логистика",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
      img: "shipment3.jpg",
    },
  ],
  questions: [
    {
      id: 1,
      question: "Как вы проверяете кеги на герметичность?",
      answer: "Ответ",
    },
    {
      id: 2,
      question: "Как вы проверяете кеги на прочность? Под прессом?",
      answer:
        "ОтветПример открытого ответа №2 Для современного мира сложившаяся структура организации требует от нас анализа прогресса профессионального сообщества.Но граница обучения кадров говорит о возможностях распределения внутренних резервов и ресурсов.",
    },
    {
      id: 3,
      question:
        "Длинный впрос. Он никак не помещается в две строки, он переносится на третью строку",
      answer: "Ответ",
    },
    {
      id: 4,
      question: "Как вы проверяете кеги на герметичность?",
      answer: "Ответ",
    },
  ],
  questions2: [
    {
      id: 5,
      question: "Как вы проверяете кеги на герметичность?11",
      answer: "Ответ12",
    },
    {
      id: 6,
      question: "Как вы проверяете кеги на прочность? Под прессом?",
      answer:
        "ОтветПример открытого ответа №2 Для современного мира сложившаяся структура организации требует от нас анализа прогресса профессионального сообщества.Но граница обучения кадров говорит о возможностях распределения внутренних резервов и ресурсов.",
    },
    {
      id: 7,
      question:
        "Длинный впрос. Он никак не помещается в две строки, он переносится на третью строку",
      answer: "Ответ17",
    },
    {
      id: 8,
      question: "Как вы проверяете кеги на герметичность?",
      answer: "Ответ",
    },
  ],
  concept: [
    {
      id: 1,
      title: "Качество",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
      img1: "c1.jpg",
      img2: "c2.jpg",
      img: "conc1.jpg",
      imgbtn: "conc-m1.png",
      num: "num1",
    },
    {
      id: 2,
      title: "Безопасность",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции ",
      img1: "c3.jpg",
      img2: "c4.jpg",
      img: "conc2.jpg",
      imgbtn: "conc-m2.png",
      num: "num2",
    },
    {
      id: 3,
      title: "Доверие",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
      img1: "c5.jpg",
      img2: "c6.jpg",
      img: "conc3.jpg",
      imgbtn: "conc-m3.png",
      num: "num3",
    },
  ],
  conceptId: [
    {
      id: 1,
      title: "Контроль каждого этапа производства",
      description:
        "Тщательно выбираем поставщиков сырья. Скурпулезно разрабатываем пресс-формы, в том числе по индивидуальным запросам заказчика.Производим продукциюна современных станках, которые помогают поддерживать высочайший уровень качества. Досконально проверяем изделия в собственной лаборатории.",
      img: "k1.jpg",
      imgMobile: "k1-m.jpg",
    },
    {
      id: 2,
      title: "Качество контакта",
      description:
        "Нам важно сделать опыт взаимодействия заказчика с нами особенным. Поэтому у нас удобный сайт, минимальное количество требуемых действий, удобные и гибкие способы и условия оплаты.",
      img: "k2.jpg",
      imgMobile: "k2-m.jpg",
    },
    {
      id: 3,
      title: "Качественная доставка",
      description:
        "Качественно — это быстро, вовремя, гибко, чётко. Собственный логистический департамент позволяет оперативно организовать доставку в любой регион РФ и за пределы страны своим автопарком или транспортными компаниями..",
      img: "k3.jpg",
      imgMobile: "k3-m.jpg",
    },
    {
      id: 4,
      title: "Стандарты",
      description:
        "Все наши критерии качества в каждом процессе зафиксированы в инструкциях и стандартах.",
      img: "k4.jpg",
      imgMobile: "k4.jpg",
    },
  ],
  products: [
    {
      id: 1,
      title: "ПЭТ-кеги",
      img: "prod1.jpg",
      imgPrew: "prod-prew1.png",
      slug: "kegs",
    },
    {
      id: 2,
      title: "ПЭТ-бутыли",
      img: "prod2.jpg",
      imgPrew: "prod-prew2.png",
      slug: "big-bottles",
    },
    {
      id: 3,
      title: "Преформы",
      img: "prod3.jpg",
      imgPrew: "prod-prew3.png",
      slug: "preforms",
    },
    {
      id: 4,
      title: "ПЭТ-бутылки",
      img: "prod4.jpg",
      imgPrew: "prod-prew4.png",
      slug: "bottles",
    },
    {
      id: 5,
      title: "ПЭТ-флаконы",
      img: "prod5.jpg",
      imgPrew: "prod-prew5.png",
      slug: "flacons",
    },
    {
      id: 6,
      title: "Комплектующие",
      img: "prod6.jpg",
      imgPrew: "prod-prew6.png",
      slug: "accessories",
    },
  ],
  productsId: [
    {
      id: 1,
      title: "PET-кег 30 л. / А",
      description: "хранение и транспортировка пищевых жидкостей",
      color: "коричневый, прозрачный",
      weight: "500 гр.+-10",
      material: "ПЭТ (Полиэтилентерефталат)",
      type: "A",
      usage: "одноразовый",
      img: "pr1.jpg",
    },
    {
      id: 2,
      title: "PET-кег 20 л.",
      description: "хранение и транспортировка пищевых жидкостей",
      color: "коричневый, прозрачный",
      weight: "500 гр.+-10",
      material: "ПЭТ (Полиэтилентерефталат)",
      type: "A",
      usage: "одноразовый",
      img: "pr2.jpg",
    },
    {
      id: 3,
      title: "PET-кег 35 л.",
      description: "хранение и транспортировка пищевых жидкостей",
      color: "коричневый, прозрачный",
      weight: "500 гр.+-10",
      material: "ПЭТ (Полиэтилентерефталат)",
      type: "A",
      usage: "одноразовый",
      img: "pr3.jpg",
    },
    {
      id: 4,
      title: "PET-кег 10 л.",
      description: "хранение и транспортировка пищевых жидкостей",
      color: "коричневый, прозрачный",
      weight: "500 гр.+-10",
      material: "ПЭТ (Полиэтилентерефталат)",
      type: "A",
      usage: "одноразовый",
      img: "pr4.jpg",
    },
  ],
  accessories: [
    {
      id: 1,
      title: "Крышка-пломба",
      img: "acc1.jpg",
      imgMobile: "acc1-m.jpg",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
      specifications: [
        {
          title: "Назначение",
          descr: "хранение и транспортировка пищевых жидкостей",
        },
        {
          title: "Цвет",
          descr: "коричневый, прозрачный",
        },
        {
          title: "Вес с фитингом и трубкой",
          descr: "500 гр.+-10",
        },
        {
          title: "Материал преформы",
          descr: "ПЭТ (Полиэтилентерефталат)",
        },
        {
          title: "Тип фитинга",
          descr: "A",
        },
        {
          title: "Использование",
          descr: "одноразовый",
        },
      ],
    },
    {
      id: 2,
      title: "Адаптеры",
      img: "acc2.jpg",
      imgMobile: "acc2-m.jpg",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
      specifications: [
        {
          title: "Назначение",
          descr: "хранение и транспортировка пищевых жидкостей",
        },
        {
          title: "Цвет",
          descr: "коричневый, прозрачный",
        },
        {
          title: "Вес с фитингом и трубкой",
          descr: "500 гр.+-10",
        },
        {
          title: "Материал преформы",
          descr: "ПЭТ (Полиэтилентерефталат)",
        },
        {
          title: "Тип фитинга",
          descr: "A",
        },
        {
          title: "Использование",
          descr: "одноразовый",
        },
      ],
    },
    {
      id: 3,
      title: "Ручки",
      img: "acc3.jpg",
      imgMobile: "acc3-m.jpg",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
      specifications: [
        {
          title: "Назначение",
          descr: "хранение и транспортировка пищевых жидкостей",
        },
        {
          title: "Цвет",
          descr: "коричневый, прозрачный",
        },
        {
          title: "Вес с фитингом и трубкой",
          descr: "500 гр.+-10",
        },
        {
          title: "Материал преформы",
          descr: "ПЭТ (Полиэтилентерефталат)",
        },
        {
          title: "Тип фитинга",
          descr: "A",
        },
        {
          title: "Использование",
          descr: "одноразовый",
        },
      ],
    },
    {
      id: 4,
      title: "Фитинги",
      img: "acc4.jpg",
      imgMobile: "acc4-m.jpg",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
      specifications: [
        {
          title: "Назначение",
          descr: "хранение и транспортировка пищевых жидкостей",
        },
        {
          title: "Цвет",
          descr: "коричневый, прозрачный",
        },
        {
          title: "Вес с фитингом и трубкой",
          descr: "500 гр.+-10",
        },
        {
          title: "Материал преформы",
          descr: "ПЭТ (Полиэтилентерефталат)",
        },
        {
          title: "Тип фитинга",
          descr: "A",
        },
        {
          title: "Использование",
          descr: "одноразовый",
        },
      ],
    },
    {
      id: 5,
      title: "Трубки для кег",
      img: "acc5.jpg",
      imgMobile: "acc5-m.jpg",
      list: [
        "Разморозка денежных средств заложеных в тару",
        "Сокращение площади хранения КЕГ",
        "Отсутствие технического обслуживания и мойки",
        "Сокращение фонда оплаты труда",
      ],
      specifications: [
        {
          title: "Назначение",
          descr: "хранение и транспортировка пищевых жидкостей",
        },
        {
          title: "Цвет",
          descr: "коричневый, прозрачный",
        },
        {
          title: "Вес с фитингом и трубкой",
          descr: "500 гр.+-10",
        },
        {
          title: "Материал преформы",
          descr: "ПЭТ (Полиэтилентерефталат)",
        },
        {
          title: "Тип фитинга",
          descr: "A",
        },
        {
          title: "Использование",
          descr: "одноразовый",
        },
      ],
    },
  ],
  news: [
    {
      id: 1,
      title: "Новость №1",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
      img: "news1.jpg",
    },
    {
      id: 2,
      title: "Новость №2",
      description: "Международный бренд по производству ПЭТ-тар",
      img: "news2.jpg",
    },
    {
      id: 3,
      title: "Заголовок новости в две строки",
      description: "Международный бренд по производству ПЭТ-тары",
      img: "news3.jpg",
    },
    {
      id: 4,
      title: "Новость №4",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.Международный материалов, продукции и подхода к клиентам.",
      img: "news4.jpg",
    },
    {
      id: 5,
      title: "Новость №5",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов",
      img: "news5.jpg",
    },
    {
      id: 6,
      title: "Новость №6",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
      img: "news6.jpg",
    },
    {
      id: 7,
      title: "Новость №7",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
      img: "news4.jpg",
    },
  ],
});

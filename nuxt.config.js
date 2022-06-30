export default {
  publicRuntimeConfig: {
    axios: {
      baseURL: "/",
    },
  },
  server: {
    host: "0.0.0.0",
  },
  head: {
    title: "seltso",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no, shrink-to-fit=no",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  styleResources: {
    scss: ["@/assets/scss/_variables.scss"],
  },

  css: ["@/assets/scss/main.scss"],

  plugins: [
    {
      src: "~/plugins/locomotive-scroll.js",
      mode: "client",
    },
    "@/plugins/vue-svgicon.js",

    { src: "~/plugins/smooth-scroll.js", mode: "client" },

    { src: "~/plugins/vue-scrollactive.js", mode: "client" },

    { src: "~/plugins/device.js", mode: "client" },
    { src: "~/plugins/dev-device.js", mode: "client" },

    { src: "~/plugins/vue-fullpage.js", mode: "client" },
    { src: "~/plugins/ymapPlugin.js", mode: "client" },
    { src: "~/plugins/fullpage.js", mode: "client" },
    { src: "~/plugins/gsap.js", mode: "client" },
    { src: "~/plugins/jquery-latest.min.js", mode: "client" },
    "~/plugins/eventBus.js",
  ],

  components: true,

  buildModules: ["@nuxtjs/device"],
  device: {
    refreshOnResize: true,
  },

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",

    "@nuxtjs/device",
    ["nuxt-mq"],
  ],
  loading: "components/loading.vue",

  mq: {
    defaultBreakpoint: "xl2",
    breakpoints: {
      xs: 360,
      sm: 476,
      md: 768,
      lg: 992,
      xl: 1560,
      xl2: Infinity,
    },
  },

  build: {
    babel: {
      compact: true,
    },
  },
  generate: {
    minify: {
      collapseWhitespace: false,
    },
  },
  router: {
    //   scrollBehavior: async (to, from, savedPosition) => {
    //     if (savedPosition) {
    //       return savedPosition;
    //     }
    //     const findEl = async (hash, x) => {
    //       return (
    //         document.querySelector(hash) ||
    //         new Promise((resolve, reject) => {
    //           if (x > 50) {
    //             return resolve();
    //           }
    //           setTimeout(() => {
    //             resolve(findEl(hash, ++x || 1));
    //           }, 1500);
    //         })
    //       );
    //     };
    //     if (to.hash) {
    //       let el = await findEl(to.hash);
    //       if ("scrollBehavior" in document.documentElement.style) {
    //         return window.scrollTo({
    //           top: el.offsetTop,
    //           behavior: "smooth",
    //         });
    //       } else {
    //         return window.scrollTo(0, el.offsetTop);
    //       }
    //     }
    //     return {
    //       x: 0,
    //       y: 0,
    //     };
    //   },
  },
};

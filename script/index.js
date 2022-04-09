// Ready translated locale messages
const messages = {
  en: locale_en,
  zh_CN: locale_zh_CN
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: $cookies.get("locale") || "en", // set locale
  fallbackLocale: "en",
  messages // set locale messages
})

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/:document?/:fragment?", component: DocumentPage },
  ]
});

// Because the documentation previously used "hash" mode in the Router, paths
// starting with a hash will be redirected to prevent breaking old permalinks.
router.beforeEach((to, from, next) => {
  if (to.fullPath.startsWith("/#/")) {
    // Remove leading hash and replace following slash with hash.
    // Before: https://typeorm.io/#/entities/entity-columns
    // After:  https://typeorm.io/entities#entity-columns
    const path = "/" + to.fullPath.substring("/#/".length).replace("/", "#");
    next(path);
  } else
    next();
});

new Vue({
  el: "#app",
  i18n,
  router: router,
  components: {
    "main-page": MainPage,
    "markdown-reader": MarkdownReader,
  },
  mounted: function () {
    i18n.locale = $cookies.get("locale") || "en";
  }
});

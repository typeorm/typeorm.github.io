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

new Vue({
  el: "#app",
  i18n,
  router: new VueRouter({
    routes: [
      { path: "/:document?/:fragment?", component: DocumentPage },
    ]
  }),
  components: {
    "main-page": MainPage,
    "markdown-reader": MarkdownReader,
  },
  mounted: function () {
    i18n.locale = $cookies.get("locale") || "en";
    document.title = this.$t("title");
  }
});
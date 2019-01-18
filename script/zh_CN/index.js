new Vue({
    el: "#app",
    router: new VueRouter({
        routes: [
            { path: "/:document?/:fragment?", component: DocumentPage },
        ]
    }),
    components: {
        "main-page": MainPage,
        "markdown-reader": MarkdownReader,
    }
});
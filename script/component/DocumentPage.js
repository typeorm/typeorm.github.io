const DocumentPage = {
    template: `
<div class="document">
    <markdown-reader :file="readUrl" :hash="hash"></markdown-reader>
    
    <footer class="contribute small">
        {{$t("contribute")}} <a :href="editUrl">{{$t("edit")}}</a>
    </footer>
</div>
`,
    data: function() {
        const route = normalizeRoute(this.$route);

        return {
            document: route.document,
            hash: route.hash,
            locale: $cookies.get("locale") || "en",
            readLink: "https://raw.githubusercontent.com/typeorm/typeorm/master/",
            editLink: "https://github.com/typeorm/typeorm/edit/master/"
        };
    },
    watch: {
        '$route': function(to, from) {
            const route = normalizeRoute(to);

            this.document = route.document;
            this.hash = route.hash;
            this.updateTitle();
        }
    },
    mounted() {
        this.updateTitle();
    },
    methods: {
        getCurrentDocumentName(links = Links) {
            for (const link of links) {
                if (link.url === this.document)
                    return link.name;
                else if (link.links instanceof Array) {
                    const res = this.getCurrentDocumentName(link.links);
                    if (res != null)
                        return res;
                }
            }

            return null;
        },
        updateTitle: function() {
            const documentName = this.getCurrentDocumentName();
            if (!this.document)
                document.title = this.$t("title");
            else if (documentName)
                window.document.title = documentName + " | TypeORM";
            else
                document.title = this.$t("title");
        }
    },
    components: {
        "markdown-reader": MarkdownReader,
    },
    computed: {
        readUrl: function () {
            if (this.document === "changelog") {
                return `https://raw.githubusercontent.com/typeorm/typeorm/master/CHANGELOG.md`;
            } else if (!this.document || this.document === "readme") {
               return this.readLink + (this.locale === "en"? `README.md`: `README-${this.locale}.md`);
            } else {
                return this.readLink + (this.locale === "en"? `docs/${this.document}.md`: `docs/${this.locale}/${this.document}.md`);
            }
        },
        editUrl: function () {
            if (this.document === "changelog") {
                return `https://github.com/typeorm/typeorm/edit/master/CHANGELOG.md`;
            } else if (!this.document) {
                return  this.editLink + (this.locale === "en"? "README.md": `README-${this.locale}.md`);
            } else {
                return  this.editLink + (this.locale === "en"? `docs/${this.document}.md`: `docs/${this.locale}/${this.document}.md`);
            }
        }
    }
};

// Treat https://typeorm.io/?route=%2Fentities%23what-is-entity as https://typeorm.io/entities#what-is-entity
// This is used for Algolia DocSearch crawler indexing as a workaround
// for the site being a single page app while utilizing a 404 page for that
function normalizeRoute(route) {
    let document = route.params.document;
    let hash = route.hash;

    if (route.query != null && route.query["route"] != null) {
        const url = new URL(window.location.origin + route.query["route"]);
        document = url.pathname.split("/")[1];

        if (document == null)
            document = route.params.document;
        else
            hash = url.hash;
    }

    return {
        document,
        hash,
    };
}

const DocumentPage = {
    template: `
<div class="document">
    <markdown-reader :file="readUrl" :hash="hash"></markdown-reader>
    
    <div class="contribute small">
        {{$t("contribute")}} <a :href="editUrl">{{$t("edit")}}</a>
    </div>
</div>
`,
    data: function() {
        return {
            document: this.$route.params.document,
            hash: this.$route.hash,
            locale: $cookies.get("locale") || "en",
            readLink: "https://raw.githubusercontent.com/typeorm/typeorm/master/",
            editLink: "https://github.com/typeorm/typeorm/edit/master/"
        };
    },
    watch: {
        '$route': function(to, from) {
            this.document = to.params.document;
            this.hash = to.hash;
            this.updateTitle();
        }
    },
    create: function() {
        this.updateTitle();
    },
    methods: {
        updateTitle: function() {
            const link = this.$t("links").find(link => link.url === this.document);
            if (link) {
                window.document.title = link.name + " | TypeORM";
            }
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
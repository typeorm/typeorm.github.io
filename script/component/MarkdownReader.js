const MarkdownReader = {
    template: `<div v-html="html"></div>`,
    props: ["file", "hash"],
    data: function() {
        return {
            html: "",
            document: "readme"
        }
    },
    watch: {
        'file': function(file) {
            this.setDocument();
            this.loadFile(file)
                .then(() => {
                    this.scrollToHash(this.hash);
                });
        },
        'hash': function(hash) {
            this.scrollToHash(hash);
        }
    },
    created: function () {
        this.setDocument();
        this.loadFile(this.file)
            .then(() => {
                this.scrollToHash(this.hash);
            });
    },
    methods: {
        scrollToHash: function(hash) {
            if (!hash) {
                window.scrollTo(0, 0);
                return;
            }

            const hashElement = document.getElementById(hash.substr(1));
            if (!hashElement){
                window.scrollTo(0, 0);
                return;
            }

            hashElement.scrollIntoView();
        },
        setDocument: function () {
            if(this.$route.params.document) {
                this.document = this.$route.params.document;
            }
            else {
                this.document = "readme";
            }
        },
        loadFile: function(file) {
            return fetch(file)
                .then((response) => {
                    return response.text();
                })
                .then((body) => {

                    showdown.extension('header-anchors', () => {

                        var ancTpl = '$1<a id="user-content-$3" class="anchor" href="#$3" aria-hidden="true">#</a> $4';

                        return [{
                            type: "html",
                            regex: /(<h([2-4]) id="([^"]+?)">)(.*<\/h\2>)/g,
                            replace: ancTpl
                        }];
                    });

                    const converter = new showdown.Converter({ extensions: ['header-anchors'] });
                    converter.setFlavor('github');
                    converter.setOption('simpleLineBreaks', false);

                    this.html = converter.makeHtml(body);

                    this.$nextTick(() => Prism.highlightAll());
                });
        }
    }
};

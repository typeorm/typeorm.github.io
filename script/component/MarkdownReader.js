const MarkdownReader = {
    template: `<div v-html="html"></div>`,
    props: ["file", "fragment"],
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
                    this.scrollToFragment(this.fragment);
                });
        },
        'fragment': function(fragment) {
            this.scrollToFragment(fragment);
        }
    },
    created: function () {
        this.setDocument();
        this.loadFile(this.file)
            .then(() => {
                this.scrollToFragment(this.fragment);
            });
    },
    methods: {
        scrollToFragment: function(fragment) {
            const fragmentElement = document.getElementById(fragment);
            if (fragmentElement)
                fragmentElement.scrollIntoView();
            else
                window.scrollTo(0, 0);
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

                        var ancTpl = '$1<a id="user-content-$3" class="anchor" href="#' + this.$route.params.document + '/$3" aria-hidden="true">#</a> $4';

                        return [{
                            type: "html",
                            regex: /(<h([2-4]) id="([^"]+?)">)(.*<\/h\2>)/g,
                            replace: ancTpl
                        }];
                    });

                    showdown.extension('links-replacer', () => {
                        return [{
                            type: "html",
                            regex: /<a href="#(.*)">/g,
                            replace: "<a href='#/" + this.document + "/$1'>"
                        }];
                    });

                    showdown.extension('other-page-links-replacer', () => {
                        return [{
                            type: "html",
                            regex: /<a href="\.?\/?(docs\/)?(.*?)\.md\#?(.*?)">/g,
                            replace: "<a href='#/$2/$3'>"
                        }];
                    });

                    const converter = new showdown.Converter({ extensions: ['header-anchors', 'links-replacer', 'other-page-links-replacer'] });
                    converter.setFlavor('github');
                    converter.setOption('simpleLineBreaks', false);

                    this.html = converter.makeHtml(body);

                    this.$nextTick(() => Prism.highlightAll());
                });
        }
    }
};

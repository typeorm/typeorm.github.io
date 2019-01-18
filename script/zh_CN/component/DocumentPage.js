const DocumentPage = {
  template: `
<div class="document">
    <markdown-reader :file="readUrl" :fragment="fragment"></markdown-reader>
    
    <div class="contribute small">
        发现错别字并希望为文档做出贡献？ <a :href="editUrl">在Github上编辑此页面！</a>
    </div>
</div>
`,
  data: function() {
    return {
      document: this.$route.params.document,
      fragment: this.$route.params.fragment
    };
  },
  watch: {
    $route: function(to, from) {
      this.document = to.params.document;
      this.fragment = to.params.fragment;
      this.updateTitle();
    }
  },
  create: function() {
    this.updateTitle();
  },
  methods: {
    updateTitle: function() {
      const link = Links.find(link => link.url === this.document);
      if (link) {
        window.document.title = link.name + " | TypeORM";
      }
    }
  },
  components: {
    "markdown-reader": MarkdownReader
  },
  computed: {
    readUrl: function() {
      if (this.document === "changelog") {
        return `https://raw.githubusercontent.com/typeorm/typeorm/master/CHANGELOG.md`;
      } else if (!this.document || this.document === "readme") {
        return `https://raw.githubusercontent.com/typeorm/typeorm/master/README-zh_CN.md`;
      } else {
        return `https://raw.githubusercontent.com/typeorm/typeorm/master/docs/zh_CN/${this.document}.md`;
      }
    },
    editUrl: function() {
      if (this.document === "changelog") {
        return `https://github.com/typeorm/typeorm/edit/master/CHANGELOG.md`;
      } else if (!this.document) {
        return `https://github.com/typeorm/typeorm/edit/master/README-zh_CN.md`;
      } else {
        return `https://github.com/typeorm/typeorm/edit/master/docs/zh_CN/${this.document}.md`;
      }
    }
  }
};

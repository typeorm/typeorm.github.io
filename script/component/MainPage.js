const MainPage = {
    template: `<div>
    <nav class="navbar navbar-expand navbar-light bg-light">
        <!--<img src="image/logo-large.png" width="10%" height="10%">-->
        <a class="navbar-brand" href="/"><span style="color: #E83524">Type</span><span style="color: #000">ORM</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-right" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" style="width: 100%; justify-content: flex-end;">
                    <!--<li class="nav-item">
                        <a class="nav-link" href="https://medium.com/typeorm" title="Blog">
                            <svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#107C10">
                                <title id="simpleicons-github-icon">Blog</title>
                                <path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.976 0-2.776-2.25-5.026-5.024-5.026zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z"/>
                            </svg>
                        </a>
                    </li>-->
                    <!--<<li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/AwesomeTypeORM" title="Twitter">
                            <svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#1DA1F2">
                                <title id="simpleicons-github-icon">Twitter</title>
                                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                            </svg>
                        </a>
                    </li>-->
                    <li class="nav-item">
                        <a class="nav-link" href="https://join.slack.com/t/typeorm/shared_invite/enQtNDQ1MzA3MDA5MTExLTFiNDEyOGUxZGQyYWIwOTA0NDQxODdkOGQ0OTUxNzFjYjUwY2E0ZmFlODc5OTYyYzAzNGM3MGZjYzhjYTBiZTY" title="Slack">
                            <svg aria-labelledby="simpleicons-slack-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FF0064">
                                <title id="simpleicons-slack-icon">Slack</title>
                                <path d="M9.879 10.995l1.035 3.085 3.205-1.074-1.035-3.074-3.205 1.08v-.017z"/><path d="M18.824 14.055l-1.555.521.54 1.61c.218.65-.135 1.355-.786 1.574-.15.045-.285.067-.435.063-.511-.015-.976-.338-1.155-.849l-.54-1.607-3.21 1.073.539 1.608c.211.652-.135 1.358-.794 1.575-.15.048-.285.067-.435.064-.51-.015-.976-.34-1.156-.85l-.539-1.619-1.561.524c-.15.045-.285.061-.435.061-.511-.016-.976-.345-1.155-.855-.225-.66.135-1.364.78-1.575l1.56-.525L7.5 11.76l-1.551.525c-.141.048-.285.066-.428.064-.495-.016-.975-.338-1.141-.848-.209-.65.135-1.354.796-1.574l1.56-.52-.54-1.605c-.21-.654.136-1.359.796-1.575.659-.22 1.363.136 1.574.783l.539 1.608L12.3 7.544l-.54-1.605c-.209-.645.135-1.35.789-1.574.652-.211 1.359.135 1.575.791l.54 1.621 1.555-.51c.651-.219 1.356.135 1.575.779.218.654-.135 1.359-.784 1.575l-1.557.524 1.035 3.086 1.551-.516c.652-.211 1.358.135 1.575.795.22.66-.135 1.365-.779 1.574l-.011-.029zm4.171-5.356C20.52.456 16.946-1.471 8.699 1.005.456 3.479-1.471 7.051 1.005 15.301c2.475 8.245 6.046 10.17 14.296 7.694 8.245-2.475 10.17-6.046 7.694-14.296z"/>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/typeorm/typeorm" title="GitHub">
                            <svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#181717">
                                <title id="simpleicons-github-icon">GitHub</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item dropdown language">
                        <a class="nav-link" href="#" title="Language" id="lang-choose" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg aria-labelledby="simpleicons-language-icon" role="img" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                <title id="simpleicons-language-icon">Language</title>
                                <path d="M1024 512c0-281.6-230.4-512-512-512S0 230.4 0 512c0 262.4 198.4 473.6 448 505.6 12.8 0 32 6.4 51.2 6.4h19.2c281.6-6.4 505.6-230.4 505.6-512z m-70.4 6.4c0-25.6-6.4-51.2-12.8-76.8v-25.6c6.4 32 12.8 57.6 12.8 89.6v12.8zM70.4 512c0-32 6.4-64 6.4-89.6 19.2 19.2 64 19.2 76.8-12.8 19.2 12.8 44.8 12.8 44.8 38.4 0 76.8 0 160 70.4 160 0 0 38.4 12.8 57.6 57.6 6.4 12.8 32 0 57.6 0 12.8 0 0 19.2 0 70.4 0 44.8 102.4 121.6 102.4 121.6 0 32 0 57.6 6.4 76.8-25.6 0-44.8 0-57.6 6.4-204.8-32-364.8-211.2-364.8-428.8z m550.4 422.4c0-12.8-12.8-19.2-32-12.8 12.8-64 19.2-96 51.2-121.6 44.8-38.4 6.4-83.2-25.6-76.8-25.6 6.4-12.8-32-32-32-25.6 0-51.2-51.2-89.6-64-19.2-6.4-38.4-32-64-32s-57.6 19.2-57.6 6.4c0-51.2-6.4-89.6-6.4-108.8 0-12.8-6.4-6.4 25.6-6.4 19.2 0 6.4-38.4 25.6-38.4 19.2 0 57.6 19.2 70.4 6.4 12.8-6.4 70.4 166.4 70.4 25.6 0-19.2-6.4-44.8 0-57.6 32-57.6 64-108.8 64-115.2 0-6.4-32-6.4-57.6 0-6.4 0 0 19.2-12.8 19.2-44.8 12.8-89.6-12.8-76.8-32 12.8-25.6 70.4-12.8 70.4-57.6 0-25.6 6.4-57.6 6.4-76.8 64 12.8 57.6-83.2-38.4-89.6 192 0 352 121.6 409.6 294.4 0 0-6.4-6.4-12.8-6.4-25.6-70.4-96-19.2-76.8 44.8-128 96-96 166.4-51.2 204.8 19.2 19.2 44.8 51.2 57.6 70.4-12.8 44.8 51.2 25.6 89.6-44.8-38.4 147.2-160 262.4-307.2 300.8z" fill="#2c2c2c" p-id="1930"></path>
                            </svg>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="lang-choose">
                            <a v-for="(lang,v) in langs" :key="v" class="dropdown-item" @click="changeLang(v)">{{lang}}</a>
                        </div>
                    </li>
                </ul>
            <!--<form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>-->
        </div>
    </nav>
    <div class="row">
        <div class="col-12 col-sm-5 col-md-4 left-panel">
            <ul>
                <li v-for="link in links">
                    <div v-if="link.links">
                        <div @click="goToLink()">
                            <router-link :to="'/' + link.links[0].url"><b>{{ link.name }}</b></router-link>
                        </div>
                        <ul>
                            <li v-for="subLink in link.links" @click="goToLink()">
                                <router-link :to="'/' + subLink.url">{{ subLink.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <div @click="goToLink()">
                            <router-link :to="'/' + link.url"><b>{{ link.name }}</b></router-link>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="carbon-container" ref="carbon"></div>
          </div>
        <div class="col-12 col-sm-7 col-md-8">
            <router-view></router-view>
        </div>
    </div>
</div>
`,
    data: function () {
        return {
            links: this.$t("links"),
            langs: { en: "English", "zh_CN": "简体中文" }
        };
    },
    mounted() {
         // <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CK7DL53W&placement=typeormio" id="_carbonads_js"></script>
         var scriptEl = document.createElement('script');
         scriptEl.setAttribute('src', '//cdn.carbonads.com/carbon.js?serve=CK7DL53W&placement=typeormio');
         scriptEl.setAttribute('id', '_carbonads_js');
         scriptEl.setAttribute('async', null);
         this.$refs.carbon.appendChild(scriptEl);
    },
    methods: {
        goToLink: function () {
            window.scrollTo(0, 0);

            var scriptEl = document.createElement('script');
            scriptEl.setAttribute('src', '//cdn.carbonads.com/carbon.js?serve=CK7DL53W&placement=typeormio');
            scriptEl.setAttribute('id', '_carbonads_js');
            scriptEl.setAttribute('async', null);
            this.$refs.carbon.innerHTML = ''
            this.$refs.carbon.appendChild(scriptEl);
        },
        changeLang: function (locale) {
            $cookies.set("locale", locale);
            this.$i18n.locale = locale;
            window.location.reload(true);
        }
    }
};

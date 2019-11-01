const Qiita = {template: qiita};
const Twitter = {template: twitter};

const routes = [
    {path: '/qiita', component: Qiita},
    {path: '/twitter', component: Twitter}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount("#app");

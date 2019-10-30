var vm = new Vue({
    el: '#app',

    data: {
        input: ""

    },
    methods: {},

    watch: {},

    computed: {
        convertMarkdown: function () {

            return marked(this.input);
        }
    },

});
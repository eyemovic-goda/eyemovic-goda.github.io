var vm = new Vue({
    el: '#app',

    data: {
        addItem: "",
        items: []

    },
    methods: {
        addList: function () {
            this.items.push(this.addItem);
            this.addItem = "";
        },
        removeLast: function () {
            this.items.splice(this.items.length - 1, 1)

        }
    },

    watch: {},

    computed: {},

});
var vm = new Vue({
    el: '#app',

    data: {
        addItem: "",
        items: ["one", "two", "three", "for", "five"]

    },
    methods: {
        addList: function () {
            this.items.push(this.addItem);
            this.addItem = "";
        },
        removeLast: function () {
            this.items.splice(this.items.length - 1, 1)

        },
        sortData: function () {
            this.items.sort(function (a, b) {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            })
        },
        shuffleData: function () {
            var buffer = [];
            var len = this.items.length;
            for (var i = len; len > 0; len--) {
                var r = Math.floor(Math.random() * len);

                buffer.push(this.items[r]);
                this.items.splice(r, 1);
            }
            this.items = buffer;
        },
    },

    watch: {},

    computed: {},

});
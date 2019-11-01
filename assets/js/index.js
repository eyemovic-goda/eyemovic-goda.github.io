var MyComponent = {
    props: ["object"],
    template: `
<div style="width:300px;backgroundColor:#ffddaa;">
<p style="backgroundColor:#ffa95e;">{{object.title}}</p>
<p>解説:{{object.body}}</p> </div>`
};

var vm = new Vue({
    el: '#app',

    components: {
        "my-product": MyComponent
    },

    data: {
        dataArray: []
    },
    computed: {},

    methods: {
        sortData: function () {
            this.dataArray.sort(function (a, b) {
                return (a.title < b.title ? -1 : 1);
            })
        },

        shuffleData: function () {
            var buffer = [];
            var len = this.dataArray.length;

            for (var i = len; len > 0; len--) {
                var r = Math.floor(Math.random() * len);
                buffer.push(this.dataArray[r]);
                this.dataArray.splice(r, 1);
            }
            this.dataArray = buffer;
        },
        loadData: function (e) {
            var file = e.target.files[0];
            if (file) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    vm.dataArray = JSON.parse(e.target.result);
                };
                reader.readAsText(file)
            }
        }
    },

    watch: {},

});
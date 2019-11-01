var vm = new Vue({
    el: '#app',

    components: {},

    data: {
        loadData: ""
    },
    computed: {},

    methods: {
        onFileChange: function (e) {

            console.log(e);

            var file = e.target.files[0];
            if (file) {
                var reader = new FileReader();
                var vm = this;

                reader.onload = function (e) {
                    vm.loadData = JSON.parse(e.target.result);
                };
                reader.readAsText(file)
            }

        },
    },

    watch: {},

});
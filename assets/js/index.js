function iine() {
    vm.isClick = true;
}

var vm = new Vue({
    el: '#app',

    data: {
        count: 0,
        isClick: false
    },
    methods: {
        countUp: function (value) {
            this.count += value;

        }
    }
});

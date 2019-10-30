var vm = new Vue({
    el: '#app',

    data: {
        resetSec: 0,
        timerObj: null
    },
    methods: {
        startTimer: function () {
            this.resetSec = 5;

            this.timerObj = setInterval(() => {
                this.resetSec--;
            }, 1000)
        }
    },

    watch: {
        resetSec: function () {
            console.log(vm.resetSec);

            if (vm.resetSec <= 0) {
                console.log(vm.resetSec);

                alert("制限時間です");
                clearInterval(this.timerObj);
            }

        }
    }

});

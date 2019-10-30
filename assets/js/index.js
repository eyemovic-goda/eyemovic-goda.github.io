var vm = new Vue({
    el: '#app',

    data: {
        myNumber:0,
        tweenedNumber:0,
        myNumber2:0,

    },
    methods: {
    },

    watch: {
        myNumber: function () {
            console.log("ccc");
            TweenMax.to(this.$data,1,{tweenedNumber: this.myNumber})
        }
    },

    computed:{
        animeNumber:function () {
            console.log("aaa");

            return this.tweenedNumber;
        },
        test:function () {

            return this.myNumber2+this.myNumber;
        }

    },

});
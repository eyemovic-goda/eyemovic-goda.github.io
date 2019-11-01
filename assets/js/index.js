var MyComponent = {
    template: '<p class="my-comp">私は、 {{ myName }}です。 </p>',

    props: {
        myName: String,
    },

    created: function () {
        if (this.myName == null) {
            this.myName = "名無しの権兵衛"
        }
    },

    data: function () {
        return {}
    },

    methods: {}

};

var vm = new Vue({
    el: '#app',

    components: {
        "my-component": MyComponent
    },

    data: {
        items: ['桃太郎', '浦島太郎', '金太郎', '三年寝太郎', '龍 の子太郎', null]
    },
    computed: {},

    methods: {},

    watch: {},

});
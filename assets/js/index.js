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

    data: {},
    computed: {},

    methods: {},

    watch: {},

});
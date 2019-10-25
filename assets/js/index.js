var vm = new Vue({
    el: '#app',
    data: {
        message: "これがめっさーげ",
        url: "https://www.google.com/?hl=ja",
        atr: "href",
    },
    computed: {
        reversedMessage() {
            return this.message.split("").reverse().join("");
        },
        test() {
            return Date.now();
        },
    },

    methods: {
        now() {
            return Date.now();
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        message: "これがめっさーげ",
        firstName: "goda",
        lastName: "kazuki",
        fullName: "goda kazuki"
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
            console.log("nowが実行されました。");
            return Date.now();
        },
    },

    watch: {
        firstName(val) {
            this.fullName = val + " " + this.lastName
        },
        lastName(val) {
            this.fullName = this.firstName + " " + val
        }
    }
});

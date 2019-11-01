var vm = new Vue({
    el: '#app',

    data: {
        addText: "",
        todos: [
            {done: false, text: "パンを買う"},
            {done: false, text: "コーヒーを買う"}
        ]
    },
    computed: {
        /**
         * 何件処理したかを計算する。
         * @returns {number}
         */
        remaining: function () {
            return this.todos.filter(function (val) {
                return val.done;
            }).length

        }
    },

    methods: {
        addToDo: function () {
            if (this.addText === "") {
                return
            }

            this.todos.push({done: false, text: this.addText});
            this.addText = "";
        },

        /**
         * doneがtrueなら削除する
         */
        cleanToDo: function () {
            this.todos = this.todos.filter(function (val) {
                return val.done === false;
            });
        }
    },

    watch: {},

});
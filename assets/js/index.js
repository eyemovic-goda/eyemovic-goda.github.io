var data = {a: 1};
var vm = new Vue({
    el: '#app',
    data: data,

    beforeCreate: function () {
        console.log("before Createしました。");
    },

    created: function () {
        console.log("createdしました。");
    },

    beforeUpdate: function () {
        console.log("beforeUpdateしました。");
    },
    updated: function () {
        console.log("updatedしました。");
    }
});
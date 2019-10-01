var data = {a: 1};
var vm = new Vue({
  el: '#app',
  data: data,
});


// $watch はインスタンスメソッドです
vm.$watch('a', function (newValue, oldValue) {
  // このコールバックは `vm.a` の値が変わる時に呼ばれます
  console.log('変更前は' + oldValue + 'でした。');
  console.log('変更後は' + newValue + 'でした。');
});

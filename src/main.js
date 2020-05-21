import Vue from 'vue'
import App from './App.vue'


// directive to change background to green
// Vue.directive("highlight", {
//     bind(el, binding){
//       el.style.backgroundColor = "green"
//     }
// });
//
// directive to change background to variable passed in
// Vue.directive("highlight", {
//     bind(el, binding){
//       el.style.backgroundColor = binding.value;
//     }
// });
//  directive to change background to variable passed in
//  and has modifier for delay
// Vue.directive("highlight", {
//     bind(el, binding){
//       let delay = 0;
//       if(binding.modifiers['delay']){
//         delay = 2000;
//       }
//       setTimeout(()=>{
//         el.style.backgroundColor = binding.value;
//       }, delay)
//
//     }
// });
new Vue({
  el: '#app',
  render: h => h(App)
})

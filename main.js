import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
// render: h => h(App)
	data:{
    //count:0
    name:'キマイラ',
    list:[
      {id:1, name:'スライム', hp:100},
      {id:2, name:'ゴブリン', hp:200},
      {id:3, name:'ドラゴン', hp:500}
    ]
  },
  methods:{
    doadd:function(){
      var max = this.list.reduce(function(a,b){
        return a.id > b.id ? a.id :b.id
      },0)
      this.list.push({
        id:max+1,
        name:this.name,
        hp:500
      })
    },
    doRemove:function(index){
      this.list.splice(index,1)
      },
    doAttack:function(index) {
      this.list[index].hp -=10
      }
    }
})

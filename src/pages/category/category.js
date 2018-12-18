import 'css/common.css';
import './category.css';

import Vue from 'vue';
import axios from 'axios';

// import Foot from 'components/Foot.vue';
import url from 'js/api.js';

import mixin from 'js/mixin.js';


new Vue({
  el:'#app',
  data:{
    topLists: null,
    topIndex: 0,
    subData: null,
    rankData: null
  },
  created(){
    this.getTopList();
    this.getSubList(0);//index=0时候就不执行getSubList

  },
  methods:{
    getTopList(){
      axios.get(url.topLists).then(res =>{
        this.topLists = res.data.lists
      }).catch(res=>{
        console.log('无法连接')
      })
    },
    getSubList(index, id){
      console.log(index,id)
      this.topIndex = index
      if(index === 0){
        this.getRank();
      }else{
        axios.get(url.subLists,{id}).then(res =>{
          this.subData = res.data.data
        })
      }
    },
    getRank(){
      axios.get(url.rank).then(res =>{
        this.rankData = res.data.data
      })
    },
    toSearch(list){
     location.href = `search.html?keyword=${list.name}&id=${list.id}`
    }
    
  }, 
  // components:{
  //   Foot
  // },
  // filters:{
  //   number(price){
  //     // return price +  '.00'
  //   }
  // }
  mixins: [mixin]//vue内部公用处理
})
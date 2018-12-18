import 'css/common.css';
import './index.css';

import Vue from 'vue';
import axios from 'axios';

import url from 'js/api.js';

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import Foot from 'components/Foot.vue';
import Swipe from 'components/Swipe.vue';

import mixin from 'js/mixin.js';

new Vue({
  el: '#app',
  data:{
    lists: null,
    pageNum: 1,
    pageSize:6,
    loading: false,//false可以加载
    allLoaded: false,//没有完全加载完毕
    bannerLists: null
  },
  created(){
    this.getLists();
    this.getBanner();
  },
  methods:{
    getLists(){
      if(this.allLoaded) return //如果已经全部加载就直接return
      this.loading = true;//请求进来时候不能再请求数据
      axios.get(url.hotLists,{
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists = res.data.lists
        //判断数据是否加载完毕
        if(curLists.length < this.pageSize){
          this.allLoaded = true
        }
        //this 指vue实例
         if(this.lists){
          this.lists = this.lists.concat(curLists)
         }else{
           //第一次请求数据
           this.lists = curLists
         }
         this.loading = false;//请求完了才能再请求
         this.pageNum++;//请求一页到下一页
      })
    },
    getBanner(){
      axios.get(url.banner).then(res=>{
        this.bannerLists = res.data.lists
      })
    }
  },
  components:{
    Foot,
    Swipe
  },
  mixins: [mixin]

})
import './search.css';
import 'css/common.css';

import Vue from 'vue';
import axios from 'axios';

import url from 'js/api.js';
import qs from 'qs';

import mixin from 'js/mixin.js';

// import { InfiniteScroll } from 'mint-ui';
// Vue.use(InfiniteScroll);

import Velocity from 'velocity-animate'

let {keyword, id}  = qs.parse(location.search.substr(1))

let innerHeight = document.querySelector('.container').clientHeight;                    
//屏幕尺寸高度
let outerHeight = document.documentElement.clientHeight;                    
//可滚动容器超出当前窗口显示范围的高度
let scrollTop = document.documentElement.scrollTop; 

new Vue({
  el: '.container',
  data:{
    searchList: null,
    keyword,
    isShow: false,
    onLoading: false,//false可以加载
    allLoaded: false,//没有完全加载完毕
    // loading: false,
    pageNum: 1,
    pageSize:6, 
  },
  created(){
    this.getSearchList();
  },
  methods:{
    // getSearchList(){
    //   if(this.allLoaded) return //如果已经全部加载就直接return
    //   this.onLoading = true;//请求进来时候不能再请求数据

    //   axios.get(url.search,
    //     {
    //       keyword ,
    //       id,
    //       pageNum: this.pageNum,
    //       pageSize: this.pageSize
    //     }).then(res =>{
    //       let curSearchList = res.data.lists;
    //     // this.searchList = res.data.lists
    //     if(curSearchList.length < this.pageSize){
    //       this.allLoaded = true
    //     }
    //     if(this.searchList){
    //       this.searchList = this.searchList.concat(curSearchList)
    //     }else{
    //       this.searchList = curSearchList;
    //     }
    //     this.onLoading = false;
    //     this.pageNum ++;
    //   })
    // },

    getSearchList(){
      axios.get(url.search,{keyword,id}).then(res=>{
        this.searchList = res.data.lists
      })
    },
    move(){
      if(document.documentElement.scrollTop > 60){
        this.isShow = true
      }else{
        this.isShow = false
      }
    },
    toTop(){
      Velocity(document.body, 'scroll',{
        duration: 500
      })
    }
  },
  mixins: [mixin]
})

// //可滚动容器的高度
// let innerHeight = document.querySelector('#app').clientHeight;
// //屏幕尺寸高度
// let outerHeight = document.documentElement.clientHeight;
// //可滚动容器超出当前窗口显示范围的高度
// let scrollTop = document.documentElement.scrollTop;
// if (innerHeight < (outerHeight + scrollTop)) {    
// console.log("loadmore");//加载更多操作
// }

// new Vue({            
//   el: '#app',            
//   data: {                
//     items: 20
// },

// created() {                
//   window.addEventListener('scroll', this.onScroll);
// },            
// methods: {
//     onScroll() {                    
//       //可滚动容器的高度
//         let innerHeight = document.querySelector('#app').clientHeight;                    
//         //屏幕尺寸高度
//         let outerHeight = document.documentElement.clientHeight;                    
//         //可滚动容器超出当前窗口显示范围的高度
//         let scrollTop = document.documentElement.scrollTop;                   
//          //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
//         console.log(innerHeight + " " + outerHeight + " " + scrollTop);                    
//         if (innerHeight < (outerHeight + scrollTop)) {                        
//           //加载更多操作
//             console.log("loadmore");                        
//             this.items += 10;

//         }
//     }
// }
// }) 


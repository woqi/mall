import './goods_common.css';
import './goods_custom.css';
import './goods.css';
import './goods_theme.css';
import './goods_mars.css';
import './goods_sku.css';
import './goods_transition.css';


import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import Swipe from 'components/Swipe.vue';

import mixin from 'js/mixin.js'
import url from 'js/api.js';

let {id} = qs.parse(location.search.substr(1))
let detailTab = ['商品详情','本店成交']
new Vue({
  el: '#app',
  data:{
    id,//接收id
    details: null,
    detailTab,
    tabIndex: 0,
    dealList: null,
    sliderLists: null,
    skuType: 1,
    showSku: false,//阴影层弹出层不显示
    skuNum: 1 ,//加入商品数量初始值1
    isAddCart: false,//是否已经加入购物车
    showAddMessage: false//购物车弹窗信息‘已成功加入购物车’是否出现
  },
  created(){
    this.getDetails();
  },
  methods:{
    getDetails(){
      axios.get(url.details,{id}).then(res =>{
        this.details = res.data.data;
        this.sliderLists = [];
        this.details.imgs.forEach(item =>{
          this.sliderLists.push({
            clickUrl: '',
            img: item
          })

        })
        // this.bannerLists = this.details.imgs
      })
    },
    changeTab(index){
      this.tabIndex = index;
      if(index){
        this.getDeal()
      }
    },
    getDeal(){
      axios.get(url.deal, {id}).then(res=>{
        this.dealList = res.data.data.lists
        // console.log(this.dealList)
      })
    },
    chooseSku(type){
      this.skuType = type;//每次进来将值赋给skuType
      this.showSku = true;
    },
    changeSkuNum(num){
      if(num<0 && this.skuNum === 1){return}//商品数量减少到一就return
      this.skuNum += num
    },
    addCart(){//判定购物车小圆点是否出现
      axios.post(url.addCart,{
        id,
        number: this.skuNum
        //传递两个值商品id，购物车商品数量
      }).then(res=>{
        if(res.data.status === 200){
          this.showSku = false;
          this.isAddCart = true;
          this.showAddMessage = true;
          setTimeout(()=>{
            this.showAddMessage = false;
          },1000)
        }
      })
    }

  },
  components: {
    Swipe
  },
  watch:{
    showSku(val, oldVal){
      //监听showSku值，防止遮罩层滑动
      document.body.style.overflow = val ? 'hidden' : 'auto';
      document.querySelector('html').style.overflow = val ? 'hidden' : 'auto';
      document.body.style.height = val ? '100%' : 'auto';
      document.querySelector('html').style.height = val ? '100%' : 'auto';
    }
  },
  mixins: [mixin]
  
})
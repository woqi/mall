import './cart_base.css';
import './cart_trade.css';
import './cart.css';

import Vue from 'vue';
import axios from 'axios';

import mixin from 'js/mixin.js';
import url from 'js/api.js';
import Volecity from 'velocity-animate';//弹弹效果动画

import Cart from 'js/cartService.js';
import fetch from 'js/fetch.js';


new Vue({
  el: '.container',
  data:{
    lists: null,
    total: 0,
    editingShop: null,
    editingShopIndex: -1,
    removePopup: false,//是否要进行删除
    removeData: null,//储存要删除的数据
    removeMsg: ''
  },
  computed:{
    allSelected:{//需要使用get和set
      get(){//get用来遍历
        if(this.lists&&this.lists.length){
          return this.lists.every(shop =>{
            return shop.checked//判断店铺是否被全部选中
          })
        }
        return true;
      },
      set(newVal){//当前的值全部是false就全部是false是true就全是true
        this.lists.forEach(shop =>{
          shop.checked = newVal;
          shop.goodsList.forEach(good =>{
            good.checked = newVal;
          })
        })
      }
    },
    allRemoveSelected:{
      get(){
        //核心思想，确认编辑的店铺中的商品是否被选中
        if(this.editingShop){
          return this.editingShop.removeChecked;
        }
        return false//没有就是false
      },
      set(newVal){
        if(this.editingShop){
          this.editingShop.removeChecked = newVal;
          this.editingShop.goodsList.forEach(good =>{
            good.removeChecked = newVal;
          })
        }
      } 
    },
    selectLists(){
      if(this.lists&&this.lists.length){
        let arr =[];
        let total = 0;
        this.lists.forEach(shop =>{
          shop.goodsList.forEach(good=>{
            if(good.checked){//如果商品被选中就将商品加入到商品列表里面，然后录入价格
              arr.push(good)
              total += good.price * good.number
            }
          })
        })
        this.total = total;//算完后传给total
        return arr;//遍历完后出来arr
      }
      return []
    },
    removeLists(){
      if(this.editingShop){
        let arr = [];
        this.editingShop.goodsList.forEach(good =>{ 
          if(good.removeChecked){
            arr.push(good)
          }
        })
        return arr;
      }
      return [];
    }
  },
  created(){
    this.getList();
  },
  methods:{
    // inputChangeNumber(good,number){
    //   let re = /^[0-9]+$/ ;
    //   if(!number) return;
    //   if(number <= -1 && good.number === 1) return
    //   if(re.test(number) == true){
    //    Cart.add(good.id).then(res=>{
    //      good.number += number;
    //    })
    //   }
    // },
    getList(){
      axios.get(url.cartList).then(res =>{
        let lists = res.data.cartList;//赋值
        // this.lists = res.data.cartList;
        lists.forEach(shop => {
          shop.checked = true //一开始进入购物车全部选择店铺的商品
          shop.editing = false;//店铺是否可编辑
          shop.removeChecked = false;//店铺是否被删除
          shop.editingMsg = '编辑'//显示的信息
          shop.goodsList.forEach(good =>{
            good.checked = true //商品是否都选中的状态
            good.removeChecked = false;
          })
        })
        this.lists = lists;//为了响应式数据处理完再赋值给它
      })
    },
    selectGood(shop,good){//商品是否被选择,默认进入购物车商品全选，单个取消商品店铺显示未被点击
      let attr = this.editingShop ? 'removeChecked' : 'checked';
      // console.log(good.checked)
      good[attr] = !good[attr]
      shop[attr] = shop.goodsList.every(good =>{
        return good[attr]//遍历数组每一个商品都是true
      })
    },
    selectShop(shop){
      let attr = this.editingShop ? 'removeChecked' : 'checked';
      shop[attr] = !shop[attr]
      shop.goodsList.forEach(good =>{
        good[attr] = shop[attr]//商品选没选中取决于店铺是否被选中
      })
    },
    selectAll(){
      let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected';
      this[attr] = !this[attr]
    },
    edit(shop,shopIndex){
      shop.editing = !shop.editing;
      shop.editingMsg = shop.editing ? '完成' : '编辑';
      this.lists.forEach((item,i) =>{
        if(shopIndex !== i){
          item.editing = false;
          item.editingMsg = (shop.editing) ? '' : '编辑';
        }
      })
      this.editingShop = shop.editing ? shop : null;//是否在编辑状态,是就给店铺状态
      this.editingShopIndex = shop.editing ? shopIndex : -1;
    },
    add(good){
      // axios.post(url.addCart,{
      //   id: good.id,
      //   number: 1 
      // }).then(res =>{
      //   good.number ++;//先更改本地数据再，修改本地数据
      // })
      Cart.add(good.id).then(res=>{
        good.number ++;
      })
    },
    reduce(good){
      if(good.number===1) return;
      // axios.post(url.cartReduce,{
      //   id: good.id,
      //   number: 1
      // }).then(res =>{
      //   good.number --;
      // })
      Cart.reduce(good.id).then(res=>{
        good.number --;
      })
    },
    remove(shop,shopIndex,good,goodIndex){
      // 对删除确认的过程
      // console.log('remove')
      this.removePopup = true;
      this.removeData = {shop,shopIndex,good,goodIndex}
      this.removeMsg = '确认要删除该商品么？';
    },
    removeList(){
      this.removePopup = true;
      this.removeMsg = `确定所选${this.removeLists.length}个商品删除？`
    },
    removeConfirm(){
      if(this.removeMsg === '确认要删除该商品么？'){
        let {shop,shopIndex,good,goodIndex} = this.removeData
        axios.post(url.cartRemove,{
          id: good.id//此时告诉后台，数据删除，删除完毕后要对本地的数据进行操作
        }).then(res=>{
          shop.goodsList.splice(goodIndex,1)//通过商品下标来删除商品
          if(!shop.goodsList.length){
            this.lists.splice(shopIndex, 1)//店铺下面没有商品的时候就把店铺删除
            this.removeShop()//只有在删除店铺才调用
          }
          this.removePopup = false; //遮造层和提示层弹窗去除
          // this.$refs[`goods-${shopIndex}-${goodIndex}`][0].style.left = '0px';
          // 不使用ref就使用key不然下一个商品会继承上一个商品的样式
        })
      }else{
        let ids = [];
        this.removeLists.forEach(good =>{
          ids.push(good.id)
        })
        axios.post(url.cartMrRemove,{
          ids
        }).then(res=>{
          let arr = [];
          console.log(this.goodsList)
          console.log(this.editingShop)
          this.editingShop.goodsList.forEach(good =>{//遍历编辑商铺下的商品
            
            let index = this.removeLists.findIndex(item =>{
              return item.id == good.id//找到每一个商品看看是否在删除列表中
            })
            if(index === -1){//如果不在就用新数组接受它
              arr.push(good)
            }
          })
          if(arr.length){//长度存在
            this.editingShop.goodsList = arr//将新数组给商品列表
          }else{
            this.lists.splice(this.editingShopIndex, 1)//不存在删除店铺
            this.removeShop()
          }
          this.removePopup  = false;
        })
      }
    },
    removeShop(){
      this.editingShop = null//移除店铺下所有商品后店铺的编辑状态没有
      this.editingShopIndex = -1//店铺的下标也没有，返回初始值
      this.lists.forEach(shop =>{
        shop.editing = false;//目前删除一个店铺，其余店铺还处于这个店铺的编辑状态
        shop.editingMsg = '编辑'
      })
    },
    start(e,good){
      //记录开始位置，结束的位置
      good.startX = e.changedTouches[0].clientX//初始值x轴的坐标
    },
    end(e,shopIndex,good,goodIndex){
      let endX = e.changedTouches[0].clientX
      let left = '0px'
      // console.log(endX, good.startX)
      if(good.startX - endX > 100){//往左滑
        left = '-60px';
      }
      if(endX - good.startX > 100){//往右滑
        left = '0px';
      }
     Volecity(this.$refs[`goods-${shopIndex}-${goodIndex}`],{//拿到dom节点,v-for返回的是数组
       left
     }) 
    }
  },
  mixins: [mixin]
})



// mock数据
// import Mock from 'mockjs';
// let Random = Mock.Random;
// let data = Mock.mock({
//   'cartList|3' :[{
//     'goodsList|1-2':[{
//       id: Random.int(10000,100000),
//       image:Mock.mock('@image(90x90,@color)')
//     }]
//   }]
// })
// console.log(data)
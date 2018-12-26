<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block" v-if="lists&&lists.length">
      <!-- 有列表做渲染没有就执行loading -->
      <a class="block-item js-address-item address-item" 
      @click="toEdit(list)"
      v-for="list in lists" :key="list.id"
      :class="{'address-item-default':list.isDefault}"
      >
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}}{{list.address}}</p>
        <a class="address-edit">修改</a>
        <!-- address-item-default -->
      </a>
    </div>
    <div v-if="lists&&!lists.length">没有地址，请添加</div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" 
      :to="{name: 'form',query:{type:'add'}}">
      <!-- to="/address/form"> -->
          新增地址
      </router-link >
    </div>
  </div>
  <!-- <link rel="stylesheet" href="./css/address_base.css">
<link rel="stylesheet" href="./css/address.css"> -->
</template>
<script>
import url from 'js/api.js'
import axios from 'axios';

// import Address from 'js/addressService.js'
export default {
  // data(){
  //   return{
  //     lists: null
  //   }
  // },
  computed:{
    lists(){
      return this.$store.state.lists//拿vuex
    }
  },
  created(){
    // Address.list().then(res=>{
    //   this.lists = res.data.lists
    // })//addressList接口为get则无法用addressService

    // this.getAddressList();
    if(!this.lists){
      this.$store.dispatch('getLists')//触发actions中的行为
    }
  },
  methods:{
    toEdit(list){
      this.$router.push({name:'form',
      query:{
        type: 'edit',
        instance:list//传递当前地址实例
      }})
    },
    // getAddressList(){
    //   axios.get(url.addressLists).then(res=>{
    //     this.lists = res.data.lists
    //   })
    // }
  }
}
</script>




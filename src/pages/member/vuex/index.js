//使用插件  
import Vue from 'vue';
import Vuex from 'vuex';
import Address from 'js/addressService.js'
Vue.use(Vuex)

//创建store实例
const store = new Vuex.Store({
  state: {//类似data，不允许修改
    lists: null
  },
  mutations:{//定义方法对数据进行修改，对数据进行同步管理
    init(state, lists){//state方便拿到数据管理
      state.lists = lists
    },
    add(state,instance){
      state.lists.push(instance)//新增数据添加到lists中
    },
    remove(state, id){
      let lists = state.lists
      let index = lists.findIndex(item =>{
        return item.id == id
      })
      lists.splice(index, 1)
    },
    update(state, instance){//修改
      let lists = JSON.parse(JSON.stringify(state.lists))//深复制
      let index = lists.findIndex(item =>{
        return item.id == instance.id
      })
      lists[index] = instance//替换
      state.lists = lists
    },
    setDefault(state,id){
      let lists = JSON.parse(JSON.stringify(state.lists))
      lists.forEach(item =>{
        if(item.id === id){
          item.isDefault = true
        }
      })
      state.lists = lists
    }
  },
  actions:{//对数据进行异步操作
    getLists({commit}){
      Address.list().then(res=>{
        commit('init',res.data.lists)
      })
    },
    addAction({commit},instance){
      Address.add(instance).then(res =>{
        //模拟后台添加id，实际id需后台返回
        instance.id = parseInt(Math.random()*10000)
        commit('add', instance)
      })
    },
    removeAction({commit},id){
      Address.remove(id).then(res=>{
        commit('remove',id)
      })
    },
    updateAction({commit},instance){
      Address.update(instance).then(res=>{
        commit('update',instance)
      })
    },
    setDefaultAction({commit},id){
      Address.setDefault(id).then(res =>{
        commit('setDefault',id)
      })
    }

  }
})
export default store;
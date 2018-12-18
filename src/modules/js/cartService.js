import fetch from 'js/fetch.js'
import url from 'js/api.js'
// import axios from 'axios';
class Cart {
  static add(id){
    //静态方法
    return fetch(url.addCart,{
      id,
      number: 1
    })
  }
  static reduce(id){
    return fetch(url.cartReduce,{
      id,
      number: 1
    })
    
  }
  static remove(arr){
    let ids = [];
    arr.forEach(good =>{
      ids.push(good.id)
    })
  }
}
export default Cart;
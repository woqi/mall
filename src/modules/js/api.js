let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topLists: '/category/topList',
  subLists: '/category/subList',
  rank: '/category/rank',
  search: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal',
  addCart: '/cart/add',
  cartList: '/cart/list',
  cartReduce: '/cart/reduce',
  cartRemove: '/cart/remove',
  cartMrRemove: '/cart/mrremove',
  addressLists: '/address/list',
  addressAdd: '/address/add',
  addressRemove: '/address/remove',
  addressUpdate: '/address/update',
  addressSetDefault: '/address/setDefault'

}
//开发环境和真实环境切换
// let host = 'http://rap2api.taobao.org/app/mock/7058'
let host = 'https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key];
    
  }
}
export default url 

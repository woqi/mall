
import axios from 'axios';

function fetch(url,data){
  return new Promise((resolve,reject)=>{
    axios.post(url,data).then(res =>{
      // let status = res.data.status
      // if(status == 200){
      //   resolve(res)
      // }
      // if(status == 300){
      //   location.href = 'login.html'//300跳登录页面
      //   resolve(res)
      // }  
      // reject(res)//其他为错误状态
      resolve(res)
    }).catch(error =>{
      reject(error)
    })
  })  
}

export default fetch;

// import axios from 'axios'
// import url from 'js/api.js'


// function fetch(url,data) {
//   return new Promise((resolve,reject) => {
//     axios.post(url,data).then(res => {
//       let status = res.data.status
//       // if(status === 200) {
//       //   resolve(res)
//       // }
//       // if(status === 300) {
//       //   location.href = 'login.html'
//       //   resolve(res)
//       // }
//       // reject(res)

//       resolve(res)
//     }).catch(error => {
//       reject(error)
//     })
//   })
// }
// export default fetch
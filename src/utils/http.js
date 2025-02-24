import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useRouter} from 'vue-router'
import { useUserStore } from '@/stores/user'
const http=axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000
})

//添加请求拦截器
http.interceptors.request.use((config)=>{
  const userStore=useUserStore()
  const token=userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}),(error)=>Promise.reject(error)
//添加响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  //统一错误提示
  ElMessage({
      type: 'warning',
      message:e.response.data.message
  })
  return Promise.reject(e)
})

export default http

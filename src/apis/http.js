import axios from 'axios'

const http=axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000
})

//添加请求拦截器
http.interceptors.request.use((config)=>{
  return config
}),(error)=>Promise.reject(error)
//添加响应式拦截器
http.interceptors.response.use((response)=>{
  return response
}),(error)=>Promise.reject(error)

export default http

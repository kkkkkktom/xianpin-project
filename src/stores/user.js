import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { useCartStore } from "./cartStore";
import {ref} from 'vue'
export const useUserStore=defineStore('user',()=>{
  const userInfo=ref({})
  const cartStore=useCartStore()
  const getUserInfo=async({account,password})=>{
    const res=await loginAPI({account,password})
    userInfo.value=res.result
    console.log(userInfo.value)

  }
    //退出时清除用户信息
const clearUserInfo=()=>{
  userInfo.value={}
  cartStore.clearCart()
}
  return{
    userInfo,
    getUserInfo,
    clearUserInfo
  }

},

{
  persist:true
})

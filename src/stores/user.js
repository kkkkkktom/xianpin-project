import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import {ref} from 'vue'
export const useUserStore=defineStore('user',()=>{
  const userInfo=ref({})
  const clearUserMessage=()=>{
    userInfo.value=[]
  }
  const getUserInfo=async({account,password})=>{
    const res=await loginAPI({account,password})
    userInfo.value=res.result
    console.log(userInfo.value)

  }
  return{
    userInfo,
    getUserInfo,
    clearUserMessage
  }

},

{
  persist:true
})

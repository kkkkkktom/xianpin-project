import { defineStore } from "pinia";
import {ref} from 'vue'
import {computed} from 'vue'
import {getCartAPI,getNewCartAPI} from '@/apis/cart'
import { useUserStore } from "./user";
import { delCartAPI } from "@/apis/cart";

export const useCartStore=defineStore('cart',()=>{
    const userStore=useUserStore();
    const isLogin=computed(()=>userStore.userInfo.token);
    const cartList=ref([])
    //购物车中的内容删除
    const delCart=async(skuId)=>{
     if(isLogin.value){
      await delCartAPI([skuId])
      const res=await getNewCartAPI()
      cartList.value=res.result
     }else{
      const index=cartList.value.findIndex((item)=>skuId===item.skuId)
      cartList.value.splice(index,1)
     }
    }
    //清除购物车
    const clearCart=()=>{
      cartList.value=[]
    }
    //已经选择的数量
    const selectedCart=computed(()=>cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count,0))
    const selectedPrice=computed(()=>cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count*c.price,0))
    //🛒购物车的总价和数量
    const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
        //✅确定是谁的单选按钮
        const singleCheck = (skuId, selected) => {
          // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
          const item = cartList.value.find((item) => item.skuId === skuId)
          item.selected = selected
        }
    //单选决定全选
    const isAll =computed(()=>cartList.value.every((item)=>item.selected))
    //全选决定单选
    const allCheck=(selected)=>{
      cartList.value.forEach(item=>item.selected=selected)
    }

//添加商品到购物车
const addCart=async (goods)=>{
    const {skuId,count}=goods
    if(isLogin.value){
      await getCartAPI({ skuId,count });
      const res=await getNewCartAPI()
      cartList.value=res.result
    }else{
      const item = cartList.value.find((item)=>goods.skuId===item.skuId)
      if(item){
        item.count+=goods.count
      }else{
        cartList.value.push(goods)
      }
    }



}
return {
  cartList,
  addCart,
  delCart,
  allCount,
  allPrice,
  singleCheck,
  isAll,
  allCheck,
  selectedCart,
  selectedPrice,
  clearCart
}
},{

    persist:true

})


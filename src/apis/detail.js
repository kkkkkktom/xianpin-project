import http from '@/utils/http'
export const getDetailAPI=(id)=>{
  return http({
    url:'/goods',
    params:{
      id
    }
  })
}
export const getHotGoodsAPI=({id,type,limit})=>{
  return http({
    url:'/goods/hot',
    params:{
      id,
      type,
      limit
    }
  })
}

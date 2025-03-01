import http from '@/utils/http'
export const createOrderAPI=(data)=>{
  return http({
    url:'/member/order',
    method:'POST',
    data
  })
}
export const getOrderAPI=(id)=>{
  return http({
    url:`/member/order/${id}`
  })
}

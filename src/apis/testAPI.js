import http from '@/apis/http'
export function getCategory(){
  return http({
    url:'home/category/head'
  })
}

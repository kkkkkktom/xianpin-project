import http from '@/utils/http'
export function getBannerAPI(){
  return http({
    url:'/home/banner'
  })
}

/**
 * @description:获取新鲜好物
 * @param{*}
 * @return{*}
 */
export function findNewAPI(){
  return http({
    url:'/home/new'
  })
}


export function getHotAPI(){
  return http({
    url:'/home/hot'
  })
}

export function getProductAPI(){
  return http({
     url:'/home/goods'
  })
}


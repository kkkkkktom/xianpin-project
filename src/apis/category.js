import http from '@/utils/http'
export function getCategoryAPI(id){
    return http({
      url:'/category',
      params:{id}
    })
}

export function getCategoryFilterAPI(id){
  return http({
    url: '/category/sub/filter',
    params:{
      id
    }
  })
}

/**             apis/category.js
 * @description: 获取导航数据
 * @data {
        categoryId: 1005000 ,
        page: 1,
        pageSize: 20,
        sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
    }
 * @return {*}
 */
 export function getSubCategoryAPI(data){
    return http({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
 }

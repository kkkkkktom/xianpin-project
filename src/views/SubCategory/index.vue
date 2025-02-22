<script setup>
import { getCategoryFilterAPI } from '@/apis/category';
import {useRoute} from 'vue-router';
import {ref,onMounted} from 'vue';
import {getSubCategoryAPI} from '@/apis/category'
import GoodsItem from '../Home/components/GoodsItem.vue';
const route=useRoute()
const categoryList=ref([])
const getCategoryFilter=async()=>{
  const res=await getCategoryFilterAPI(route.params.id)
  categoryList.value=res.data.result;
  // console.log(res.data.result)
}
const categoryData=ref({
    categoryId:route.params.id,
    page:1,
    pageSize:20,
    sortField:'publishTime'
})
const goods=ref([])
const getSubCategory=async()=>{
  const res=await getSubCategoryAPI(categoryData.value);
  goods.value=res.data.result.items
  // console.log(res.data.result.items)
}
const tabChange=()=>{
  categoryData.value.page=1
  getSubCategory()
}
onMounted(()=>getCategoryFilter())
onMounted(()=>getSubCategory())

</script>

<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path:  `/category/${categoryList.parentId}` }">{{categoryList.parentName }}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{ categoryList.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs v-model="categoryData.sortField" @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body">
                <!-- 商品列表-->
                 <GoodsItem v-for="good in goods" :good="good" :key="good.id"/>
            </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>

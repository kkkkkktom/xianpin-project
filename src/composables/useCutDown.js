import dayjs from "dayjs";
import { computed,ref, onUnmounted } from "vue";
export const useCutDown=()=>{
  let timer=null;
  const time=ref(0)
  const formateTime=computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
  const start=(currentTime)=>{
    time.value=currentTime
    timer=setInterval(()=>{
      time.value--
    },1000)
  }
  //组件销毁时清除定时器
  onUnmounted(()=>{
    timer&&clearInterval(timer)
  })
  return{
    formateTime,
    start
  }
}

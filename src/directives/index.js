import {useIntersectionObserver} from '@vueuse/core'
//插件定义
export const lazyPlugin={
  install(app){
    //组件的自定义指令
    app.directive('img-lazy',{
      mounted(el,binding){
        // console.log(el, binding.value)
        const { stop } = useIntersectionObserver(
          el,
          ([entry]) => {
            //entry包括了el：制定绑定的那个元素，binding：指令后绑定的表达式的值在这里指代图片的url，其中isIntersecting的值指出是否进入适口区域（boolean）
            if(entry.isIntersecting){
              el.src=binding.value
              stop()
            }

          },
        )
      }
    })
  }
}

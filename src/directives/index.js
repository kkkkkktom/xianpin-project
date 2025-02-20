import {useIntersectionObserver} from '@vueuse/core'
export const lazyPlugin={
  install(app){
    app.directive('img-lazy',{
      mounted(el,binding){
        console.log(el, binding.value)
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

/**
 * Created by lenovo on 2019/3/14.
 */
window.addEventListener('DOMContentLoaded',function () {

  const fontItems=document.querySelectorAll('.fontItem')
  const sections=document.querySelectorAll('section')

  const shopLis=document.querySelectorAll('.shop-li')


  shopLis.forEach(function (item,index) {
    const stars=item.querySelectorAll('.star span')
    //星星
    const num = item.querySelector('.num').textContent
    const starOn=Math.floor(num)
    const starHalf=Math.round(num)-starOn
    stars.forEach(function (item,index) {
      if(index<starOn){
        item.classList.add('on')
      }else if(index<starOn+starHalf){
        item.classList.add('half')
      }else {
        item.classList.add('off')
      }
    })

  })



  fontItems.forEach(function (item,index) {
    item.addEventListener('touchend',function () {
      fontItems.forEach(function (item,index) {
        item.classList.remove('active')
        sections[index].classList.remove('on')
      })
      item.classList.add('active')
      sections[index].classList.add('on')
    })
  })




  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: {
    //   delay: 1000,//1秒切换一次
    // },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

  })
},false)



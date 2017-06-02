$(function() {
  $("#menu").on('click', '.link-f', function(e) {
    var $this = $(this);
    $this.next('.con-s').slideToggle();
  })
  // var mySwiper = new Swiper('#swiper-1', {
  //   // 设定初始化时slide的索引
  //   // 类型：number 默认：0 举例：2
  //   // initialSlide: 2,
  //   // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
  //   // 类型：string 默认：horizontal 举例：vertical
  //   // direction: 'vertical',
  //   // 滑动速度，即slider自动滑动开始到结束的时间(单位ms)，也是触摸滑动时释放至贴合的时间。
  //   // 类型：number 默认：300 举例：1000
  //   // speed: 500,
  //   // 自动切换的时间间隔(单位ms)，不设定该参数slide不会自动切换。
  //   // 用户操作后autoplay停止，参考基本选项autoplayDisableOnIneraction.
  //   // 你还可以在某个slide上设置单独的停留时间，例<div class="swiper-slide" data-swiper-autoplay="2000">
  //   // 类型：number 默认：0 举例：5000
  //   // autoplay: 3000,
  //   // 用户操作swiper之后，是否禁止autoplay。默认：停止。
  //   // 如果设置为false,用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
  //   // 操作包括触碰，拖动，点击pagination等。
  //   // 类型：boolean 默认：true 举例：false
  //   // autoplayDisableOnInteraction: false,
  //   // 如果设置为true，当切换到最后一个slide时停止自动切换。(loop模式下无效)。
  //   // 类型：boolean 默认：false 举例：ture 启用版本：3.3。0
  //   // autoplayStopOnLast: true,
  //   // 设置为true是，鼠标覆盖swiper是指针会变成手掌形状，拖动时指针会标尺抓手形状。(根据浏览器形状有所不同)
  //   // 类型：boolean 默认：false 举例：true
  //   // grabCursor: true,
  //   // 视觉差
  //   // parallax: true,
  //   // 如需为每个slide添加散列导航(有点像锚链接)。将hashnav设置为ture，并在每个slide处增加data-hash属性。
  //   // hashnav: true,
  // })
})
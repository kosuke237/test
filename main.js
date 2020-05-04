$(function () {
  $(".most-outer").fadeIn(1500);
  $(".main-img-slideshow").each(function () {
    let $slides = $(this).find("img"),
      slideCount = $slides.length,
      currentindex = 0;

    $slides.eq(currentindex).fadeIn(1500);
    setInterval(showNextSlide, 7500);

    function showNextSlide() {
      let nextIndex = (currentindex + 1) % slideCount;
      $slides.eq(currentindex).fadeOut(1500);
      $slides.eq(nextIndex).fadeIn(1500);
      currentindex = nextIndex;
    }
  });
});

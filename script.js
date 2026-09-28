(function () {
  var page = document.querySelector('.page');
  var hero = document.querySelector('.hero');
  var headline = document.querySelector('.headline');
  var headlineContent = headline.querySelector('.headline-content');
  var secondaryLine = headline.querySelector('.headline-line--secondary');

  var minSize = parseFloat(headline.dataset.minSize) || 0.35;
  var maxSize = parseFloat(headline.dataset.maxSize) || 1.6;
  var secondaryMinOpacity = parseFloat(headline.dataset.secondaryMinOpacity) || 0.06;

  // Base font-size, in vw, matching the value set in CSS for .headline-content.
  var baseFontSizeVw = 12;

  var heroTop = 0;
  var heroHeight = 0;
  var viewportHeight = 0;

  function measure() {
    heroTop = hero.offsetTop;
    heroHeight = hero.offsetHeight;
    viewportHeight = document.documentElement.clientHeight;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function onScroll() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var scrollable = heroHeight - viewportHeight;
    var progress = scrollable > 0 ? clamp((scrollY - heroTop) / scrollable, 0, 1) : 0;

    // Shrinks as you scroll down (maxSize -> minSize), making room for
    // the secondary line beneath it to reveal itself.
    var currentSize = maxSize - (maxSize - minSize) * progress;

    // Animate font-size directly (not transform: scale) so the browser
    // reflows the text and the flex-wrap container breaks it onto a new
    // line once it no longer fits within the viewport width.
    headlineContent.style.fontSize = baseFontSizeVw * currentSize + 'vw';

    // Secondary line fades in from barely-readable to fully visible.
    secondaryLine.style.opacity = secondaryMinOpacity + (1 - secondaryMinOpacity) * progress;
  }

  function onResize() {
    measure();
    onScroll();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);

  window.addEventListener('load', function () {
    measure();
    onScroll();
    requestAnimationFrame(function () {
      page.classList.add('page__ready');
    });
  });
})();

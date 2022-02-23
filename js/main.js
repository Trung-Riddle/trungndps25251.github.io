function calculateDivHeight(){
    $("#scrollablediv").height(window.innerHeight);
  }

calculateDivHeight();
$(window).resize(function () {
  calculateDivHeight();
})

function debounce(method, delay) {
  clearTimeout(method._tId);
  method._tId= setTimeout(function(){
      method();
  }, delay);
}

$(window).scroll(function() {
  debounce(handleScroll, 100);
});
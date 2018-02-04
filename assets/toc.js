function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

window.onscroll = function() {
  var toc = document.getElementById("toc");
  if (toc.offsetHeight == 0)  // visible?
  {
    return;
  }
  console.log(getScrollPercent());
  var links = toc.getElementsByTagName("a");

  var bScroll = document.body.scrollTop;
  var height = document.documentElement.clientHeight;
  var center = bScroll + 0.5 * height;
  var markedOne = false;
  for (var i = 0; i < links.length; i++) {
    id = links[i].href.split('#')[1];
    heading = document.getElementById(id);

    var offsets = heading.offsetTop;
    console.log("offset: " + offsets)
    console.log("scroll: "+ bScroll)
    console.log("x: "+ document.documentElement.clientHeight)

    if (bScroll <= offsets && offsets <= bScroll+height && !markedOne) {
      links[i].className ="active";
      markedOne = true;
    } else {
      links[i].className ="";
    }
  }
}

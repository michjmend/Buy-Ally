/* Create an array to hold image positions in carousel */
let itemPositions = [];
let numberOfItems = 0;

/* Iterate over images to assign position in carousel */
function assignPositions() {
  for (var i = 0; i < numberOfItems; i++) {
    if (i === 0) {
      itemPositions[i] = "left-hidden";
    } else if (i === 1) {
      itemPositions[i] = "left";
    } else if (i === 2) {
      itemPositions[i] = "middle";
    } else if (i === 3) {
      itemPositions[i] = "right";
    } else if (i === 4) {
      itemPositions[i] = "right-hidden";
    }
  }
  $("#scroller .item").each(function(index) {
    $(this).addClass(itemPositions[index]);
  });
}

/* For scrolling, remove classes of visible cards and shift by one in direction of scroll*/
function scroll(direction) {
  if (direction === "prev") {
    itemPositions.push(itemPositions.shift());
  } else if (direction === "next") {
    itemPositions.unshift(itemPositions.pop());
  }
  $("#scroller .item")
    .removeClass("left-hidden left middle right right-hidden")
    .each(function(index) {
      $(this).addClass(itemPositions[index]);
    });
}

$(document).ready(() => {
  // Run a front end ajax call to get the length of object to iterate over, then call the function to set css classes for each image

  $.ajax({
    url: "api/posts",
    success: result => {
      numberOfItems = result.length;
      assignPositions();
    }
  });

  let autoScroll = window.setInterval("scroll('next')", 4000);

  $("#scroller").hover(
    () => {
      window.clearInterval(autoScroll);
      $(".carousel-nav")
        .stop(true, true)
        .fadeIn(200);
    },
    () => {
      autoScroll = window.setInterval("scroll('next')", 4000);
      $(".carousel-nav")
        .stop(true, true)
        .fadeOut(200);
    }
  );
  /* Scroll buttons for carousel */
  $(".prev").click(() => {
    scroll("prev");
  });
  $(".next").click(() => {
    scroll("next");
  });
});

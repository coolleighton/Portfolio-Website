/*-------------- header hide/show --------------*/

(function () {
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById("navbar");

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      direction = 2;
      console.log("scrolldown");
    } else if (curScroll < prevScroll) {
      direction = 1;
      console.log("scrollup");
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 100) {
      header.classList.add("hide");
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove("hide");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", checkScroll);
})();

/*----------  menu  ------------*/

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.querySelector(".header-div");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
    console.log("clicked");
  });
}

if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
    console.log("clicked");
  });
}

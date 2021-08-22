document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header"),
    headerFixed = document.querySelector(".header-fixed"),
    headerLogo = document.querySelector(".header__logo"),
    anchors = document.querySelectorAll('a[href*="#"]');

  function toggleMobileMenu() {
    header.classList.toggle("mobile");
    headerLogo.classList.toggle("hide");
    // menu.classList.toggle("show");
    // burgerMenu.classList.toggle("menu-on");
  }

  function hideMobileMenu() {
    header.classList.remove("mobile");
    headerLogo.classList.remove("hide");
    // menu.classList.remove("show");
    // burgerMenu.classList.remove("menu-on");
  }

  let scrollPrev = 0;

  window.addEventListener("scroll", () => {
    let scrolled = document.documentElement.scrollTop;

    if (scrolled == 0 || scrolled > scrollPrev) {
      headerFixed.classList.add("out");
    } else {
      headerFixed.classList.remove("out");
    }
    scrollPrev = scrolled;
  });

  // burgerMenu.addEventListener("click", toggleMobileMenu);
  window.addEventListener("scroll", hideMobileMenu);

  // smooth scroll

  for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // animation leafs

  const leafs = document.querySelectorAll(".leaf");
  let rotateStep = 0.5;

  window.addEventListener("scroll", rotateLeafs);

  function rotateLeafs() {
    leafs.forEach((leaf) => {
      leaf.style.transform = `rotateZ(${rotateStep}deg)`;
      rotateStep += 0.5;
    });
  }

  // navigation

  const links = document.querySelectorAll(".navigate__item"),
    navBlocks = document.querySelectorAll(".nav_block");

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    navBlocks.forEach((el, index) => {
      if (scrollDistance >= el.offsetTop - 250) {
        links.forEach((elem) => {
          if (elem.classList.contains("active")) {
            elem.classList.remove("active");
          }
        });

        links[index].classList.add("active");
      } else if (scrollDistance < 300) {
        links[index].classList.remove("active");
      }
    });
  });
});

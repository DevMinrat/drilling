"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header"),
      headerFixed = document.querySelector(".header-fixed"),
      headerLogo = document.querySelector(".header__logo"),
      anchors = document.querySelectorAll('a[href*="#"]');

  function toggleMobileMenu() {
    header.classList.toggle("mobile");
    headerLogo.classList.toggle("hide"); // menu.classList.toggle("show");
    // burgerMenu.classList.toggle("menu-on");
  }

  function hideMobileMenu() {
    header.classList.remove("mobile");
    headerLogo.classList.remove("hide"); // menu.classList.remove("show");
    // burgerMenu.classList.remove("menu-on");
  }

  var scrollPrev = 0;
  window.addEventListener("scroll", function () {
    var scrolled = document.documentElement.scrollTop;

    if (scrolled == 0 || scrolled > scrollPrev) {
      headerFixed.classList.add("out");
    } else {
      headerFixed.classList.remove("out");
    }

    scrollPrev = scrolled;
  }); // burgerMenu.addEventListener("click", toggleMobileMenu);

  window.addEventListener("scroll", hideMobileMenu); // smooth scroll

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute("href").substring(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    } // animation leafs

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var leafs = document.querySelectorAll(".leaf");
  var rotateStep = 0.5;
  window.addEventListener("scroll", rotateLeafs);

  function rotateLeafs() {
    leafs.forEach(function (leaf) {
      leaf.style.transform = "rotateZ(".concat(rotateStep, "deg)");
      rotateStep += 0.5;
    });
  } // navigation


  var links = document.querySelectorAll(".navigate__item"),
      navBlocks = document.querySelectorAll(".nav_block");
  window.addEventListener("scroll", function () {
    var scrollDistance = window.scrollY;
    navBlocks.forEach(function (el, index) {
      if (scrollDistance >= el.offsetTop - 250) {
        links.forEach(function (elem) {
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
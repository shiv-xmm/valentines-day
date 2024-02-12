document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        container.classList.add("scrolled");
      } else {
        container.classList.remove("scrolled");
      }
    });
  });

  
<template>
  <nav
    id="navbar"
    class="sticky-top navbar-expand-lg navbar-light bg-primary py-2"
    style="
      transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out;
    "
  >
    <div class="d-flex justify-content-center">
      <RouterLink class="" to="/">
        <img
          src="@/assets/logo-white.png"
          alt="Maesa Group"
          style="height: 60px"
          id="logo-white"
        />
        <img
          src="@/assets/logo.png"
          class="d-none"
          alt="Maesa Group"
          style="height: 60px"
          id="logo-primary"
        />
      </RouterLink>
    </div>
  </nav>
</template>

<script>
import $ from "jquery";

export default {
  mounted: function () {
    window.$ = $;

    let didScroll;
    let lastScrollTop = 0;
    const delta = 0;
    const navbar = document.querySelector("#navbar");

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 500);

    window.onscroll = () => {
      didScroll = true;
    };

    function hasScrolled() {
      const scrollTop = $(document).scrollTop();
      if (Math.abs(lastScrollTop - scrollTop) <= delta) return;
      // This is necessary so you never see what is "behind" the navbar.

      if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.classList.remove("bg-primary");
        navbar.style.backgroundColor = "white";
        navbar.classList.add("shadow");
        document.getElementById("logo-primary").classList.remove("d-none");
        document.getElementById("logo-white").classList.add("d-none");
      } else {
        if (scrollTop == 0) {
          navbar.classList.add("bg-primary");
          navbar.classList.remove("shadow");
          document.getElementById("logo-primary").classList.add("d-none");
          document.getElementById("logo-white").classList.remove("d-none");
        }
      }

      lastScrollTop = scrollTop;
    }
  },
};
</script>

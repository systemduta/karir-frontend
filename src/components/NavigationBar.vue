<template>
  <nav
    id="navbar"
    class="navbar sticky-top navbar-expand-lg navbar-light bg-primary"
    style="
      transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out;
    "
  >
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
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
      <button
        class="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="ms-auto navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link text-white fs-5" to="/login"
              >Masuk</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white fs-5" to="/register"
              >Daftar</RouterLink
            >
          </li>
        </ul>
      </div>
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

      console.log(`${scrollTop} > ${lastScrollTop}`);

      if (Math.abs(lastScrollTop - scrollTop) <= delta) return;
      // This is necessary so you never see what is "behind" the navbar.

      if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.classList.remove("bg-primary");
        navbar.style.backgroundColor = "white";
        document.querySelectorAll(".nav-link").forEach((element) => {
          element.classList.remove("text-white");
        });
        navbar.classList.add("shadow");
        document.getElementById("logo-primary").classList.remove("d-none");
        document.getElementById("logo-white").classList.add("d-none");
      } else {
        if (scrollTop == 0) {
          navbar.classList.add("bg-primary");
          document.querySelectorAll(".nav-link").forEach((element) => {
            element.classList.add("text-white");
          });
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

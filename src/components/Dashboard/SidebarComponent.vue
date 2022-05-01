<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

<template>
  <nav
    id="sidebarMenu"
    class="mt-3 col-md-3 col-lg-2 d-md-block sidebar collapse"
    style="background-color: #d3a40d"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link text-white active" aria-current="page" href="#">
            <i class="bi bi-grid"></i>
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">
            <i class="bi bi-briefcase"></i>
            Lowongan
          </a>
        </li>
      </ul>

      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1"
      >
        <span>Lamaran Masuk</span>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a class="nav-link text-white" href="#"> Fulltime </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#"> Internship </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

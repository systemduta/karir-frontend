<style scoped>
.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}
</style>

<template>
  <header
    class="navbar navbar-light sticky-top bg-light flex-md-nowrap p-2 shadow"
  >
    <a
      class="fs-3 text-primary col-md-3 col-lg-2 me-0 px-3 text-decoration-none fw-bold"
      href="#"
      >Adminstrator</a
    >
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <img src="@/assets/logo.png" style="height: 60px" alt="Maesa Group Logo" />
    <div></div>
  </header>
</template>

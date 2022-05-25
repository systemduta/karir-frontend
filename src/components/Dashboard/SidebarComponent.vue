<style scoped>
.sidebar {
  width: 14rem !important;
  height: 100vh;
  position: relative;
}

.nav-link {
  position: relative;
  color: #838383;
}

.nav-link:hover {
  color: #f3b520;
}

.accordion {
  overflow-anchor: none;
}

.sidebar.toggled {
  width: 5rem !important;
  overflow: visible;
}
</style>

<template>
  <div
    class="d-flex flex-column justify-content-between sidebar accordion p-3 border"
  >
    <div>
      <RouterLink
        class="d-flex align-items-center justify-content-center"
        to="/dashboard"
      >
        <div class="py-3">
          <img
            src="@/assets/logo.png"
            style="height: 38px"
            alt="Maesa"
            id="logo-full"
          />
          <img
            src="@/assets/logo-mini.png"
            class="d-none"
            style="height: 38px"
            alt="Maesa"
            id="logo-mini"
          />
        </div>
      </RouterLink>
      <hr />
    </div>
    <div class="d-flex flex-column">
      <RouterLink class="nav-link" to="/dashboard">
        <i class="bi bi-speedometer"></i>&emsp;
        <span class="nav-text">Dashboard</span></RouterLink
      >
      <RouterLink class="nav-link" to="/dashboard/applicants/detail">
        <i class="bi bi-people"></i>&emsp;
        <span class="nav-text">Applicant</span></RouterLink
      >
      <RouterLink class="nav-link" to="/dashboard/jobs/create">
        <i class="bi bi-briefcase"></i>&emsp;
        <span class="nav-text">Job Post</span></RouterLink
      >
      <RouterLink class="nav-link" to="/dashboard/change-password">
        <i class="bi bi-gear"></i>&emsp;
        <span class="nav-text">Setting</span></RouterLink
      >
    </div>
    <div>
      <RouterLink class="nav-link" to="/logout">
        <i class="bi bi-box-arrow-right"></i> &emsp;
        <span class="nav-text">Logout</span></RouterLink
      >
      <hr />
      <div class="text-center">
        <button
          class="text-center rounded-circle border-0 bg-primary p-2 fs-5"
          id="sidebarToggle"
        >
          <i class="bi bi-arrow-left"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted: function () {
    const sidebarToggle = document.getElementById("sidebarToggle");
    let toggled = false;

    sidebarToggle.addEventListener("click", () => {
      toggled = !toggled;

      $(".sidebar").toggleClass("toggled");
      $(".nav-text, #logo-full, #logo-mini").toggleClass("d-none");

      sidebarToggle.innerHTML = toggled
        ? '<i class="bi bi-arrow-right"></i>'
        : '<i class="bi bi-arrow-left"></i>';
    });
  },
};
</script>

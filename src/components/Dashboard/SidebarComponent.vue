<style scoped>
.sidebar {
  width: 16rem !important;
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
  <div class="d-flex flex-column sidebar accordion p-3 border">
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
      <div class="accordion border-0" id="accordionExample">
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-0" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i class="bi bi-people"></i>&emsp;
              <span class="nav-text">Applicant</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse border-0 show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <RouterLink
                class="nav-link"
                to="/dashboard/applicants/recruitment"
              >
                <span class="nav-text">Fulltime</span></RouterLink
              >
              <RouterLink
                class="nav-link"
                to="/dashboard/applicants/internship"
              >
                <span class="nav-text">Intern</span></RouterLink
              >
            </div>
          </div>
        </div>
      </div>
      <!-- <RouterLink class="nav-link" to="/dashboard/applicants">
        <i class="bi bi-people"></i>&emsp;
        <span class="nav-text">Applicant</span></RouterLink
      > -->
      <RouterLink class="nav-link" to="/dashboard/jobs">
        <i class="bi bi-briefcase"></i>&emsp;
        <span class="nav-text">Job Post</span></RouterLink
      >
      <RouterLink class="nav-link" to="/dashboard/change-password">
        <i class="bi bi-gear"></i>&emsp;
        <span class="nav-text">Setting</span></RouterLink
      >
    </div>
    <div>
      <div class="nav-link" style="cursor: pointer" @click="userLogout">
        <i class="bi bi-box-arrow-right"></i> &emsp;
        <span class="nav-text">Logout</span>
      </div>
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
  methods: {
    userLogout() {
      this.loading = true;
      this.$store
        .dispatch("logout")
        .then(() => {
          this.loading = false;
          this.$router.push("/");
        })
        .catch((error) => {
          this.loading = false;
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

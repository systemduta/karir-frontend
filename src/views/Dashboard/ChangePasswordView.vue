<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
// import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
</script>

<template>
  <div class="bg-gray p-5">
    <div class="container">
      <Header title="Admin Settings" />
      <div class="card" style="border-radius: 20px">
        <div
          class="bg-dark p-3"
          style="border-radius: 20px 20px 0 0; height: 55px"
        >
          <p class="text-white my-auto fw-bold fs-5">Personal</p>
        </div>
        <form class="p-4">
          <div class="col-8">
            <div class="mb-3">
              <label class="form-label">Old Password</label>
              <input
                type="password"
                name="current_password"
                class="form-control rounded"
              />
              <div class="float-end">
                <a
                  href="/forgor-password"
                  class="text-black text-decoration-none"
                  >Forgot Password?</a
                >
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">New Password</label>
              <input
                type="password"
                name="password"
                class="form-control rounded"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Re-enter New Password</label>
              <input
                type="password"
                name="password_confirmation"
                class="form-control rounded"
              />
            </div>
          </div>
          <div style="height: 150px"></div>
          <div class="float-end">
            <button class="text-white bg-dark rounded-pill py-2 px-5">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

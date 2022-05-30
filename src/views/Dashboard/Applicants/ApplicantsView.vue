<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
</script>

<template>
  <div class="d-flex">
    <Sidebar />
    <div class="w-100 bg-grey p-5">
      <div class="container">
        <Header title="Applicant" />
        <div class="d-flex justify-content-between">
          <p></p>
          <RouterLink
            to="/dashboard/applicants/detail"
            class="bg-primary text-decoration-none p-2 px-4 rounded border"
            >SAMPLE DETAIL</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

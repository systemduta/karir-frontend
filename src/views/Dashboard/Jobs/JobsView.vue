<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
</script>

<template>
  <div class="d-flex">
    <Sidebar />
    <div class="w-100 bg-grey p-5">
      <div class="container">
        <Header title="Job Post" />
        <div class="d-flex justify-content-between">
          <p></p>
          <RouterLink
            to="/dashboard/jobs/create"
            class="bg-primary text-decoration-none p-2 px-4 rounded border"
            >+ New Job</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

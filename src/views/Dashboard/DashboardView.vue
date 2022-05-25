<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
</script>

<template>
  <div class="d-flex">
    <Sidebar />
    <div class="w-100 bg-gray p-5">
      <div class="container">
        <Header title="Dashboard" />
        <div class="">
          <p class="fs-4">Statistic</p>
          <div class="d-flex flex-wrap gap-5">
            <div
              class="card rounded p-3 text-white"
              style="width: 250px; height: 90px; background-color: #e79317"
            >
              <p>Lowongan</p>
              <p>27</p>
            </div>
            <div
              class="card rounded p-3 text-white"
              style="width: 250px; height: 90px; background-color: #e79317"
            >
              <p>Intern</p>
              <p>544</p>
            </div>
            <div
              class="card rounded p-3 text-white"
              style="width: 250px; height: 90px; background-color: #ec1808"
            >
              <p>Fulltime</p>
              <p>1,216</p>
            </div>
            <div
              class="card rounded p-3 text-white"
              style="width: 250px; height: 90px; background-color: #ec1808"
            >
              <p>Pelamar</p>
              <p>4,216</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

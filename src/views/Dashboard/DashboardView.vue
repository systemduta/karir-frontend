<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
</script>

<style scoped>
.statistic-card {
  border-radius: 10px;
}

.statistic-card-title {
  opacity: 0.8;
}

.statistic-card1 {
  background-image: url("@/assets/images/vectors/statistic-yellow-1.png");
}

.statistic-card2 {
  background-image: url("@/assets/images/vectors/statistic-yellow-2.png");
}

.statistic-card3 {
  background-image: url("@/assets/images/vectors/statistic-red.png");
}
</style>

<template>
  <div class="d-flex">
    <Sidebar />
    <div class="w-100 bg-grey p-5">
      <div class="container">
        <Header title="Dashboard" />
        <div>
          <p class="fs-4">Statistic</p>
          <div class="d-flex flex-wrap gap-5">
            <div
              class="card p-3 text-white statistic-card statistic-card1"
              style="width: 250px; height: 90px"
            >
              <p class="statistic-card-title">Lowongan</p>
              <p class="fw-bold">27</p>
            </div>
            <div
              class="card p-3 text-white statistic-card statistic-card2"
              style="width: 250px; height: 90px"
            >
              <p class="statistic-card-title">Intern</p>
              <p class="fw-bold">544</p>
            </div>
            <div
              class="card p-3 text-white statistic-card statistic-card3"
              style="width: 250px; height: 90px"
            >
              <p class="statistic-card-title">Fulltime</p>
              <p class="fw-bold">1,216</p>
            </div>
            <div
              class="card p-3 text-white statistic-card statistic-card3"
              style="width: 250px; height: 90px"
            >
              <p class="statistic-card-title">Pelamar</p>
              <p class="fw-bold">4,216</p>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-5"></div>
      </div>
    </div>
  </div>
</template>

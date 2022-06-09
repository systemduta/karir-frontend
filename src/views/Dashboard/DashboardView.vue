<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
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
          <div v-if="loading" class="my-4 d-flex justify-content-center">
            <LoadingComponent />
          </div>
          <div
            v-if="error"
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {{ error }}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              @click="error = false"
            ></button>
          </div>
          <div class="d-flex flex-wrap gap-5 justify-content-center">
            <div
              class="card p-3 text-white statistic-card statistic-card1"
              style="width: 250px; height: 90px"
            >
              <p class="statistic-card-title">Lowongan</p>
              <p class="fw-bold">{{ data.recruitment }}</p>
            </div>
            <div
              class="card p-3 text-white statistic-card statistic-card2"
              style="width: 250px; height: 90px"
            >
              <p class="statistic-card-title">Total Pelamar</p>
              <p class="fw-bold">{{ data.participant }}</p>
            </div>
            <div
              class="card p-3 text-white statistic-card statistic-card3"
              style="width: 250px; height: 90px"
            >
              <p class="statistic-card-title">Pelamar Fulltime</p>
              <p class="fw-bold">{{ data.fulltime }}</p>
            </div>
            <div
              class="card p-3 text-white statistic-card statistic-card3"
              style="width: 250px; height: 90px"
            >
              <p class="statistic-card-title">Pelamar Intern</p>
              <p class="fw-bold">{{ data.internship }}</p>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "../../plugins/axios";

export default {
  data() {
    return {
      data: ref({}),
      loading: ref(false),
      error: ref(false),
    };
  },
  methods: {
    async fetchDashboardData() {
      try {
        this.loading = true;
        const { data } = await axios.get("dashboard");
        this.data = data;
        this.error = false;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = true;
      }
    },
  },
  mounted() {
    this.fetchDashboardData();
  },
};
</script>

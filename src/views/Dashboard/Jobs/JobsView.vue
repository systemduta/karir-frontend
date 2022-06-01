<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
</script>

<template>
  <div class="d-flex">
    <Sidebar />
    <div class="w-100 bg-grey p-5">
      <div class="container">
        <Header title="Job Post" />
        <div class="d-flex justify-content-between mb-4">
          <p></p>
          <RouterLink
            to="/dashboard/jobs/create"
            class="bg-primary text-decoration-none p-2 px-4 rounded border-2"
            >+ New Job</RouterLink
          >
        </div>
        <div class="rounded shadow bg-white p-3">
          <div
            v-if="loadingDelete || loading"
            class="d-flex justify-content-center mb-2"
          >
            <LoadingComponent />
          </div>
          <div v-if="error" class="text-center">
            {{ error }}
          </div>
          <table class="table table-hover mt-5" id="dataTable">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Position</th>
                <th scope="col">Deadline</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(job, index) in jobs" :key="job.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ job.name }}</td>
                <td>{{ job.date }}</td>
                <td>{{ job.category_id == 1 ? "Fulltime" : "Intern" }}</td>
                <td>
                  <div class="d-flex flex-wrap gap-1">
                    <!-- edit -->
                    <RouterLink
                      :to="`/dashboard/jobs/edit/${job.id}`"
                      class="badge rounded-pill bg-warning text-decoration-none px-3 py-2 text-white"
                      >Edit</RouterLink
                    >
                    <!-- delete -->
                    <form @submit.prevent="deleteJob(job.id)">
                      <button
                        :disabled="loadingDelete"
                        class="badge rounded-pill bg-danger border-0 px-3 py-2 text-white"
                      >
                        Hapus
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "../../../plugins/axios";
import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import DataTable from "datatables.net-bs5";

export default {
  data() {
    return {
      jobs: ref([]),
      loading: ref(false),
      error: ref(false),
      loadingDelete: ref(false),
      errorDelete: ref(false),
    };
  },
  methods: {
    async fetchJobsData() {
      try {
        this.loading = true;
        const { data } = await axios.get("lowongan");
        this.jobs = data.data;
        this.error = false;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = error;
      }
    },
    async deleteJob(id) {
      try {
        this.loadingDelete = true;
        await axios.delete(`lowongan-delete/${id}`);
        this.loadingDelete = false;
        this.errorDelete = false;
        this.fetchJobsData();
      } catch (error) {
        this.loadingDelete = false;
        this.errorDelete = error;
      }
    },
  },
  mounted() {
    this.fetchJobsData();
    setTimeout(() => {
      $("#dataTable").DataTable();
    }, 5000);
  },
};
</script>

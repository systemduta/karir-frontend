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
            class="btn bg-primary text-decoration-none p-2 px-4 rounded border-2"
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
            ></button>
          </div>
          <div
            v-if="successDelete && !loading"
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Data berhasil dihapus
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              @click="this.successDelete = false"
            ></button>
          </div>
          <table class="table table-hover mt-5" id="dataTable">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Position</th>
                <th scope="col">Deadline</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
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
                  <span
                    v-if="job.status == 1"
                    class="badge bg-success rounded-pill px-2 py-1"
                    >Active</span
                  >
                  <span v-else class="badge bg-danger rounded-pill px-2 py-1"
                    >Inactive</span
                  >
                </td>
                <td>
                  <div class="d-flex flex-wrap gap-1">
                    <!-- edit -->
                    <RouterLink
                      :to="`/dashboard/jobs/edit/${job.id}`"
                      class="btn btn-warning text-white"
                      >Edit</RouterLink
                    >
                    <!-- delete -->
                    <form @submit.prevent="deleteJob(job.id)">
                      <button
                        :disabled="loadingDelete"
                        class="btn btn-danger text-white"
                      >
                        Delete
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
      successDelete: ref(false),
    };
  },
  methods: {
    async fetchJobsData() {
      try {
        this.loading = true;
        const { data } = await axios.get("lowongan");
        console.log(data.data);
        this.jobs = data.data;
        this.error = false;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = error;
      }
    },
    setDataTable(interval) {
      setTimeout(() => {
        $("#dataTable").DataTable();
      }, interval);
    },
    async deleteJob(id) {
      try {
        this.loadingDelete = true;
        await axios.delete(`lowongan-delete/${id}`);
        this.loadingDelete = false;
        this.errorDelete = false;
        this.successDelete = true;
        this.fetchJobsData();
        $("#dataTable").DataTable().destroy();
        this.setDataTable(3000);
      } catch (error) {
        this.loadingDelete = false;
        this.error = error;
      }
    },
  },
  mounted() {
    this.fetchJobsData();
    this.setDataTable(5000);
  },
};
</script>

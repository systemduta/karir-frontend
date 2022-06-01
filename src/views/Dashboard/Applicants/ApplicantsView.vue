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
        <Header title="Applicant" />
        <div class="rounded shadow bg-white p-3">
          <div v-if="loading" class="d-flex justify-content-center mb-2">
            <LoadingComponent />
          </div>
          <div v-if="error" class="text-center">
            {{ error }}
          </div>
          <table class="table table-hover mt-5" id="dataTable">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Position</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(applicant, index) in applicants" :key="applicant.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ applicant.name }}</td>
                <td>{{ applicant.date }}</td>
                <td>
                  {{ applicant.category_id == 1 ? "Fulltime" : "Intern" }}
                </td>
                <td>
                  {{ applicant.status }}
                </td>
                <td>
                  <RouterLink
                    :to="`/dashboard/applicants/detail/${applicant.id}`"
                    class="badge rounded-pill bg-info text-decoration-none px-3 py-2 text-white"
                    >Detail</RouterLink
                  >
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
      applicants: ref([]),
      loading: ref(false),
      error: ref(false),
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchApplicantsData();
      },

      { immediate: true }
    );
  },
  methods: {
    async fetchApplicantsData() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          `participant/${this.$route.params.category}`
        );
        console.log(data.data);
        this.applicants = data.data;
        this.error = false;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = error;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      $("#dataTable").DataTable();
    }, 5000);
  },
};
</script>

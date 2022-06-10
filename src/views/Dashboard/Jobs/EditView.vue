<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
</script>

<style scoped>
#ds-cover {
  background-image: url("@/assets/images/vectors/cover-square.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
  <div class="d-flex">
    <Sidebar />
    <div class="w-100 bg-grey p-5">
      <div class="container">
        <Header title="Edit Job" />
        <div class="card" style="border-radius: 20px">
          <div id="ds-cover">
            <div style="height: 140px"></div>
          </div>
          <div v-if="loading" class="my-4 d-flex justify-content-center">
            <LoadingComponent />
          </div>
          <form id="jobForm" @submit.prevent="updateJob" class="p-4">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Posisi</label>
                  <input
                    type="text"
                    name="name"
                    v-model="form.name"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Job Description</label>
                  <textarea
                    name="jobdesc"
                    v-model="form.jobdesc"
                    class="form-control bg-grey input-border"
                    style="border-radius: 20px"
                    rows="7"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label class="form-label">Kualifikasi</label>
                  <textarea
                    name="qualification"
                    v-model="form.qualification"
                    class="form-control bg-grey input-border"
                    style="border-radius: 20px"
                    rows="7"
                  ></textarea>
                </div>

                <div class="mb-3">
                  <label class="form-label">Tenggat Pendaftaran</label>
                  <input
                    type="date"
                    v-model="form.date"
                    name="date"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Penempatan</label>
                  <input
                    type="text"
                    name="address"
                    v-model="form.address"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <img
                  :src="`${backendUrl}images/${form.image}`"
                  alt=""
                  style="width: 20rem"
                />
                <div class="mb-3">
                  <label class="form-label">Thumbnail</label>
                  <input
                    type="file"
                    name="image"
                    @change="handleFileChange($event)"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                    accept="image/*"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tipe</label>
                  <select
                    name="category_id"
                    v-model="form.category_id"
                    class="form-select rounded-pill py-2 bg-grey input-border"
                  >
                    <option value="1" selected>Fulltime</option>
                    <option value="2">Internship</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="float-end">
              <div v-if="loadingUpdate" class="d-flex justify-content-between">
                <LoadingComponent />
              </div>
              <div
                v-if="errorUpdate"
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <div v-for="(error, index) in errorUpdate" :key="index">
                  <li v-for="(value, _) in error" :key="_">
                    {{ value }}
                  </li>
                </div>

                <button
                  type="button"
                  @click="errorUpdate = false"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              <button
                v-if="!loadingUpdate"
                class="text-white bg-dark rounded-pill py-2 px-5"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "../../../plugins/axios";

export default {
  data() {
    return {
      backendUrl: process.env.VUE_APP_BACKEND_BASE_URL,
      loading: ref(false),
      form: ref({}),
      loadingUpdate: ref(false),
      errorUpdate: ref(false),
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.getDetailJob();
      },

      { immediate: true }
    );
  },
  methods: {
    async getDetailJob() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          `careers-detail/${this.$route.params.id}`
        );
        this.loading = false;
        this.form = data.data;
      } catch (error) {
        this.loading = false;
        this.errorUpdate = error.response.data[0];
        this.$swal({
          icon: "error",
          title: "Failed to fetch detail job",
          text: error,
          showConfirmButton: true,
        });
      }
    },
    async updateJob() {
      try {
        this.loadingUpdate = true;
        const formData = new FormData(document.getElementById("jobForm"));
        formData.append("image", this.form.image);
        await axios.post(`lowongan-update/${this.$route.params.id}`, formData, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        this.loadingUpdate = false;
        this.$swal({
          position: "top-end",
          icon: "success",
          title: "Job has been successfully updated",
          showConfirmButton: false,
          timer: 3000,
        });
        this.$router.push("/dashboard/jobs");
      } catch (error) {
        this.loadingUpdate = false;
        this.$swal({
          icon: "error",
          title: "Failed to update job",
          text: error,
          showConfirmButton: true,
        });
      }
    },
    handleFileChange(event) {
      this.form.image = event.target.files[0];
    },
  },
};
</script>

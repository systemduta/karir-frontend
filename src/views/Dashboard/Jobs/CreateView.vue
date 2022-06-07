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
        <Header title="Create Job" />
        <div class="card" style="border-radius: 20px">
          <div id="ds-cover">
            <div style="height: 140px"></div>
          </div>
          <form id="jobForm" @submit.prevent="postNewJob" class="p-4">
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
                <div class="mb-3">
                  <label class="form-label">Thumbnail</label>
                  <input
                    required
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
                    <option value="1">Fulltime</option>
                    <option value="2">Internship</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="float-end">
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
              <div v-if="loading" class="d-flex justify-content-between">
                <LoadingComponent />
              </div>
              <button
                v-if="!loading"
                class="text-white bg-dark rounded-pill py-2 px-5"
              >
                Post
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
      form: ref({
        name: "Position 1",
        jobdesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga vitae nam, aperiam necessitatibus quas fugiat sint mollitia alias debitis!",
        qualification:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga vitae nam, aperiam necessitatibus quas fugiat sint mollitia alias debitis!",
        date: "2002-02-02",
        address: "Online",
        category_id: "1",
        image: null,
      }),
      error: ref(null),
      loading: ref(false),
    };
  },
  methods: {
    async postNewJob() {
      try {
        this.loading = true;
        const formData = new FormData(document.getElementById("jobForm"));
        formData.append("image", this.form.image);
        await axios.post(`lowongan-create`, formData, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        this.loading = false;
        this.error = false;
        this.$router.push("/dashboard/jobs");
      } catch (error) {
        this.loading = false;
        this.error = error;
      }
    },
    handleFileChange(event) {
      this.form.image = event.target.files[0];
    },
  },
  mounted() {},
};
</script>

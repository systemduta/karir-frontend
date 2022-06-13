<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
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
                    required
                    type="text"
                    name="name"
                    v-model="form.name"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Job Description</label>
                  <QuillEditor
                    ref="jobdescForm"
                    theme="snow"
                    style="height: 10rem"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Kualifikasi</label>
                  <QuillEditor
                    ref="qualificationForm"
                    theme="snow"
                    style="height: 10rem"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label">Tenggat Pendaftaran</label>
                  <input
                    required
                    type="date"
                    v-model="form.date"
                    name="date"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Penempatan</label>
                  <input
                    required
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
              <div v-if="loading" class="d-flex justify-content-between">
                <LoadingComponent />
              </div>
              <div
                v-if="errorPost"
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <div v-for="(error, index) in errorPost" :key="index">
                  <li v-for="(value, _) in error" :key="_">
                    {{ value }}
                  </li>
                </div>

                <button
                  type="button"
                  @click="errorPost = false"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
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
  components: { QuillEditor },
  data() {
    return {
      form: ref({
        category_id: "1",
      }),
      loading: ref(false),
      errorPost: ref(false),
    };
  },
  methods: {
    async postNewJob() {
      try {
        this.loading = true;
        const formData = new FormData(document.getElementById("jobForm"));
        formData.append("image", this.form.image);
        formData.append("jobdesc", this.$refs.jobdescForm.getHTML());
        formData.append(
          "qualification",
          this.$refs.qualificationForm.getHTML()
        );

        await axios.post(`lowongan-create`, formData, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        this.loading = false;
        this.$swal({
          position: "top-end",
          icon: "success",
          title: "New job has been saved",
          showConfirmButton: false,
          timer: 3000,
        });
        this.$router.push("/dashboard/jobs");
      } catch (error) {
        this.loading = false;
        this.errorPost = error.response.data;
        this.$swal({
          icon: "error",
          title: "Failed to create new job",
          text: error,
          showConfirmButton: true,
        });
      }
    },
    handleFileChange(event) {
      this.form.image = event.target.files[0];
    },
  },
  mounted() {},
};
</script>

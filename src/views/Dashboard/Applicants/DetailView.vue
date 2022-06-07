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
        <Header title="Applicant Data" />
        <div class="card" style="border-radius: 20px">
          <div id="ds-cover">
            <div class="p-4">
              <div v-if="loading" class="placeholder-glow">
                <div
                  class="placeholder"
                  style="width: 400px; height: 30px"
                ></div>
                <br />
                <div
                  class="placeholder"
                  style="width: 200px; height: 20px"
                ></div>
              </div>
              <p class="text-white fw-bold fs-3">{{ applicant.name }}</p>
              <p class="text-primary fs-5">
                {{ applicant.recruitment && applicant.recruitment.name }}
              </p>
            </div>
          </div>
          <div v-if="loading" class="my-4 d-flex justify-content-center">
            <LoadingComponent />
          </div>
          <div class="p-4">
            <div class="row g-4">
              <div class="col-12 col-md-6">
                <div class="p-3">
                  <div class="mb-3">
                    <p class="form-label">Nama Lengkap</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.name }}</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Email</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.email }}</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Jenis Kelamin</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.gender }}</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Tanggal Lahir</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.date_birth }}</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Tempat Lahir</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.place_birth }}</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Usia</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.age }}</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Alamat</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.address }}</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Kota</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.city }}</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Telepon</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.phone }}</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Media Sosial</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">{{ applicant.media_social }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex flex-column gap-3">
                  <div class="p-3">
                    <div class="mb-3">
                      <p class="form-label">Pendidikan</p>
                      <div class="p-2 rounded-pill bg-grey input-border">
                        <p class="my-auto">{{ applicant.education }}</p>
                      </div>
                    </div>
                    <div class="mb-3">
                      <p class="form-label">Jurusan</p>
                      <div class="p-2 rounded-pill bg-grey input-border">
                        <p class="my-auto">{{ applicant.major }}</p>
                      </div>
                    </div>
                    <div class="mb-3">
                      <p class="form-label">Universitas</p>
                      <div class="p-2 rounded-pill bg-grey input-border">
                        <p class="my-auto">{{ applicant.univercity }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-3">
                    <p class="fs-4">Applicant FIle</p>
                    <div class="mb-3">
                      <p class="form-label">CV</p>
                      <a
                        class="p-1 px-3 text-decoration-none text-black rounded-pill input-border"
                        style="background-color: #c4c4c4"
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="`${baseUrl}cv/${
                          applicant.file && applicant.file[0].cv
                        }`"
                      >
                        Download
                      </a>
                    </div>
                    <div class="mb-3">
                      <p class="form-label">Portofolio</p>
                      <a
                        class="p-1 px-3 text-decoration-none text-black rounded-pill input-border"
                        style="background-color: #c4c4c4"
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="`${baseUrl}fortofolio/${
                          applicant.file && applicant.file[0].fortofolio
                        }`"
                      >
                        Download
                      </a>
                    </div>
                    <div class="mb-3">
                      <p class="form-label">Sertifikat</p>
                      <a
                        class="p-1 px-3 text-decoration-none text-black rounded-pill input-border"
                        style="background-color: #c4c4c4"
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="`${baseUrl}certificate/${
                          applicant.file && applicant.file[0].certificate
                        }`"
                      >
                        Download
                      </a>
                    </div>
                    <div class="mb-3">
                      <p class="form-label">Foto</p>
                      <a
                        class="p-1 px-3 text-decoration-none text-black rounded-pill input-border"
                        style="background-color: #c4c4c4"
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="`${baseUrl}foto/${
                          applicant.file && applicant.file[0].foto
                        }`"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                  <div class="p-3">
                    <form>
                      <div class="mb-3">
                        <label class="form-label">Status</label>
                        <select
                          name="status"
                          v-model="status"
                          class="form-select rounded-pill py-2 bg-grey input-border"
                          @onCahnge="postStatusChanged"
                        >
                          <option value="process">Process</option>
                          <option value="decline">Decline</option>
                          <option value="approve">Approve</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      baseUrl: process.env.VUE_APP_BACKEND_BASE_URL,
      applicant: ref([]),
      status: ref(""),
      loading: ref(false),
      error: ref(false),
      loadingPostStatus: ref(false),
      errorPostStatus: ref(false),
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchApplicantData();
      },

      { immediate: true }
    );
  },
  methods: {
    async fetchApplicantData() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          `participant/${this.$route.params.id}`
        );
        console.log(data.data);
        this.applicant = data.data;
        this.error = false;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = error;
      }
    },
    async postStatusChanged() {
      console.log(`changed to ${this.status}`);
      // try {
      //   this.loadingPostStatus = true;
      //   await axios.post(`participant/${this.$route.params.id}/${this.status}`);
      //   this.errorPostStatus = false;
      //   this.loadingPostStatus = false;
      // } catch (error) {
      //   this.loadingPostStatus = false;
      //   this.errorPostStatus = error;
      // }
    },
  },
  mounted() {},
};
</script>

<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
</script>

<style scoped>
@media screen and (max-width: 600px) {
  #vector1,
  #vector2,
  #vector3 {
    display: none;
  }

  .hero-buttons {
    flex-direction: column;
  }
}

#hero {
  background-image: url("@/assets/images/vectors/bg-hero.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

#vector1 {
  height: 406px;
  width: 718px;
  position: absolute;
  left: 2%;
}

#vector2 {
  height: 150px;
  width: 150px;
  position: absolute;
  top: 25%;
  left: 48%;
}

#vector3 {
  height: 432px;
  width: 315px;
  position: absolute;
  top: 5%;
  right: 15%;
}
</style>

<template>
  <main>
    <NavigationBar />
    <main class="mb-5">
      <section class="" style="position: relative">
        <div
          class="row w-full p-5"
          style="margin-right: 0 !important"
          id="hero"
        >
          <img
            src="@/assets/images/vectors/vector1.svg"
            class="z-index-0"
            id="vector1"
          />
          <div class="col-12 col-md-6 z-index-1 p-5">
            <div v-if="loading" class="placeholder-glow">
              <div class="placeholder" style="width: 400px; height: 30px"></div>
              <br />
              <div class="placeholder" style="width: 200px; height: 20px"></div>
            </div>
            <div v-if="error">
              <p class="fs-1 fw-bold lh-lg text-white">
                Upss.. terjadi kesalahan, coba lagi nanti
              </p>
            </div>
            <p class="fs-1 fw-bold lh-lg text-white">
              {{ vacancy.name }}
            </p>
            <p class="fs-5 lh-lg text-white">
              {{ vacancy.type }}
            </p>
            <div v-if="!error" class="d-flex gap-3 hero-buttons">
              <a
                href="#form"
                class="bg-white text-decoration-none border-0 text-primary rounded-pill px-5 py-2"
              >
                Daftar
              </a>
              <button
                class="bg-primary text-white rounded-pill px-5 py-2"
                style="border: 0.5px solid white"
              >
                Bagikan
              </button>
            </div>
          </div>
          <img
            src="@/assets/images/vectors/dotted-kite.svg"
            class="z-index-0"
            id="vector2"
          />
          <img
            src="@/assets/images/vectors/vector2.svg"
            class="z-index-0"
            id="vector3"
          />
          <div class="w-full" style="height: 200px"></div>
        </div>
      </section>
      <div class="container" v-if="successApply">
        <div class="d-flex flex-column justify-content-center">
          <img
            src="@/assets/images/ilustrations/apply-success.svg"
            class="img-fluid"
            style="height: 50rem"
          />
          <RouterLink
            to="/"
            class="bg-primary bg-gradient text-decoration-none text-center shadow rounded-pill p-4"
            >Back to home</RouterLink
          >
        </div>
      </div>
      <div v-if="!successApply" class="m-5">
        <div class="container" v-if="error">
          <img
            src="@/assets/images/ilustrations/no-data.svg"
            class="img-fluid"
          />
        </div>
        <form
          id="applyForm"
          v-if="!error"
          @submit.prevent="postApply"
          enctype="multipart/form-data"
        >
          <div class="row g-4">
            <div class="col-12 col-md-6">
              <div class="card shadow rounded-30px p-3">
                <p id="form" class="text-primary fs-4">Data Diri</p>
                <hr />
                <div class="mb-3">
                  <label class="form-label">Nama Lengkap</label>
                  <input
                    required
                    type="text"
                    name="name"
                    v-model="form.name"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    v-model="form.email"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Jenis Kelamin</label>
                  <select
                    name="gender"
                    v-model="form.gender"
                    class="form-select rounded-pill py-2 bg-grey input-border"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Tanggal Lahir</label>
                  <input
                    required
                    type="date"
                    name="date_birth"
                    v-model="form.date_birth"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Tempat Lahir</label>
                  <input
                    required
                    type="text"
                    name="place_birth"
                    v-model="form.place_birth"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Usia</label>
                  <input
                    required
                    type="number"
                    name="age"
                    min="0"
                    v-model="form.age"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Alamat</label>
                  <input
                    required
                    type="text"
                    name="address"
                    v-model="form.address"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Kota</label>
                  <input
                    required
                    type="text"
                    name="city"
                    v-model="form.city"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Telepon</label>
                  <input
                    required
                    type="text"
                    name="phone"
                    v-model="form.phone"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Media Sosial</label>
                  <input
                    required
                    type="text"
                    name="media_social"
                    v-model="form.media_social"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="d-flex flex-column gap-3">
                <div class="card shadow rounded-30px p-3">
                  <p class="text-primary fs-4">Riwayat Pendidikan</p>
                  <hr />
                  <div class="mb-3">
                    <label class="form-label">Pendidikan</label>
                    <select
                      name="education"
                      v-model="form.education"
                      class="form-select rounded-pill py-2 bg-grey input-border"
                    >
                      <option value="-">-</option>
                      <option value="SMA / SMK">SMA / SMK</option>
                      <option value="Politeknik">Politeknik</option>
                      <option value="Universitas">Universitas</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Jurusan</label>
                    <input
                      required
                      type="text"
                      name="major"
                      v-model="form.major"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Universitas</label>
                    <input
                      required
                      type="text"
                      name="univercity"
                      v-model="form.univercity"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                </div>
                <div class="card shadow rounded-30px p-3">
                  <p class="text-primary fs-4">Upload File</p>
                  <hr />
                  <div class="mb-3">
                    <label class="form-label">CV</label>
                    <input
                      required
                      type="file"
                      @change="handleFileChange($event)"
                      name="cv"
                      accept="application/pdf"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Portofolio</label>
                    <input
                      required
                      type="file"
                      @change="handleFileChange($event)"
                      name="fortofolio"
                      accept="application/pdf"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Sertifikat</label>
                    <input
                      type="file"
                      @change="handleFileChange($event)"
                      name="certificate"
                      accept="application/pdf"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Foto</label>
                    <input
                      required
                      type="file"
                      @change="handleFileChange($event)"
                      name="foto"
                      accept="image/*"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                </div>
              </div>
              <div class="float-end mt-5">
                <div
                  v-if="errorApply"
                  class="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  {{ errorApply }}
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    @click="errorApply = false"
                  ></button>
                </div>
                <div v-if="loadingApply" class="d-flex justify-content-between">
                  <LoadingComponent />
                </div>
                <button
                  v-if="!loadingApply"
                  :class="`${
                    loadingApply && 'disabled'
                  } text-white bg-dark rounded-pill py-2 px-5`"
                  type="submit"
                >
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
    <FooterComponent />
  </main>
</template>

<script>
import { ref } from "vue";
import axios from "../plugins/axios";

export default {
  data() {
    return {
      vacancy: ref({}),
      loading: ref(true),
      error: ref(false),
      form: ref({
        name: "sample name",
        email: "sample@sample.com",
        gender: "Laki-laki",
        phone: "1234567890",
        date_birth: "1001-01-01",
        place_birth: "Rumah Sakit",
        age: 1000,
        address: "sample address",
        city: "sample city",
        media_social: "sample account",
        education: "Universitas",
        major: "sample major",
        univercity: "sample campuss",
        cv: null,
        fortofolio: null,
        certificate: null,
        foto: null,
        status: "Masuk",
      }),
      loadingApply: ref(false),
      errorApply: ref(false),
      successApply: ref(false),
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchDetailVacancy();
      },

      { immediate: true }
    );
  },
  methods: {
    async fetchDetailVacancy() {
      try {
        const { data } = await axios.get(
          `careers-detail/${this.$route.params.id}`
        );
        this.error = false;
        this.loading = false;
        this.vacancy = data.data;
      } catch (error) {
        this.loading = false;
        this.error = error;
      }
    },
    async postApply() {
      const formData = new FormData(document.getElementById("applyForm"));
      formData.append("cv", this.form.cv);
      formData.append("foto", this.form.foto);
      formData.append("fortofolio", this.form.fortofolio);
      formData.append("certificate", this.form.certificate);

      try {
        this.loadingApply = true;
        await axios.post(`careers-daftar/${this.$route.params.id}`, formData, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        this.loadingApply = false;
        this.successApply = true;
      } catch (error) {
        this.loadingApply = false;
        this.errorApply = error;
      }
    },
    handleFileChange(event) {
      this.form = { ...this.form, [event.target.name]: event.target.files[0] };
    },
  },
};
</script>

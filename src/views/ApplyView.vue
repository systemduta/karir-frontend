<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
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
            <p class="fs-1 fw-bold lh-lg text-white">
              {{ vacancy.name }}
            </p>
            <p class="fs-5 lh-lg text-white">
              {{ vacancy.type }}
            </p>
            <div class="d-flex gap-3 hero-buttons">
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
      <div class="m-5">
        <form>
          <div class="row g-4">
            <div class="col-12 col-md-6">
              <div class="card shadow rounded-30px p-3">
                <p id="form" class="text-primary fs-4">Data Diri</p>
                <hr />
                <div class="mb-3">
                  <label class="form-label">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Jenis Kelamin</label>
                  <select
                    name="gender"
                    class="form-select rounded-pill py-2 bg-grey input-border"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Tanggal Lahir</label>
                  <input
                    type="date"
                    name="date_birth"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Tempat Lahir</label>
                  <input
                    type="text"
                    name="place_birth"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Usia</label>
                  <input
                    type="number"
                    name="age"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Alamat</label>
                  <input
                    type="text"
                    name="address"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Kota</label>
                  <input
                    type="text"
                    name="city"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Telepon</label>
                  <input
                    type="text"
                    name="phone"
                    class="form-control rounded-pill py-2 bg-grey input-border"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Media Sosial</label>
                  <input
                    type="text"
                    name="media_social"
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
                      type="text"
                      name="major"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Universitas</label>
                    <input
                      type="text"
                      name="univercity"
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
                      type="file"
                      name="cv"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Portofolio</label>
                    <input
                      type="file"
                      name="portofolio"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Sertifikat</label>
                    <input
                      type="file"
                      name="certificate"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Foto</label>
                    <input
                      type="file"
                      name="foto"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="float-end">
            <button class="text-white bg-dark rounded-pill py-2 px-5">
              Daftar
            </button>
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
        this.vacancy = data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

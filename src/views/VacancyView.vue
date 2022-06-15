<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import VacancyCard from "@/components/VacancyCard.vue";
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

.border-radius-30px {
  border-radius: 30px;
}

.bg-grey {
  background-color: #f5f5f5;
}

.input-border {
  border: 1px solid #979797;
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
            <p class="fs-1 fw-bold lh-lg text-white">{{ vacancy.name }}</p>
            <p class="fs-5 lh-lg text-white">
              {{ vacancy.category_id == 1 ? "Fulltime" : "Internship" }}
            </p>
            <div v-if="!error" class="d-flex gap-3 hero-buttons">
              <RouterLink
                :to="`/apply/${
                  vacancy.category_id == 1 ? 'fulltime' : 'intern'
                }/${$route.params.id}`"
                class="bg-white text-center border-0 text-primary rounded-pill px-5 py-2 text-decoration-none"
              >
                Daftar
              </RouterLink>
              <button
                @click="copyUrl"
                class="bg-primary text-center text-white rounded-pill px-5 py-2"
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
      <div class="m-5 d-flex flex-column gap-5">
        <div class="row g-4">
          <div class="col-12 col-md-6">
            <div class="d-flex flex-column gap-3">
              <div class="card shadow border-radius-30px p-3">
                <p class="text-primary fs-4">Job Overview</p>
                <hr />
                <div v-if="loading" class="placeholder-glow">
                  <div class="placeholder col-12"></div>
                  <br />
                  <div class="placeholder col-12"></div>
                </div>
                <div v-html="vacancy.jobdesc"></div>
              </div>
              <div class="card shadow border-radius-30px p-3">
                <p class="text-primary fs-4">Kualifikasi</p>
                <hr />
                <div>
                  <div v-if="loading" class="placeholder-glow">
                    <div class="placeholder col-12"></div>
                    <br />
                    <div class="placeholder col-12"></div>
                  </div>
                  <div v-html="vacancy.qualification"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="d-flex flex-column gap-3">
              <div class="card shadow border-radius-30px p-3">
                <p class="text-primary fs-4">Tenggat Pendaftaran</p>
                <hr />
                <div v-if="loading" class="placeholder-glow">
                  <div class="placeholder col-12"></div>
                </div>
                <p>{{ vacancy.date }}</p>
              </div>
              <div class="card shadow border-radius-30px p-3">
                <p class="text-primary fs-4">Penempatan</p>
                <hr />
                <div v-if="loading" class="placeholder-glow">
                  <div class="placeholder col-12"></div>
                </div>
                <p>{{ vacancy.address }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-center text-primary fs-3">Karir Lainnya</p>
          <div class="row g-3 justify-content-center">
            <div v-if="loadingVacancies" class="d-flex justify-content-center">
              <LoadingComponent />
            </div>
            <div v-if="errorVacancies" class="text-center">
              <p class="fs-4">Upss, something went wrong</p>
            </div>
            <VacancyCard
              v-for="vacancy in limitedLatestVacancies"
              :key="vacancy.id"
              :id="vacancy.id"
              :name="vacancy.name"
              :image="vacancy.image"
              :category_id="vacancy.category_id"
            />
          </div>
        </div>
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
      latestVacancies: ref([]),
      loadingVacancies: ref(true),
      errorVacancies: ref(false),
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (to) => {
        this.fetchDetailVacancy(to.id);
        this.fetchLatestVacancy();
      },

      { immediate: true }
    );
  },
  computed: {
    limitedLatestVacancies() {
      return this.latestVacancies.slice(0, 4);
    },
  },
  methods: {
    async fetchDetailVacancy(id) {
      try {
        const { data } = await axios.get(`careers-detail/${id}`);
        this.error = false;
        this.loading = false;
        this.vacancy = data.data;
      } catch (error) {
        this.loading = false;
        this.error = true;
      }
    },
    async fetchLatestVacancy() {
      try {
        const { data } = await axios.get(`careers`);
        this.loadingVacancies = false;
        this.latestVacancies = data.data;
      } catch (error) {
        this.loadingVacancies = false;
        this.errorVacancies = true;
      }
    },
    copyToClipboard(str) {
      return new Promise((resolve, reject) => {
        var success = false;
        function listener(e) {
          e.clipboardData.setData("text/plain", str);
          e.preventDefault();
          success = true;
        }
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);
        success ? resolve() : reject();
      });
    },

    copyUrl() {
      const link = window.location.href;

      this.copyToClipboard(link)
        .then(() => {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Link berhasil disalin",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          this.$swal({
            icon: "error",
            title: "Gagal menyalin tautan",
            text: error,
          });
        });
    },
  },
};
</script>

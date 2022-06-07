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
          class="row w-full justify-content-center p-5"
          style="margin-right: 0 !important"
          id="hero"
        >
          <img
            src="@/assets/images/vectors/vector1.svg"
            class="z-index-0"
            id="vector1"
          />
          <div class="col-12 col-md-6 z-index-1">
            <p class="fs-3 fw-bold lh-lg text-white">
              Temukan Jalanmu untuk Berinovasi <br />
              dan Mewujudkan Mimpi Bersama <br />
              Maesa Group
            </p>
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
          <div class="col-12 col-md-6 z-index-1">
            <img
              src="@/assets/images/hero.png"
              class="img-fluid rounded-2"
              alt="hero"
            />
          </div>
          <div class="w-full" style="height: 200px"></div>
        </div>
        <div class="row justify-content-center" id="filterContainer">
          <div
            class="shadow rounded-pill text-center p-4 w-75"
            style="background-color: #e1e1e1; position: absolute; bottom: 0"
            id="filter"
          >
            <form
              @submit.prevent="filterVacancies"
              class="row g-3 justify-content-center align-items-center"
            >
              <div class="col-12 col-md-5">
                <input
                  type="text"
                  name="search"
                  placeholder="Job title or keyword"
                  class="form-control rounded-pill"
                  v-model="form.name"
                />
              </div>
              <div class="col-12 col-md-5">
                <select
                  name="type"
                  class="form-select rounded-pill"
                  v-model="form.category_id"
                >
                  <option value="">Filter</option>
                  <option value="1">Fulltime</option>
                  <option value="2">Intern</option>
                </select>
              </div>
              <div class="col-12 col-md-2">
                <button
                  type="submit"
                  class="rounded-pill text-white w-100"
                  style="background-color: #434343"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div class="m-5">
        <div
          v-if="loading || loadingFilter"
          class="d-flex justify-content-center my-3"
        >
          <LoadingComponent />
        </div>
        <div v-if="error" class="text-center my-3">
          <p class="fs-4">Upss, something went wrong</p>
        </div>
        <div class="row g-3 justify-content-center">
          <div v-if="vacanciesShowed.length == 0">
            <img
              src="@/assets/images/ilustrations/no-data.svg"
              class="img-fluid"
              alt="Not found"
            />
          </div>
          <VacancyCard
            v-else-if="vacanciesShowed.length"
            v-for="vacancy in vacanciesShowed"
            :key="vacancy.id"
            :id="vacancy.id"
            :name="vacancy.name"
            :image="vacancy.image"
            :category_id="vacancy.category_id"
          />
        </div>
        <div class="d-flex justify-content-center mt-5">
          <button
            v-if="moreToShow"
            @click="showedCount += moreCount"
            class="bg-primary bg-gradient border-0 text-center shadow rounded-pill p-4"
          >
            Browse more
          </button>
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
      vacancies: ref([]),
      showedCount: ref(4),
      moreCount: ref(200),
      loading: ref(false),
      error: ref(false),
      form: {
        name: "",
        category_id: "",
      },
      loadingFilter: ref(false),
      errorFilter: ref(false),
    };
  },
  computed: {
    vacanciesShowed() {
      return this.vacancies.slice(0, this.showedCount);
    },
    moreToShow() {
      return this.showedCount < this.vacancies.length;
    },
  },
  methods: {
    observeFilterComponent() {
      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const width = entry.contentRect.width;
          const filter = document.getElementById("filter");
          if (width < 772) {
            filter.classList.remove("rounded-pill");
            filter.classList.add("rounded-3");
          } else {
            filter.classList.add("rounded-pill");
            filter.classList.remove("rounded-3");
          }
        });
      });
      observer.observe(document.getElementById("filterContainer"));
    },
    async fetchVacanciesData() {
      try {
        this.loading = true;
        const { data } = await axios.get("careers");
        this.error = false;
        this.loading = false;
        this.vacancies = data.data;
      } catch (error) {
        this.loading = false;
        this.error = true;
      }
    },
    async filterVacancies() {
      try {
        this.loadingFilter = true;
        const { data } = await axios.get(
          `search?name=${this.form.name}&category_id=${this.form.category_id}`
        );
        this.errorFilter = false;
        this.loadingFilter = false;
        this.vacancies = data.data;
      } catch (error) {
        this.vacancies = [];
        this.loadingFilter = false;
        this.errorFilter = error;
      }
    },
  },
  mounted() {
    this.observeFilterComponent();
    this.fetchVacanciesData();
  },
};
</script>

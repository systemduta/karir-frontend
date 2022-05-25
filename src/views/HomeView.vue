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
            <form class="row g-3 justify-content-center align-items-center">
              <div class="col-12 col-md-5">
                <input
                  type="text"
                  name="search"
                  placeholder="Job title or keyword"
                  class="form-control rounded-pill"
                  v-model="form.query"
                />
              </div>
              <div class="col-12 col-md-5">
                <select
                  name="type"
                  class="form-select rounded-pill"
                  v-model="form.type"
                >
                  <option value="">Filter</option>
                  <option value="Fulltime">Fulltime</option>
                  <option value="Intern">Intern</option>
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
        <div class="row g-3 justify-content-center">
          <div v-if="loading" class="d-flex justify-content-center">
            <LoadingComponent />
          </div>
          <div v-if="error" class="text-center">
            <p class="fs-4">Upss, something went wrong</p>
          </div>
          <VacancyCard
            v-for="vacancy in vacancies"
            :key="vacancy.id"
            :id="vacancy.id"
            :name="vacancy.name"
            :image="vacancy.image"
            :type="vacancy.type"
          />
        </div>
        <div v-if="vacancies.length > 4" class="text-center mt-5">
          <a
            href="#"
            class="bg-primary bg-gradient shadow rounded-pill p-4 text-decoration-none"
            >Browse more</a
          >
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
      loading: ref(true),
      error: ref(false),
      form: {
        query: "",
        type: "",
      },
    };
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
        const { data } = await axios.get("careers");
        this.loading = false;
        this.vacancies = data.data;
      } catch (error) {
        this.loading = false;
        this.error = true;
      }
    },
  },
  mounted() {
    this.observeFilterComponent();
    this.fetchVacanciesData();
  },
};
</script>

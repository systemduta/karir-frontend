<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import VacancyCard from "@/components/VacancyCard.vue";
</script>

<style scoped>
@media screen and (max-width: 600px) {
  #hero {
    border-radius: 0;
  }

  #vector1 {
    width: 400px;
  }
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

.nav-tabs .nav-link:hover {
  border: none;
}

.nav-tabs .nav-link.active {
  border: none;
  border-bottom: 3px solid #f3b520;
}
</style>

<template>
  <main>
    <NavigationBar />
    <main class="mb-5">
      <section class="pb-5" style="position: relative">
        <div
          class="bg-primary row justify-content-center p-5"
          style="border-radius: 0 0 70px 200px; margin-right: 0 !important"
          id="hero"
        >
          <img
            src="@/assets/images/vectors/vector1.svg"
            class="z-index-0"
            id="vector1"
          />
          <div class="col-12 col-md-6 z-index-1">
            <p class="fs-3 fw-bold lh-lg">
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
          <div class="w-full" style="height: 100px"></div>
        </div>
        <FilterComponent />
      </section>
      <div class="m-5">
        <div class="mb-5 text-center text-primary">
          <h1>Career</h1>
          <ul class="nav nav-tabs border-0 justify-content-center">
            <li class="nav-item">
              <button
                class="nav-link text-black active"
                data-bs-toggle="tab"
                data-bs-target="#all-vacancy"
              >
                All
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link text-black"
                data-bs-toggle="tab"
                data-bs-target="#intern-vacancy"
              >
                Intern
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link text-black"
                data-bs-toggle="tab"
                data-bs-target="#fulltime-vacancy"
              >
                Full Time
              </button>
            </li>
          </ul>
        </div>
        <div class="tab-content pt-2">
          <div class="tab-pane fade show active" id="all-vacancy">
            <div class="row g-3 justify-content-center">
              <VacancyCard />
              <VacancyCard />
              <VacancyCard />
              <VacancyCard />
              <VacancyCard />
              <VacancyCard />
              <VacancyCard />
              <VacancyCard />
            </div>
          </div>
          <div class="tab-pane fade" id="intern-vacancy">
            <div class="mx-auto w-50">
              <img
                src="@/assets/images/ilustrations/no-data.svg"
                class="img-fluid"
                alt="No data available"
              />
            </div>
          </div>
          <div class="tab-pane fade" id="fulltime-vacancy">
            <div class="mx-auto w-50">
              <img
                src="@/assets/images/ilustrations/no-data.svg"
                class="img-fluid"
                alt="No data available"
              />
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
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
export default {
  mounted: function () {},
};
</script>

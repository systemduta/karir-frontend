<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style scoped>
@media screen and (min-width: 600px) {
  #hero {
    border-radius: 0;
  }
}

#vector1 {
  height: 406px;
  width: 718px;
  z-index: 0;
  position: absolute;
  left: 2%;
}

#vector2 {
  height: 150px;
  width: 150px;
  z-index: 0;
  position: absolute;
  top: 25%;
  left: 48%;
}

#vector3 {
  height: 432px;
  width: 315px;
  z-index: 0;
  position: absolute;
  top: 5%;
  right: 15%;
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
          <img src="@/assets/images/vectors/vector1.png" id="vector1" />
          <div class="col-12 col-md-6" style="z-index: 1">
            <p class="fs-3 fw-bold lh-lg">
              Temukan Jalanmu untuk Berinovasi <br />
              dan Mewujudkan Mimpi Bersama <br />
              Maesa Group
            </p>
          </div>
          <img src="@/assets/images/vectors/vector2.png" id="vector2" />
          <img src="@/assets/images/vectors/vector3.png" id="vector3" />
          <div class="col-12 col-md-6" style="z-index: 1">
            <img
              src="@/assets/images/hero.png"
              class="img-fluid rounded-2"
              alt="hero"
            />
          </div>
          <div class="w-full" style="height: 100px"></div>
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
                />
              </div>
              <div class="col-12 col-md-5">
                <select name="category" class="form-select rounded-pill">
                  <option value="">Filter</option>
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
      <div class="w-full" style="height: 250px"></div>
    </main>
    <FooterComponent />
  </main>
</template>

<script>
export default {
  mounted: function () {
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
};
</script>

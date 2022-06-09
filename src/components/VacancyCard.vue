<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div
      class="card shadow"
      style="
        border-radius: 20px;
        box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.1);
        filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
      "
    >
      <div
        class="position-absolute bg-primary px-4 py-1"
        style="top: 0px; right: 0px; border-radius: 0 20px 0 20px"
      >
        <p class="fw-bold">
          {{ category_id == 1 ? "Fulltime" : "Internship" }}
        </p>
      </div>
      <img
        :src="`${backendUrl}images/${image}`"
        class="card-img-top"
        style="height: 12rem; border-radius: 20px 20px 0 0"
      />
      <div class="card-body bg-primary" style="border-radius: 0 0 20px 20px">
        <h5 class="card-title">
          <RouterLink
            :to="`/vacancies/${id}`"
            class="text-decoration-none text-white fw-bolder"
            >{{ name }}</RouterLink
          >
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backendUrl: process.env.VUE_APP_BACKEND_BASE_URL,
    };
  },
  props: {
    name: String,
    category_id: String,
    image: String,
    id: Number,
  },
};
</script>

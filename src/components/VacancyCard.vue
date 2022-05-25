<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card shadow" style="border-radius: 20px 20px 0 0">
      <div
        class="position-absolute bg-primary px-4 py-1"
        style="top: 0px; right: 0px; border-radius: 0 20px 0 20px"
      >
        <p class="fw-bold">{{ type }}</p>
      </div>
      <img
        src="https://maesagroup.co.id/wp-content/uploads/2022/03/8-Frontend-Developer-1024x1024.png"
        class="card-img-top"
        style="border-radius: 20px"
      />
      <div class="card-body bg-primary">
        <h5 class="card-title">
          <RouterLink
            to="/vacancies/1"
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
  props: {
    name: String,
    type: String,
    image: String,
    id: Number,
  },
};
</script>

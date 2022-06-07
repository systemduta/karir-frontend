<template>
  <header class="mb-5">
    <div class="d-flex justify-content-between">
      <p class="fs-2 fw-bold text-capitalize">{{ title }}</p>
      <div class="d-flex gap-4 fs-4">
        <i class="bi bi-person-square"></i>
        {{ user.name }}
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      user: this.$store.getters.user ?? { name: "Administrator" },
    };
  },
};
</script>

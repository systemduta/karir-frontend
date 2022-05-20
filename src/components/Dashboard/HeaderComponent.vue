<template>
  <header class="mb-5">
    <div class="d-flex justify-content-between">
      <p class="fs-2">{{ title }}</p>
      <div class="d-flex gap-4 fs-4">
        <i class="bi bi-bell"></i>
        <a href="#" class="text-black">
          <i class="bi bi-person-square"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

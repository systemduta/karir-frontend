<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
  <main>
    <NavigationBar />
    <h1 class="text-center">Halaman Beranda</h1>
    <h4 class="text-center">Vue 3 with Bootstrap 5</h4>
    <TodoContainer />
  </main>
</template>

<script>
import TodoContainer from "../components/TodoContainer.vue";

export default {
  components: {
    TodoContainer,
  },
};
</script>

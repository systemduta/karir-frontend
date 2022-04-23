<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <main>
    <NavigationBar />
    <h1 class="text-center">Halaman Beranda</h1>
    <h4 class="text-center">Vue 3 with Bootstrap 5</h4>
    <TodoContainer />
    <FooterComponent />
  </main>
</template>

<script>
import TodoContainer from "@/components/TodoContainer.vue";

export default {
  components: {
    TodoContainer,
  },
};
</script>

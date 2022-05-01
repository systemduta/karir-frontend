<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
</script>

<template>
  <Header />
  <div class="container-fluid">
    <div class="row">
      <Sidebar />
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h1>Dashboard</h1>
      </main>
    </div>
  </div>
</template>

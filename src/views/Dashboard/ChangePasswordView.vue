<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
</script>

<template>
  <div class="d-flex">
    <Sidebar />
    <div class="bg-grey p-5 w-100">
      <div class="container">
        <Header title="Admin Settings" />
        <div class="card" style="border-radius: 20px">
          <div
            class="bg-dark p-3"
            style="border-radius: 20px 20px 0 0; height: 55px"
          >
            <p class="text-white my-auto fw-bold fs-5">Personal</p>
          </div>
          <form
            @submit.prevent="changePassword"
            id="changePasswordForm"
            class="p-4"
          >
            <div class="col-8">
              <div
                v-if="error"
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <div v-for="(error, index) in error" :key="index">
                  <li v-for="(value, _) in error" :key="_">
                    {{ value }}
                  </li>
                </div>

                <button
                  type="button"
                  @click="error = false"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              <div class="mb-3">
                <label class="form-label">Old Password</label>
                <input
                  type="password"
                  name="current_password"
                  v-model="form.current_password"
                  class="form-control rounded"
                />
                <!-- <div class="float-end">
                  <a
                    href="/forgot-password"
                    class="text-black text-decoration-none"
                    >Forgot Password?</a
                  >
                </div> -->
              </div>
              <div class="mb-3">
                <label class="form-label">New Password</label>
                <input
                  type="password"
                  name="password"
                  v-model="form.password"
                  class="form-control rounded"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Re-enter New Password</label>
                <input
                  type="password"
                  v-model="form.password_confirmation"
                  name="password_confirmation"
                  class="form-control rounded"
                />
              </div>
            </div>
            <div style="height: 150px"></div>
            <div class="float-end">
              <div v-if="loading" class="d-flex justify-content-between">
                <LoadingComponent />
              </div>
              <button
                v-if="!loading"
                class="text-white bg-dark rounded-pill py-2 px-5"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "../../plugins/axios";

export default {
  data() {
    return {
      form: ref({}),
      loading: ref(false),
      error: ref(false),
    };
  },
  methods: {
    async changePassword() {
      try {
        this.loading = true;
        const formData = new FormData(
          document.getElementById("changePasswordForm")
        );
        formData.append("user_id", this.$store.getters.user.id);

        await axios.post(`change-passwod`, formData, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        this.loading = false;
        this.$swal({
          position: "top-end",
          icon: "success",
          title: "Password has been updated",
          showConfirmButton: false,
          timer: 3000,
        });
        this.$router.push("/dashboard");
      } catch (error) {
        this.loading = false;
        this.error = error.response.data.errors;
        this.$swal({
          icon: "error",
          title: "Failed to update password",
          text: error,
          showConfirmButton: true,
        });
      }
    },
  },
  mounted() {},
};
</script>

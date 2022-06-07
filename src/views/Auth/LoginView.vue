<script setup>
import LoadingComponent from "@/components/LoadingComponent.vue";
</script>

<style scoped>
@media screen and (max-width: 600px) {
  #bubles {
    width: 250px;
  }
  #vector1,
  #vector3,
  #vector5 {
    display: none;
  }
}

#vector1 {
  position: absolute;
  top: 25%;
  left: 2%;
}

#vector2 {
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 15%;
  left: 23%;
}

#vector3 {
  position: absolute;
  top: 5%;
  right: 5%;
}

#vector4 {
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 30%;
  right: 12%;
}

#vector5 {
  position: absolute;
  bottom: 1px;
  right: 1px;
}
</style>

<template>
  <main class="bg-primary">
    <div class="container">
      <img
        src="@/assets/images/vectors/vector3.svg"
        id="vector1"
        class="z-index-0"
        alt=""
      />
      <img
        src="@/assets/images/vectors/dotted-kite.svg"
        id="vector2"
        class="z-index-0"
        alt=""
      />
      <img
        src="@/assets/images/vectors/vector4.svg"
        id="vector3"
        class="z-index-0"
        alt=""
      />
      <img
        src="@/assets/images/vectors/dotted-kite.svg"
        id="vector4"
        class="z-index-0"
        alt=""
      />
      <img
        src="@/assets/images/vectors/vector5.svg"
        id="vector5"
        class="z-index-0"
        alt=""
      />
      <section
        class="min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div
              class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center z-index-1"
            >
              <div
                class="card shadow px-5"
                style="
                  background-color: #f5f5f5 !important;
                  border-radius: 40px;
                "
              >
                <div class="card-body">
                  <div class="d-flex justify-content-center py-4">
                    <div class="d-flex align-items-center">
                      <a href="/">
                        <img
                          src="@/assets/logo.png"
                          class="mb-5"
                          style="width: 191px"
                          alt="Maesa Group Karir"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="pt-4 pb-2">
                    <p class="text-center" style="color: #5c5c5c">
                      Sign in to your account to continue
                    </p>
                    <div
                      v-if="error"
                      class="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      Email atau password salah
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div v-if="loading" class="d-flex justify-content-center">
                      <LoadingComponent />
                    </div>
                  </div>
                  <form class="row g-3" @submit.prevent="userLogin">
                    <div class="col-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        class="form-control rounded-pill shadow py-2"
                        v-model="form.email"
                        required
                        autofocus
                      />
                      <div class="invalid-feedback">
                        Please enter your email.
                      </div>
                    </div>
                    <div class="col-12">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        class="form-control rounded-pill shadow py-2"
                        v-model="form.password"
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>
                    <!-- <div class="col-12">
                      <div class="float-end">
                        <p style="color: #5c5c5c">
                          Forgot Password?
                          <span
                            ><a href="/forgot-password" class="text-primary"
                              >Click Here</a
                            ></span
                          >
                        </p>
                      </div>
                    </div> -->
                    <div class="col-12">
                      <button
                        :class="` ${
                          loading && 'disabled'
                        } btn bg-primary rounded-pill w-100 py-3`"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div class="col-12">
                    <img
                      id="bubles"
                      src="@/assets/images/vectors/bubles.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
      loading: false,
    };
  },
  methods: {
    userLogin() {
      this.loading = true;
      this.$store
        .dispatch("login", this.form)
        .then(() => {
          this.loading = false;
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.loading = false;
          this.error = error.message;
        });
    },
  },
};
</script>

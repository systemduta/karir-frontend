<script setup>
// import Header from "@/components/Dashboard/HeaderComponent.vue";
// import Sidebar from "@/components/Dashboard/SidebarComponent.vue";
</script>

<style scoped>
#ds-cover {
  background-image: url("@/assets/images/vectors/cover-square.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
  <div class="bg-gray p-5">
    <div class="container">
      <p class="fs-2 mb-3">Edit Job</p>
      <div class="card" style="border-radius: 20px">
        <div id="ds-cover">
          <div class="p-4">
            <p class="text-white fw-bold fs-3">Software Engineer</p>
            <p class="text-primary fs-5">Fulltime</p>
          </div>
        </div>
        <div class="p-4 col-8">
          <form>
            <div class="mb-3">
              <label class="form-label">Posisi</label>
              <input
                type="text"
                name="position"
                class="form-control rounded-pill py-2 bg-grey input-border"
                value="Software Engineer"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Type Job</label>
              <select
                name="type"
                class="form-select rounded-pill py-2 bg-grey input-border"
              >
                <option value="fulltime">Fulltime</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Job Description</label>
              <textarea
                name="jobdesc"
                class="form-control bg-grey input-border"
                style="border-radius: 20px"
                rows="7"
              >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse veritatis accusantium, autem culpa corrupti cupiditate libero modi deleniti provident eum!
              </textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Kualifikasi</label>
              <textarea
                name="qualification"
                class="form-control bg-grey input-border"
                style="border-radius: 20px"
                rows="7"
              >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit provident quisquam ipsum quaerat quam quod necessitatibus! Aliquam doloribus exercitationem odio.
              </textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Status</label>
              <select
                name="status"
                class="form-select rounded-pill py-2 bg-grey input-border"
              >
                <option value="aktif">Aktif</option>
                <option value="tidak aktif">Tidak Aktif</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Periode Pendaftaran</label>
              <input
                type="text"
                name="registration-period"
                class="form-control rounded-pill py-2 bg-grey input-border"
                value="20 Mei 2022 - 30 Mei 2022"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Penempatan</label>
              <input
                type="text"
                name="placement"
                class="form-control rounded-pill py-2 bg-grey input-border"
                value="Offline"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Thumbnail</label>
              <input
                type="file"
                name="image"
                class="form-control rounded-pill py-2 bg-grey input-border"
                accept="image/*"
              />
            </div>
            <button class="text-white bg-dark rounded-pill py-2 px-5">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

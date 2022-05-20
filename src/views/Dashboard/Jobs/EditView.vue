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
          <div style="height: 140px"></div>
        </div>
        <form class="p-4">
          <div class="row">
            <div class="col-6">
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
                <label class="form-label">Job Description</label>
                <textarea
                  name="jobdesc"
                  class="form-control bg-grey input-border"
                  style="border-radius: 20px"
                  rows="7"
                >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod illo aliquid consectetur cupiditate a similique at assumenda nulla beatae perspiciatis.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, consectetur maiores nesciunt blanditiis optio fugit voluptas vel autem mollitia amet.
                </textarea>
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
                  value="Online"
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
            </div>
            <div class="col-6">
              <div class="mb-3">
                <label class="form-label">Tipe</label>
                <select
                  name="type"
                  class="form-select rounded-pill py-2 bg-grey input-border"
                >
                  <option value="internship">Internship</option>
                  <option value="fulltime">Fulltime</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Status</label>
                <select
                  name="status"
                  class="form-select rounded-pill py-2 bg-grey input-border"
                >
                  <option value="Active">Active</option>
                  <option value="inactive">Inctive</option>
                </select>
              </div>
            </div>
          </div>
          <div class="float-end">
            <button class="text-white bg-dark rounded-pill py-2 px-5">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

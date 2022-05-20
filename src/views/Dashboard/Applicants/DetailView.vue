<script setup>
import Header from "@/components/Dashboard/HeaderComponent.vue";
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
      <Header title="Applicant Data" />
      <div class="card" style="border-radius: 20px">
        <div id="ds-cover">
          <div class="p-4">
            <p class="text-white fw-bold fs-3">Micko Widi Jatmiko</p>
            <p class="text-primary fs-5">Software Engineer</p>
          </div>
        </div>
        <div class="p-4">
          <div class="row g-4">
            <div class="col-12 col-md-6">
              <div class="p-3">
                <div class="mb-3">
                  <p class="form-label">Nama Lengkap</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">Nama Lengkap</p>
                  </div>
                </div>
                <div class="mb-3">
                  <p class="form-label">Email</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">Email</p>
                  </div>
                </div>
                <div class="mb-3">
                  <p class="form-label">Jenis Kelamin</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">Jenkel</p>
                  </div>
                </div>
                <div class="mb-3">
                  <p class="form-label">Tanggal Lahir</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">TTL</p>
                  </div>
                </div>
                <div class="mb-3">
                  <p class="form-label">Tempat Lahir</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">Tempat Lahir</p>
                  </div>
                </div>
                <div class="mb-3">
                  <p class="form-label">Usia</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">Usia</p>
                  </div>
                </div>
                <div class="mb-3">
                  <p class="form-label">Alamat</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">Alamat</p>
                  </div>
                </div>
                <div class="mb-3">
                  <p class="form-label">Kota</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">Kota</p>
                  </div>
                </div>
                <div class="mb-3">
                  <p class="form-label">Telepon</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">Telepon</p>
                  </div>
                </div>
                <div class="mb-3">
                  <p class="form-label">Media Sosial</p>
                  <div class="p-2 rounded-pill bg-grey input-border">
                    <p class="my-auto">Media Sosial</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="d-flex flex-column gap-3">
                <div class="p-3">
                  <div class="mb-3">
                    <p class="form-label">Pendidikan</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">S1</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Jurusan</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">Jurusan</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Universitas</p>
                    <div class="p-2 rounded-pill bg-grey input-border">
                      <p class="my-auto">Kampus</p>
                    </div>
                  </div>
                </div>
                <div class="p-3">
                  <p class="fs-4">Applicant FIle</p>
                  <div class="mb-3">
                    <p class="form-label">CV</p>
                    <a
                      class="p-1 px-3 text-decoration-none text-black rounded-pill input-border"
                      style="background-color: #c4c4c4"
                      href="#"
                    >
                      Download
                    </a>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Portofolio</p>
                    <a
                      class="p-1 px-3 text-decoration-none text-black rounded-pill input-border"
                      style="background-color: #c4c4c4"
                      href="#"
                    >
                      Download
                    </a>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Sertifikat</p>
                    <a
                      class="p-1 px-3 text-decoration-none text-black rounded-pill input-border"
                      style="background-color: #c4c4c4"
                      href="#"
                    >
                      Download
                    </a>
                  </div>
                  <div class="mb-3">
                    <p class="form-label">Foto</p>
                    <a
                      class="p-1 px-3 text-decoration-none text-black rounded-pill input-border"
                      style="background-color: #c4c4c4"
                      href="#"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <div class="p-3">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <select
                        name="status"
                        class="form-select rounded-pill py-2 bg-grey input-border"
                      >
                        <option value="process">Process</option>
                        <option value="decline">Decline</option>
                        <option value="approve">Approve</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
</script>

<style scoped>
@media screen and (max-width: 600px) {
  #vector1,
  #vector2,
  #vector3 {
    display: none;
  }

  .hero-buttons {
    flex-direction: column;
  }
}

#hero {
  background-image: url("@/assets/images/vectors/bg-hero.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

#vector1 {
  height: 406px;
  width: 718px;
  position: absolute;
  left: 2%;
}

#vector2 {
  height: 150px;
  width: 150px;
  position: absolute;
  top: 25%;
  left: 48%;
}

#vector3 {
  height: 432px;
  width: 315px;
  position: absolute;
  top: 5%;
  right: 15%;
}
</style>

<template>
  <main>
    <NavigationBar />
    <main class="mb-5">
      <section class="" style="position: relative">
        <div
          class="row w-full p-5"
          style="margin-right: 0 !important"
          id="hero"
        >
          <img
            src="@/assets/images/vectors/vector1.svg"
            class="z-index-0"
            id="vector1"
          />
          <div class="col-12 col-md-6 z-index-1 p-5">
            <div v-if="loading" class="placeholder-glow">
              <div class="placeholder" style="width: 400px; height: 30px"></div>
              <br />
              <div class="placeholder" style="width: 200px; height: 20px"></div>
            </div>
            <div v-if="error">
              <p class="fs-1 fw-bold lh-lg text-white">
                Upss.. terjadi kesalahan, coba lagi nanti
              </p>
            </div>
            <p class="fs-1 fw-bold lh-lg text-white">
              {{ vacancy.name }}
            </p>
            <p class="fs-5 lh-lg text-white">
              {{ vacancy.type }}
            </p>
            <div v-if="!error" class="d-flex gap-3 hero-buttons">
              <a
                href="#form"
                class="bg-white text-center text-decoration-none border-0 text-primary rounded-pill px-5 py-2"
              >
                Daftar
              </a>
              <button
                class="bg-primary text-white rounded-pill px-5 py-2"
                style="border: 0.5px solid white"
              >
                Bagikan
              </button>
            </div>
          </div>
          <img
            src="@/assets/images/vectors/dotted-kite.svg"
            class="z-index-0"
            id="vector2"
          />
          <img
            src="@/assets/images/vectors/vector2.svg"
            class="z-index-0"
            id="vector3"
          />
          <div class="w-full" style="height: 200px"></div>
        </div>
      </section>
      <div class="container" v-if="successApply">
        <div class="d-flex flex-column justify-content-center">
          <img
            src="@/assets/images/ilustrations/apply-success.svg"
            class="img-fluid"
            style="height: 50rem"
          />
          <RouterLink
            to="/"
            class="bg-primary bg-gradient text-decoration-none text-center shadow rounded-pill p-4"
            >Back to home</RouterLink
          >
        </div>
      </div>
      <div v-if="!successApply" class="m-5">
        <div class="container" v-if="error">
          <img
            src="@/assets/images/ilustrations/no-data.svg"
            class="img-fluid"
          />
        </div>
        <form
          id="applyForm"
          v-if="!error"
          @submit.prevent="postApply"
          enctype="multipart/form-data"
        >
          <div class="row g-4">
            <div class="col-12 col-md-6">
              <div class="d-flex flex-column gap-3">
                <div class="card shadow rounded-30px p-3">
                  <p id="form" class="text-primary fs-4">Data Diri</p>
                  <hr />
                  <div class="mb-3">
                    <label class="form-label">Nama Lengkap</label>
                    <input
                      required
                      type="text"
                      name="name"
                      v-model="form.name"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Tempat, Tanggal Lahir</label>
                    <div class="row g-2">
                      <div class="col-4">
                        <input
                          required
                          type="text"
                          name="place_birth"
                          v-model="form.place_birth"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="col-8">
                        <input
                          required
                          type="date"
                          name="date_birth"
                          v-model="form.date_birth"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Jenis Kelamin</label>
                    <select
                      required
                      name="gender"
                      v-model="form.gender"
                      class="form-select rounded-pill py-2 bg-grey input-border"
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Alamat Domisili</label>
                    <input
                      required
                      type="text"
                      name="domicile_address"
                      v-model="form.domicile_address"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Alamat KTP</label>
                    <input
                      required
                      type="text"
                      name="address"
                      v-model="form.address"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      v-model="form.email"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Agama</label>
                    <select
                      required
                      name="religion"
                      v-model="form.religion"
                      class="form-select rounded-pill py-2 bg-grey input-border"
                    >
                      <option value="Islam">Islam</option>
                      <option value="Katolik">Katolik</option>
                      <option value="Protestan">Protestan</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Budha">Buddha</option>
                      <option value="Konghucu">Konghucu</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">No KTP</label>
                    <input
                      required
                      type="text"
                      name="nik"
                      v-model="form.nik"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Golongan Darah</label>
                    <select
                      required
                      name="blood_type"
                      v-model="form.blood_type"
                      class="form-select rounded-pill py-2 bg-grey input-border"
                    >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="O">O</option>
                      <option value="AB">AB</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Telepon</label>
                    <input
                      required
                      type="text"
                      name="phone"
                      v-model="form.phone"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Status</label>
                    <select
                      required
                      name="marital_status"
                      v-model="form.marital_status"
                      class="form-select rounded-pill py-2 bg-grey input-border"
                    >
                      <option value="Menikah">Menikah</option>
                      <option value="Lajang">Lajang</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Hobi / Minat</label>
                    <input
                      required
                      type="text"
                      name="interest"
                      v-model="form.interest"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Ceritakan tentang diri anda (keseharian anda, apa yang
                      menjadi motivasi, dll)
                    </label>
                    <textarea
                      required
                      name="life_story"
                      rows="4"
                      v-model="form.life_story"
                      class="form-control rounded py-2 bg-grey input-border"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Anda ingin seperti apa dalam 5 tahun kedepan
                    </label>
                    <textarea
                      required
                      name="hope"
                      rows="4"
                      v-model="form.hope"
                      class="form-control rounded py-2 bg-grey input-border"
                    ></textarea>
                  </div>
                </div>
                <div class="card shadow rounded-30px p-3">
                  <p class="text-primary fs-4">Informasi Keluarga</p>
                  <hr />
                  <ul class="nav nav-tabs mb-2" id="familyTab" role="tablist">
                    <li
                      v-for="family in this.form.family"
                      :key="family.id"
                      class="nav-item"
                      role="presentation"
                    >
                      <button
                        class="nav-link"
                        :id="`${family.id}-tab`"
                        data-bs-toggle="tab"
                        :data-bs-target="`#family-${family.id}`"
                        type="button"
                        role="tab"
                        :aria-controls="`${family.id}`"
                        aria-selected="false"
                      >
                        {{ family.relationship }}
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="new-family-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#new-family"
                        type="button"
                        role="tab"
                        aria-controls="new-family"
                        aria-selected="true"
                      >
                        Baru
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="familyTabContent">
                    <div
                      v-for="(family, index) in form.family"
                      class="tab-pane fade"
                      :id="`family-${family.id}`"
                      :key="family.id"
                      role="tabpanel"
                      :aria-labelledby="`${family.id}-tab`"
                    >
                      <div class="mb-3">
                        <p class="form-label">Hubungan</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ family.relationship }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Nama</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ family.name }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Jenis Kelamin</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ family.gender }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Tempat, Tanggal Lahir</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ family.ttl }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Pendidikan</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ family.education }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Pekerjaan</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ family.job }}</p>
                        </div>
                      </div>
                      <div class="float-end">
                        <div
                          class="btn bg-danger text-white rounded-pill d-flex align-items-center"
                          @click="deleteFamily(index)"
                        >
                          <i class="bi bi-trash"></i> Hapus
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade show active"
                      id="new-family"
                      role="tabpanel"
                      aria-labelledby="new-family-tab"
                    >
                      <div class="mb-3">
                        <label class="form-label">Hubungan</label>
                        <input
                          type="text"
                          placeholder="Ayah / Ibu / Saudara"
                          v-model="form.family_relationship"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Nama</label>
                        <input
                          type="text"
                          v-model="form.family_name"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Jenis Kelamin</label>
                        <select
                          v-model="form.family_gender"
                          class="form-select rounded-pill py-2 bg-grey input-border"
                        >
                          <option value="Laki-laki">Laki-laki</option>
                          <option value="Perempuan">Perempuan</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Tempat, Tanggal Lahir</label>
                        <input
                          type="text"
                          v-model="form.family_ttl"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Pendidikan</label>
                        <input
                          type="text"
                          v-model="form.family_education"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Pekerjaan</label>
                        <input
                          type="text"
                          v-model="form.family_job"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="float-end">
                        <div
                          class="btn bg-primary rounded-pill"
                          @click="addFamily"
                        >
                          <i class="bi bi-plus"></i> Tambah
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card shadow rounded-30px p-3">
                  <p class="text-primary fs-4">Riwayat Pendidikan</p>
                  <hr />
                  <div class="mb-3">
                    <ul class="nav nav-tabs mb-2" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="sd-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#sd"
                          type="button"
                          role="tab"
                          aria-controls="sd"
                          aria-selected="true"
                        >
                          SD
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="smp-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#smp"
                          type="button"
                          role="tab"
                          aria-controls="smp"
                          aria-selected="false"
                        >
                          SMP
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="sma-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#sma"
                          type="button"
                          role="tab"
                          aria-controls="sma"
                          aria-selected="false"
                        >
                          SMA
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="diploma-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#diploma"
                          type="button"
                          role="tab"
                          aria-controls="diploma"
                          aria-selected="false"
                        >
                          Diploma
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="sarjana-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#sarjana"
                          type="button"
                          role="tab"
                          aria-controls="sarjana"
                          aria-selected="false"
                        >
                          Sarjana
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="master-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#master"
                          type="button"
                          role="tab"
                          aria-controls="master"
                          aria-selected="false"
                        >
                          Master
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="sd"
                        role="tabpanel"
                        aria-labelledby="sd-tab"
                      >
                        <div class="mb-3">
                          <label class="form-label">Nama Sekolah</label>
                          <input
                            type="text"
                            placeholder="SD"
                            v-model="form.education.sd.name"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Jurusan</label>
                          <input
                            type="text"
                            v-model="form.education.sd.major"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Periode</label>
                          <input
                            type="text"
                            v-model="form.education.sd.period"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nilai / IPK</label>
                          <input
                            type="text"
                            v-model="form.education.sd.score"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="smp"
                        role="tabpanel"
                        aria-labelledby="smp-tab"
                      >
                        <div class="mb-3">
                          <label class="form-label">Nama Sekolah</label>
                          <input
                            type="text"
                            placeholder="SMP"
                            v-model="form.education.smp.name"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Jurusan</label>
                          <input
                            type="text"
                            v-model="form.education.smp.major"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Periode</label>
                          <input
                            type="text"
                            v-model="form.education.smp.period"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nilai / IPK</label>
                          <input
                            type="text"
                            v-model="form.education.smp.score"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="sma"
                        role="tabpanel"
                        aria-labelledby="sma-tab"
                      >
                        <div class="mb-3">
                          <label class="form-label">Nama Sekolah</label>
                          <input
                            type="text"
                            placeholder="SMA"
                            v-model="form.education.sma.name"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Jurusan</label>
                          <input
                            type="text"
                            v-model="form.education.sma.major"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Periode</label>
                          <input
                            type="text"
                            v-model="form.education.sma.period"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nilai / IPK</label>
                          <input
                            type="text"
                            v-model="form.education.sma.score"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="diploma"
                        role="tabpanel"
                        aria-labelledby="diploma-tab"
                      >
                        <div class="mb-3">
                          <label class="form-label">Nama Sekolah</label>
                          <input
                            type="text"
                            placeholder="Diploma"
                            v-model="form.education.diploma.name"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Jurusan</label>
                          <input
                            type="text"
                            v-model="form.education.diploma.major"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Periode</label>
                          <input
                            type="text"
                            v-model="form.education.diploma.period"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nilai / IPK</label>
                          <input
                            type="text"
                            v-model="form.education.diploma.score"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="sarjana"
                        role="tabpanel"
                        aria-labelledby="sarjana-tab"
                      >
                        <div class="mb-3">
                          <label class="form-label">Nama Sekolah</label>
                          <input
                            type="text"
                            placeholder="Sarjana"
                            v-model="form.education.sarjana.name"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Jurusan</label>
                          <input
                            type="text"
                            v-model="form.education.sarjana.major"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Periode</label>
                          <input
                            type="text"
                            v-model="form.education.sarjana.period"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nilai / IPK</label>
                          <input
                            type="text"
                            v-model="form.education.sarjana.score"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="master"
                        role="tabpanel"
                        aria-labelledby="master-tab"
                      >
                        <div class="mb-3">
                          <label class="form-label">Nama Sekolah</label>
                          <input
                            type="text"
                            placeholder="Master"
                            v-model="form.education.master.name"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Jurusan</label>
                          <input
                            type="text"
                            v-model="form.education.master.major"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Periode</label>
                          <input
                            type="text"
                            v-model="form.education.master.period"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nilai / IPK</label>
                          <input
                            type="text"
                            v-model="form.education.master.score"
                            class="form-control rounded-pill py-2 bg-grey input-border"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card shadow rounded-30px p-3">
                  <p class="text-primary fs-4">Pengalaman Organisasi</p>
                  <hr />
                  <ul
                    class="nav nav-tabs mb-2"
                    id="organizationsTab"
                    role="tablist"
                  >
                    <li
                      v-for="organization in this.form.organizations"
                      :key="organization.id"
                      class="nav-item"
                      role="presentation"
                    >
                      <button
                        class="nav-link"
                        :id="`${organization.id}-tab`"
                        data-bs-toggle="tab"
                        :data-bs-target="`#organization-${organization.id}`"
                        type="button"
                        role="tab"
                        :aria-controls="`${organization.id}`"
                        aria-selected="false"
                      >
                        {{ organization.name }}
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="new-organization-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#new-organization"
                        type="button"
                        role="tab"
                        aria-controls="new-organization"
                        aria-selected="true"
                      >
                        Baru
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="familyTabContent">
                    <div
                      v-for="(organization, index) in form.organizations"
                      class="tab-pane fade"
                      :id="`organization-${organization.id}`"
                      :key="organization.id"
                      role="tabpanel"
                      :aria-labelledby="`${organization.id}-tab`"
                    >
                      <div class="mb-3">
                        <p class="form-label">Organisasi</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ organization.name }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Jabatan</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ organization.position }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Periode</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ organization.period }}</p>
                        </div>
                      </div>
                      <div class="float-end">
                        <div
                          class="btn bg-danger text-white rounded-pill d-flex align-items-center"
                          @click="deleteOrganization(index)"
                        >
                          <i class="bi bi-trash"></i> Hapus
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade show active"
                      id="new-organization"
                      role="tabpanel"
                      aria-labelledby="new-organization-tab"
                    >
                      <div class="mb-3">
                        <label class="form-label">Organisasi</label>
                        <input
                          type="text"
                          v-model="form.organization_name"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Jabatan</label>
                        <input
                          type="text"
                          v-model="form.organization_position"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Periode</label>
                        <input
                          type="text"
                          v-model="form.organization_period"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="float-end">
                        <div
                          class="btn bg-primary rounded-pill"
                          @click="addOrganization"
                        >
                          <i class="bi bi-plus"></i> Tambah
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="d-flex flex-column gap-3">
                <div class="card shadow rounded-30px p-3">
                  <p class="text-primary fs-4">Bahasa Asing</p>
                  <hr />
                  <ul
                    class="nav nav-tabs mb-2"
                    id="languagesTab"
                    role="tablist"
                  >
                    <li
                      v-for="language in this.form.languages"
                      :key="language.id"
                      class="nav-item"
                      role="presentation"
                    >
                      <button
                        class="nav-link"
                        :id="`${language.id}-tab`"
                        data-bs-toggle="tab"
                        :data-bs-target="`#language-${language.id}`"
                        type="button"
                        role="tab"
                        :aria-controls="`${language.id}`"
                        aria-selected="false"
                      >
                        {{ language.name }}
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="new-language-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#new-language"
                        type="button"
                        role="tab"
                        aria-controls="new-language"
                        aria-selected="true"
                      >
                        Baru
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="languageTabContent">
                    <div
                      v-for="(language, index) in form.languages"
                      class="tab-pane fade"
                      :id="`language-${language.id}`"
                      :key="language.id"
                      role="tabpanel"
                      :aria-labelledby="`${language.id}-tab`"
                    >
                      <div class="mb-3">
                        <p class="form-label">Bahasa</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ language.name }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Mendengar</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ language.listening }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Membaca</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ language.reading }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Berbicara</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ language.speaking }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Menulis</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ language.writing }}</p>
                        </div>
                      </div>
                      <div class="float-end">
                        <div
                          class="btn bg-danger text-white rounded-pill d-flex align-items-center"
                          @click="deleteLanguage(index)"
                        >
                          <i class="bi bi-trash"></i> Hapus
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade show active"
                      id="new-language"
                      role="tabpanel"
                      aria-labelledby="new-language-tab"
                    >
                      <div class="mb-3">
                        <label class="form-label">Bahasa</label>
                        <input
                          type="text"
                          v-model="form.language_name"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Mendengar</label>
                        <input
                          type="text"
                          v-model="form.language_listening"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Membaca</label>
                        <input
                          type="text"
                          v-model="form.language_reading"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Berbicara</label>
                        <input
                          type="text"
                          v-model="form.language_speaking"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Menulis</label>
                        <input
                          type="text"
                          v-model="form.language_writing"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="float-end">
                        <div
                          class="btn bg-primary rounded-pill"
                          @click="addLanguage"
                        >
                          <i class="bi bi-plus"></i> Tambah
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card shadow rounded-30px p-3">
                  <p class="text-primary fs-4">Pengalaman Kerja</p>
                  <hr />
                  <ul
                    class="nav nav-tabs mb-2"
                    id="experiencesTab"
                    role="tablist"
                  >
                    <li
                      v-for="experience in this.form.experiences"
                      :key="experience.id"
                      class="nav-item"
                      role="presentation"
                    >
                      <button
                        class="nav-link"
                        :id="`${experience.id}-tab`"
                        data-bs-toggle="tab"
                        :data-bs-target="`#experience-${experience.id}`"
                        type="button"
                        role="tab"
                        :aria-controls="`${experience.id}`"
                        aria-selected="false"
                      >
                        {{ experience.company }}
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="new-experience-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#new-experience"
                        type="button"
                        role="tab"
                        aria-controls="new-experience"
                        aria-selected="true"
                      >
                        Baru
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="experienceTabContent">
                    <div
                      v-for="(experience, index) in form.experiences"
                      class="tab-pane fade"
                      :id="`experience-${experience.id}`"
                      :key="experience.id"
                      role="tabpanel"
                      :aria-labelledby="`${experience.id}-tab`"
                    >
                      <div class="mb-3">
                        <p class="form-label">Perusahaan</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ experience.company }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Periode</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ experience.period }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Posisi</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ experience.position }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Gaji</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ experience.salary }}</p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <p class="form-label">Alasan Resign</p>
                        <div class="p-2 rounded-pill bg-grey input-border">
                          <p class="my-auto">{{ experience.resign }}</p>
                        </div>
                      </div>
                      <div class="float-end">
                        <div
                          class="btn bg-danger text-white rounded-pill d-flex align-items-center"
                          @click="deleteExperience(index)"
                        >
                          <i class="bi bi-trash"></i> Hapus
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade show active"
                      id="new-experience"
                      role="tabpanel"
                      aria-labelledby="new-experience-tab"
                    >
                      <div class="mb-3">
                        <label class="form-label">Perusahaan</label>
                        <input
                          type="text"
                          v-model="form.experience_company"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Periode</label>
                        <input
                          type="text"
                          v-model="form.experience_period"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Posisi</label>
                        <input
                          type="text"
                          v-model="form.experience_position"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Gaji</label>
                        <input
                          type="text"
                          v-model="form.experience_salary"
                          class="form-control rounded-pill py-2 bg-grey input-border"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Alasan Resign</label>
                        <textarea
                          rows="4"
                          v-model="form.experience_resign"
                          class="form-control rounded py-2 bg-grey input-border"
                        ></textarea>
                      </div>
                      <div class="float-end">
                        <div
                          class="btn bg-primary rounded-pill"
                          @click="addExperience"
                        >
                          <i class="bi bi-plus"></i> Tambah
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card shadow rounded-30px p-3">
                  <p id="form" class="text-primary fs-4">Lain - lain</p>
                  <hr />
                  <div class="mb-3">
                    <label class="form-label"
                      >Apakah Anda pernah melamar di perusahaan ini sebelumnya.
                      Kapan & sebagai apa?
                    </label>
                    <input
                      placeholder="Tidak pernah / Web Developer"
                      type="text"
                      name="others_1"
                      v-model="form.others_1"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Apakah saat ini Anda melamar di perusahaan lain? Sebagai
                      posisi apa?
                    </label>
                    <input
                      placeholder="Tidak / Melamar sebagai HCM di PT lorem ipsum"
                      type="text"
                      name="others_2"
                      v-model="form.others_2"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Apakah Anda berhijab? (Khusus Wanita)
                    </label>
                    <input
                      placeholder="Tidak / Ya (Kosongi jika Laki-laki)"
                      type="text"
                      name="others_3"
                      v-model="form.others_3"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Apa Anda memiliki sosmed? (FB, IG, / apa)
                    </label>
                    <input
                      placeholder="Tidak / sebutkan username atau id beserta platformnya"
                      type="text"
                      name="others_4"
                      v-model="form.others_4"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Apakah Anda pernah mengalami kecelakaan? Bila ya kapan
                      dan apa akibat yang anda rasakan sekarang?
                    </label>
                    <textarea
                      name="others_5"
                      rows="4"
                      v-model="form.others_5"
                      class="form-control rounded py-2 bg-grey input-border"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Apakah Anda pernah berurusan dengan polisi karena
                      tindakan tertentu?
                    </label>
                    <input
                      placeholder="Kosongi jika tidak"
                      type="text"
                      name="others_6"
                      v-model="form.others_6"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Bila diterima, bersediakah Anda bertugas ke luar kota?
                    </label>
                    <input
                      placeholder="Kosongi jika tidak"
                      type="text"
                      name="others_7"
                      v-model="form.others_7"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Pernahkan Anda memenangkan sebuah kejuaraan? Jika Pernah
                      Sebutkan!
                    </label>
                    <textarea
                      name="others_8"
                      rows="4"
                      v-model="form.others_8"
                      class="form-control rounded py-2 bg-grey input-border"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Kenapa Anda ingin berkerja di Maesa Group Holding
                      Company?
                    </label>
                    <textarea
                      required
                      name="others_9"
                      rows="4"
                      v-model="form.others_9"
                      class="form-control rounded py-2 bg-grey input-border"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Kenapa menginginkan posisi yang sedang Anda lamar?
                    </label>
                    <textarea
                      required
                      name="others_10"
                      rows="4"
                      v-model="form.others_10"
                      class="form-control rounded py-2 bg-grey input-border"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Kelebihan apa yang anda miliki untuk mengisi posisi
                      tersebut?
                    </label>
                    <textarea
                      required
                      name="others_11"
                      rows="4"
                      v-model="form.others_11"
                      class="form-control rounded py-2 bg-grey input-border"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label"
                      >Besar gaji yang anda harapkan?
                    </label>
                    <input
                      required
                      placeholder="Rp 0 /Bulan"
                      type="text"
                      name="others_12"
                      v-model="form.others_12"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                </div>
                <div class="card shadow rounded-30px p-3">
                  <p class="text-primary fs-4">Upload File</p>
                  <hr />
                  <div class="mb-3">
                    <label class="form-label">CV</label>
                    <input
                      required
                      type="file"
                      @change="handleFileChange($event)"
                      name="cv"
                      accept="application/pdf"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Portofolio</label>
                    <input
                      required
                      type="file"
                      @change="handleFileChange($event)"
                      name="fortofolio"
                      accept="application/pdf"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Sertifikat</label>
                    <input
                      type="file"
                      @change="handleFileChange($event)"
                      name="certificate"
                      accept="application/pdf"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Foto</label>
                    <input
                      required
                      type="file"
                      @change="handleFileChange($event)"
                      name="foto"
                      accept="image/*"
                      class="form-control rounded-pill py-2 bg-grey input-border"
                    />
                  </div>
                </div>
              </div>
              <div class="float-end mt-5">
                <div v-if="loadingApply" class="d-flex justify-content-between">
                  <LoadingComponent />
                </div>
                <div
                  v-if="errorApply"
                  class="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <div v-for="(error, index) in errorApply" :key="index">
                    <li v-for="(value, _) in error" :key="_">
                      {{ value }}
                    </li>
                  </div>

                  <button
                    type="button"
                    @click="errorApply = false"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <button
                  v-if="!loadingApply"
                  :class="`${
                    loadingApply && 'disabled'
                  } text-white bg-dark rounded-pill py-2 px-5`"
                  type="submit"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
    <FooterComponent />
  </main>
</template>

<script>
import { ref } from "vue";
import axios from "../plugins/axios";

export default {
  data() {
    return {
      vacancy: ref({}),
      loading: ref(true),
      error: ref(false),
      form: ref({
        education: {
          sd: {
            name: "",
            period: "",
            major: "",
            score: "",
          },
          smp: {
            name: "",
            period: "",
            major: "",
            score: "",
          },
          sma: {
            name: "",
            period: "",
            major: "",
            score: "",
          },
          diploma: {
            name: "",
            period: "",
            major: "",
            score: "",
          },
          sarjana: {
            name: "",
            period: "",
            major: "",
            score: "",
          },
          master: {
            name: "",
            period: "",
            major: "",
            score: "",
          },
        },
        family: [],
        organizations: [],
        languages: [],
        experiences: [],
      }),
      loadingApply: ref(false),
      successApply: ref(false),
      errorApply: ref(false),
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (to) => {
        this.fetchDetailVacancy(to.id);
      },

      { immediate: true }
    );
  },
  methods: {
    async fetchDetailVacancy(id) {
      try {
        const { data } = await axios.get(`careers-detail/${id}`);
        this.error = false;
        this.loading = false;
        this.vacancy = data.data;
      } catch (error) {
        this.loading = false;
        this.error = error;
      }
    },
    async postApply() {
      const formData = new FormData(document.getElementById("applyForm"));
      formData.append("family", this.form.family);
      formData.append("education", this.form.education);
      formData.append("organizations", this.form.organizations);
      formData.append("languages", this.form.languages);
      formData.append("experiences", this.form.experiences);
      formData.append("cv", this.form.cv);
      formData.append("foto", this.form.foto);
      formData.append("fortofolio", this.form.fortofolio);
      formData.append("certificate", this.form.certificate);

      try {
        this.loadingApply = true;
        await axios.post(`careers-daftar/${this.$route.params.id}`, formData, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        this.loadingApply = false;
        this.$swal({
          position: "top-end",
          icon: "success",
          title: "Lamaran berhasil dikirim",
          showConfirmButton: false,
          timer: 3000,
        });
        this.$router.push("/");
      } catch (error) {
        this.loadingApply = false;
        if (error.response.data[0]) this.errorApply = error.response.data[0];
        this.$swal({
          icon: "error",
          title: "Lamaran gagal dikirim",
          text: error,
          showConfirmButton: true,
        });
      }
    },
    handleFileChange(event) {
      this.form = { ...this.form, [event.target.name]: event.target.files[0] };
    },
    addFamily() {
      if (
        !this.form.family_relationship ||
        !this.form.family_name ||
        !this.form.family_gender ||
        !this.form.family_ttl ||
        !this.form.family_education ||
        !this.form.family_job
      ) {
        return this.$swal({
          icon: "error",
          title: "Semua isian formulir keluarga wajib diisi",
          showConfirmButton: true,
        });
      }
      this.form.family.push({
        id: this.makeStringId(128),
        relationship: this.form.family_relationship,
        name: this.form.family_name,
        gender: this.form.family_gender,
        ttl: this.form.family_ttl,
        education: this.form.family_education,
        job: this.form.family_job,
      });

      this.form.family_relationship = "";
      this.form.family_name = "";
      this.form.family_gender = "";
      this.form.family_ttl = "";
      this.form.family_education = "";
      this.form.family_job = "";
    },
    deleteFamily(index) {
      return this.form.family.splice(index, 1);
    },
    addOrganization() {
      if (
        !this.form.organization_name ||
        !this.form.organization_position ||
        !this.form.organization_period
      ) {
        return this.$swal({
          icon: "error",
          title: "Semua isian formulir organisasi wajib diisi",
          showConfirmButton: true,
        });
      }
      this.form.organizations.push({
        id: this.makeStringId(128),
        name: this.form.organization_name,
        position: this.form.organization_position,
        period: this.form.organization_period,
      });

      this.form.organization_name = "";
      this.form.organization_position = "";
      this.form.organization_period = "";
    },
    deleteOrganization(index) {
      return this.form.organizations.splice(index, 1);
    },
    addLanguage() {
      if (
        !this.form.language_name ||
        !this.form.language_listening ||
        !this.form.language_reading ||
        !this.form.language_speaking ||
        !this.form.language_writing
      ) {
        return this.$swal({
          icon: "error",
          title: "Semua isian bahasa wajib diisi",
          showConfirmButton: true,
        });
      }
      this.form.languages.push({
        id: this.makeStringId(128),
        name: this.form.language_name,
        listening: this.form.language_listening,
        reading: this.form.language_reading,
        speaking: this.form.language_speaking,
        writing: this.form.language_writing,
      });

      this.form.language_name = "";
      this.form.language_listening = "";
      this.form.language_reading = "";
      this.form.language_speaking = "";
      this.form.language_writing = "";
    },
    deleteLanguage(index) {
      return this.form.languages.splice(index, 1);
    },
    addExperience() {
      if (
        !this.form.experience_company ||
        !this.form.experience_period ||
        !this.form.experience_position ||
        !this.form.experience_salary ||
        !this.form.experience_resign
      ) {
        return this.$swal({
          icon: "error",
          title: "Semua isian pengalaman kerja wajib diisi",
          showConfirmButton: true,
        });
      }
      this.form.experiences.push({
        id: this.makeStringId(128),
        company: this.form.experience_company,
        period: this.form.experience_period,
        position: this.form.experience_position,
        salary: this.form.experience_salary,
        resign: this.form.experience_resign,
      });

      this.form.experience_company = "";
      this.form.experience_period = "";
      this.form.experience_position = "";
      this.form.experience_salary = "";
      this.form.experience_resign = "";
    },
    deleteExperience(index) {
      return this.form.experiences.splice(index, 1);
    },
    makeStringId(length) {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
};
</script>

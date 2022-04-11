<template>
   <main style="background: #f6f9ff;">
      <div class="container">
         <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                     <div class="d-flex justify-content-center py-4">
                        <div class="logo d-flex align-items-center w-auto">
                           <img src="../assets/logo.png" class="img-fluid" alt="Maesa Group Karir">
                        </div>
                     </div>
                     <div class="card shadow mb-3">
                        <div class="card-body">
                           <div class="pt-4 pb-2">
                              <h5 class="card-title text-center pb-0 fs-4">Daftar akun baru</h5>
                              <p class="text-center small">Masukkan informasi personal anda untuk membuat akun</p>
                           </div>
                           <form class="row g-3">
                             <div class="col-12">
                                 <label class="form-label">Nama</label>
                                 <input type="text" name="name" class="form-control" required>
                                 <div class="invalid-feedback">Please enter your name.</div>
                              </div>
                              <div class="col-12">
                                 <label class="form-label">Email</label>
                                 <input type="email" name="email" class="form-control" required>
                                 <div class="invalid-feedback">Please enter your email.</div>
                              </div>
                              <div class="col-12">
                                 <label class="form-label">Password</label>
                                 <input type="password" name="password" class="form-control" required>
                                 <div class="invalid-feedback">Please enter your password!</div>
                              </div>
                              <div class="col-12">
                                 <label class="form-label">Konfirmasi Password</label>
                                 <input type="password" name="password_confirmation" class="form-control" required>
                                 <div class="invalid-feedback">Please enter your password!</div>
                              </div>
                              <div class="col-12">
                                 <button class="btn btn-primary w-100" type="submit">Daftar</button>
                              </div>
                              <div class="col-12">
                                 <p class="small mb-0">Sudah punya akun? <a href="/login">Masuk Sekarang!</a></p>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   </main>
</template>
<template>
<div>
  <div class="container-scroller">
    <!-- partial:partials/_horizontal-navbar.html -->
    <div class="horizontal-menu">
      <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="nav-top flex-grow-1">
          <div class="container d-flex flex-row h-100 align-items-center">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a class="navbar-brand brand-logo" href="index.html"><img src="assets/img/logo.png"></a>
              <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/img/logo.png"></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
              <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item nav-profile dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                    Hi, Siswa
                  </a>
                  <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a class="dropdown-item">
                      <i class="mdi mdi-logout text-primary"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                <span class="mdi mdi-menu"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav class="bottom-navbar">
        <div class="container">
          <ul class="nav page-navigation">
            <li class="nav-item">
              <a class="nav-link" href="input_daily_scrum.html">
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                <span class="menu-title">My Daily Scrum</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title float-left"><i class="mdi mdi-format-list-bulleted menu-icon"></i></p>
                  <p class="card-description float-right">
                    <a href="#" class="btn btn-sm btn-success btn-icon-text" data-toggle="modal" data-target="#modalDailyScrum">
                      <i class="mdi mdi-plus btn-icon-prepend"></i>
                      Add Activity
                    </a>
                  </p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Tanggal</th>
                          <th>Yesterday</th>
                          <th>Today</th>
                          <th>Problem</th>
                          <th>Solution</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Senin, 30 Mar 2020</td>
                          <td>Membuat desain layout aplikasi iklan baris</td>
                          <td>Membuat API aplikasi daily scrum</td>
                          <td>Desain layout masih belum rapi</td>
                          <td>Menambah waktu pengerjaan untuk merapikan layout</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-danger">
                              <i class="mdi mdi-delete btn-icon-prepend"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Selasa, 31 Mar 2020</td>
                          <td>Membuat desain layout aplikasi iklan baris</td>
                          <td>Membuat API aplikasi daily scrum</td>
                          <td>Desain layout masih belum rapi</td>
                          <td>Menambah waktu pengerjaan untuk merapikan layout</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-danger">
                              <i class="mdi mdi-delete btn-icon-prepend"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="modalDailyScrum" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content modal-md">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Add Activity</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="id_siswa" class="col-form-label">Your Team</label>
                    <select class="form-control" name="team" id="team">
                      <option value="BEON" checked>BEON</option>
                      <option value="DDS">DDS</option>
                      <option value="DOT">DOT</option>
                      <option value="node1">Node 1</option>
                      <option value="node2">Node 2</option>
                      <option value="react1">React 1</option>
                      <option value="react2">React 2</option>
                      <option value="laravel">Laravel</option>
                      <option value="laravel_vue">Laravel & Vue</option>
                      <option value="android">Android</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="activity_yesterday" class="col-form-label">Yesterday Activity</label>
                    <textarea name="activity_yesterday" id="activity_yesterday" class="form-control" rows="7" cols="10"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="activity_today" class="col-form-label">Today Activity</label>
                    <textarea name="activity_today" id="activity_today" class="form-control" rows="7" cols="10"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="problem_yesterday" class="col-form-label">Yesterday Problem</label>
                    <textarea name="problem_yesterday" id="problem_yesterday" class="form-control" rows="7" cols="10"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="solution" class="col-form-label">Your Solution</label>
                    <textarea name="solution" id="solution" class="form-control" rows="7" cols="10"></textarea>
                  </div>
                  <div class="form-group">
                    <button type="button" class="btn btn-md btn-success">Submit</button>
                    <button type="button" class="btn btn-md btn-light" data-dismiss="modal">Cancel</button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                
              </div>
            </div>
          </div>
        </div>

        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="w-100 clearfix">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2020 Moklet. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Tugas PJJ Moklet & Made With <i class="mdi mdi-heart-outline text-danger"></i></span>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</div>
</template>

  <script src="assets/js/vendor.bundle.base.js"></script>
  <script src= "../public/assets/js/dashboard.js"></script>
  <script src= "../public/assets/js/hoverable-collapse.js"></script>
  <script src= "../public/assets/js/off-canvas.js"></script>
  <script src= "../public/assets/js/settings.js"></script>
  <script src= "../public/assets/js/template.js"></script>
  <script src= "../public/assets/js/vendor.bundle.addons.js"></script>
  <script src= "../public/assets/js/vendor.bundle.base.js"></script>

<script>

export default {
  name: 'Home',
}
</script>

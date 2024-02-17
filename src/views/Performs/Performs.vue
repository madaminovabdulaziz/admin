<template>
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>
  <div class="container-fluid mt-3" v-else>
    <div class="card shadow" style="min-height: 720px">
      <div class="card-header">
        <h1>Employees</h1>
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
          <div class="col-md-4 d-grid">
            <button
              type="button"
              class="btn btn-block btn-success"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Add employees
              <i class="fa fa-user-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-bordered align-middle">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Username</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Orders</th>
                <th scope="col">Balance</th>
                <th scope="col">Last time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in employ" :key="item">
                <th scope="row">{{ idx + 1 }}</th>
                <td>{{ item.username }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.orders }}</td>
                <td>{{ item.balances }}</td>
                <td>{{ item.last_time_was }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Add employees</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="post">
          <div class="modal-body">
            <label for="">Name:</label>
            <input
              type="text"
              class="form-control mb-2"
              placeholder="name..."
              v-model="emp.name"
              required
            />
            <div class="row">
              <div class="col-md-6">
                <label class="">Username:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="username..."
                  v-model="emp.username"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="">Password:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="password..."
                  v-model="emp.password"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="">Tel:</label>
                <div class="input-group mb-3">
                  <!-- <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="emp.phone"
                  >
                    <option value="+44" selected>+44</option>
                    <option value="+998">+998</option>
                  </select> -->
                  <!-- <span class="input-group-text" id="basic-addon1">+44</span> -->
                  <input
                    type="number"
                    class="form-control"
                    placeholder="tel..."
                    aria-label="tel"
                    aria-describedby="basic-addon1"
                    v-model="emp.phone"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <label for="">Role:</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="emp.role"
                  required
                >
                  <option selected>Open this select menu</option>
                  <option value="admin">Admin</option>
                  <option value="worker">Worker</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-outline-success">Apply</button>
            <input type="hidden" id="empost" data-bs-dismiss="modal" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import Swal from "sweetalert2";
import { instance } from "@/components/Api/Api";
export default {
  name: "emplo-yes",
  data() {
    return {
      emp: {
        name: "",
        username: "",
        password: "",
        phone: null,
        role: "",
      },
      employ: [],
      isLoading: false,
    };
  },
  methods: {
    post() {
      (this.isLoading = true),
        instance
          .post(
            `create_user?username=${this.emp.username}&password=${this.emp.password}&name=${this.emp.name}&phone=${this.emp.phone}&role=${this.emp.role}`
          )
          .then((response) => {
            this.isLoading = false;
            if (response.data.message == "User created successfully!") {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 700,
              }).then(() => {
                console.log(response.data.message);
                document.getElementById("empost").click();
                this.getData();
              });
            }
          });
    },
    getData() {
      console.clear();
      (this.isLoading = true),
        instance.get("get-all-workers").then((response) => {
          (this.isLoading = false), (this.employ = response.data);
          // console.log(response);
          if (response.data == null) {
            Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            }).fire({
              icon: "info",
              title: "No employees yet!",
            });
          }
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
</style>
<template>
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>

  <div v-else>
    <div class="container-fluid mt-3">
      <div class="card shadow" style="min-height: 720px">
        <div class="card-header">
          <h1>Accepted</h1>
        </div>
        <div class="card-body">
          <div class="row p-3" v-show="accepted.message !== 'Empty'">
            <div
              class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-4"
              v-for="item in accepted"
              :key="item"
            >
              <div class="card text-start shadow animate__animated animate__zoomIn">
                <div
                  class="card-header"
                  style="max-height: 70px; min-height: 70px; overflow: auto"
                >
                  <h3>
                    <a :href="item.file_path">
                      {{ item.title }}
                    </a>
                  </h3>
                </div>
                <div class="card-body">
                  <div v-if="item.student">
                    <h6 class="m-0">
                      Student Name: {{ item.student.full_name }}
                    </h6>
                    <br />
                    <h6 class="m-0">
                      Student University: {{ item.student.university }}
                    </h6>
                    <br />
                    <h6 class="m-0">
                      Student Degree: {{ item.student.level }}
                    </h6>
                    <br />
                    <h6 class="m-0">Student ID: {{ item.student_id }}</h6>
                    <br />
                  </div>
                  <h6 class="m-0">Status: {{ item.status }}</h6>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div
                      class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 my-2 d-grid"
                    >
                      <router-link
                        :to="'/pay/' + item.id"
                        class="btn btn-block btn-success shadow"
                        @click="getNot()"
                      >
                        Payments
                      </router-link>
                    </div>
                    <div
                      class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 my-2 d-grid"
                    >
                      <button
                        class="btn btn-block btn-warning shadow"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropp"
                        @click="editk(item.id, item.price, item.writer_id)"
                      >
                        Edit
                      </button>
                    </div>
                    <!-- <div
                      class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 my-2 d-grid"
                    >
                      <button
                        class="btn btn-block btn-primary shadow"
                        @click="downloadPdf(item.id)"
                      >
                        See File
                      </button>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdropp"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Edit</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="putData(editT.id)">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <label>Price</label>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="price..."
                    aria-label="Dollar amount (with dot and two decimal places)"
                    v-model="editT.price"
                  />
                  <span class="input-group-text">£</span>
                </div>
              </div>
              <div class="col-md-6">
                <label>Employees</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="editT.worker_id"
                >
                  <option selected>Open this select menu</option>
                  <option v-for="item in employ" :key="item" :value="item.id">
                    {{ item.name }}
                  </option>
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
            <button type="submit" class="btn btn-outline-warning">Edit</button>
            <input type="hidden" id="edit" data-bs-dismiss="modal" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { instance } from "@/components/Api/Api";
export default {
  name: "or-ders",
  data() {
    return {
      accepted: [],
      editT: [],
      employ: [],
      isLoading: false,
      pdfUrl: [],
      showPdf: true,
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      console.clear();
      instance.get("get-accepted-orders").then((response) => {
        this.isLoading = false;
        this.accepted = response.data;
        // console.log(response.data);
        if (response.data.message == "Empty") {
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
            title: "No accepted orders yet!",
          });
        }
      });
    },

    getData1() {
      instance.get("get-all-workers").then((response) => {
        this.employ = response.data;
        // console.log(response.data);
      });
    },

    getNot() {
      // this.isLoading = true;
      console.clear();
      instance.get("get-all-orders").then((response) => {
        this.order = response.data;
        // this.isLoading = false;
        // console.log(response.data);
      });
    },

    editk(order_id, price, writer_id) {
      this.editT = {
        order_id: order_id,
        price: price,
        worker_id: writer_id,
      };
      // console.log(this.editT);
    },

    putData() {
      this.isLoading = true;
      instance
        .put(
          `edit-order/${this.editT.order_id}?price=${this.editT.price}&worker_id=${this.editT.worker_id}`
        )
        .then((response) => {
          document.getElementById("edit").click();
          this.getData();
          this.isLoading = false;
          if (response.data.message == "Success") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been accepted",
              showConfirmButton: false,
              timer: 600,
            });
          }
        });
    },

    // downloadPdf(e) {
    //   instance.get(`get-order-file/${e}`).then((response) => {
    //     this.pdfUrl = response.data;
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", "file.pdf");
    //     document.body.appendChild(link);
    //     link.click();
    //     // console.log(response);
    //   });

    //   // Simulating PDF download
    //   alert("Simulating PDF download...");
    // },
  },
  mounted() {
    this.getData();
    this.getData1();
    // this.getNot();
  },
};
</script>

<style>
.colored-toast.swal2-icon-success {
  background-color: #a5dc86 !important;
}

.colored-toast.swal2-icon-error {
  background-color: #f27474 !important;
}

.colored-toast.swal2-icon-warning {
  background-color: #f8bb86 !important;
}

.colored-toast.swal2-icon-info {
  background-color: #3fc3ee !important;
}

.colored-toast.swal2-icon-question {
  background-color: #87adbd !important;
}

.colored-toast .swal2-title {
  color: white;
}

.colored-toast .swal2-close {
  color: white;
}

.colored-toast .swal2-html-container {
  color: white;
}
</style>
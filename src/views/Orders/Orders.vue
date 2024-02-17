<template >
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>

  <div v-else>
    <div class="container-fluid mt-3" v-if="role == 'admin'">
      <div class="card shadow" style="min-height: 720px">
        <div class="card-header">
          <h1>Orders</h1>
        </div>
        <div class="card-body">
          <div class="row" v-show="order.message !== 'No orders yet'">
            <div
              class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-4"
              v-for="item in order"
              :key="item"
            >
              <div
                class="card text-start shadow animate__animated animate__zoomIn"
              >
                <!-- v-if="item.message == 'No orders yet'" -->
                <div
                  class="card-header"
                  style="max-height: 70px; min-height: 70px; overflow: auto"
                >
                  <h4>
                    <!-- Assignment: -->
                    <a :href="item.file_path">
                      {{ item.title }}
                    </a>
                  </h4>
                </div>
                <div class="card-body">
                  <h6 class="m-0" v-if="item.student">
                    Student Name: {{ item.student.full_name }}
                  </h6>
                  <br v-if="item.student" />
                  <h6 class="m-0" v-if="item.student">
                    Student University: {{ item.student.university }}
                  </h6>
                  <br v-if="item.student" />
                  <h6 class="m-0" v-if="item.student">
                    Student Degree: {{ item.student.level }}
                  </h6>
                  <br />
                  <h6 class="m-0" v-if="item.student">
                    Student ID: {{ item.student_id }}
                  </h6>
                  <br />
                  <h6 class="m-0">Status: {{ item.status }}</h6>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div
                      class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-2 d-grid"
                    >
                      <button
                        class="btn btn-block btn-success shadow d-grid"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        @click="editk(item.id, item.price, item.writer_id)"
                      >
                        Accept
                      </button>
                    </div>
                    <div
                      class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-2 d-grid"
                    >
                      <button
                        class="btn btn-block btn-danger shadow"
                        @click="decline(item.id)"
                      >
                        Decline
                      </button>
                    </div>
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
          <h5 class="modal-title" id="staticBackdropLabel">Select</h5>
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
                    required
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
                  required
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
            <button
              type="submit"
              class="btn btn-outline-success"
            >
              Apply
            </button>
            <input type="hidden" id="acc"  data-bs-dismiss="modal" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { instance } from "@/components/Api/Api";
import MyWorksVue from "../MyWorks/MyWorks.vue";
import { catchError } from "../../base.js";
export default {
  // emits: ["setloading"],
  name: "or-ders",
  components: {
    MyWorksVue,
  },
  created() {},
  data() {
    return {
      role: localStorage.getItem("role"),
      order: [],
      editT: [],
      employ: [],
      order: [],
      pdfUrl: [],
      showPdf: true,
      isLoading: false,
    };
  },
  methods: {
    getData() {
      console.clear();
      this.isLoading = true;
      console.clear();
      instance.get("get-all-orders").then((response) => {
        this.isLoading = false;
        this.order = response.data;
        // console.log(response.data);
        if (response.data.message == "No orders yet") {
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
            title: "No orders yet!",
          });
        }

        // if (response.data.price == 0) {
        //   response.data.price = null;
        // }
      });
    },

    getData1() {
      instance.get("get-all-workers").then((response) => {
        this.employ = response.data;
        // console.log(response.data);
      });
    },

    editk(id, price, writer_id) {
      this.editT = {
        order_id: id,
        price: price,
        worker_id: writer_id,
      };
      // console.log(this.editT);
    },

    putData() {
      this.isLoading = true;
      // console.log("Put ishladiiiiii!");
      instance
        .put(
          `update-order-status/${this.editT.order_id}?price=${this.editT.price}&worker_id=${this.editT.worker_id}`
        )
        .then((response) => {
          this.isLoading = false;
          // console.log(response.status);
          // this.getData();
          if (response.status == 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Order has been accepted",
              showConfirmButton: false,
              timer: 700,
            }).then(() => {
              document.getElementById("acc").click();
              window.location.reload();
              this.getData();
            });
          }
        });
    },

    decline(e) {
      this.isLoading = true;
      instance.put(`decline-order/${e}`).then((res) => {
        // this.getData();
        if (res.status == 200) {
          window.location.reload();
          this.isLoading = false;
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been declined",
            showConfirmButton: false,
            timer: 700,
          }).then(() => {});
          // console.log(res);
        }
        // this.getData();
      });
    },
    // PDF
    // downloadPdf(e) {
    //   this.isLoading = true;
    //   instance.get(`get-order-file/${e}`).then((response) => {
    //     this.isLoading = false;
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
    // this.getMyWorks();
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },
};
</script>

<style>
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(3px);
  z-index: 1500;
  cursor: progress;
}

#loader {
  position: absolute;
  z-index: 1;
  width: 130px;
  height: 130px;
  border: 10px double rgb(0, 0, 0, 0.7);
  border-block: 10px solid rgb(0, 0, 0, 0.7);
  border-radius: 50%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

.dark #loader {
  border: 10px double rgb(211, 211, 211, 0.5);
  border-block: 10px solid rgb(211, 211, 211, 0.5);
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s;
}

@-webkit-keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0px;
    opacity: 1;
  }
}

@keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}
</style>
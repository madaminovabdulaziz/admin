<template >
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>

  <div v-else>
    <div class="container-fluid mt-3">
      <div class="card shadow" style="min-height: 710px">
        <div class="card-header">
          <h1>My started works</h1>
        </div>
        <div class="card-body">
          <div class="row p-3">
            <div
              class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-4"
              v-for="item in start"
              :key="item"
            >
              <div
                class="card text-start shadow animate__animated animate__zoomIn"
                v-if="!start.error"
              >
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
                  <h6 class="m-0">Price: {{ item.price }} £</h6>
                  <br />
                  <h6 class="m-0">Student ID: {{ item.student_id }}</h6>
                  <br />
                  <h6 class="m-0">Status: {{ item.status }}</h6>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div
                      class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 d-grid"
                    >
                      <button
                        type="button"
                        class="btn btn-block btn-success shadow mt-2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        @click="editk(item.id)"
                      >
                        Finish
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
          <h5 class="modal-title" id="staticBackdropLabel">Finish</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <input
              type="file"
              class="form-control"
              required
              @change="handleFileUpload"
            />
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
              type="button"
              class="btn btn-outline-success"
              @click="uploadFile"
            >
              Finish
            </button>
            <input type="hidden" id="uplod" data-bs-dismiss="modal" />
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
      role: localStorage.getItem("role"),
      start: [],
      file: null,
      editT: [],
      isLoading: false,
    };
  },
  created() {
    this.getBalance();
  },
  methods: {
    getData() {
      this.isLoading = true;
      console.clear();
      instance.get("get-my-started-orders").then((response) => {
        this.isLoading = false;
        this.start = response.data;
        // console.log(response.data);
        if (response.data.error == "You have no orders yet!") {
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
            title: "You have not started works!",
          });
        }
      });
    },

    handleFileUpload(event) {
      this.file = event.target.files[0];
    },

    editk(id) {
      this.editT = {
        id: id,
      };
      // console.log(this.editT.id);
    },

    uploadFile() {
      this.isLoading = true;
      if (!this.file) {
        alert("Please select a file to upload");
        return;
      }
      let formData = new FormData();
      formData.append("file", this.file);

      // You can use Axios or any other HTTP library to make the upload request
      // Example using Axios:
      instance
        .put(`finish-order/${this.editT.id}`, formData)
        .then((response) => {
          this.isLoading = false;
          if (response.status == 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been finished!",
              showConfirmButton: false,
              timer: 600,
            }).then(() => {
              document.getElementById("uplod").click();
              this.getData();
              window.location.reload();
              // console.log("File uploaded successfully:", response);
            });
          }
        })

      // Since file upload via HTTP is not supported in a static environment, you can simulate
      // the upload process here.
      // console.log("Simulating file upload:", this.file);
    },

    getBalance() {
      instance.get("get-my-balance").then((res) => {
        this.balance = res.data;
        // console.log(res.data);
      });
    },
  },
  mounted() {
    this.getBalance();
    this.getData();
  },
};
</script>
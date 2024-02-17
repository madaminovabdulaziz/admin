<template>
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>

  <div v-else>
    <div class="container-fluid mt-3">
      <div class="card shadow" style="min-height: 710px">
        <div class="card-header">
          <h1>My works</h1>
        </div>
        <div class="card-body">
          <div class="row p-3">
            <div
              class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-4"
              v-for="item in order"
              :key="item"
            >
              <div class="card text-start shadow animate__animated animate__zoomIn" v-if="!order.error">
                <div class="card-header"  style="max-height: 70px; min-height: 70px; overflow: auto">
                  <h3>
                    <a :href="item.file_path">
                      {{ item.title }}
                    </a>
                  </h3>
                </div>
                <div class="card-body">
                  <h6 class="m-0">Price: {{ item.price }} £</h6>
                  <!-- <br /> -->
                  <!-- <h6 v-if="item.first_part" class="m-0">
                    First part: {{ item.first_part }}
                  </h6>
                  <br v-if="item.first_part" />
                  <h6 v-if="item.second_part" class="m-0">
                    Second part: {{ item.second_part }}
                  </h6> -->
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
                        @click="putDate(item.id)"
                        v-if="item.status == 'waiting'"
                      >
                        Start
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
</template>

<script>
import { instance } from "@/components/Api/Api";
import axios from "axios";
export default {
  name: "or-ders",
  data() {
    return {
      // role: localStorage.getItem("role")
      order: [],
      editT: [],
      // employ: [],\
      selectedFile: null,
      isLoading: false,
    };
  },
  methods: {
    getMyWorks() {
      this.isLoading = true;
      console.clear();
      instance.get("get-my-orders").then((response) => {
        this.isLoading = false;
        this.order = response.data;
        // console.log(response.data);
        // console.log(response.data.error);
        // console.log(this.role);
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
            title: "You have no orders yet!!",
          });
        }
      });
    },

    putDate(e) {
      this.isLoading = true;
      // console.log(e);
      instance.put(`start-assignment/${e}`).then((res) => {
        this.isLoading = false;
        // console.log(res);
        if (res.status == 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been started",
            showConfirmButton: false,
            timer: 600,
          }).then(() => {
            this.getMyWorks();
            // console.log(response);
          });
        }
      });
    },

    editk(order_id) {
      this.editT = {
        order_id: order_id,
      };
    },
  },
  mounted() {
    this.getMyWorks();
    // this.getData1();
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

<!-- <style scoped>
* {
  
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.bodyy {
  margin: 0;
  padding: 0;
  display: flex;
  padding: 10px;
  background: #1aaa4c;
}

.upload-box > p {
  text-align: center;
  font-weight: 500;
  margin-top: 10px;
}

img {
  width: 100%;
}

.icon {
  width: 90px;
  height: 90px;
  background: green;
}

.upload-box {
  width: 100%;
  background: #ffff;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 7px 7px 12px rgba(0, 0, 0, 0.5);
}

.upload-box > form {
  height: 170px;
  display: flex;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  border: 2px dashed #29ba2a;
}

form :where(i, p) {
  color: #29ba2a;
}

form i {
  font-size: 50px;
}

form p {
  margin-top: 15px;
  font-size: 16;
}

section .row {
  margin-bottom: 10px;
  background: #d0ffd3;
  list-style: none;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

section .row i {
  color: #1aaa4c;
  font-size: 30px;
}

section details span {
  font-size: 12p;
}

.loading-area .row .content {
  width: 100%;
  margin-left: 15px;
}

.loading-area details {
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  justify-content: space-between;
}

.loading-area .content .loading-bar {
  height: 6px;
  width: 100%;
  margin-bottom: 4px;
  background: white;
  border-radius: 30px;
}

.content .loading-bar .loading {
  height: 100%;
  width: 20%;
  background: #1aaa4c;
  border-radius: inherit;
}

.uploaded-area {
  max-height: 232px;
  overflow-y: scroll;
}

.uploaded-area .onprogress {
  max-height: 150px;
}

.uploaded-area ::-webkit-scrollbar {
  width: 0;
}

.uploaded-area .row .content {
  display: flex;
  align-items: center;
}

.uploaded-area .row .details {
  display: flex;
  margin-left: 15px;
  flex-direction: column;
}

.uploaded-area .row .details .size {
  color: #404040;
  font-size: 11px;
}

.uploaded-area .i.fa-check {
  font-size: 16;
}
</style> -->
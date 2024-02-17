<template>
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>
  <div class="container-fluid" v-else>
    <div class="card" style="min-height: 710px">
      <div class="card-header">
        <h1>My finished works</h1>
      </div>
      <div class="card-body">
        <div class="row p-3">
          <div
            class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-4"
            v-for="item in finish"
            :key="item"
          >
            <div
              class="card text-start shadow animate__animated animate__zoomIn"
              v-if="!finish.error"
            >
              <div class="card-header">
                <h4>
                  <a :href="item.file_path">
                    {{ item.title }}
                  </a>
                </h4>
              </div>
              <div class="card-body">
                <h6 class="m-0">Price: {{ item.price }} £</h6>
                <br />
                <h6 class="m-0">Student ID: {{ item.student_id }}</h6>
                <br />
                <h6 class="m-0">Status: {{ item.status }}</h6>
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
export default {
  data() {
    return {
      finish: [],
      isLoading: false,
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      console.clear(),
        instance.get("get-my-finished-orders").then((res) => {
          (this.isLoading = false), (this.finish = res.data);
          // console.log(res.data);
          // if (res.data.error == "You have not finished orders!") {
          //   Swal.fire({
          //     title: "You have no orders yet!",
          //     icon: "info",
          //   });
          // }

          if (res.data.error == "You have not finished orders!") {
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
            title: "You have not finished orders!",
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
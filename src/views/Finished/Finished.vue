<template>
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>

  <div class="container-fluid mt-3" v-else>
    <div class="card shadow" style="min-height: 730px">
      <div class="card-header">
        <h1>Finished</h1>
      </div>
      <div class="card-body">
        <div class="row p-3" v-show="finish.message !== 'no assignments'">
          <div
            class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-4"
            v-for="item in finish"
            :key="item"
          >
            <div
              class="card text-start shadow animate__animated animate__zoomIn"
              style="min-height: 200px"
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
                <h4 class="m-0">Username: {{ item.student.username }}</h4>
                <h4 class="m-0">Name: {{ item.student.full_name }} </h4>
                <h4 class="m-0">Price: {{ item.price }}£</h4>
                <h4 class="m-0">Status: {{ item.status }}</h4>
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
  name: "fin-ish",
  data() {
    return {
      finish: [],
      pdfUrl: [],
      isLoading: false,
    };
  },
  methods: {
    getData() {
      console.clear();
      (this.isLoading = true),
        instance.get("get-finished-orders/admin").then((response) => {
          (this.isLoading = false), (this.finish = response.data);
          console.log(response.data);
          if (response.data.message == "no assignments") {
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
              title: "No finished orders yet!",
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
  },
};
</script>

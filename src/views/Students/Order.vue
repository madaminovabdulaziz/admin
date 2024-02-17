<template>
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>
  <div class="container-fluid mt-3" v-else>
    <div class="card shadow" style="min-height: 720px">
      <div class="card-header">
        <router-link
          :to="'/students'"
          class="btn btn-outline-secondary float-start"
        >
          <i class="fa fa-arrow-left" />
        </router-link>
        <h1>Student's orders</h1>
        <!-- <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <button type="button" class="btn btn-block btn-primary">add</button>
          </div>
        </div> -->
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Ready file</th>
                <!-- <th scope="col">Assignment_quantity</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in order" :key="item">
                <th scope="row">{{ idx + 1 }}</th>
                <td>{{ item.title }}</td>
                <td>{{ item.price }} £</td>
                <td>{{ item.status }}</td>
                <td>
                  <a :href="item.file_path"> Ready file </a>
                </td>
                <!-- <td>{{ item.assignment_quantity }}</td> -->
              </tr>
            </tbody>
          </table>
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
      order: [],
      isLoading: false,
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      console.clear();
      instance
        .get(`get-student-orders/${this.$route.params.id}`)
        .then((res) => {
          this.isLoading = false;
          this.order = res.data;
          // console.log(res.data);

          if (res.data.error == "No such student!") {
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
              title: "No student's orders yet!",
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
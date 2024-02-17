<template>
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>
  <div class="container-fluid mt-3" v-else>
    <div class="card shadow" style="min-height: 720px">
      <div class="card-header">
        <h1>Students</h1>
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
                <th scope="col">Full name</th>
                <th scope="col">Univesity</th>
                <th scope="col">Student ID</th>
                <th scope="col">Username</th>
                <th scope="col">Level</th>
                <!-- <th scope="col">Assignment_quantity</th> -->
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in students" :key="item">
                <th scope="row">{{ idx + 1 }}</th>
                <td>{{ item.full_name }}</td>
                <td>{{ item.university }}</td>
                <td>{{ item.student_id }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.level }}</td>
                <!-- <td>{{ item.assignment_quantity }}</td> -->
                <td>
                  <!-- student_id -->
                  <router-link
                    :to="{
                      name: 'order',
                      params: { id: item.student_id },
                    }"
                    class="btn btn-secondary"
                    ><i class="fa fa-arrow-right"></i
                  ></router-link>
                </td>
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
      students: [],
      isLoading: false,
    };
  },
  methods: {
    getData() {
      console.clear();
      this.isLoading = true;
      instance.get("get-students").then((response) => {
        this.isLoading = false;
        this.students = response.data;
        // console.log(response.data);
        if (response.data.message == "Empty!") {
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
            title: "No students yet!",
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
<template>
  <div v-if="isLoading" class="page-loader">
    <div id="loader"></div>
  </div>

  <div v-else>
    <div class="container-fluid mt-3">
      <div class="card shadow" style="min-height: 720px">
        <div class="card-header">
          <router-link
            :to="'/accepted'"
            class="btn btn-outline-secondary float-start"
          >
            <i class="fa fa-arrow-left" />
          </router-link>
          <h1>Payments</h1>
        </div>
        <div class="card-body">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic example"
            style="width: 100%; border: 1px solid gray; border-radius: 6px"
          >
            <button class="btn btn-block btn-success float-center shadow">
              Part-1
            </button>
            <router-link
              :to="{ name: 'part2', query: { id: aprow } }"
              class="btn btn-block float-center shadow"
              style="margin: 0"
            >
              Part-2
            </router-link>
          </div>
          <div class="row">
            <div
              class="col-md-3 my-4"
              v-for="item in partone"
              :key="item"
              v-show="!partone.error && item.part_number == '1'"
            >
              <div class="card shadow animate__animated animate__zoomIn">
                <div class="card-body">
                  <h5 class="card-title">Reference: {{ item.reference }}</h5>
                  <h5 class="card-title" v-if="item.firstpartstatus !== 'null'">
                    {{ item.firstpartstatus }}
                  </h5>
                </div>
                <div
                  class="card-footer"
                  v-if="item.firstpartstatus !== 'approved'"
                >
                  <div class="row">
                    <div
                      class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 d-grid mb-2"
                    >
                      <button
                        type="button"
                        class="btn btn-success btn-block"
                        @click="putData(item)"
                      >
                        Approve
                      </button>
                    </div>
                    <div
                      class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 d-grid mb-2"
                    >
                      <button
                        type="button"
                        class="btn btn-danger btn-block"
                        @click="decline(item.assignment_id, item.part_number)"
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
</template>

<script>
import { instance } from "@/components/Api/Api";
// import Part1 from "./part-1.vue";
import Part2 from "./part-2.vue";
export default {
  components: { Part2 },
  data() {
    return {
      partone: [],
      image_view: "",
      aprow: this.$route.params.id,
      img: [],
      part: "",
      isLoading: false,
    };
  },
  methods: {
    getData() {
      // this.isLoading = true;
      console.clear();
      instance.get("get-payments/" + this.$route.params.id).then((res) => {
        // this.isLoading = false;
        this.partone = res.data;
        console.log(res.data);

        // if (res.data.error == "No such assignment!") {
        //   Swal.fire({
        //     title: "No such assignment in part 1!",
        //     icon: "question",
        //   });
        // }
        if (res.data.error == "No such assignment!") {
          Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1100,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          }).fire({
            icon: "info",
            title: "No payments yet!",
          });
        }
      });
    },

    putData(e) {
      this.isLoading = true;
      instance
        .put(`approve-first-part-money/${e.assignment_id}`)
        .then((response) => {
          this.isLoading = false;
          console.log(response.data);
          // this.getData();

          if (response.data.message == "Success") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been aproved",
              showConfirmButton: false,
              timer: 700,
            }).then(() => {
              // console.log(response);
              // document.getElementById("aprw").click();
              this.getData();
            });
          }
        });
    },

    decline(e, a) {
      this.isLoading = true;
      instance.put(`decline-payment/${e}/${a}`).then((res) => {
        this.isLoading = false;
        console.log(res);
        if (res.data.message == "Success") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Part-2 has been declined!",
            showConfirmButton: false,
            timer: 700,
          }).then(() => {
            // console.log(response);
            // document.getElementById("aprw").click();
            this.getData();
          });
        }
      });
    },
  },
  mounted() {
    this.getData();
    // this.qwerty();
  },
};
</script>



<style>
.nav-tabs .nav-link.active {
  background-color: #38a169;
  color: white;
}

.nav-link {
  color: black;
}

/* .foto{
    display: flex;
    justify-content: center;
    height: 200px;
    width: 200px;
    background-color: gray;
} */
</style>





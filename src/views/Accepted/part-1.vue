<template>
  <h1>1</h1>
  <div class="row">
    <div class="col-md-3 my-4">
      <div class="card shadow border-success">
        <img src="./pay.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <button type="button" class="btn btn-success btn-block">
                Approve
              </button>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <button type="button" class="btn btn-danger btn-block">
                Decline
              </button>
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
      partone: [],
    };
  },
  methods: {
    getData() {
      instance.get("get-payments/" + this.$route.params.id).then((res) => {
        this.partone = res.data;
        console.log(res.data);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
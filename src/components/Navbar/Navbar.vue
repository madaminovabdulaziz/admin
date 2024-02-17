<template>
  <nav class="navbar fixed-top d-flex flex-row p-2 shadow">
    <div class="d-flex">
      <div class="text-center navbar-brand-wrapper"></div>
      <div class="cont icon">
        <span
          @click="toggleSidebar"
          id="bars"
          class="navbar-toggler navbar-toggler align-self-center m-2 fas fa-bars text-light"
        ></span>
      </div>
    </div>

    <div class="inline-block d-flex justify-content-between align-items-center">
      <h4 class="text-light" v-if="role == 'worker' && balance">
        Balance: {{ balance }} £
      </h4>
      <!-- <Notificaion /> -->
      <Mode />
      <!-- <Toggle :mode="mode" @toggle="$emit('toggle')" /> -->
      <!-- <button @click="toggleNightMode">Toggle Night Mode</button> -->
      <button
        type="button"
        class="btn btn-outline-success text-white logout mr-3"
        @click="logout"
        style="margin-left: 15px"
      >
        <span class="fa fa-right-from-bracket"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import Mode from "../Mode/Mode.vue";
import { instance } from "../Api/Api";
// import Toggle from "@/components/Mode/Toggle.vue";
import { collapsed, toggleSidebar } from "../Sidebar/state";
// import Notificaion from "./Notificaion.vue";
export default {
  components: { Mode },
  data() {
    return {
      role: localStorage.getItem("role"),
      number: null,
      balance: null,
      nightMode: false,
    };
  },

  methods: {
    logout() {
      this.$router.push("/");
      console.clear();
      // console.log(localStorage);
      localStorage.clear();
      // console.log(localStorage);
    },
    getBalance() {
      if (this.role == "worker") {
        instance.get("get-my-balance").then((res) => {
          this.balance = res.data;
          // console.log(res.data);
        });
      } else {
        // console.log("balans yo'q! chunki siz admin siz");
      }
    },
    // toggleNightMode() {
    //   this.nightMode = !this.nightMode;
    //   console.log("avc");
    //   // You may also want to store the night mode preference in local storage
    //   // localStorage.setItem('nightMode', this.nightMode);
    // },
  },
  mounted() {
    this.getBalance();
  },

  components: {},
  setup() {
    return { collapsed, toggleSidebar };
  },
};
</script>

<style>
.navbar {
  background-color: #2f855a;
  height: 60px;
}

.logout {
  cursor: pointer;
}

.cont {
  cursor: pointer;
}

.fas {
  font-size: 20px;
  margin-right: 10px;
}

.sozlamalar {
  width: 120px;
  height: 170px;
  background: white;
  position: fixed;
  top: 80px;
  right: 20px;
  border-radius: 15px;
  color: rgb(0, 0, 0);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 0;
  margin: 3px;
  display: flex;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.img-responsive {
  width: 50px;
}
</style>
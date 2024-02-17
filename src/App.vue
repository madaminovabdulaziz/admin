<template>
  <!-- <div :class="{ 'night-mode': nightMode }"> -->
  <div
    class="app"
    :style="[
      this.$route.name !== 'login'
        ? { 'padding-top': '38px' }
        : { 'padding-top': '0' },
    ]"
  >
    <Navbar
      v-if="this.$route.name !== 'login'"
      @togglenav="navOpen = !navOpen"
    />
    <!-- v-if="this.$route.name !== 'Login'" -->
    <Sidebar-vue
      v-if="this.$route.name !== 'login'"
      :open="navOpen"
      @click="close_sidebar"
    />

    <div class="scrool">
      <div
        class="content"
        :style="[
          this.$route.name !== 'login'
            ? { 'margin-top': contentTop }
            : { 'margin-top': '0' },
        ]"
      >
        <div id="content-app">
          <!-- :style="[
            this.$route.name !== 'login'
              ? { 'margin-left': sidebarPadding }
              : { 'margin-left': '0' },
          ]" -->
          <div
            :style="
              this.$route.name !== 'login'
                ? { 'margin-left': sidebarWidth }
                : { 'margin-left': 0 }
            "
          >
            <Router-view />
            <Footer v-if="this.$route.name !== 'login'" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
  <!-- <div
    :style="
      this.$route.name !== 'login'
        ? { 'margin-left': sidebarWidth }
        : { 'margin-left': 0 }
    "
  >
    <router-view />
  </div> -->

  <!-- <Sidebar-vue />
  <div :style="{ 'margin-left': sidebarWidth }">
  </div> -->
  <!-- <nav> -->
  <!-- <router-link to="/">Home</router-link> | -->
  <!-- <router-link to="/about">About</router-link> -->
  <!-- </nav> -->

<script>
import { instance } from "./components/Api/Api";
import Navbar from "./components/Navbar/Navbar.vue";
import SidebarVue from "./components/Sidebar/Sidebar.vue";
import {
  sidebarWidth,
  // sidebarPadding,
  close_sidebar,
  collapsed,
} from "./components/Sidebar/state";
import { sidebarWidthContent } from "./components/Sidebar/state";
import { contentTop } from "./components/Sidebar/state";
// import isloading from "./components/Anime/Anime.vue";

export default {
  components: {
    SidebarVue,
    Navbar,
    // isloading,
  },
  data() {
    return {
      navOpen: true,
      nightMode: localStorage.getItem("nightMode"),
      role: localStorage.getItem("role"),
      // loading: true,
    };
  },
  setup() {
    return {
      sidebarWidth,
      // sidebarPadding,
      close_sidebar,
      collapsed,
      sidebarWidthContent,
      contentTop,
      // Login,
    };
  },
  watch: {
    $route(to) {
      document.title = `Dashboard • ${to.meta.title}`;
      // this.loading = true;
      // this.setDisplay();
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));

    if (this.nightMode == true) {
      localStorage.setItem("nightMode", this.nightMode);
      document.querySelector("#app").classList.remove("dark");
    } else if (this.nightMode == false) {
      localStorage.setItem("nightMode", this.nightMode);
      document.querySelector("#app").classList.add("dark");
    }
    setInterval(() => {
      window.onoffline = () => {
        swal({
          icon: "warning",
          title: "Tarmoq bilan aloqa mavjud emas !",
          closeOnClickOutside: false,
          closeOnEsc: false,
        });
      };
    }, 60000);
    window.ononline = () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Aloqa mavjud!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {});
    };
  },
  methods: {
    getNot() {
      // console.clear();
      if (this.role == "admin") {
        instance.get("get-all-orders").then((response) => {
          // this.order = response.data;
          // this.isLoading = false;
          // console.log(response.data);
        });
      }
      // this.isLoading = true;
    },
    getBalance() {
      if (this.role == "worker") {
        instance.get("get-my-balance").then((res) => {
          this.balance = res.data;
          // console.log(res.data);
        });
      } else {
        // console.log("Balans y'q siz adminsiz!");
      }
    },
    setloading(loading) {
      this.loading = loading;
    },
  },
  mounted() {
    // this.getNot();
    this.getBalance();
  },
};
</script>


<style>
@import url("./main.css");
@import url("./dark.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

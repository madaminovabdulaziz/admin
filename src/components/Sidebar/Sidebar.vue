<script>
// import Notfication from "./Notfication.vue";
import { sidebarWidth, toggleSidebar, collapsed } from "./state.js";
import SidebarLink from "./SidebarLink.vue";
import { instance } from "../Api/Api.js";
export default {
  props: {},
  data() {
    return {
      role: localStorage.getItem("role"),
      balance: null,
      notification: null,
    };
  },
  components: {
    SidebarLink,
    // Notfication,
  },
  setup() {
    return { sidebarWidth, toggleSidebar, collapsed };
  },
  methods: {
    logout() {
      this.$router.push("/");
      console.clear();
      console.log(localStorage);
      localStorage.clear();
      console.log(localStorage);
    },

    fetchNotifications() {
      instance
        .get("get-all-orders")
        .then((response) => {
          // Assuming the response contains a single notification object
          this.notification = response.data.length;
          // console.log(response.data.length);
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
    },
  },
  mounted() {
    // this.getBalance();
    this.fetchNotifications();
  },
};
</script>

<template>
  <transition name="fade-SidebarLink">
    <div class="sidebar" :style="{ width: sidebarWidth }">
      <div class="sidebar-link SidebarLink">
        <!-- <h1>
          <span v-if="collapsed">
            <div></div>
            <div></div>
          </span>
          <span v-else>  </span>
        </h1> -->
        <h4>
          <!-- <SidebarLink to="/" icon="fa fa-home">Home</SidebarLink> -->
          <SidebarLink
            to="/orders"
            icon="fa fa-home"
            v-if="role == 'admin'"
            class="position-relative"
            >Orders
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              v-if="notification > 0"
            >
              {{ notification }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </SidebarLink>
          <SidebarLink
            to="/accepted"
            icon="fa fa-list-check"
            v-if="role == 'admin'"
            @click="fetchNotifications()"
            >Accepted</SidebarLink
          >
          <!-- <SidebarLink
            to="/finished"
            icon="fa fa-square-check"
            v-if="role == 'admin'"
            @click="fetchNotifications()"
            >Finished</SidebarLink
          > -->
          <SidebarLink
            to="/students"
            icon="fa fa-user-graduate"
            v-if="role == 'admin'"
            @click="fetchNotifications()"
            >Students</SidebarLink
          >

          <SidebarLink to="/performs" icon="fa fa-users" v-if="role == 'admin'"
            >Employees</SidebarLink
          >
          <!-- WORKER -->
          <!-- <SidebarLink to="/myworks" icon="fa fa-home" v-if="role == 'worker'"
            >My works</SidebarLink
          > -->
          <SidebarLink
            to="/mystart"
            icon="fa fa-list-check"
            v-if="role == 'worker'"
            >Started works</SidebarLink
          >
          <SidebarLink
            to="/myfinishedworks"
            icon="fa fa-square-check"
            v-if="role == 'worker'"
            >Finished works</SidebarLink
          >
          <!-- <SidebarLink icon="fa fa-sterling-sign" to="" v-if="role == 'worker'">
            <h5>Balance: {{ balance }}</h5>
          </SidebarLink> -->

          <!-- <SidebarLink to="" icon="fas fa-right-from-bracket" @click="logout"
            >log out</SidebarLink
          > -->
          <!-- <SidebarLink to="/orders" icon="fa fa-home" v-if="role == 'worker'"
            >Orders</SidebarLink
          > -->
        </h4>
        <!-- <Notification :notification="notification" /> -->
        <!-- <span
          class="collapse-icon"
          :class="{ 'rotate-180': collapsed }"
          @click="toggleSidebar"
        >
          <i class="fa fa-angle-double-left"></i>
        </span> -->
      </div>
    </div>
  </transition>
</template>


<style>
:root {
  --sidebar-bg-color: #317252;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
/* rgb(47, 54, 79) */
</style>

<style scoped>
.sidebar-link {
  margin-top: 65px;
  /* padding-left: 8px; */
}

.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5rem;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0, 2s linear;
}

.log {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

/* #logout { */
/* bottom: ; */
/* } */

.fade-SidebarLink-enter-active,
.fade-SidebarLink-leave-active {
  transition: all 0.54s linear;
}

.fade-SidebarLink-enter {
  transform: translateX(-100%);
}

.fade-SidebarLink-enter-to {
  transform: translateX(0);
}

.fade-SidebarLink-leave-to {
  transform: translateX(-100%);
}
</style>



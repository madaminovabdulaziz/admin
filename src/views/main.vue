<template>
  <!-- <Sidebar-vue />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div> -->
  <!-- <h1>qwertg</h1> -->
</template>


<script>
import SidebarVue from "../components/Sidebar/Sidebar.vue";
import { sidebarWidth } from "../components//Sidebar/state";

export default {
  components: {
    SidebarVue,
  },
  setup() {
    return { sidebarWidth };
  },
  created() {},
};
</script>
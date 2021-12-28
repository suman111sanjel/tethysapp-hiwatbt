<template>
  <div class="all-conts">
    <el-container class="cont-outer">
      <el-header>
        <NavBar></NavBar>
      </el-header>
      <el-container class="sidebar-main">
        <Tabs :activeTab="currentTab"></Tabs>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Tabs from "../components/Tabs";
import '../utils/main.scss'

export default {
  name: "current",

  components: {
    NavBar,
    Tabs,
  },
  data() {
    return {
      selectedTab: 'current',
    };
  },
  computed: {
    currentTab() {
      return this.getCurrentTab()
    },
  },
  methods: {
    getCurrentTab() {
      return this.selectedTab;
    }
  }
};
</script>

<style >
#app{
  overflow: hidden;
}

</style>

<template>
  <el-row class="full-height full-width">
    <el-col :span="5" class="full-height">
      <el-row class="first-row">
        <el-col :span="24" class="full-height full-width padding-left-10 padding-bottom-10 padding-top-10 padding-right-5">
          <mapControlsCurrent></mapControlsCurrent>
        </el-col>
      </el-row>

    </el-col>
    <el-col :span="19" class="full-height">
      <el-row class="first-row">
        <el-col :span="24" class="full-height full-width padding-left-5 padding-bottom-10 padding-top-10 padding-right-10">
          <mapComponentCurrent></mapComponentCurrent>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import mapControlsCurrent from "./mapControlsCurrent";
import mapComponentCurrent from "./mapComponentCurrent";

export default {
  name: "currentTabBody",
  components: {
    mapControlsCurrent,
    mapComponentCurrent,
  },
}
</script>

<style scoped>

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.full-height {
  height: 100%;
}


</style>
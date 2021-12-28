<template>
  <div class="card-box full-height full-width about-div">
    <div class="pannel-title">
      <h6 class="title-heading">About
      </h6>
      <el-button class="infoButton" type="text" @click="centerDialogVisible = true"><i class="el-icon-info"></i>
      </el-button>
    </div>
    <div class="body-container">
      <p style="text-align:justify;font-size:12px;">
        The Regional Drought Monitoring and Outlook System for South Asia uses four parameters (soil moisture,
        precipitation, air temperature, and evapotranspiration) from SALDAS dataset as the drought indicators, which is
        further grouped into monthly making it more relevant to drought application. The system allows interactive
        visualization of map for the selected parameter along with the chart on the monthly basis for the selected year.
      </p>
      <el-button type="text" @click="centerDialogVisible = true">View More ..</el-button>
    </div>
    <el-dialog
        title="Regional Drought Monitoring and Outlook"
        v-model="centerDialogVisible"
        width="50%"
        center>
      <span><div class="contributor" style="text-align: center;">
                    <img src="@/assets/USAIDlogo.png" style="height:50px;">
                    <img src="@/assets/NASA_LOGO.png" style="height:50px;">
                    <img src="@/assets/ICIMOD_Master_logo_Blue.png" style="height: 50px;position: relative;top: 5px;">
                    <img src="@/assets/Servir_HKH_green.png" style="height: 30px;position: relative;top: -4px;">
                </div>
<div>
                            <p style="text-align:justify">
                                The Regional Drought Monitoring and Outlook System for South Asia uses four parameters (soil moisture, precipitation, air temperature, and evapotranspiration) from SALDAS dataset as the drought indicators, which is further grouped into monthly making it more relevant to drought application. The system allows interactive visualization of map for the selected parameter along with the chart on the monthly basis for the selected year.
                            </p>
                            <p style="text-align:justify">
                                Acknowledgements: Development of the Regional Drought Monitoring and Outlook System for South Asia and associated Agriculture Drought Watch System for Nepal was supported by the United States Agency for International Development (USAID) and the National Aeronautics and Space Administration (NASA). The Climate Services for Resilient Development (CSRD) Initiative and the International Maize and Wheat Improvement Center (CIMMYT) also collaborated on the development of the system. The front-end application has been hosted on Amazon Web Services (AWS) the GEO-AWS Earth Observation Cloud Credits Programme.
                            </p>
                        </div>
      </span>
      <template #footer>
      <span class="dialog-footer">
        <el-button class="cancel-dialog" @click="centerDialogVisible = false">Cancel</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      centerDialogVisible: false
    };
  }
}
</script>

<style scoped>
.body-container {
  height: calc(100% - 54px);
}

.title-heading {
  height: 30px;
  display: inline-block;
}

.infoButton {
  height: 30px;
  min-height: 30px;
  padding: 8px 20px;
  float: right;
  color: #d2dbe3;
}

.panel-title {
  display: inline-block;
  width: 100%;
}

p {
  font-family: "Open Sans", "Segoe UI", sans-serif, Verdana, Helvetica;
  font-size: 1em;
}

.cancel-dialog {
}


</style>
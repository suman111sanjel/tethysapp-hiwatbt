<template>
  <div class="card-box full-height full-width about-div">
    <div class="pannel-title">
      <h6 class="heading1">
        54 Hours Outlook ({{HIWATDate}})
      </h6>
    </div>
    <div class="body-container">
<!--      <i class="fas fa-cloud-rain"></i>-->
<!--      <i class="fas fa-poo-storm"></i>-->

      <div class="layerCollection"></div>
      <h6 class="heading1">Hourly prediction</h6>
      <div class="layerCollection layerCollection1"></div>
    </div>
  </div>
</template>

<script>

import { mapState} from "vuex";

export default {
  name: "mapControlsCurrent",
  data() {
    return {}
  }, methods: {},
    computed: mapState([
    'HIWATDate'
  ]),
  created() {
  },
}
</script>

<style scoped>
.body-container {
  height: calc(100% - 47px);
}


.layerCollection .LayerDiv.withOpacSlider {
  margin-bottom: 18px;
}


.heading1 {
  padding: 10px 18px;
  color: white;
  background-color: #007196;
}

.pannel-title .heading1 {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
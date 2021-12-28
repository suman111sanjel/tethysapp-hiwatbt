<template>
  <div class="card-box full-height full-width about-div" id="chart">
<!--    <div class="body-container full-height" >-->
<!--    </div>-->
  </div>
</template>

<script>

import eventHub from "../utils/utils"

import Highcharts from 'highcharts';
// Alternatively, this is how to load Highstock. Highmaps is similar.
// import Highcharts from 'highcharts/highstock';

// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
import NOdata from 'highcharts/modules/no-data-to-display'
import MoreHighcharts from 'highcharts/highcharts-more';
// Initialize exporting module.
Exporting(Highcharts);
NOdata(Highcharts);
MoreHighcharts(Highcharts);
// window.Highcharts = Highcharts;
export default {
  name: "chartComponent",
   methods: {
  updateChart(HcObject){
          Highcharts.chart('chart', HcObject);

  },
},
  mounted() {
    // Generate the chart
    Highcharts.chart('chart', {
      credits: {
        enabled: false
      },
      title: {
        align: "center",
        text: "Select Indices to Display Chart",
      },
      series: [{
        data: [],
      }],
      chart: {
        backgroundColor: 'rgba(255,255,255,0)',
        style: {
          "fontFamily": "Lato,\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
          "fontSize": "12px"
        },

        animation: true,
        zoomType: 'x',
//        borderColor: '#000000',
//        borderWidth: 2,
        type: 'area',
      },
      noData: {
        style: {
          fontWeight: 'bold',
          fontSize: '15px',
          color: '#303030'
        }
      },
    });
    eventHub.$on('UpdateChart',  (HcObject)=> {
      this.updateChart(HcObject);
    });
  },
};
</script>

<style scoped>

</style>
<template>
  <div class="card-box full-height full-width about-div">
    <div id="map-container2">
    </div>
    <div id="LayerInfoDiv">
      <el-card
          :class="{'box-card':cardBox.animationClass.cardBoxCSS , 'animate__animated animate__fadeInDown': cardBox.animationClass.animate__fadeInDown  , 'animate__animated animate__fadeOutUp': cardBox.animationClass.animate__fadeOutUp }"
          v-if="cardBox.showCardBox==true">
        <template #header>
          <div class="card-header">
            <span>{{ cardBox.header }}</span>
          </div>
        </template>

        <div class="infograph-card body">
          <div class="infographics-item long-row">
          <span>
          <img class="infographicsIcon" :src="rainySVG" alt="my-logo"/>
            </span>
            <div class="value-wrapper">
              <div class="value-title">Total accumulated Rainfall (mm)</div>
              <div class="value">{{ cardBox.rainy }}</div>
            </div>
          </div>

          <div class="infographics-item long-row">
          <span>
          <img class="infographicsIcon" :src="hailSVG" alt="my-logo"/>
            </span>
            <div class="value-wrapper">
              <div class="value-title">Maximum Prob. of Hail Threat (%)</div>
              <div class="value">{{ cardBox.hail }}</div>
            </div>
          </div>

          <div class="infographics-item long-row">
          <span>
          <img class="infographicsIcon" :src="flashSVG" alt="my-logo"/>
            </span>
            <div class="value-wrapper">
              <div class="value-title">Maximum Prob. of Lightning (%)</div>
              <div class="value">{{ cardBox.Lightning }}</div>
            </div>
          </div>

          <div class="infographics-item long-row">
          <span>
          <img class="infographicsIcon" :src="hailSVG" alt="my-logo"/>
            </span>
            <div class="value-wrapper">
              <div class="value-title">Maximum Prob. of Supercell Threat (%)</div>
              <div class="value">{{ cardBox.Supercell }}</div>
            </div>
          </div>

        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import "animate.css"
import rainySVG from '../assets/rainy.svg';
import hailSVG from '../assets/hail.svg';
import flashSVG from '../assets/flash.svg';
import stormSVG from '../assets/favpng_storm-ico-icon.svg';

import "ol/ol.css";
import Map from "ol/Map";
import Control from "ol/control/Control";
// import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
// import TileWMS from "ol/source/TileWMS";
import ImageWMS from 'ol/source/ImageWMS';
import {Image as ImageLayer} from 'ol/layer';
import View from "ol/View";
import {mapActions, mapMutations} from "vuex";
import {HIWAT_Extreme_Layer_List, HIWAT_Latest_54_hour_data, GetPercentageSLD, isInterestedLayer} from "../utils/data"
import LayerSwitcher from 'ol-plus/ui/LayerSwitcher';
import TimeDimensionTile from "ol-plus/layer/TimeDimensionTile";
// import {CustomTimeDimensionalLayerDateLabel} from '../utils/helpers';

// import {MajorBasinExtent, BasinExtent, mbasin, dataSelect, WMSSLD, legendImage} from "../utils/data";
// import TimeDimensionTile from "ol-plus/layer/TimeDimensionTile";
// import {ThreddsServer} from "../utils/config";


import 'ol-ext/control/Search.css';
import SearchNominatim from 'ol-ext/control/SearchNominatim';
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import {Icon} from 'ol/style';
import {toSize} from 'ol/size';
import ImageIcon from '../assets/markers_default.png';
import {getCenter as ol_extent_getCenter} from 'ol/extent';
import GeoJSON from "ol/format/GeoJSON";


import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';

// import OLPolygon from 'ol/geom/Polygon'
// import OlSelect from 'ol/interaction/Select'
// import OlDraw from 'ol/interaction/Draw'
// import OlExtTextButton from 'ol-ext/control/TextButton'
// import Bar from 'ol-ext/control/Bar'
// import OlExtButton from 'ol-ext/control/Button'
// import OlExtToggle from 'ol-ext/control/Toggle';
// import 'ol-ext/control/Bar.css'

import CircleStyle from "ol/style/Circle";
// import {getArea, getLength,} from 'ol/sphere';
// import LineString from 'ol/geom/LineString';

import OSM from "ol/source/OSM";
import BingMaps from "ol/source/BingMaps";

// import Stamen from "ol/source/Stamen";

import LayerSwitcherImage from "ol-ext/control/LayerSwitcherImage";
import 'ol-ext/control/LayerSwitcherImage.css';

export default {
  name: "mapComponentCurrent",
  data() {
    return {
      mapObj: '',
      HighLightedLayer: '',
      view: '',
      mapObject: '',
      MajorBasin: '',
      AllLayers: '',
      TimeSeriesLayerCollection: [],
      selectedFilesOnAYear: [],
      cardBox: {
        header: '',
        rainy: '',
        hail: '',
        Lightning: '',
        Supercell: '',
        showCardBox: false,
        animationClass: {
          animate__backInDown: false,
          animate__fadeOutUp: false,
          cardBoxCSS: true
        }
      },
      rainySVG,
      hailSVG,
      flashSVG,
      stormSVG
    }
  },
  methods: {
    ...mapActions(["SlicingThreddsCatalog", "getLatestHIWATInfo"]),
    ...mapMutations([
      'HIWATDate']),
    mapInitilization() {
      // let osm = new TileLayer({
      //   source: new OSM({attributions: [],}),
      // });

      let view = new View({
        center: [9388155.512006583, 3291367.8109067543],
        zoom: 4
      });
      var map = new Map({
        layers: [],
        // target: this.$refs['map-root'],
        target: 'map-container2',
        view: view,
      });
      // map.addLayer(osm);

      // var datasource = 'http://110.34.30.197:8080/geoserver/HKH/wms';
      // var HighLightedLayer = new TileLayer({
      //   id: "highlightedlayer",
      //   title: "highlightedlayer",
      //   source: new TileWMS({
      //     url: datasource,
      //     hidpi: false,
      //     params: {
      //       'VERSION': '1.1.1',
      //     },
      //     serverType: 'geoserver'
      //   })
      // });
      //
      // HighLightedLayer.setZIndex(99);
      // map.addLayer(HighLightedLayer);
      // this.HighLightedLayer = HighLightedLayer;
      this.mapObject = map;
      this.view = view;
      this.mapObject.addControl(
          new Control({
            element: document.getElementById('LayerInfoDiv')
          })
      );
      this.addTimeDimensionLayer();
      window.mapObject = map;
      map.getView().fit([9862507.17646143, 3059162.6436974197, 10292749.298399033, 3326321.948911604], map.getView());
    },
    addGeoCodingAndInteractionBar() {
      var map = this.mapObject;

// Set the control grid reference
      var search = new SearchNominatim({
        polygon: true,
        reverse: false,
        position: true,	// Search, with priority to geo position,
        // maxHistory: -1,
        className: 'OSMBasedGeocodingHIWATExtreme',
      });

// search.set('copy', false)

      var GeoCodingAndDrawLayer = new VectorLayer({
        source: new VectorSource(),
        displayInLayerSwitcher: false,
        baseLayer: false,
        zIndex: 999
      });
      map.addLayer(GeoCodingAndDrawLayer);

      map.addControl(search);


// Select feature when click on the reference index
      search.on('select', function (e) {	// console.log(e);
        // GeoCodingAndDrawLayer.getSource().clear();
        removePreviousSearchFeature();
        // Check if we get a geojson to describe the search
        if (e.search.geojson) {
          var format = new GeoJSON();
          var f = format.readFeature(e.search.geojson, {
            dataProjection: "EPSG:4326",
            featureProjection: map.getView().getProjection()
          });
          delete e.search.geojson;
          f.setProperties(e.search);
          GeoCodingAndDrawLayer.getSource().addFeature(f);
          var view = map.getView();
          var resolution = view.getResolutionForExtent(f.getGeometry().getExtent(), map.getSize());
          var zoom = view.getZoomForResolution(resolution);
          var center = ol_extent_getCenter(f.getGeometry().getExtent());
          // redraw before zoom
          setTimeout(function () {
            view.animate({
              center: center,
              zoom: Math.min(zoom, 16)
            });
          }, 100);
        } else {
          map.getView().animate({
            center: e.coordinate,
            zoom: Math.max(map.getView().getZoom(), 16)
          });
        }

        function UpDateVectorLayerStyle() {
          GeoCodingAndDrawLayer.getSource().forEachFeature(function (feature) {
            let StyleObj = null;
            if (feature.getProperties().osm_id) {
              StyleObj = [
                new Style({
                  stroke: new Stroke({
                    color: [0, 0, 0, 0],
                    opacity: 1,
                    width: 3
                  }),
                  fill: new Fill({
                    color: '#e5e5ff00'
                  })
                  // Commented to only see the lines
                  //,fill: new ol.style.Stroke ({
                  //  color: [155, 155, 155, 0.4]
                  //})
                }),
                // Dash white lines (second style, on the top)
                new Style({
                  image: new Icon({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: ImageIcon,
                    size: toSize([40, 45]),
                    // offset:[20,20]
                  }),
                  stroke: new Stroke({
                    color: [0, 0, 255, 1.0],
                    opacity: 1,
                    width: 3,
                    lineDash: [4, 8, 4, 8]
                  }),
                  fill: new Fill({
                    color: '#e5e5ff40'
                  })
                })
              ];

            } else {
              StyleObj = new Style({
                image: new CircleStyle({
                  radius: 5,
                  stroke: new Stroke({
                    color: [255, 0, 0, 1],
                    opacity: 1,
                    width: 2
                  }),
                  fill: new Fill({
                    color: '#e5e5ff50'
                  }),
                }),
                stroke: new Stroke({
                  color: [255, 0, 0, 1],
                  opacity: 1,
                  width: 2
                }),
                fill: new Fill({
                  color: '#e5e5ff50'
                })
                // Commented to only see the lines
                //,fill: new ol.style.Stroke ({
                //  color: [155, 155, 155, 0.4]
                //})
              });

            }
            feature.setStyle(StyleObj);

          });
        }

        UpDateVectorLayerStyle();
      });

      function removePreviousSearchFeature() {
        var features = GeoCodingAndDrawLayer.getSource().getFeatures();
        features.forEach(function (f) {
          if (f.getProperties().osm_id) {
            GeoCodingAndDrawLayer.getSource().removeFeature(f);
          }
        });
        // console.log(features);
      }
    },
    async addTimeDimensionLayer() {
      let mapObject = this.mapObject;
      let aa = await this.getLatestHIWATInfo();
      for (let obj1 of HIWAT_Extreme_Layer_List) {
        console.log(obj1);
        let layerObj = new ImageLayer({
          id: obj1.id,
          title: obj1.title,
          visible: obj1.visible,
          zIndex: obj1.zIndex,
          baseLayer: false,
          displayInLayerSwitcher: false,
          legendPath: 'http://tethys.icimod.org:8080/geoserver/HIWAT_Extreme/wms?service=WMS&version=1.1.0&request=GetLegendGraphic&layer=HIWAT_Extreme%3AgapaNapa&FORMAT=image/png&style=' + obj1.styles,
          source: new ImageWMS({
            url: 'http://tethys.icimod.org:8080/geoserver/HIWAT_Extreme/wms',
            params: {
              'LAYERS': 'HIWAT_Extreme:gewogBhutan',
              // 'LAYERS': 'HIWAT_Extreme:gapaNapa',
              'STYLES': obj1.styles
            },
            serverType: 'geoserver',
          }),
        });
        this.mapObject.addLayer(layerObj);
        new LayerSwitcher(obj1.layerCollectionDivClass, layerObj, true, true, 'withOpacSlider');
      }
      let threddsURL = aa.thredds_urls.hourly;
      let dateYYYYMMDD = threddsURL.split("hkhEnsemble_")[1].slice(0, 8);
      let newFormat = dateYYYYMMDD.slice(0, 4) + "-" + dateYYYYMMDD.slice(4, 6) + "-" + dateYYYYMMDD.slice(6, 8) + " 13:00"
      this.$store.commit('setHIWATDate', newFormat);

      for (let obj2 of HIWAT_Latest_54_hour_data) {
        let NewSLD = GetPercentageSLD(obj2.layerName);
        let legendUrl = threddsURL + `?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetLegendGraphic&WIDTH=10&HEIGHT=230&LAYERS=${obj2.layerName}&SLD_BODY=${encodeURIComponent(NewSLD)}`;

        var mm = new TimeDimensionTile({
          id: obj2.id,
          title: obj2.title,
          visible: obj2.visible,
          opacity: 1,
          legendPath: legendUrl,
          showlegend: true,
          showControlPanel: true,
          ThreddsDataServerVersion: "5",
          timeSliderSize: "small",
          alignTimeSlider: "left",
          baseLayer: false,
          displayInLayerSwitcher: false,
          source: {
            url: threddsURL,
            params: {
              'VERSION': '1.1.1',
              'LAYERS': obj2.layerName,
              'SLD_BODY': NewSLD,
            }
          }
        });
        await mm.init().then((val) => {
              mapObject.addThreddsLayer(val);
              new LayerSwitcher(".layerCollection1", mm, true, true, 'withOpacSlider');
            },
            (error) => {
              console.error(error);
            });
      }
      console.log(aa.thredds_urls.hourly);
    },
    addBaseMap() {
      var map = this.mapObject;
      // var stamen = new TileLayer(
      //     {
      //       title: "Watercolor",
      //       baseLayer: true,
      //       visible: false,
      //       displayInLayerSwitcher: true,
      //       source: new Stamen({
      //         layer: 'watercolor',
      //         attributions: []
      //       })
      //     });
      let osm = new TileLayer({
        title: "OSM",
        baseLayer: true,
        displayInLayerSwitcher: true,
        source: new OSM({attributions: [],}),
        visible: true
      });

      let bingLayer = new TileLayer({
        visible: false,
        baseLayer: true,
        title: "Bing Maps",
        displayInLayerSwitcher: true,
        source: new BingMaps({
          key: 'ApTJzdkyN1DdFKkRAE6QIDtzihNaf6IWJsT-nQ_2eMoO4PN__0Tzhl2-WgJtXFSp',
          imagerySet: 'AerialWithLabels'
        })
      });
      map.addLayer(osm);
      // map.addLayer(stamen);
      map.addLayer(bingLayer);
      // map.addControl(new LayerSwitcherImage());
    },
    MapInformationofMaximumLabeledLayers() {
      var this_ = this;
      var map = this.mapObject;

      map.on('singleclick', function (evt) {
        var flagCount = 0;
        var pixel = map.getEventPixel(evt.originalEvent);
        var selLayer = null;
        map.forEachLayerAtPixel(pixel, function (layer) {
          var prop = layer.getProperties();
          if (isInterestedLayer(prop.id)) {
            selLayer = layer;
            flagCount = flagCount + 1;
          }
        });
        if (flagCount) {


          const viewResolution = /** @type {number} */ (map.getView().getResolution());
          const url = selLayer.getSource().getFeatureInfoUrl(
              evt.coordinate,
              viewResolution,
              'EPSG:3857',
              {'INFO_FORMAT': 'application/json'}
          );
          if (url) {
            fetch(url)
                .then((response) => response.text()).then((json) => {

              let dataJSON = JSON.parse(json);
              if (dataJSON.features.length) {
                let featureProp = dataJSON.features[0].properties;
                this_.cardBox.showCardBox = true;
                this_.cardBox.header = featureProp.GaPa_NaPa;
                this_.cardBox.rainy = featureProp.hraccumulated_preciptation;
                this_.cardBox.hail = featureProp.moderate_hail;
                this_.cardBox.Lightning = featureProp.lightning;
                this_.cardBox.Supercell = featureProp.moderate_supercell;
                console.log(dataJSON);
                this_.cardBox.animationClass.animate__fadeOutUp = false;
                this_.cardBox.animationClass.animate__fadeInDown = true;
              } else {
                this_.cardBox.animationClass.animate__fadeInDown = false;
                this_.cardBox.animationClass.animate__fadeOutUp = true;
                setTimeout(function () {
                  this_.cardBox.showCardBox = false;
                }, 1000);

                this_.$notify({
                  title: 'Warning',
                  message: 'Please select a feature with in a country boundary',
                  type: 'warning'
                });
              }
            });
          }
        }
      });
    }
  },
  created() {
  },
  mounted() {
    this.mapInitilization();
    this.addGeoCodingAndInteractionBar();
    this.addBaseMap();
    this.mapObject.addControl(new LayerSwitcherImage());
    this.MapInformationofMaximumLabeledLayers();
  },
}
</script>

<style>
#map-container2 {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}


#map-container2 .ol-control.ol-layerswitcher-image.ol-collapsed {
  top: 1em;
  transition: none;
}

.ol-layerswitcher-image button {
  display: none !important;
}

.ol-layerswitcher-image.ol-collapsed .panel {
  display: unset;
}

#map-container2 .ol-viewport {
  border-radius: 5px;
}


/* OSM Based Geocoding*/
.ol-search ul li {
  border-bottom: 1px solid lightgray;

  padding: 10px 5px 10px 5px !important;
  flex: 1;
  max-width: 608px;
  white-space: normal !important;
  overflow: unset;
  flex-grow: 1;
  text-overflow: ellipsis;
}

.ol-search ul li:last-child {
  border-bottom: none;
  border-radius: 0px;
}

.ol-search ul {
  list-style: none;
  cursor: pointer;
  padding: 0px 5px 0px 5px !important;
  margin: 0;
  display: flex;
  flex-direction: column;
  clear: both;
  cursor: pointer;
  max-width: 618px;
  overflow-x: hidden;
  z-index: 1;
  background: #fff;
  font-size: 13px;
}

.ol-search {
  z-index: 999;
}

.ol-search {
  top: 4.1em;
  left: 0.5em;
  /*width: 500px;*/
}

.ol-search input {
  width: 600px;
}


.ol-control.ol-bar {
  left: 3.2em;
  top: 6em;
}


#LayerInfoDiv {
  position: absolute;
  /*top: 50%;*/
  left: 50%;
  transform: translate(-50%, 10px);
}


.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 730px;
}


.infographicsIcon {
  height: 29px;
}

.infographics-item.long-row {
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  padding: 3px 10px;
  margin: 0 10px;
  border: none;
  border-bottom: 1px solid #d8dbdd;
  text-align: center;
  display: flex;
}

.infographics-item.long-row .value-wrapper {
  margin-left: 8px;
  text-align: left;
}

.infographics-item .value-wrapper .value-title {
  font-weight: 400;
  color: #494f54;
  font-size: .94em;
  font-family: Nunito, Arial, sans-serif;
}

.infographics-item .value-wrapper .value {
  margin-top: auto;
  color: #6c757d;
  font-size: .72em;
  font-weight: 600;
  font-family: Montserrat, open sans, sans-serif;
}

.infograph-card.body {
  padding: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;
}

</style>
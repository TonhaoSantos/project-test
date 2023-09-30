<template>
  <div v-if="list.length" class="chart-map" ref="chartdiv">
  </div>
</template>

<script setup>
import * as am5 from '@amcharts/amcharts5'
import * as am5map from "@amcharts/amcharts5/map"
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow"
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  hasLegend: {
    type: Boolean,
    default: true
  },
  zoomLevel: {
    type: Number,
    default: 8.5
  },
  long: {
    type: Number,
    default: -60
  },
  lat: {
    type: Number,
    default: 0
  }
})

const groupData = ref([])
const chartdiv = ref(null)

let root = null
let worldSeries = []
let chart = []


onMounted(async () => {
  groupData.value = props.list
  await startLib()
})

async function startLib () {
  // Create root and chart
  root = am5.Root.new(chartdiv.value)

  // Set themes
  root.setThemes([am5themes_Animated.new(root)])

  // Create chart
  chart = root.container.children.push(am5map.MapChart.new(root, {
    homeZoomLevel: props.zoomLevel,
    homeGeoPoint: {
      longitude: props.long,
      latitude: props.lat
    }
  }))

  // Create world polygon series
  worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow
  }))

  worldSeries.mapPolygons.template.setAll({
    fill: am5.color(0xaaaaaa)
  })

  worldSeries.events.on("datavalidated", () => {
    chart.goHome()
  })

  // Add legend
  if (props.hasLegend) await mountLegend()

  root = root
}

async function mountLegend () {
  let legend = chart.children.push(am5.Legend.new(root, {
    useDefaultMarker: true,
    centerX: am5.p50,
    x: am5.p50,
    centerY: am5.p100,
    y: am5.p100,
    dy: -20,
    background: am5.RoundedRectangle.new(root, {
      fill: am5.color(0xffffff),
      fillOpacity: 0.2
    })
  }))

  legend.valueLabels.template.set("forceHidden", true)

  // Create series for each group
  var colors = am5.ColorSet.new(root, {
    step: 2
  })
  colors.next()

  am5.array.each(groupData.value, function (group) {
    var ids = []
    var color = colors.next()

    am5.array.each(group.data, function(country) {
      ids.push(country.id)
    })

    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      include: ids,
      name: group.name,
      fill: color
    }))

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "[normal]{name}[/]\n[bold]Area: [normal]{area}Km²[/]\n[bold]Population [normal]{population}",
      interactive: true,
      fill: color,
      strokeWidth: 2
    })

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.Color.brighten(color, -0.3)
    })

    polygonSeries.mapPolygons.template.events.on("pointerout", function(ev) {
      ev.target.series.mapPolygons.each(function(polygon) {
        polygon.states.applyAnimate("default")
      })
    })

    polygonSeries.data.setAll(group.data)

    legend.data.push(polygonSeries)
  })
}
</script>

<style lang="scss" scoped>
.chart-map {
  width: 100%;
  height: 500px;
  border: 1px solid;
}
</style>

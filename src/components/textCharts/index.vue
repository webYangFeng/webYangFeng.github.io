<!-- @format -->

<template>
  <div class="textChartMain">
    <div id="textChart"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import { defineProps, toRefs, onMounted } from "vue";
let props = defineProps({
  text: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: false,
    default: "3000",
  },
  fontSize: {
    type: String,
    required: false,
    default: "80",
  },
  color: {
    type: String,
    required: false,
    default: "#000",
  },
});
let { text, duration, fontSize, color } = toRefs(props);
onMounted(() => {
  var chartDom: HTMLElement = document.getElementById("textChart") as HTMLElement;
  var myChart = echarts.init(chartDom);
  var option: any = {
    graphic: {
      elements: [
        {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: text.value,
            fontSize: fontSize.value,
            fontWeight: "bold",
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: "transparent",
            stroke: color.value,
            lineWidth: 1,
          },
          keyframeAnimation: {
            duration: duration.value,
            // loop: true,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: "transparent",
                  lineDashOffset: 200,
                  lineDash: [200, 0],
                },
              },
              {
                // Stop for a while.
                percent: 0.8,
                style: {
                  fill: "transparent",
                },
              },
              {
                percent: 1,
                style: {
                  fill: color.value,
                },
              },
            ],
          },
        },
      ],
    },
  };
  myChart.setOption(option);
});
</script>
<style lang="scss">
.textChartMain {
  #textChart {
    width: 100vw;
    height: 100vh;
  }
}
</style>

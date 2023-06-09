import { onBeforeUnmount, ref } from 'vue'
import Highcharts from 'highcharts/highcharts'

export default function () {
  const chart = ref('null')

  const createChart = async ({ data, categories }) => {
    chart.value = Highcharts.chart('container', {
      chart: {
        type: 'column',
        backgroundColor: '#fffaf5'
      },
      title: {
        text: ''
      },
      tooltip: {
        backgroundColor: '#382314',
        borderWidth: 0,
        style: {
          color: '#fff',
          fontSize: 16
        },
        shape: 'square',
        formatter: function () {
          return '$' + this.y
        }
      },
      xAxis: {
        categories: categories,
        lineWidth: 0
      },
      credits: {
        enabled: false
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      series: [{
        color: '#ec775f',
        borderRadius: 5,
        pointWidth: 35,
        data: data
      }]
    })
  }

  onBeforeUnmount(async () => {
    chart.value.destroy()
  })

  return {
    createChart
  }
}
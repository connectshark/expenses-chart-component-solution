import { onBeforeUnmount, onMounted, ref } from 'vue'
import Highcharts from 'highcharts/highcharts'

export default function () {
  const chart = ref('null')

  const createChart = async () => {
    chart.value = Highcharts.chart('container', {
      chart: {
        type: 'column'
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
        formatter: function () {
          return '$' + this.y
        }
      },
      xAxis: {
        categories: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
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
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        states: {
          hover: {
            color: '#76b5bc'
          }
        }
      }]
    })
  }

  onMounted(createChart)
  onBeforeUnmount(async () => {
    chart.value.destroy()
  })
}
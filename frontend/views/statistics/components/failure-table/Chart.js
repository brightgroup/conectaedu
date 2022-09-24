import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { CHART_COLORS } from 'constants/Chart'
import { getChartLabel } from 'utils/Chart'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
}

export const BarChart = ({ labels = [], subjects = [], statistics }) => {
  const data = {
    labels: labels.map(item => getChartLabel(item)),
    datasets: subjects.map((subject, index) => {
      return {
        label: subject,
        data: labels.map(item => statistics[item]?.[subject]?.failed),
        backgroundColor: CHART_COLORS[index],
      }
    }),
  }

  return (
    <div className="chart-container">
      <Bar options={options} data={data} />
    </div>
  )
}

export const BarChart2 = ({ labels = [], subjects = [], statistics }) => {
  const data = {
    labels: labels.map(item => getChartLabel(item)),
    datasets: subjects.map((subject, index) => {
      return {
        label: subject,
        data: labels.map(item => statistics[item]?.[subject]?.failedPercentage),
        backgroundColor: CHART_COLORS[index],
      }
    }),
  }

  return (
    <div className="chart-container">
      <Bar options={options} data={data} />
    </div>
  )
}

// import React from 'react'
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
// import { Bar } from 'react-chartjs-2'
// import { firstLetterToUpperCase } from 'utils/Text'
// import { CHART_COLORS } from 'constants/Chart'

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//     },
//   },
// }

// export const BarChart = ({ labels = [], subjects = [] }) => {
//   const data = {
//     labels: labels.map(item => firstLetterToUpperCase(item.slice(0, 12).toLowerCase()) + '...'),
//     datasets: subjects.map((subject, index) => ({
//       label: subject,
//       data: labels.map((item, index) => index + 1),
//       backgroundColor: CHART_COLORS[index],
//     })),
//   }

//   return (
//     <div className="chart-container">
//       <Bar options={options} data={data} />
//     </div>
//   )
// }

// definiticos

// import React from 'react'
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
// import { Bar } from 'react-chartjs-2'
// import { CHART_COLORS } from 'constants/Chart'
// import { getChartLabel } from 'utils/Chart'

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//     },
//   },
// }

// export const BarChart = ({ labels = [], subjects = [], statistics }) => {
//   const data = {
//     labels: labels.map(item => getChartLabel(item)),
//     datasets: subjects.map((subject, index) => {
//       return {
//         label: subject,
//         data: labels.map(item => statistics[item]?.[subject]?.failed),
//         backgroundColor: CHART_COLORS[index],
//       }
//     }),
//   }

//   return (
//     <div className="chart-container">
//       <Bar options={options} data={data} />
//     </div>
//   )
// }

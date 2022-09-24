import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { CHART_COLORS } from 'constants/Chart'

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

export const BarChart = ({ data }) => {
  return (
    <div className="chart-container">
      <Bar options={options} data={data} />
    </div>
  )
}

export const BarChart2 = ({ courses, labels, statistics, courses2 }) => {
  const getFailCount = (failedStudents, areas) => {
    let count = 0

    for (const key in failedStudents) {
      if (failedStudents[key] === areas) count += 1
    }
    return count
  }
  const getFailRate = (course, areas) => {
    const failedStudents = statistics[course]

    return failedStudents ? getFailCount(failedStudents, areas) : 0
  }
  const data = {
    labels: courses,
    datasets: labels.map(({ value }, index) => ({
      label: !index ? 'Ninguna' : index === labels.length - 1 ? '10 o más' : value,
      data: courses2.map(course => getFailRate(course, value)),
      backgroundColor: CHART_COLORS[index],
    })),
  }

  return (
    <div className="chart-container">
      <Bar options={options} data={data} />
    </div>
  )
}

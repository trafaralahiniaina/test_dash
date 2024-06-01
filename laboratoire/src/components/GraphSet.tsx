import React from 'react';
import { Line } from 'react-chartjs-2';

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const GraphSet: React.FC = () => {
  return (
    <div style={{ height: '300px', marginTop: '40px' }}>
      <Line
        data={{
          labels: ['01 Jan', '15 Jan', '01 Feb', '15 Feb', '01 March', '15 March'],
          datasets: [
            {
              label: 'Sessions dataset',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: 'rgba(13, 202, 240, 1)',
              pointHoverBackgroundColor: 'white',
              borderWidth: 2,
              data: [
                getRandomNumber(50, 300),
                getRandomNumber(50, 300),
                getRandomNumber(50, 300),
                getRandomNumber(50, 300),
                getRandomNumber(50, 300),
                getRandomNumber(50, 300),
              ],
              fill: true,
            },
            {
              label: 'Customer dataset',
              borderColor: 'rgba(25, 135, 84, 1)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [
                getRandomNumber(50, 200),
                getRandomNumber(50, 200),
                getRandomNumber(50, 200),
                getRandomNumber(50, 200),
                getRandomNumber(50, 200),
                getRandomNumber(50, 200),
                getRandomNumber(50, 200),
              ],
            },
            {
              label: 'Customer puchases dataset',
              borderColor: 'rgba(220, 53, 69, 1)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 1,
              borderDash: [8, 5],
              data: [64, 55, 34, 65, 86, 91, 100],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                drawOnChartArea: false,
              },
            },
            y: {
              beginAtZero: true,
              max: 350,
              ticks: {
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
              },
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
          },
        }}
      />
    </div>
  );
};

export default GraphSet;
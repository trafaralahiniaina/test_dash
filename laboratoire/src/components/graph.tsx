// Graph.tsx
'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import DropdownMenu from './DropdownMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Customers Q1 & Q2',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        data: [35, 49, 66, 72, 80, 85, 90, 95],
      },
    ],
  };

const chartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      min: 20,
      max: 120,
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 1,
      tension: 0.4,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

const Graph: React.FC = () => {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="card bg-primary text-white mb-4 rounded-md shadow-md">
        <div className="card-body p-4 d-flex justify-content-between align-items-start">
          <div>
            <div className="fs-4 fw-semibold">
              66K
              <span className="fs-6 ms-2 fw-normal">
                (+13.6%
                <FontAwesomeIcon icon={faArrowUp} className="w-4" />
                )
              </span>
            </div>
            <div>Customers</div>
          </div>
          <DropdownMenu />
        </div>
        <div className="mt-3 mx-3" style={{ height: '70px' }}>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
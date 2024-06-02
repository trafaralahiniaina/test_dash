import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Line, Bar } from 'react-chartjs-2';
import { lineChartOptions } from './LineChartOptions';

interface CardWidgetProps {
  title: string;
  value: string;
  valueChange: number;
  valueChangeIcon: 'up' | 'down';
  chartType: 'line' | 'bar';
  chartData: {
    labels: string[];
    data: number[];
  };
}

const CardWidget: React.FC<CardWidgetProps> = ({
  title,
  value,
  valueChange,
  valueChangeIcon,
  chartType,
  chartData,
}) => {
  return (
    <div className="col-sm-6 col-lg-3">
      <Card bg={valueChangeIcon === 'up' ? 'primary' : 'danger'} text="white" className="mb-4">
        <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
          <div>
            <div className="fs-4 fw-semibold">
              {value}
              <span className="fs-6 ms-2 fw-normal">
                ({valueChange.toFixed(1)}%
                <FontAwesomeIcon icon={valueChangeIcon === 'up' ? faArrowUp : faArrowDown} fixedWidth />
                )
              </span>
            </div>
            <div>{title}</div>
          </div>
          <Dropdown align="end">
            <Dropdown.Toggle
              as="button"
              bsPrefix="btn"
              className="btn-link rounded-0 text-white shadow-none p-0"
              id={`dropdown-chart-${title.toLowerCase().replace(/\s/g, '')}`}
            >
              <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => alert(`This is action 1 for ${title}`)}>Action</Dropdown.Item>
              <Dropdown.Item onClick={() => alert(`This is action 2 for ${title}`)}>Another action</Dropdown.Item>
              <Dropdown.Item onClick={() => alert(`This is action 3 for ${title}`)}>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
        <div className="mt-3 mx-3" style={{ height: '70px' }}>
          {chartType === 'line' ? (
            <Line
              options={lineChartOptions}
              data={{
                labels: chartData.labels,
                datasets: [
                  {
                    label: `${title} Q1`,
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: chartData.data,
                  },
                ],
              }}
            />
          ) : (
            <Bar
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
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
              data={{
                labels: chartData.labels,
                datasets: [
                  {
                    label: `${title} Visits`,
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: chartData.data,
                    barPercentage: 0.6,
                  },
                ],
              }}
            />
          )}
        </div>
      </Card>
    </div>
  );
};

export { CardWidget };
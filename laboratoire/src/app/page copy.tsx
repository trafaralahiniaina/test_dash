/**
 * Functional component CardWidget that displays a card with title, value, value change, chart type, and chart data.
 */

'use client';

import React, { useState } from 'react';
import Graph from '@/components/graph';
import CardGraph from '@/components/CardGraph';
import { CardWidget } from '@/components/CardWidget';

import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Page: React.FC = () => {
  const [shownSet, switchSet] = useState('one');
  const [shownSetDemo1, switchSetDemo1] = useState('one');
  const [shownSetDemo2, switchSetDemo2] = useState('two');

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Graph />
      </div>
      <div className="row">
      <CardWidget
        title="Customers"
        value="66K"
        valueChange={13.6}
        valueChangeIcon="up"
        chartType="line"
        chartData={{ labels: ['January', 'February', 'March'], data: [35, 49, 66] }}
      />
      <CardWidget
        title="Revenue"
        value="€56K"
        valueChange={23.9}
        valueChangeIcon="up"
        chartType="line"
        chartData={{ labels: ['January', 'February', 'March'], data: [15, 29, 56] }}
      />
      <CardWidget
        title="Growth Rate"
        value="42.6%"
        valueChange={2.7}
        valueChangeIcon="up"
        chartType="line"
        chartData={{ labels: ['January', 'February', 'March'], data: [36, 45, 43] }}
      />
      <CardWidget
        title="Sessions"
        value="51K"
        valueChange={-11.6}
        valueChangeIcon="down"
        chartType="bar"
        chartData={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
          data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
        }}
      />
    </div>
      <CardGraph minified={false} shownSet={shownSet} switchSet={switchSet} />
    </div>
  );
};

export default Page;
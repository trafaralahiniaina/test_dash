'use client';

import React, { useState } from 'react';
import Graph from '../components/graph';
import CardGraph from '@/components/CardGraph';
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
      <CardGraph minified={false} shownSet={shownSet} switchSet={switchSet} />
    </div>
  );
};

export default Page;
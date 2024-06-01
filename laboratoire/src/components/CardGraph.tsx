import React, { Dispatch, SetStateAction } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import GraphSet from './GraphSet';

interface CardGraphProps {
  minified?: boolean;
  shownSet: string;
  switchSet: Dispatch<SetStateAction<string>>;
}

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const CardGraph: React.FC<CardGraphProps> = ({ minified, shownSet, switchSet }) => {
  return (
    <Card className="mb-4 bg-dark card-with-border text-white">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0">Customer Sessions</h4>
            <div className="small">January - March 2023</div>
          </div>
          <div className="d-none d-md-block">
            {!minified && (
              <ButtonGroup aria-label="Graph toolbar" className="mx-3">
                <input
                  className="btn-check"
                  id="option1"
                  type="radio"
                  name="options"
                  autoComplete="off"
                  onClick={() => switchSet('two')}
                />
                <label className="btn btn-outline-secondary" htmlFor="option1">
                  Day
                </label>
                <input
                  className="btn-check"
                  id="option2"
                  type="radio"
                  name="options"
                  autoComplete="off"
                  defaultChecked
                  onClick={() => switchSet('one')}
                />
                <label className="btn btn-outline-secondary" htmlFor="option2">
                  Month
                </label>
                <input
                  className="btn-check"
                  id="option3"
                  type="radio"
                  name="options"
                  autoComplete="off"
                  onClick={() => switchSet('three')}
                />
                <label className="btn btn-outline-secondary" htmlFor="option3">
                  Year
                </label>
              </ButtonGroup>
            )}
            <Button variant="primary" onClick={() => alert('Downloading the data')}>
              <FontAwesomeIcon icon={faDownload} fixedWidth />
            </Button>
          </div>
        </div>
        {shownSet === 'one' ? <GraphSet /> : <GraphSet />}
      </Card.Body>
      {/* Reste du contenu de la CardGraph */}
    </Card>
  );
};

export default CardGraph;
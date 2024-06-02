// components/RecentCustomersTable.tsx
import React from 'react';
import { Card, Table, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlipay, faCcAmex, faCcDinersClub, faCcJcb, faCcMastercard, faCcVisa, faCcApplePay, faSwift } from '@fortawesome/free-brands-svg-icons';
import { Customer, CardType } from '../types/customer';

const CardIconByType: { [key in CardType]: any } = {
  'china-unionpay': faAlipay,
  amex: faCcAmex,
  'diners-club-enroute': faCcDinersClub,
  'diners-club-international': faCcDinersClub,
  jcb: faCcJcb,
  mastercard: faCcMastercard,
  visa: faCcVisa,
  solo: faCcApplePay,
  switch: faSwift,
};

const getCardIcon = (cardType: string): any => {
  const cardTypeMap: { [key: string]: CardType } = {
    'china-unionpay': 'china-unionpay',
    'amex': 'amex',
    'diners-club-enroute': 'diners-club-enroute',
    'diners-club-international': 'diners-club-international',
    'jcb': 'jcb',
    'mastercard': 'mastercard',
    'visa': 'visa',
    'solo': 'solo',
    'switch': 'switch',
  };

  const matchingCardType = cardTypeMap[cardType];
  return matchingCardType ? CardIconByType[matchingCardType] : null;
};

const RecentCustomersTable: React.FC<{ customers: Customer[] }> = ({ customers }) => {
  return (
    <Card className="mb-4 bg-dark card-with-border text-white">
      <Card.Header>Recent Customers</Card.Header>
      <Card.Body>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Registered</th>
              <th>Payment</th>
              <th>Industry</th>
              <th>Purchased</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.guid}>
                <td>{customer.full_name}</td>
                <td>{customer.email}</td>
                <td>{customer.company_name}</td>
                <td>{customer.registered}</td>
                <td>
                  <FontAwesomeIcon
                    icon={getCardIcon(customer.card_type)}
                    size="lg"
                    fixedWidth
                  />
                </td>
                <td>{customer.industry}</td>
                <td>{customer.purchased_total} {customer.currency_code}</td>
                <td>
                  <ProgressBar
                    variant={customer.graph_hex}
                    now={customer.bar_progress}
                    label={`${customer.bar_progress}%`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default RecentCustomersTable;
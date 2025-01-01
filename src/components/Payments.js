import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import '../styles/payments.css';

const Payments = () => {
  const [payments] = useState([
    { id: 'LA 0218', clientName: 'Lucid', projectName: 'Alpino - Bootstrap 4', date: '07 March, 2021', type: 'paypal', amount: 4205 },
    { id: 'LA 0220', clientName: 'Lucid', projectName: 'Nexa Wordpress', date: '25 Jun, 2021', type: 'mastercard', amount: 5205 },
    { id: 'LA 0222', clientName: 'Lucid', projectName: 'Lucid HR Management', date: '12 July, 2021', type: 'paypal', amount: 2000 },
    { id: 'LA 0312', clientName: 'Lucid', projectName: 'sQuare - Bootstrap 4 A...', date: '13 July, 2021', type: 'paypal', amount: 10000 },
    { id: 'LA 0389', clientName: 'Lucid', projectName: 'Compass Dashboard', date: '27 July, 2021', type: 'visa', amount: 1205 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage] = useState(10);

  const getPaymentIcon = (type) => {
    switch(type) {
      case 'paypal':
        return <img src="/paypal.png" alt="PayPal" className="payment-icon" />;
      case 'mastercard':
        return <img src="/master.png" alt="Mastercard" className="payment-icon" />;
      case 'visa':
        return <img src="/visa.png" alt="Visa" className="payment-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="payments-container">
      <div className="header">
        <div className="breadcrumb">
          <FaHome />
          <span>/ Accounts / Payments</span>
        </div>
        <h2>Payments</h2>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="clear-btn" onClick={() => setSearchTerm('')}>
          Clear
        </button>
      </div>

      <table className="payments-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client Name</th>
            <th>Project Name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.clientName}</td>
              <td>{payment.projectName}</td>
              <td>{payment.date}</td>
              <td>{getPaymentIcon(payment.type)}</td>
              <td>${payment.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span>Rows per page: </span>
        <select value={rowsPerPage}>
          <option value={10}>10</option>
        </select>
        <span>1-5 of 5</span>
        <div className="pagination-controls">
          <button disabled>&lt;&lt;</button>
          <button disabled>&lt;</button>
          <button disabled>&gt;</button>
          <button disabled>&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Payments; 
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import '../styles/expense-report.css';

const ExpenseReport = () => {
  const [expenses] = useState([
    {
      id: 1,
      item: 'Dell Monitor 22 inch',
      orderBy: 'Ava Alexander',
      from: 'Flipkart India',
      date: '07 March, 2021',
      paidBy: 'mastercard',
      status: 'APPROVED',
      amount: 205
    },
    {
      id: 2,
      item: 'HP Computer',
      orderBy: 'Marshall Nichols',
      from: 'Amazon',
      date: '07 March, 2021',
      paidBy: 'paypal',
      status: 'PENDING',
      amount: 205
    },
    {
      id: 3,
      item: 'Logitech USB Mouse, Keyboa...',
      orderBy: 'Marshall Nichols',
      from: 'Amazon',
      date: '28 July, 2021',
      paidBy: 'paypal',
      status: 'APPROVED',
      amount: 4205
    },
    {
      id: 4,
      item: 'MacBook Pro',
      orderBy: 'Debra Stewart',
      from: 'Amazon',
      date: '17 Jun, 2021',
      paidBy: 'visa',
      status: 'APPROVED',
      amount: 800
    },
    {
      id: 5,
      item: 'Zebronics Desktop',
      orderBy: 'Marshall Nichols',
      from: 'ebay UK',
      date: '22 July, 2021',
      paidBy: 'paypal',
      status: 'PENDING',
      amount: 355
    }
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
    <div className="expense-report-container">
      <div className="headers">
        <div className="breadcrumb">
          <FaHome /> / Report / Expense Report
        </div>
        <h2>Expense Report</h2>
      </div>

      <div className="search-section">
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

      <table className="expense-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Order By</th>
            <th>From</th>
            <th>Date</th>
            <th>Paid By</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.item}</td>
              <td>{expense.orderBy}</td>
              <td>{expense.from}</td>
              <td>{expense.date}</td>
              <td>{getPaymentIcon(expense.paidBy)}</td>
              <td>
                <span className={`status-badge ${expense.status.toLowerCase()}`}>
                  {expense.status}
                </span>
              </td>
              <td>${expense.amount}</td>
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

export default ExpenseReport; 
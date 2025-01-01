import React, { useState } from 'react';
import '../styles/Expenses.css';

const Expenses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage] = useState(10);
  const [currentPage] = useState(1);

  const expensesData = [
    {
      item: "Dell Monitor 22 inch",
      orderBy: "Ava Alexander",
      from: "Flipkart India",
      date: "07 March, 2021",
      paidBy: "mastercard",
      status: "APPROVED",
      amount: "$205"
    },
    {
      item: "HP Computer",
      orderBy: "Marshall Nichols",
      from: "Amazon",
      date: "07 March, 2021",
      paidBy: "paypal",
      status: "PENDING",
      amount: "$205"
    },
    {
      item: "Logitech USB Mouse",
      orderBy: "Marshall Nichols",
      from: "Amazon",
      date: "28 July, 2021",
      paidBy: "paypal",
      status: "APPROVED",
      amount: "$4,205"
    },
    {
      item: "MacBook Pro",
      orderBy: "Debra Stewart",
      from: "Amazon",
      date: "17 Jun, 2021",
      paidBy: "visa",
      status: "APPROVED",
      amount: "$800"
    },
    {
      item: "Zebronics Desktop",
      orderBy: "Marshall Nichols",
      from: "ebay UK",
      date: "22 July, 2021",
      paidBy: "paypal",
      status: "PENDING",
      amount: "$355"
    }
  ];

  const getPaymentIcon = (method) => {
    switch (method.toLowerCase()) {
      case 'mastercard':
        return <img src={'/master.png'} alt="mastercard" />;
      case 'paypal':
        return <img src={'/paypal.png'} alt="paypal" />;
      case 'visa':
        return <img src={'/visa.png'} alt="visa" />;
      default:
        return method;
    }
  };

  const getStatusBadge = (status) => {
    const statusClass = status.toLowerCase() === 'approved' ? 'status-approved' : 'status-pending';
    return <span className={`status-badge ${statusClass}`}>{status}</span>;
  };

  return (
    <div className="expenses-container">
      <div className="expenses-header">
        <div className="title-section">
          <button className="back-button">←</button>
          <h1>Expenses</h1>
        </div>
        <div className="breadcrumb">
          <span>🏠</span> / Accounts / Expenses
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="clear-button">Clear</button>
      </div>

      <div className="table-container">
        <table>
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
            {expensesData.map((expense, index) => (
              <tr key={index}>
                <td>{expense.item}</td>
                <td>{expense.orderBy}</td>
                <td>{expense.from}</td>
                <td>{expense.date}</td>
                <td>{getPaymentIcon(expense.paidBy)}</td>
                <td>{getStatusBadge(expense.status)}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="rows-per-page">
          Rows per page: 
          <select value={rowsPerPage}>
            <option value={10}>10</option>
          </select>
        </div>
        <div className="page-info">1-5 of 5</div>
        <div className="page-controls">
          <button disabled>⟪</button>
          <button disabled>⟨</button>
          <button disabled>⟩</button>
          <button disabled>⟫</button>
        </div>
      </div>
    </div>
  );
};

export default Expenses; 
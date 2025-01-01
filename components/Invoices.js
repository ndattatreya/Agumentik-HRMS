import React, { useState } from 'react';
import '../styles/Invoices.css';

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage] = useState(10);

  const invoicesData = [
    {
      invoiceNumber: "#LA-0218",
      client: "vPro Infoweb LLC.",
      date: "07 March, 2021",
      type: "paypal",
      status: "APPROVED",
      amount: "$4,205"
    },
    {
      invoiceNumber: "#LA-0218",
      client: "vPro Infoweb LLC.",
      date: "07 March, 2021",
      type: "paypal",
      status: "APPROVED",
      amount: "$4,205"
    },
    {
      invoiceNumber: "#LA-0220",
      client: "BT Technology",
      date: "25 Jun, 2021",
      type: "mastercard",
      status: "PENDING",
      amount: "$5,205"
    },
    {
      invoiceNumber: "#LA-0220",
      client: "BT Technology",
      date: "25 Jun, 2021",
      type: "mastercard",
      status: "PENDING",
      amount: "$5,205"
    },
    {
      invoiceNumber: "#LA-0222",
      client: "Core Infoweb Pvt.",
      date: "12 July, 2021",
      type: "paypal",
      status: "PENDING",
      amount: "$2,000"
    },
    {
      invoiceNumber: "#LA-0312",
      client: "AUR Tech LLC.",
      date: "13 July, 2021",
      type: "paypal",
      status: "APPROVED",
      amount: "$10,000"
    },
    {
      invoiceNumber: "#LA-0389",
      client: "Lucid Pvt.",
      date: "27 July, 2021",
      type: "visa",
      status: "APPROVED",
      amount: "$1,205"
    }
  ];

  const getPaymentIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'mastercard':
        return <img src={'/master.png'} alt="mastercard" />;
      case 'paypal':
        return <img src={'/paypal.png'} alt="paypal" />;
      case 'visa':
        return <img src={'/visa.png'} alt="visa" />;
      default:
        return type;
    }
  };

  const getStatusBadge = (status) => {
    const statusClass = status.toLowerCase() === 'approved' ? 'status-approved' : 'status-pending';
    return <span className={`status-badge ${statusClass}`}>{status}</span>;
  };

  return (
    <div className="invoices-container">
      <div className="search-sections">
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
              <th>Invoice Number</th>
              <th>Client</th>
              <th>Date</th>
              <th>Type</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoicesData.map((invoice, index) => (
              <tr key={index}>
                <td>{invoice.invoiceNumber}</td>
                <td>{invoice.client}</td>
                <td>{invoice.date}</td>
                <td>{getPaymentIcon(invoice.type)}</td>
                <td>{getStatusBadge(invoice.status)}</td>
                <td>{invoice.amount}</td>
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
        <div className="page-info">1-7 of 7</div>
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

export default Invoices; 
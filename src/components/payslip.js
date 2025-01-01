import React from 'react';
import { FaHome, FaPrint } from 'react-icons/fa';
import '../styles/payslip.css';

const Payslip = () => {
  const employeeData = {
    company: {
      name: 'Lucid Infoweb LLC.',
      address: '8117 Roosevelt St.',
      location: 'New Rochelle, NY 10801'
    },
    employee: {
      name: 'Francisco Vasquez',
      position: 'Web Designer',
      id: 'LA-0258'
    },
    invoice: {
      number: '1069',
      month: 'Jun, 2021'
    },
    earnings: [
      { id: 1, description: 'Basic Salary', amount: 1500 },
      { id: 2, description: 'House Rent Allowance (H.R.A.)', amount: 50 },
      { id: 3, description: 'Bonus', amount: 150 },
      { id: 4, description: 'Conveyance', amount: 80 },
      { id: 5, description: 'Other Allowance', amount: 80 }
    ],
    deductions: [
      { id: 1, description: 'Tax Deducted at Source (T.D.S.)', amount: 10 },
      { id: 2, description: 'ESIC', amount: 0 },
      { id: 3, description: 'Provident Fund', amount: 150 },
      { id: 4, description: 'C/Bank Loan', amount: 120 },
      { id: 5, description: 'Other Deductions', amount: 8 }
    ]
  };

  const totalEarnings = employeeData.earnings.reduce((sum, item) => sum + item.amount, 0);
  const totalDeductions = employeeData.deductions.reduce((sum, item) => sum + item.amount, 0);
  const netSalary = totalEarnings - totalDeductions;

  return (
    <div className="payslip-container">
      <div className="he">
        <div className="breadcrumb">
          <FaHome /> / Payroll / Payslip
        </div>
        <h2>Payslip</h2>
      </div>

      <div className="payslip-content">
        <div className="company-info">
          <div className="logo">LA</div>
          <div>
            <h3>{employeeData.company.name}</h3>
            <p>{employeeData.company.address}</p>
            <p>{employeeData.company.location}</p>
          </div>
          <div className="invoice-details">
            <h3>Invoice #{employeeData.invoice.number}</h3>
            <p>Salary Month: {employeeData.invoice.month}</p>
          </div>
        </div>

        <div className="employee-info">
          <img src="/employee-avatar.jpg" alt="Employee" className="avatar" />
          <div>
            <h3>{employeeData.employee.name}</h3>
            <p>{employeeData.employee.position}</p>
            <p>Employee ID: {employeeData.employee.id}</p>
          </div>
        </div>

        <div className="salary-details">
          <div className="earnings">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>EARNINGS</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.earnings.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
                    <td>${item.amount}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td>-</td>
                  <td>Basic Salary</td>
                  <td>${totalEarnings}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="deductions">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>DEDUCTIONS</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.deductions.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
                    <td>${item.amount}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td>-</td>
                  <td>Basic Salary</td>
                  <td>${totalDeductions}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="note">
          <h4>Note</h4>
          <p>Etey doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jalah plickers sifteo edmodo ifttt zimbra.</p>
        </div>

        <div className="summary">
          <div>Total Earnings: ${totalEarnings.toFixed(2)}</div>
          <div>Total Deductions: ${totalDeductions.toFixed(2)}</div>
          <div className="net-salary">Net Salary: ${netSalary.toFixed(2)}</div>
        </div>

        <div className="actions">
          <button className="print-btn"><FaPrint /></button>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Payslip; 
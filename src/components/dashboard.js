import React, { useEffect, } from 'react';
import DashboardItem from './dash-items';
import EmployeeTable from '../components/Employeetable';
import ApexCharts from 'apexcharts';
import {
  FaUser, FaUsers, FaDollarSign, FaMoneyBill,
} from 'react-icons/fa';
import '../styles/dashboard.css';

const Dashboard = () => {

  useEffect(() => {
    // Pie chart options
    const pieOptions = {
      series: [6, 4, 8],
      chart: {
        type: 'pie',
        width: '100%',
        height: 'auto',
      },
      labels: ['Dev', 'SEO', 'Design'],
      responsive: [{
        breakpoint: 1480,
        options: {
          chart: {
            width: 480,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
      title: {
        text: 'Income Analysis',
        align: 'center',
        margin: 10,
        offsetY: 10,
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
        },
      },
      subtitle: {
        text: '8% Higher than last month',
        align: 'center',
        offsetY: 40,
        style: {
          fontSize: '14px',
          color: '#666',
        },
      },
      dataLabels: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), pieOptions);
    chart.render();

    // Bar chart options
    const barOptions = {
      series: [{
        name: 'Developer',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'Marketing',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'Sales',
        data: [11, 17, 15, 15, 21, 14]
      }],
      chart: {
        type: 'bar',
        width: 1000,
        height: 400,
        stacked: true,
        stackType: '100%',
        toolbar: {
          show: false,
        }
      },
      title: {
        text: 'Salary Statistics',
        align: 'left',
        margin: 10,
        offsetY: 10,
        style: {
          fontSize: '15px',
          fontWeight: 'bolder',
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetX: 40
      },
      fill: {
        opacity: 1
      },
    };

    const barChart = new ApexCharts(document.querySelector("#barChart"), barOptions);
    barChart.render();

    // Line chart options
    const lineOptions = {
      series: [
        {
          name: 'Sales',
          data: [55, 65, 45, 55, 70, 60, 80, 70, 75, 85, 90, 100]
        },
        {
          name: 'Marketing',
          data: [60, 55, 75, 80, 65, 85, 95, 85, 70, 80, 75, 85]
        },
        {
          name: 'Design',
          data: [50, 65, 70, 60, 75, 80, 70, 75, 85, 90, 80, 75]
        },
        {
          name: 'Development',
          data: [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]
        }
      ],
      chart: {
        type: 'line',
        width: 600,
        height: 400,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
        }
      },
      title: {
        text: 'Total Salary by Unit',
        align: 'left'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yaxis: {
        title: {
          text: 'Salary'
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -10
      }
    };

    const lineChart = new ApexCharts(document.querySelector("#lineChart"), lineOptions);
    lineChart.render();

    // Donut chart options
    const donutOptions = {
      series: [76, 24],
      chart: {
        type: 'donut',
      },
      labels: ['Male', 'Female'],
      responsive: [{
        breakpoint: 1480,
        options: {
          chart: {
            width: 450,
            height: 450,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
      title: {
        text: 'Employee Structure',
        align: 'left',
        margin: 50,
        offsetY: 10,
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  return 100;
                },
              },
            },
          },
        },
      },
    };

    const donutChart = new ApexCharts(document.querySelector("#donutChart"), donutOptions);
    donutChart.render();

    return () => {
      chart.destroy();
      barChart.destroy();
      lineChart.destroy();
      donutChart.destroy();
    };
  }, []);

  return (
    <div className='dash'>
      <h2 className='h2'>HR Dashboard</h2>
      <div className="grid">
        <div className='dashboard'>
          <DashboardItem icon={<FaUser />} title="New Employee" value="22" />
          <DashboardItem icon={<FaUsers />} title="Total Employee" value="425" />
          <DashboardItem icon={<FaDollarSign />} title="Total Salary" value="$2.8M" />
          <DashboardItem icon={<FaMoneyBill />} title="Avg. Salary" value="$1,250" />
        </div>
        <div className='pie'>
          <div id="chart"></div>
        </div>
      </div>
      <div className='bar'>
        <div id="barChart"></div>
      </div>
      <div className='grid'>
        <div className='line'>
          <div id="lineChart"></div>
        </div>
        <div className='todo'>
          <h3>To Do List</h3>
          <p>This Month Task List</p>
          <ul>
            <li>
              <input type="checkbox" readOnly /> New Employee intro<br></br>
              <span>SCHEDULED FOR 3:00 P.M. ON JUN 2021</span>
            </li>
            <li>
              <input type="checkbox" /> Send email to CEO<br></br>
              <span>SCHEDULED FOR 4:30 P.M. ON JUN 2021</span>
            </li>
            <li>
              <input type="checkbox" /> New Joining Employee Welcome kit
              <span>
                <ul>
                  <li>John Smith (Designer)</li>
                  <li>Hossein Shams (Developer)</li>
                  <li>Maryam Amiri (SEO)</li>
                  <li>Mike Litorus (iOS Developer)</li>
                </ul>
              </span>
            </li>
            <li>
              <input type="checkbox" /> Birthday Wish<br></br>
              <span>SCHEDULED FOR 4:30 P.M. ON JUN 2021</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='grid'>
        <div className="chart">
          <h3 style={{ textAlign: "left", margin: "2%" }} >Employee Performance</h3>
          <EmployeeTable />
        </div>
        <div id="donutChart"></div>
      </div>
    </div>
  );
};

export default Dashboard;
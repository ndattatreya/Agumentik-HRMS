// routes.js
import Dashboard from '../components/dashboard';
import HolidaysTable from '../components/holiday';
import EventsPage from '../components/EventsPage';
import Activities from '../components/activities';
import EmployeeTable from '../components/Employeetable';
import LeaveRequest from './components/leavereq';
import AttendanceTable from './components/AttendanceTable';
import Departments from './components/departments';
import Payments from './components/payments';
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';
import Payslip from './components/payslip';
import Employees from './components/employees';
import Login from './components/login';
import ExpenseReport from './components/expense-report';
import InvoicesReport from './components/Invoices';
import UsersList from './components/users-list';


const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/hrdash", element: <Dashboard /> },
  { path: "/holiday", element: <HolidaysTable /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/activities", element: <Activities /> },
  { path: "/employees", element: <EmployeeTable /> },
  { path: "/leaverequests", element: <LeaveRequest /> },
  { path: "/attendance", element: <AttendanceTable /> },
  { path: "/departments", element: <Departments /> },
  { path: "/payements", element: <Payments /> },
  { path: "/expenses", element: <Expenses /> },
  { path: "/invoices", element: <Invoices /> },
  { path: "/payslip", element: <Payslip /> },
  { path: "/employees-salary", element: <Employees /> },
  { path: "/expenses-report", element: <ExpenseReport /> },
  { path: "/invoices-report", element: <InvoicesReport /> },
  { path: "/users-list", element: <UsersList /> },
  { path: "/accounts", element: <div>Accounts Page</div> },
  { path: "/payroll", element: <div>Payroll Page</div> },
  { path: "/report", element: <div>Report Page</div> },
  { path: "/users", element: <div>Users Page</div> },
  { path: "/authentication", element: <div>Authentication Page</div> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/inbox", element: <div>Inbox Page</div> },
  { path: "/chat", element: <div>Chat Page</div> },
  { path: "/projects", element: <div>Projects Page</div> },
  { path: "/clients", element: <div>Clients Page</div> },
  { path: "/team", element: <div>Team Page</div> },
  { path: "/tickets", element: <div>Tickets Page</div> },
  { path: "/blog", element: <div>Blog Page</div> },
  { path: "/file-manager", element: <div>File Manager Page</div> },
  { path: "/widgets", element: <div>Widgets Page</div> },
  { path: "/pages", element: <div>Pages Page</div> },
  { path: "/ui-elements", element: <div>UI Elements Page</div> },
  { path: "/forms", element: <div>Forms Page</div> },
  { path: "/tables", element: <div>Tables Page</div> },
  { path: "/charts", element: <div>Charts Page</div> },
  { path: "/maps", element: <div>Maps Page</div> },
  { path: "/menu-level-1", element: <div>Menu Level 1 Page</div> },
  { path: "/documentation", element: <div>Documentation Page</div> },
  { path: "/change-log", element: <div>Change Log Page</div> },
];

export default routes;

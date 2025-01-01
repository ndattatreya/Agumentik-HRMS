import './styles/App.css';
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';
import HolidaysTable from './components/holiday';
import EventsPage from "./components/EventsPage";
import AllEmployees from "./components/allemp";
import { Route, Routes } from 'react-router';
import ActivitiesPage from './components/activities';
import LeaveRequest from './components/leavereq';
import Sidebar from './components/sidebar';
import AttendanceTable from './components/AttendanceTable';
import Departments from './components/departments';
import Payments from './components/Payments';
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';
import Payslip from './components/payslip';
import Employees from './components/employees';
import ExpenseReport from './components/expense-report';
import InvoicesReport from './components/Invoices';
import UsersList from './components/users-list';
import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgot-password';
import Lockscreen from './components/lockscreen';
import NotFound from './components/not-found';
import Dash from './components/dash';
import EmailClient from './components/EmailClient';
import ChatInterface from './components/ChatInterface';
import AddProject from './components/addproject';
import ProjectTable from './components/ProjectTable';
import ProjectCards from './components/ProjectCards';
import UserForm from './components/UserForm';
import UserCards from './components/UserCards';
import TeamCards from './components/TeamCards';
import TicketDashboard from './components/TicketDashboard';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        {/* Define valid Route components */}
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/hrdash" element={<Dashboard />} />
        <Route path="/holiday" element={<HolidaysTable />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/allemployees" element={<AllEmployees />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path= "/leaverequests" element= {<LeaveRequest />} />
        <Route path= "/attendance" element= {<AttendanceTable />} />
        <Route path= "/Departments" element= {<Departments />} />
        <Route path= "/payments" element= {<Payments />} />
        <Route path= "/expenses" element= {<Expenses />} />
        <Route path= "/payslip" element= {<Payslip />} />
        <Route path= "/employees-salary" element= {<Employees />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/expenses-report" element={<ExpenseReport />} />
        <Route path="/invoices-report" element={<InvoicesReport />} />
        <Route path="/users-list" element={<UsersList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/lockscreen" element={<Lockscreen />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/dash" element={<Dash />} />  
        <Route path="/inbox" element={<EmailClient />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/projecttable" element={<ProjectTable />} />
        <Route path="/projectcards" element={<ProjectCards />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/usercards" element={<UserCards />} />
        <Route path="/team" element={<TeamCards />} />
        <Route path="/tickets" element={<TicketDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

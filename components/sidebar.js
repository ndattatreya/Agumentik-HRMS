import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaComment, FaEnvelope, FaCalendarAlt, FaUsers, FaChartLine, FaUserFriends, FaWallet, FaFileAlt, FaLock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
import { TfiMenuAlt } from 'react-icons/tfi';
import { IoTicket,IoPerson,IoPeople } from 'react-icons/io5';
import { ImFilesEmpty } from 'react-icons/im';
import { GrProjects } from 'react-icons/gr';
import '../styles/sidebar.css';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState('hr');
    const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(false);
    const [isAccountsDropdownOpen, setIsAccountsDropdownOpen] = useState(false);
    const [isPayrollDropdownOpen, setIsPayrollDropdownOpen] = useState(false);
    const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
    const [isAuthenticationDropdownOpen, setIsAuthenticationDropdownOpen] = useState(false);
    const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
    const [isClientDropdownOpen, setIsClientDropdownOpen] = useState(false);
    const [isUserCardsOpen, setIsUserCardsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMenu = (menu) => {
        setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    };

    const toggleDropdown = (setDropdownOpen) => {
        setDropdownOpen((prevOpen) => !prevOpen);
    };

    const toggleClientDropdown = () => {
        setIsClientDropdownOpen((prev) => !prev);
    };

    const toggleUserCardsDropdown = () => {
        setIsUserCardsOpen((prev) => !prev);
    };

    return (
        <div className={`sidebar`}>
            
            <div>
                <div className="headering">
                    <div className="user-info">
                        <div className="user-name">
                            <img
                                className="user-img"
                                src="https://wrraptheme.com/templates/lucid/hr/tailwind/static/media/userProfile.ce8ac6aa15a5c0276fee.png"
                                alt="User"
                            />
                            <div className="cont">
                                <p>Welcome,</p>
                                <button className="bold">Alizee Thomas <TiArrowSortedDown /></button>
                            </div>
                        </div>
                        <div className="user-content">
                            <div>
                                <p className="font-bold text">5+</p>
                                <small className="tex">Experience</small>
                            </div>
                            <div>
                                <p className="font-bold text">400+</p>
                                <small className="tex">Employees</small>
                            </div>
                            <div>
                                <p className="font-bold text">80+</p>
                                <small className="tex">Clients</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <ul className='mainbutt'>
                        <li onClick={() => toggleMenu('hr')}><b>HR</b></li>
                        <li onClick={() => toggleMenu('project')}><b>Project</b></li>
                    </ul>
                    {activeMenu === 'hr' && (
                        <div id="hr">
                            <Link to="/hrdash" className="menu-item"><FaHome className="icon" />HR Dashboard</Link>
                            <Link to="/holiday" className="menu-item"><FaCalendarAlt className="icon" />Holidays</Link>
                            <Link to="/events" className="menu-item"><FaChartLine className="icon" />Events</Link>
                            <Link to="/activities" className="menu-item"><TfiMenuAlt className="icon" />Activities</Link>
                            <div className="dropdown">
                                <div onClick={() => toggleDropdown(setIsEmployeeDropdownOpen)} className="menu-item">
                                    <FaUsers className="icon" />Employees <TiArrowSortedDown />
                                </div>
                                {isEmployeeDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/allemployees" className="menu-item">All Employees</Link></li>
                                        <li><Link to="/LeaveRequests" className="menu-item">Leave Requests</Link></li>
                                        <li><Link to="/attendance" className="menu-item">Attendance</Link></li>
                                        <li><Link to="/Departments" className="menu-item">Departments</Link></li>
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown">
                                <div onClick={() => toggleDropdown(setIsAccountsDropdownOpen)} className="menu-item">
                                    <FaFileAlt className="icon" />Accounts <TiArrowSortedDown />
                                </div>
                                {isAccountsDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/payments" className="menu-item">Payments</Link></li>
                                        <li><Link to="/expenses" className="menu-item">Expenses</Link></li>
                                        <li><Link to="/invoices" className="menu-item">Invoices</Link></li>
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown">
                                <div onClick={() => toggleDropdown(setIsPayrollDropdownOpen)} className="menu-item">
                                    <FaWallet className="icon" />Payroll <TiArrowSortedDown />
                                </div>
                                {isPayrollDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/payslip" className="menu-item">Payslip</Link></li>
                                        <li><Link to="/employees-salary" className="menu-item">Employee Salary</Link></li>
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown">
                                <div onClick={() => toggleDropdown(setIsReportDropdownOpen)} className="menu-item">
                                    <ImFilesEmpty className="icon" />Report <TiArrowSortedDown />
                                </div>
                                {isReportDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/expenses-report" className="menu-item">Expenses Report</Link></li>
                                        <li><Link to="/invoices-report" className="menu-item">Invoices Report</Link></li>
                                    </ul>
                                )}
                            </div>
                            <Link to="/users-list" className="menu-item"><FaUsers className="icon" />Users</Link>
                            <div className="dropdown">
                                <div onClick={() => toggleDropdown(setIsAuthenticationDropdownOpen)} className="menu-item">
                                    <FaLock className="icon" />Authentication <TiArrowSortedDown />
                                </div>
                                {isAuthenticationDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/login" className="menu-item">Login</Link></li>
                                        <li><Link to="/register" className="menu-item">Register</Link></li>
                                        <li><Link to="/lockscreen" className="menu-item">Lockscreen</Link></li>
                                        <li><Link to="/forgot-password" className="menu-item">Forgot Password</Link></li>
                                        <li><Link to="/not-found" className="menu-item">Page 404</Link></li>
                                    </ul>
                                )}
                            </div>
                            <Link to="/users" className="menu-item"><FaUsers className="icon" />Users</Link>
                        </div>
                    )}

                    {activeMenu === 'project' && (
                        <div id="project">
                            <Link to="/dash" className="menu-item"><FaHome className="icon" />Dashboard</Link>
                            <Link to="/inbox" className="menu-item"><FaEnvelope className="icon" />Inbox</Link>
                            <Link to="/chat" className="menu-item"><FaComment className="icon" />Chat</Link>
                            <div className="dropdown">
                                <div onClick={() => toggleDropdown(setIsProjectDropdownOpen)} className="menu-item">
                                <GrProjects className="icon" />Projects <TiArrowSortedDown />
                                </div>
                                {isProjectDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/addproject" className="menu-item">Add Project</Link></li>
                                        <li><Link to="/projecttable" className="menu-item">Project Table</Link></li>
                                        <li><Link to="/projectcards" className="menu-item">Project Cards</Link></li>
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown">
                                <div onClick={toggleClientDropdown} className="menu-item"> 
                                <IoPerson className="icon" />Clients <TiArrowSortedDown />
                                </div>
                                {isClientDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/userform" className="menu-item">Add Client</Link></li>
                                        <li><Link to="/usercards" className="menu-item">Client List</Link></li>
                                    </ul>
                                )}
                            </div>
                            <Link to="/team" className="menu-item"><IoPeople className="icon" />Team</Link>
                            <Link to="/tickets" className="menu-item"><IoTicket className="icon" />Tickets</Link>
                        </div>
                    )}
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;
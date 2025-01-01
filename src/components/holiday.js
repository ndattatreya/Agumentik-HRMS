import React, { useState } from 'react';
import { FaHome, FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import '../styles/holiday.css';

const HolidaysTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  // Define holidaysData array
  const [holidaysData] = useState([
    { id: 1, date: '14 Jan 2024', day: 'Wednesday', holidayName: 'Makara Sankranti' },
    { id: 2, date: '26 Jan 2024', day: 'Sunday', holidayName: 'Republic Day' },
    { id: 3, date: '21 Feb 2024', day: 'Friday', holidayName: 'Maha Shivaratri' },
    { id: 4, date: '10 Mar 2024', day: 'Tuesday', holidayName: 'Holi' },
    { id: 5, date: '25 Mar 2024', day: 'Wednesday', holidayName: 'Ugadi' },
    { id: 6, date: '02 Apr 2024', day: 'Thursday', holidayName: 'Ram Navami' },
    { id: 7, date: '06 Apr 2024', day: 'Monday', holidayName: 'Mahavir Jayanti' },
    { id: 8, date: '14 Apr 2024', day: 'Tuesday', holidayName: 'Dr Ambedkar Jayanti' },
    { id: 9, date: '25 Apr 2024', day: 'Saturday', holidayName: 'Maharshi Parasuram Jayanti' },
    { id: 10, date: '24 May 2024', day: 'Sunday', holidayName: 'Idul Fitr' },
    { id: 11, date: '31 Jul 2024', day: 'Friday', holidayName: 'Bakrid / Eid al Adha' },
    { id: 12, date: '01 Aug 2024', day: 'Saturday', holidayName: 'Bakrid / Eid al Adha' },
    { id: 13, date: '03 Aug 2024', day: 'Monday', holidayName: 'Raksha Bandhan' },
    { id: 14, date: '12 Aug 2024', day: 'Wednesday', holidayName: 'Janmashtami' },
    { id: 15, date: '15 Aug 2024', day: 'Saturday', holidayName: 'Independence Day' },
    { id: 16, date: '16 Aug 2024', day: 'Sunday', holidayName: 'Parsi New Year' },
    { id: 17, date: '22 Aug 2024', day: 'Saturday', holidayName: 'Ganesh Chaturthi' },
    { id: 18, date: '30 Aug 2024', day: 'Sunday', holidayName: 'Muharram' },
    { id: 19, date: '02 Oct 2024', day: 'Friday', holidayName: 'Gandhi Jayanti' },
    { id: 20, date: '25 Oct 2024', day: 'Sunday', holidayName: 'Vijaya Dashami' },
    { id: 21, date: '30 Oct 2024', day: 'Friday', holidayName: 'Eid e Milad' },
    { id: 22, date: '31 Oct 2024', day: 'Saturday', holidayName: 'Sardar Vallabhbhai Patel Jayanti' },
    { id: 23, date: '14 Nov 2024', day: 'Saturday', holidayName: 'Diwali' },
    { id: 24, date: '15 Nov 2024', day: 'Sunday', holidayName: 'Vikram Samvat New Year' },
    { id: 25, date: '16 Nov 2024', day: 'Monday', holidayName: 'Bhai Dooj' },
    { id: 26, date: '30 Nov 2024', day: 'Monday', holidayName: 'Guru Nanak Jayanti' },
    { id: 27, date: '25 Dec 2024', day: 'Friday', holidayName: 'Christmas' },
  ]);

  const indexOfLastHoliday = currentPage * rowsPerPage;
  const indexOfFirstHoliday = indexOfLastHoliday - rowsPerPage;
  const currentHolidays = holidaysData.slice(indexOfFirstHoliday, indexOfLastHoliday);

  const totalPages = Math.ceil(holidaysData.length / rowsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="holidays-container">
      <div className="header">
        <div className="title-section">
          <h1 className="h1s">Holidays</h1>
          <div className="breadcrumb">
            <FaHome />
            <span>/</span>
            <span>Holidays</span>
          </div>
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
      </div>

      <h3 className="h3s">Holidays List</h3>

      <div className="table-wrapper">
        <table className="holidays-table">
          <thead>
            <tr>
              <th>#</th>
              <th>DATE</th>
              <th>DAY</th>
              <th>HOLIDAY NAME</th>
            </tr>
          </thead>
          <tbody>
            {currentHolidays.map((holiday) => (
              <tr key={holiday.id}>
                <td>{holiday.id}</td>
                <td>{holiday.date}</td>
                <td>{holiday.day}</td>
                <td>{holiday.holidayName}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <div className="rows-per-page">
            <span>Rows per page:</span>
            <select value={rowsPerPage}>
              <option value={10}>10</option>
            </select>
          </div>
          <span className="page-info">
            {`${indexOfFirstHoliday + 1}-${Math.min(indexOfLastHoliday, holidaysData.length)} of ${holidaysData.length}`}
          </span>
          <div className="pagination-controls">
            <button 
              onClick={handleFirstPage} 
              disabled={currentPage === 1}
            >
              <FaAngleDoubleLeft />
            </button>
            <button 
              onClick={handlePrevPage} 
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
            <button 
              onClick={handleLastPage} 
              disabled={currentPage === totalPages}
            >
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidaysTable;
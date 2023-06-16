import React, { useState } from 'react';
import './DisplayData.css';
import Pagination from './Pagination';

// This is the Display Data component to display the results of api
const DisplayData = ({ data }) => {

  // this block is just wriiten in refernce to pagination
  
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate start and end index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array based on the current page
  const displayedData = data.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>Data Display</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Full Name</th>
            <th>Owner</th>
            <th>Repository URL</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.full_name}</td>
              <td>{item.owner.login}</td>
              <td>
                <a href={item.html_url} target="_blank" rel="noreferrer">{item.html_url}</a>
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
      </div>
    </div>
  );
  
};

export default DisplayData;

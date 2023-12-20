import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function History() {
  const [summaries, setSummaries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showFullText, setShowFullText] = useState({});

  const fetchSummaries = async (page = 1) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/summaries`, {
        params: {
          page: page,
          perPage: 5,
        },
      });
      setSummaries(response.data.summaries);
      setTotalPages(response.data.totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching summaries:', error);
    }
  };

  useEffect(() => {
    fetchSummaries();
  }, []);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      fetchSummaries(nextPage);
      setCurrentPage(nextPage);
    }
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 1) {
      fetchSummaries(previousPage);
      setCurrentPage(previousPage);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.substring(0, maxLength);
    return `${truncatedText}`;
  };

  const toggleFullText = (id) => {
    setShowFullText((prevShowFullText) => ({
      ...prevShowFullText,
      [id]: !prevShowFullText[id],
    }));
  };

  return (
    <div className="container mt-5" style={{ marginLeft: '80px', width: '200%' }}>
      <h2 className="text-center mb-4" style={{ marginTop: '80px'}}>History of Summary</h2>
      <div className="table-responsive">
        <table className="table table-bordered mx-auto">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="text-center">
                No
              </th>
              <th scope="col" style={{ width: '60%' }} className="text-center">
                Original Text
              </th>
              <th scope="col" style={{ width: '50%' }} className="text-center">
                Summary
              </th>
            </tr>
          </thead>
          <tbody>
            {summaries.length > 0 ? (
              summaries.map((s, index) => (
                <tr key={s.id}>
                  <th scope="row">{(currentPage - 1) * 5 + index + 1}</th>
                  <td>
                    {showFullText[s.id]
                      ? s.original_text
                      : truncateText(s.original_text, 200)}
                    {s.original_text.length > 200 && (
                      <button
                        className="btn btn-link"
                        onClick={() => toggleFullText(s.id)}
                      >
                        {showFullText[s.id] ? 'Show little' : 'Show All'}
                      </button>
                    )}
                  </td>
                  <td>{s.summary}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <nav className="mt-3 d-flex justify-content-center">
        <ul className="pagination justify-content-end">
          <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
            <button className="page-link" onClick={handlePreviousPage}>
              Previous
            </button>
          </li>
          <li className="page-item active">
            <span className="page-link">{currentPage}</span>
          </li>
          <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
            <button className="page-link" onClick={handleNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default History;

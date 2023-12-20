import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './home.css';

function Home() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const summaryRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSummarize = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await axios.post('http://127.0.0.1:8000/api/summarize', {
        text: inputText,
      });

      console.log('API Response:', response.data);

      if (response.data && response.data.summary) {
        setSummary(response.data.summary);
      } else {
        setError('Invalid response from the server. Please try again.');
      }
    } catch (error) {
      console.error('Error summarizing text:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        setError(`Server error: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        console.error('No response received from the server. Please try again.');
      } else {
        console.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClearText = () => {
    setInputText('');
  };

  const handleCopy = () => {
    if (summaryRef.current) {
      navigator.clipboard.writeText(summaryRef.current.value);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ marginLeft: '120px' }}>
      <div className="row">
        <div className="col-md-6">
          <div className="input-container">
            <h1 className="text-center mb-4" style={{ fontSize: '2rem' }}>Enter Your Text</h1>
            <textarea
              className="form-control"
              rows="11"
              placeholder="Start typing to get a summary..."
              value={inputText}
              onChange={handleInputChange}
            ></textarea>
            <div className="mt-3">
              <button className="btn btn-danger ml-2" onClick={handleClearText}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className="mt-3" style={{ marginLeft: '490px' }}>
            <button className="btn btn-success btn-lg" onClick={handleSummarize} disabled={loading}>
                {loading ? 'Summarizing...' : 'Summarize>>'}
              </button>
          </div>
          {error && <div className="text-danger mt-2">{error}</div>}
        </div>
        <div className="col-md-6">
          <div className="output-container">
            <h1 className="text-center mb-4" style={{ fontSize: '2rem' }}>Summary</h1>
            <div className="summary-content">
              <textarea
                className="form-control"
                rows="11"
                placeholder="Summary will be copied here..."
                readOnly
                value={summary}
                ref={summaryRef}
              ></textarea>
              <div className="mt-3 text-right">
                <button className="btn btn-secondary" style={{ marginLeft: '430px' }} onClick={handleCopy} disabled={!summary}>
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

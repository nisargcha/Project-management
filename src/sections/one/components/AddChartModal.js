import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import "./AddChartModal.css";

Modal.setAppElement('#root');

const AddChartModal = ({ isOpen, onRequestClose, addChart }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('BarChart');
  const [data, setData] = useState('');

  const handleSubmit = () => {
    const parsedData = JSON.parse(data);
    addChart({ title, type, data: parsedData });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Chart"
      className="modal-container"
    >
      <h2>Add New Chart</h2>
      <form className='form'>
        <div>
          <label htmlFor="chartTitle">Title:</label>
          <input
            id="chartTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="chartType">Type:</label>
          <select
            id="chartType"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="BarChart">Bar Chart</option>
            <option value="PieChart">Pie Chart</option>
          </select>
        </div>
        <div>
          <label htmlFor="chartData">Data (JSON format):</label>
          <textarea
            id="chartData"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSubmit}>Add Chart</button>
      </form>
    </Modal>
  );
};

AddChartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  addChart: PropTypes.func.isRequired,
};

export default AddChartModal;

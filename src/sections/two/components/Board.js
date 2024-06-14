import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import addIcon from '../Assests/plus.png';
import cal from '../Assests/calendar.png';

export default function Board({ title }) {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleTaskNameChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleAddTask = () => {
    if (newTaskName && priority && status && startDate && endDate) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        name: newTaskName,
        priority,
        status,
        startDate,
        endDate,
      };

      setTasks([...tasks, newTask]);

      setNewTaskName('');
      setPriority('');
      setStatus('');
      setStartDate(null);
      setEndDate(null);
      setShowTaskInput(false);
    } else {
      alert('Please enter task name, priority, status, start date, and end date.');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const getPriorityClass = (taskPriority) => {
    switch (taskPriority) {
      case 'low':
        return 'badge low-priority';
      case 'medium':
        return 'badge medium-priority';
      case 'high':
        return 'badge high-priority';
      default:
        return 'badge';
    }
  };

  const getStatusClass = (taskStatus) => {
    switch (taskStatus) {
      case 'on track':
        return 'badge on-track';
      case 'at risk':
        return 'badge at-risk';
      case 'off track':
        return 'badge off-track';
      default:
        return 'badge';
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-heading">
          <div className="heading">
            <h3>
              {title} ({tasks.length})
            </h3>
          </div>
          <div
            className="card-icon"
            onClick={() => setShowTaskInput(true)}
            onKeyPress={(e) => e.key === 'Enter' && setShowTaskInput(true)}
            role="button"
            tabIndex={0}
          >
            <img src={addIcon} alt="add" />
          </div>
        </div>
        {showTaskInput && (
          <div className="selectors">
            <div className="task-input">
              <input
                type="text"
                placeholder="Enter task name"
                value={newTaskName}
                onChange={handleTaskNameChange}
              />
            </div>
            <div className="task-options">
              <h4>Select Priority:</h4>
              <select value={priority} onChange={handlePriorityChange}>
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <h4>Select Status:</h4>
              <select value={status} onChange={handleStatusChange}>
                <option value="">Select Status</option>
                <option value="on track">On Track</option>
                <option value="at risk">At Risk</option>
                <option value="off track">Off Track</option>
              </select>
              <div className="date-picker">
                <h4>Duration:</h4>
                {showDatePicker ? (
                  <>
                    <DatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="Start Date"
                      dateFormat="dd/MM/yyyy"
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={handleEndDateChange}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      placeholderText="End Date"
                      dateFormat="dd/MM/yyyy"
                    />
                  </>
                ) : (
                  <button
                    type="button"
                    className="calendar-button"
                    onClick={toggleDatePicker}
                    onKeyPress={(e) => e.key === 'Enter' && toggleDatePicker()}
                  >
                    <img src={cal} alt="calendar" className="calendar-icon" />
                    <p> Select Date</p>
                  </button>
                )}
              </div>
              <button onClick={handleAddTask} type="button">
                Add Task
              </button>
            </div>
          </div>
        )}
        {tasks.length > 0 && (
          <div className="task">
            {tasks.map((task) => (
              <div className="add-task-card" key={task.id}>
                <div className="task-card-name">
                  <img src="/check.png" alt="check" />
                  <p>{task.name}</p>
                </div>
                <div className="status">
                  <div className="sub-container">
                    <div className={`badge ${getPriorityClass(task.priority)}`}>
                      {task.priority}
                    </div>
                    <div className={`badge ${getStatusClass(task.status)}`}>
                      {task.status}
                    </div>
                  </div>
                  {task.startDate && task.endDate && (
                    <div className="duration">
                      Duration: {`${task.startDate.toLocaleDateString()} - ${task.endDate.toLocaleDateString()}`}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="delete-task-button"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        {tasks.length === 0 && !showTaskInput && (
          <div className="task">
            <div className="add-task-card">
              <div className="task-card-name">
                <p>No tasks added yet.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Board.propTypes = {
  title: PropTypes.string.isRequired,
};

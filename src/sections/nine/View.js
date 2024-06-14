import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './view.css';
import PropTypes from 'prop-types';

const View = () => {
  const [sections, setSections] = useState({
    "Recently assigned": [
      { name: "Schedule kickoff meeting", startDate: new Date(), endDate: new Date(), project: "Cross-functional project", completed: false, priority: "Medium" },
      { name: "Draft project brief", startDate: new Date(), endDate: new Date(), project: "Cross-functional project", completed: false, priority: "Medium" }
    ],
    "Do today": [],
    "Do next week": [],
    "Do later": []
  });

  const addTask = (sectionTitle) => {
    const newTask = { name: "New Task", startDate: new Date(), endDate: new Date(), project: "Set a project", completed: false, priority: "Medium" };
    setSections((prevSections) => ({
      ...prevSections,
      [sectionTitle]: [...prevSections[sectionTitle], newTask]
    }));
  };

  const toggleTaskCompletion = (sectionTitle, index) => {
    setSections((prevSections) => {
      const newTasks = prevSections[sectionTitle].map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      return { ...prevSections, [sectionTitle]: newTasks };
    });
  };

  const updateTaskField = (sectionTitle, index, field, value) => {
    setSections((prevSections) => {
      const newTasks = prevSections[sectionTitle].map((task, i) =>
        i === index ? { ...task, [field]: value } : task
      );
      return { ...prevSections, [sectionTitle]: newTasks };
    });
  };

  const deleteTask = (sectionTitle, index) => {
    setSections((prevSections) => {
      const newTasks = prevSections[sectionTitle].filter((_, i) => i !== index);
      return { ...prevSections, [sectionTitle]: newTasks };
    });
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="user-initials">BP</div>
        <div className="header-text">My List</div>
      </header>
      <div className="main-content">
        <button type='button' className="add-task-button" onClick={() => addTask("Recently assigned")}>+ Add task</button>
        {Object.keys(sections).map((sectionTitle) => (
          <TaskSection
            key={sectionTitle}
            title={sectionTitle}
            tasks={sections[sectionTitle]}
            addTask={addTask}
            toggleTaskCompletion={toggleTaskCompletion}
            updateTaskField={updateTaskField}
            deleteTask={deleteTask}
          />
        ))}
        <button type='button' className="add-section-button">+ Add section</button>
      </div>
    </div>
  );
}

const TaskSection = ({ title, tasks, addTask, toggleTaskCompletion, updateTaskField, deleteTask }) => (
  <div className="task-section">
    <h2>{title}</h2>
    {tasks.map((task, index) => (
      <TaskItem
        key={index}
        task={task}
        onToggle={() => toggleTaskCompletion(title, index)}
        onUpdate={(field, value) => updateTaskField(title, index, field, value)}
        onDelete={() => deleteTask(title, index)}
      />
    ))}
    <button
      type='button'
      className="add-task"
      onClick={() => addTask(title)}
    >
      Add task...
    </button>
  </div>
);

TaskSection.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  updateTaskField: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

const TaskItem = ({ task, onToggle, onUpdate, onDelete }) => {
  const priorityClass = {
    Low: 'priority-low',
    Medium: 'priority-medium',
    High: 'priority-high'
  }[task.priority];

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      <input
        type="text"
        className="task-name"
        value={task.name}
        onChange={(e) => onUpdate('name', e.target.value)}
      />
      <DatePicker
        selected={task.startDate}
        onChange={(date) => onUpdate('startDate', date)}
        dateFormat="MM/dd/yyyy"
        className="task-date-picker"
      />
      <DatePicker
        selected={task.endDate}
        onChange={(date) => onUpdate('endDate', date)}
        dateFormat="MM/dd/yyyy"
        className="task-date-picker"
      />
      <input
        type="text"
        className="task-project"
        value={task.project}
        onChange={(e) => onUpdate('project', e.target.value)}
      />
      <select
        className={`task-priority ${priorityClass}`}
        value={task.priority}
        onChange={(e) => onUpdate('priority', e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="button" className="delete-task-button" onClick={onDelete}>Delete</button>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
    project: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    priority: PropTypes.string.isRequired
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default View;

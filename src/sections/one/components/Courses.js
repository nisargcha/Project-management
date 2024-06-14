import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, 
PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import AddChartModal from './AddChartModal';
import {ReactComponent as FaEdit} from '../Assets/edit-solid.svg'
import {ReactComponent as FaExpand} from '../Assets/up-right-and-down-left-from-center-solid.svg'
import {ReactComponent as FaEllipsisV} from '../Assets/ellipsis-solid.svg'

const barData = [
  { name: 'To do', tasks: 1 },
  { name: 'Doing', tasks: 7 },
  { name: 'Done', tasks: 3 }
];

const pieData = [
  { name: 'Completed', value: 9 },
  { name: 'Incomplete', value: 6 },
  { name: 'Overdue', value: 4 }
];

const upcomingTasksData = [
  { name: 'Assignee 1', tasks: 3 },
  { name: 'Assignee 2', tasks: 5 },
  { name: 'Assignee 3', tasks: 2 }
];

const completionData = [
  { name: '06/06', tasks: 1 },
  { name: '06/07', tasks: 2 },
  { name: '06/08', tasks: 5 },
  { name: '06/09', tasks: 3 },
  { name: '06/10', tasks: 2 },
  { name: '06/11', tasks: 4 },
  { name: '06/12', tasks: 1 }
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const handleMoreActionClick = () => {
  console.log('More Action clicked');
};

const handleViewLargerClick = () => {
  console.log('View Larger clicked');
};

const handleEditChartClick = () => {
  console.log('Edit Chart clicked');
};

const Courses = () => {
  const [charts, setCharts] = useState([
    { title: 'Incomplete tasks by section', type: 'BarChart', data: barData },
    { title: 'Total tasks by completion status', type: 'PieChart', data: pieData },
    { title: 'Upcoming tasks by assignee', type: 'BarChart', data: upcomingTasksData },
    { title: 'Task completion over time', type: 'BarChart', data: completionData }
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addChart = (newChart) => {
    setCharts([...charts, newChart]);
  };
  
  return (
    <div>
      <button type='button' className="add-chart-btn" onClick={() => setModalIsOpen(true)}> + Add Chart</button>
      <div className="task-stats">
        {['Completed Tasks', 'Incomplete tasks', 'Overdue Tasks', 'Total Tasks'].map((title, index) => (
          <div className="task-box" key={index}>
            <div className="task-box-header">
              <span>{title}</span>
              <div className="task-box-icons">
                <FaEllipsisV onClick={handleMoreActionClick} title="More Action" />
                <FaExpand onClick={handleViewLargerClick} title="View Larger" />
                <FaEdit onClick={handleEditChartClick} title="Edit Chart" />
              </div>
            </div>
            <div className="number">{index % 2 === 0 ? 0 : 1}</div>
            
            <div><i className="filter-icon">{index === 3 ? 'No Filter' : '1 Filter'}</i></div>
          </div>
        ))}
      </div>
      
      <AddChartModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} addChart={addChart} />
      
      <div className="charts">
        <div className="chart-container">
          <h3 style={{ textAlign: 'left' }}>{charts[0].title}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ angle: -45, textAnchor: 'end' }} height={40} />
              <YAxis domain={[0, 4]} /> 
              <Tooltip />
              <Bar dataKey="tasks" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3 style={{ textAlign: 'left' }}>{charts[1].title}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={charts[1].data}
                cx="50%"
                cy="40%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {charts[1].data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="charts">
        <div className="chart-container">
          <h3 style={{ textAlign: 'left' }}>{charts[2].title}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={charts[2].data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3 style={{ textAlign: 'left' }}>{charts[3].title}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={charts[3].data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Courses;

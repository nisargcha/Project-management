import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ten.css';

const View = () => {
  const [budget, setBudget] = useState(0);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleBudgetChange = (e) => {
    setBudget(Number(e.target.value));
  };

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
  };

  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(Number(e.target.value));
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

  const handleAddExpense = () => {
    if (expenseName && expenseAmount && startDate && endDate) {
      const newExpense = {
        id: expenses.length + 1,
        name: expenseName,
        amount: expenseAmount,
        startDate,
        endDate,
      };

      setExpenses([...expenses, newExpense]);

      setExpenseName('');
      setExpenseAmount(0);
      setStartDate(null);
      setEndDate(null);
      setShowDatePicker(false);
    } else {
      alert('Please enter expense name, amount, start date, and end date.');
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="dashboard-ten">
      <div className="grid-container-ten">
        <div className="budget-section-ten section-ten">
          <h2>Enter Budget</h2>
          <div className="section-content-ten">
            <input
              type="number"
              value={budget}
              onChange={handleBudgetChange}
              placeholder="Enter your budget"
            />
          </div>
        </div>

        <div className="expense-section-ten section-ten">
          <h2>Enter Expense</h2>
          <div className="section-content-ten">
            <input
              type="text"
              value={expenseName}
              onChange={handleExpenseNameChange}
              placeholder="Expense Name"
            />
            <input
              type="number"
              value={expenseAmount}
              onChange={handleExpenseAmountChange}
              placeholder="Expense Amount"
            />
            <div className="date-picker-ten">
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
                    dateFormat="MM/dd/yyyy"
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                    dateFormat="MM/dd/yyyy"
                  />
                </>
              ) : (
                <button
                  type="button"
                  className="calendar-button-ten"
                  onClick={toggleDatePicker}
                >
                  Select Dates
                </button>
              )}
            </div>
            <button type="button" onClick={handleAddExpense}>
              Add Expense
            </button>
          </div>
        </div>

        <div className="expense-list-section-ten section-ten">
          <h2>Expense List</h2>
          <div className="section-content-ten">
            {expenses.length === 0 ? (
              <p>No expenses added yet.</p>
            ) : (
              <ul>
                {expenses.map((expense) => (
                  <li key={expense.id}>
                    <span>{expense.name}</span>
                    <span>Rs. {expense.amount}</span>
                    <span>{`${expense.startDate.toLocaleDateString()} - ${expense.endDate.toLocaleDateString()}`}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="budget-summary-section-ten section-ten">
          <h2>Budget Summary</h2>
          <div className="section-content-ten">
            <p>Total Budget: Rs. {budget}</p>
            <p>Total Expenses: Rs. {totalExpenses}</p>
            <p>Remaining Budget: Rs. {budget - totalExpenses}</p>
          </div>
        </div>

        <div className="chart-container-ten">
          <h2>Expense Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expenses}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default View;

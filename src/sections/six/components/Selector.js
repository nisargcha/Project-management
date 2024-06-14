import React from 'react';
import PropTypes from 'prop-types';

const FormInputSel = ({ placeholder, data, selected, setSelected }) => {
  const handleChange = (event) => {
    const selectedItem = data.find(item => item.isoCode === event.target.value);
    setSelected(selectedItem);
  };

  return (
    <select
      style={{
        padding: '10px',
        border: '1px solid grey',
        borderRadius: '9px',
        margin: '10px 4px',
        width: '300px',
        color: 'gray',
        fontSize: '1rem',
      }}
      onChange={handleChange}
      value={selected?.isoCode || ''}
    >
      <option value="">{placeholder}</option>
      {data?.map((item) => (
        <option key={item.isoCode} value={item.isoCode}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

FormInputSel.propTypes = {
  placeholder: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.object, // Can be null or an object
  setSelected: PropTypes.func.isRequired,
};

export default FormInputSel;

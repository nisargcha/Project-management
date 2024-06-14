import React from 'react';
import PropTypes from 'prop-types';
import './forminput.css';

const FormInput = ({ placeholder }) => (
  <div className="formInput">
    <input placeholder={placeholder} />
  </div>
);

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;

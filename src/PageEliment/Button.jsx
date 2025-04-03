import React from 'react'

const Button = ({ ButtonText, buttonClass }) => {
  return (
    <div>
      <button className={buttonClass}>{ButtonText}</button>
    </div>
  );
};

export default Button
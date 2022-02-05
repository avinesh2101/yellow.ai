import React from 'react';
// import './Button.css';
import { Container } from './Container';

const Button = () => {
  const triggerText = 'Request a Demo';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div className="Button">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
     
    </div>
  );
};

export default Button;

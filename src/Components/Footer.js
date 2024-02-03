import React from "react";

const Footer = () => {
  // Define your styles as a JavaScript object
  const footerStyle = {
    background: '#0082e6', 
    bottom: 0,
    left: 0,
    right: 0,
    padding: '8px',
    textAlign: 'center',
    color: 'white',
  };

  // Apply the style using the style attribute
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 In1Touch</p>
    </footer>
  );
};

export default Footer;

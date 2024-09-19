import React, { useState } from 'react';
import './Emailpage.css'; // Ensure this path is correct

const EmailPage = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes('@') || !value.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage && email) {
      alert(`Email submitted: ${email}`);
    }
  };

  return (
    <div className="Emailpage">
      <h2>Subscribe with Your Email</h2>
      <form onSubmit={handleSubmit}>
        <div className="email-input">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" disabled={!!errorMessage}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailPage;

import React, { useState } from 'react';

function GreetingForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>React Greeting Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
      </form>
      {submitted && (
        <h3 style={{ marginTop: '20px' }}>Hello, {name}! 👋</h3>
      )}
    </div>
  );
}

export default GreetingForm;

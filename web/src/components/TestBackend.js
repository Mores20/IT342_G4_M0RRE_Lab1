import React from 'react';

function TestBackend() {
  const testRegister = () => {
    fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "lizette",
        email: "lizette@example.com",
        password: "123456",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Test Backend</h2>
      <button onClick={testRegister}>Test Register</button>
    </div>
  );
}

export default TestBackend;

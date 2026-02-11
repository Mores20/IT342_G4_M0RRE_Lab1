import React, { useEffect, useState } from 'react';
import { Container, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      navigate('/login');
      return;
    }

    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div>Loading...</div>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h3>Dashboard</h3>
          <Button variant="outline-danger" onClick={handleLogout}>
            Logout
          </Button>
        </Card.Header>
        <Card.Body>
          <Alert variant="success">
            <Alert.Heading>Welcome, {user.name}!</Alert.Heading>
            <p>You have successfully logged in to your account.</p>
            <hr />
            <p className="mb-0">
              <strong>Email:</strong> {user.email}
            </p>
          </Alert>
          
          <div className="mt-4">
            <h4>Account Details</h4>
            <div className="p-3 bg-light rounded">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Status:</strong> Active</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Dashboard;
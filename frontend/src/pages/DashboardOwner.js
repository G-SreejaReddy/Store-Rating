import React from 'react';

const DashboardOwner = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Store Owner Dashboard</h2>
      <p>Welcome, Store Owner!</p>
      {/* Later: view ratings by users, average rating */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardOwner;

const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };
  
import React from 'react';

const DashboardUser = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Welcome, User!</p>
      {/* Later you can add: search store, rate store, view rating */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardUser;

const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };
  
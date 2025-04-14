import React from 'react';

const DashboardAdmin = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin!</p>
      {/* Here you can later add: total users, stores, ratings, user/store management */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardAdmin;

const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };
  
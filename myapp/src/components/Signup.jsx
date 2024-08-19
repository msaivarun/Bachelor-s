import React, { useState , useContext } from 'react';

function Signup  ()  {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your signup logic here, e.g., make an API request to register the user
  //   setIsAuthenticated(true); 
  // };
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

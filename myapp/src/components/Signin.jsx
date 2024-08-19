import React, { useState } from 'react';

const Signin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  

  return (
    <div >
      <div className='signin-container'>
      <h2>Sign In</h2>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            required
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
      </div>
    </div>
  );
};

export default Signin;
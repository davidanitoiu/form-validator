import React from 'react';

function Form() {
    return (
        <form id="form" className="form">
        <h2>Register With Us</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter username" required />
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" required />
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" required />
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            placeholder="Enter password again"
            required
          />
          <small>Error message</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
}

export default Form;

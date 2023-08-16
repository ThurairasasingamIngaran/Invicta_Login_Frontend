import React, { useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    email: '',
    password: '',
  });

  const { email, password } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an HTTP POST request to your backend server
      await axios.post('http://localhost:8082/signIn', {
        email: email,
        password: password,
      });

      // Assuming the server responds with a successful registration message,
      // you can navigate to the home page or any other desired route.
      navigate('/'); // Replace '/' with your desired route
    } catch (error) {
      alert('Registration failed. Please try again.'); // Handle errors appropriately
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="buttonContainer">
              <div className="formButton">
                <button type="submit" className="btn btn-outline-primary">
                  Register
                </button>
              </div>

              <div className="formButton">
                <Link className="btn btn-outline-primary" to="/">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

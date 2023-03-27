import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(async (response) => {
        response = await response.json();
        const token = response.token
        if (token) {
          localStorage.setItem('token', token);
          navigate(`/`);
        } else {
          alert('invalid email or password')
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group form w-100 p-3" width="100%">
            <label className="w-40 p-3">
              Email:
              <input className="form-control" type="email" required width="100%" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br></br>
            <label className="w-40 p-3 h-25">
              Password:
              <input type='password' className="form-control " required value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button className="btn btn-primary " type="submit">Create Post</button>
          </div>

        </form>
        <p>Don't have an account? <Link to="/signup">Sign up here</Link>.</p>
      </div>
    </div>
  );
}
export default LoginPage

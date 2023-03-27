import React from 'react';
import { useNavigate } from "react-router-dom";


function SignupPage({ onSignup }) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name,email, password, password_confirmation: passwordConfirmation })
    })
    .then(async (response) => {
      const jresponse = await response.json();
      const token = jresponse.token
      if (token) {
        localStorage.setItem('token', token);
        navigate(`/`);
      } else {
        alert(jresponse.error)
      }
    })
  };

  return (
    <div className="container">
          <h1 className="font-bold text-2xl">Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group form w-100 p-3" width="100%">
              <label className="w-50 p-3">
                Name:
                <input className="form-control" type="text" required width="100%" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <br></br>
              <label className="w-50 p-3 h-25">
                Email:
                <input type='text' className="form-control " required value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <br></br>
              <label className="w-50 p-3">
                Password:
                <input className="form-control" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <br />
              <label className="w-50 p-3">
                Confirm Password:
                <input className="form-control" type="password" required value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
              </label>
              <br />
              <button className="btn btn-primary " type="submit">Create Post</button>
            </div>
          </form>
        </div>
  );
}

export default SignupPage

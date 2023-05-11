import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import PuffLoader from "react-spinners/PuffLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  top:300,
};

function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoadnig, setIsLoading] = useState(false)
  const handleLogin = (e) => {
    setIsLoading(true)
    e.preventDefault()
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      alert('Logged In')
      navigate("/");

    }).catch((error) => {
      console.log(email, password);
      alert(error.message);
      navigate("/login");
      setIsLoading(false)
    })
  }

  return (<>
  {isLoadnig && <PuffLoader color="#36d7b7" size={100} cssOverride={override}/>}
    <div >
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={() => navigate("/signup")} >Signup</a>
      </div>
    </div>
    </>
  );
}

export default Login;

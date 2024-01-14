import React , {useState} from 'react'
import { Link } from "react-router-dom";


export default function Signup({image}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformpassword, setConformpassword] = useState('');
  const [name, setName] = useState('');
  const [phoneno, setPhoneno] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log(name , email , phoneno );
  };

  return (
    <div className="signin-form">
    <h2>Sign Up </h2>
    <img id='logo' src={image} width={"40%"}></img>
    <form onSubmit={handleSignUp}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
       <label>Number:</label>
      <input
        type="number"
        value={phoneno}
        onChange={(e) => setPhoneno(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label>Conform Password:</label>
      <input
        type="password"
        value={conformpassword}
        onChange={(e) => setConformpassword(e.target.value)}
        required
      />
      
      <button type="submit">Sign Up</button>
    </form>
   <Link id='Link' to={"/"}>Homepage</Link>
   <Link id='linkside' to="/Signinup/Signin">Signin</Link>
     <Link id='linkside' to="/Signinup/Signup">Signup</Link>
  </div>
  )
}

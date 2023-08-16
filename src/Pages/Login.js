import './Home.css'
import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Login() {

    const[employee,setEmployee]=useState({
        email:"",
        password:""
    })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onInputChange=(e)=>{
        setEmployee({...employee,[e.target.name]:e.target.value})
    };

  const onSubmit=async(e)=>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:8082/", {
          email: email,
          password: password,
          }).then((res) => 
          {
           console.log(res.data);
           
           if (res.data.message == "Email not exits") 
           {
             alert("Email exits");
           } 
           else if(res.data.message == "Login Successfully")
           { 
              
              navigate('/Home/details');
           } 
            else 
           { 
              alert("Incorrect Email and Password not match");
           }
        }, fail => {
         console.error(fail); 
});
      }
       catch (err) {
        alert(err);
      }
    }

  return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Login</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Email
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your Email"
                    name="email"
                    value={email}
                   onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">
                        Password
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your Password"
                    name="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <div className='buttonContainer'>
                <div className='formButton'>
                <button type="submit" className="btn btn-outline-primary" onClick={onInputChange}>
                    Login
                </button>
                </div>

                <div className='formButton'>
                <Link type="submit" className="btn btn-outline-primary" to="/Register">
                    Register
                </Link>
                </div>
                </div>
</form>
            </div>
        </div>

    </div>
  )

  }
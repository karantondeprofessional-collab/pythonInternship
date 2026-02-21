import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);

  const login = async (e) => {
    e.preventDefault();

    if(!email || !password){
      alert("Enter email and password");
      return;
    }

    try{
      setLoading(true);

      const res = await API.post("/auth/login",{
        email:email,
        password:password
      });

      // token save
      localStorage.setItem("token",res.data);

      alert("Login Successful");
      navigate("/dashboard");

    }catch(err){
      alert("Invalid Email or Password");
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card p-4" style={{width:"350px"}}>
        <h3 className="text-center mb-3">Estimate Login</h3>

        <form onSubmit={login}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>

    </div>
  );
}

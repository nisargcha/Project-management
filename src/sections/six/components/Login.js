import React from "react";
import './Login.css'
import backimage from '../assets/background.png'
import logo from '../assets/logo.jpg'

export default function Home() {
  return (
    <>
    <header>
          <h1>Welcome Back!</h1>
          <div className="logo-container">
            <img src={logo} alt="this is logo" />
          </div>
        </header>
      <div className="container">
        <div className="background-image">
          <img src={backimage} alt="this is background" />
        </div>
        <div className="signup">
          <h3> Sign In To Minimal</h3>
          <div className="d-flex">
          <p>New User?</p>
          <p><a href="/" className="link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover fw-bold ">Create An Account</a></p>
          </div>
          
          <div className="alert alert-info" role="alert">
            <p>
              &#9432; Use email : <strong>example@minimal.cc </strong> / Password :<strong>Demo1234</strong>
            </p>
          </div>

          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control border-secondary-subtle"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email" 
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control border-secondary-subtle"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <p><a href="/" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover small float-end my-2">Forgot Password?</a></p>
            <button type="submit" className="btn w-100 btn-dark">
              Login
            </button>
          </form>
        </div>
        
      </div>
    </>
  );
}

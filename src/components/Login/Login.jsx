import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {

    const {signIn} =useContext(AuthContext);
    const handleSignIn = (event) =>{
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         console.log(email,password)
         signIn(email,password)
         .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
         })
         .catch(error=>{
            console.log(error)
         })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" name='submit' value='login'/>
              </div>
              </form>
              <p>New to this website?  <Link to='/signup'>sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
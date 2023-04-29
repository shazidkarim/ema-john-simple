import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const SignUp = () => {
    const [error,setError] = useState('');
    const {createUser} = useContext(AuthContext);


    const handleSignUp =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        setError('');
        if(password !== confirm){
            setError('password did not match')
            return
        }
        else if(password.length < 6){
            setError('password must be at least 6 digit')
            return
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-5">Sign up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='confirm' placeholder="password" className="input input-bordered" required/>
              </div>
              <p className='text-orange-500'>{error}</p>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" name='submit' value='Sign up'/>
              </div>
            </form>
            <p>Already have an account?  <Link to='/login'>Login</Link></p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

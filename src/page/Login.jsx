

import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
 const { loginUser } = use(AuthContext);


const loginhandler=(e)=>{
e.preventDefault()
const form=e.target;
const email=form.email.value;
const password = form.password.value;

loginUser(email,password).then(res=>{
console.log(res.user)

  alert("user logint suyccessfull")
}).catch(()=>alert("someething went wrong"))
}


    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-2xl text-center">
              Login Your Account
            </h2>
            <form onSubmit={loginhandler}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                name='password'
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
                <div>
                  <a className="link link-hover">
                    Dont Have an account?{" "}
                    <Link
                      to="/auth/register"
                      className="font-medium text-md text-secondary"
                    >
                      Register
                    </Link>
                  </a>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
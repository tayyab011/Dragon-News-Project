import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
const { setUser, registerUser, user } = use(AuthContext);
console.log(user);
  const hndlreg=(e)=>{
e.preventDefault();
const name=e.target.name.value;
const photo = e.target.photo.value;
const email = e.target.email.value;
const password = e.target.password.value;
registerUser(email, password).then((res) => {
  const user = res.user
  console.log(user)
  setUser(user);
}).catch((error) => {
 /*    const errorCode = error.code; */
    const errorMessage = error.message;
   console.log(errorMessage)
  });

  }


    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-2xl text-center">
              Register Your Account
            </h2>
            <form onSubmit={hndlreg} className="fieldset">
              <label className="label">Your Name</label>
              <input name='name' type="text" className="input" placeholder="Name" />
              <label className="label">Photo URL</label>
              <input name='photo' type="text" className="input" placeholder="Photo Url" />
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name='password' type="password" className="input" placeholder="Password" />
              <button type='submit' className="btn btn-neutral mt-4">register</button>
              <div>
                <a className="link link-hover">
                  Already Have an account?{" "}
                  <Link
                    to="/auth/login"
                    className="font-medium text-md text-secondary"
                  >
                    Login Now
                  </Link>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
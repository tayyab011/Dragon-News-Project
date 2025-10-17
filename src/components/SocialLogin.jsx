import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';

const SocialLogin = () => {
    return (
      <div>
        <h2 className="font-bold my-3">Login With</h2>
        <div className="space-y-3">
          <button className="btn btn-outline btn-secondary w-full">
            <FcGoogle size={20} /> Login With Google
          </button>
          <button className="btn btn-outline btn-primary w-full">
            <GrGithub size={20} /> Login With GitHub
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;
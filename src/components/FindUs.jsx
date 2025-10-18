import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
      <div>
        <h3 className="font-bold">Find Us On </h3>

        <div className="flex flex-col justify-start text-left mx-3 mt-4">
          <button className="btn w-full  justify-start"> <FaFacebook/>     Facebook</button>
          <button className="btn w-full  justify-start"> <FaTwitter/>    Twitter</button>
          <button className="btn w-full  justify-start"> <FaInstagram/>    Instagram</button>
        </div>
      </div>
    );
};

export default FindUs;
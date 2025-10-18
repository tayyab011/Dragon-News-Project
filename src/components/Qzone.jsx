import React from 'react';
import swimming from "../assets/swimming.png"
import classimg from "../assets/class.png"
import playground from "../assets/playground.png"
const Qzone = () => {
    return (
      <div className="p-4 bg-[#F3F3F3]">
        <h2>qzone</h2>

        <div className="space-y-4">
          <img src={swimming} alt="" />
          <img src={classimg} alt="" />
          <img src={playground} alt="" />
        </div>
      </div>
    );
};

export default Qzone;
import React from 'react';

const Loading = () => {
    return (
      <div>
        <div className="w-full bg-base-200 min-h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
    );
};

export default Loading;
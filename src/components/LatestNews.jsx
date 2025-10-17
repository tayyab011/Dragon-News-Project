import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
      <div className="flex items-center gap-5 bg-base-200 p-3">
        <p className="bg-secondary py-2 px-3 text-white">Latest</p>
        <Marquee className="flex gap-x-32" pauseOnHover={true}>
          <p className="text-[#403F3F] font-semibold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-[#403F3F] font-semibold">
            adq Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-[#403F3F] font-semibold">
            the Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    );
};

export default LatestNews;
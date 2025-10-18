import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ data }) => {
  return (
    <div>
      <div className=" mx-auto p-4">
        {/* Card */}
        <div className="card bg-base-100   rounded-lg overflow-hidden">
          {/* Image */}
          <figure>
            <img
              src={data.image_url}
              alt="News Thumbnail"
              className="w-[90%] object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-xl font-bold leading-snug">
              {data.title}
            </h2>

            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
              {data.details}
            </p>

            {/* Footer Button */}
            <Link
              to={`/category/${data.category_id}`}
              className="card-actions justify-start mt-4"
            >
              <button className="btn btn-error text-white">
                ← All news in this category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
import React from "react";
import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";
import { MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  // ✅ Extract nested author object properly
  const authorName = news.author?.name || "Unknown Author";
  const authorImage =
    news.author?.img ||
    `https://i.pravatar.cc/100?u=${encodeURIComponent(authorName)}`;
  const date = news.author?.published_date || "";

  const title = news.title || "Untitled";
  const description = news.details || news.description || "";
  const thumbnail =
    news.thumbnail_url ;

  const rating = news.rating?.number ;
  const views = news.total_view ;

  return (
    <article className="card bg-base-100 shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border">
            <img
              src={authorImage}
              alt={authorName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-sm">{authorName}</h4>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        <div className=" btn-sm flex gap-6">
          <MdBookmarkBorder size={20} className="cursor-pointer" />
          <FaShareAlt size={20} className="cursor-pointer" />
        </div>
      </div>

      {/* Image */}
      <figure>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 md:h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        <h2 className="card-title text-base md:text-lg">{title}</h2>
        <p className="text-sm text-gray-600">
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
        </p>

        <Link
          to={`/newsDetails/${news.id}`}
          className="text-orange-500 font-semibold text-sm mt-2 inline-block"
        >
          Read More
        </Link>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-orange-500">
              <FaStar />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 ml-3">
              <FaRegEye />
              <span className="text-sm">{views}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;

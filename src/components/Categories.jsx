import React, { use } from 'react';
import { NavLink } from 'react-router';

const catProms = fetch("/categories.json").then(res=>res.json())

const Categories = () => {
    const categories = use(catProms);
    console.log(categories);
    return (
      <div>
        <h2 className="font-bold">All Categories {categories.length}</h2>
        <div className="grid grid-cols-1 gap-2">
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                `btn bg-base-100 border-0  ${isActive ? "bg-base-300" : ""}`
              }
              key={category.id}
            >
              {category?.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default Categories;
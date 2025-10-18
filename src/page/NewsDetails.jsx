import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const loaderData=useLoaderData()
    const {id}=useParams()

    const [data,setData]=useState([])
 
    useEffect(()=>{
        const detailData = loaderData.find(news=>news.id ==id)
       setData(detailData);
    })
 
    return (
      <div>
        <header className="py-4 ">
          <Header />
        </header>

        <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-9">
            <h2 className="text-2xl font-bold pb-4">Dragon News</h2>

            <NewsDetailsCard key={data.id} data={data} />
          </div>

          <div className="col-span-3">
            <RightAside />
          </div>
        </main>
      </div>
    );
};

export default NewsDetails;
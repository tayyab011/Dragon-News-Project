import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import FindUs from '../components/FindUs';

const HomeLayout = () => {
    return (
      <div>
        <header>
          <Header />
          <section className="w-11/12 mx-auto">
            <LatestNews />
          </section>

          <nav className="w-11/12 mx-auto py-4 ">
            <Navbar />
          </nav>
        </header>

        <main className="w-11/12 mx-auto py-3  grid md:grid-cols-12 grid-cols-1 md:gap-3">
          <aside className=" md:col-span-3 md:sticky md:top-0 h-fit">
            <LeftAside />
          </aside>
          <section className=" col-span-6 ">
            <Outlet></Outlet>
          </section>
          <aside className=" col-span-3 space-y-5  md:sticky md:top-0 h-fit">
            <RightAside />
          </aside>
        </main>
      </div>
    );
};

export default HomeLayout;
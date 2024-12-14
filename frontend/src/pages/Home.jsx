import React from 'react';
import heroImg from '../assets/vinylverse-hero-img.png';
import homeGraphic from '../assets/home-graphic.png';
import { motion } from "motion/react";

import newsCard1 from "../assets/news-card-1.webp";
import newsCard2 from "../assets/news-card-2.webp";
import newsCard3 from "../assets/news-card-3.webp";

import sza from '../assets/SZA.png';


const Home = () => {

  const trendingVinyls = [
    {
      image: sza,
      artist: "SZA",
      album: "SOS",
      label: "Rostrum Records",
      genre: "Rap / Hip-hop",
      price: "$24.88",
    },
    {
      image: "../assets/mac-watching-movies.png",
      artist: "Kendrick Lamar",
      album: "GNX",
      label: "Rostrum Records",
      genre: "Rap / Hip-hop",
      price: "$24.88",
    },
    {
      image: "../assets/mac-watching-movies.png",
      artist: "Mac Miller",
      album: "Watching Movies With The Sound Off",
      label: "Rostrum Records",
      genre: "Rap / Hip-hop",
      price: "$24.88",
    },
    {
      image: "../assets/mac-watching-movies.png",
      artist: "Mac Miller",
      album: "Watching Movies With The Sound Off",
      label: "Rostrum Records",
      genre: "Rap / Hip-hop",
      price: "$24.88",
    },
    {
      image: "../assets/mac-watching-movies.png",
      artist: "Mac Miller",
      album: "Watching Movies With The Sound Off",
      label: "Rostrum Records",
      genre: "Rap / Hip-hop",
      price: "$24.88",
    },
    {
      image: "../assets/mac-watching-movies.png",
      artist: "Mac Miller",
      album: "Watching Movies With The Sound Off",
      label: "Rostrum Records",
      genre: "Rap / Hip-hop",
      price: "$24.88",
    },
    {
      image: "../assets/mac-watching-movies.png",
      artist: "Mac Miller",
      album: "Watching Movies With The Sound Off",
      label: "Rostrum Records",
      genre: "Rap / Hip-hop",
      price: "$24.88",
    },
    {
      image: "../assets/mac-watching-movies.png",
      artist: "Mac Miller",
      album: "Watching Movies With The Sound Off",
      label: "Rostrum Records",
      genre: "Rap / Hip-hop",
      price: "$24.88",
    }
  ]

  const news = [
    {
      imgSrc: newsCard1,
      title: "Review: Pro-Ject T1 BT Turntable",
      author: "Julian Chokkattu",
      time: "5 min. read",
      link: "https://www.wired.com/review/pro-ject-t1-bt/",
    },
    {
      imgSrc: newsCard2,
      title: "The Best Vinyl Accessories to Jazz Up Your Analog Audio",
      author: "Parker Hall",
      time: "8 min. read",
      link: "https://www.wired.com/gallery/best-vinyl-accessories/",
    },
    {
      imgSrc: newsCard3,
      title: "How to Clean Your Vinyl Records (Because They're Filthy!)",
      author: "Parker Hall",
      time: "4 min. read",
      link: "https://www.wired.com/story/how-to-clean-vinyl/",
    },
  ];
  return (
    <main>
      <section className="relative min-h-screen flex items-stretch">
        <img src={heroImg} alt="" className="absolute inset-0 object-cover w-full h-full" />
        <div className="relative z-10 max-w-2xl text-left px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-12">
          <div className="hero-content">
            <p className="hero-title text-white tracking-large font-extralight text-[#D0D0D0]">VINYLVERSE</p>
            <h1 className="hero-text font-bungee text-100 text-white leading-tight">SPIN, <br /> DISCOVER, <br /> REPEAT.</h1>

            {/* Hero button with hover effect */}
            <motion.button
              className="hero-btn bg-teal text-white py-4 px-6 rounded-lg mt-6 font-bold shadow-lg"
              whileHover={{
                scale: 1.05,        // Size
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Shadow
                transition: {
                  duration: 0.3,
                  ease: "easeInOut"
                }
              }}
            >
              SHOP NOW
            </motion.button>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="relative">
          <img src={homeGraphic} alt="" className="absolute w-full h-auto inset-0" />
          <h2 className="relative font-poppins font-semibold text-5xl px-4 pt-12 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">TRENDING VINYLS</h2>
        </div>

        {/* Trending Vinyls Grid */}
        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 px-4 pt-12 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-36">
          {trendingVinyls.map((record, index) => (
            <div
              key={index}
              className="bg-offwhite rounded-md shadow-md p-4 flex flex-col"
            >
              <img
                src={record.image}
                alt={record.album}
                className="h-68 object-cover mb-4"
              />
              <h3 className="text-lg font-bold">{record.album}</h3>
              <p className="text-gray-700">{record.artist}</p>
              <p className="text-gray-500 text-sm">{record.label}</p>
              <p className="text-gray-500 text-sm">{record.genre}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold">{record.price}</p>
                <button className="px-4 py-2 bg-brown text-white rounded-md hover:bg-blue-600">
                  VIEW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse the Collection Banner */}
      <section>
        <div className="bg-brown h-50 w-full flex items-center justify-center flex-col text-white p-10 mt-6">
          <h3 className="font-bungee text-5xl">Browse the Collection</h3>
          <motion.button
            className="hero-btn bg-teal text-white py-2 px-4 rounded-lg mt-6 font-bold shadow-lg"
            whileHover={{
              scale: 1.05,        // Size
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Shadow
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
          >
            View Vinyls
          </motion.button>
        </div>
      </section>

      {/* Latest News */}
      <section>
        <div className="mt-24">
          <h1 className="text-4xl text-center font-bold">LATEST NEWS</h1>
          <div className="mt-10 mb-10 flex flex-wrap gap-5 justify-center">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 p-5 w-96 flex flex-col items-center"
              >
                <img
                  src={item.imgSrc}
                  alt="news-article-img"
                  className="w-full h-auto"
                />
                <p className="font-bold mt-3 text-lg text-center">{item.title}</p>
                <p className="mt-2 text-center">{item.author}</p>
                <p className="mt-1 text-center text-sm">{item.time}</p>
                <button className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black no-underline"
                  >
                    View Article
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

  );
};

export default Home;


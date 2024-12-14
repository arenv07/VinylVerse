import React, { useState } from "react";
import Footer from '../components/Footer';
import collectionGraphic from '../assets/browse.png';
import searchIcon from '../assets/search-icon.png';
import macWatchingMovies from '../assets/mac-watching-movies.png';
import frankBlond from '../assets/frank-ocean-blonde.jpg';
import chromakopia from '../assets/chromakopia.jpeg';
import brat from '../assets/charli-xcx-brat.png';
import crazyp from '../assets/crazy-p.png';
import gorillaz from '../assets/gorillaz.png';
import sza from '../assets/SZA.png';
import joeyBadass from '../assets/joey-badass.jpeg';

const hardcodedData = [
  {
    image: macWatchingMovies,
    artist: "Mac Miller",
    album: "Watching Movies With The Sound Off",
    label: "Rostrum Records",
    genre: "Rap / Hip-hop",
    price: "$24.88",
  },
  {
    image: frankBlond,
    artist: "Frank Ocean",
    album: "Blond",
    label: "Rostrum Records",
    genre: "Hip-Hop",
    price: "$23.59",
  },
  {
    image: chromakopia,
    artist: "Tyler, The Creator",
    album: "Chromakopia",
    label: "Steel Wool Records",
    genre: "Hip-Hop",
    price: "$27.49",
  },
  {
    image: brat,
    artist: "Charli XCX",
    album: "Brat",
    label: "Royal Mountain Records",
    genre: "Alternative / Indie",
    price: "$24.98",
  },
  {
    image: crazyp,
    artist: "Crazy P",
    album: "Walk Dance Talk Sing",
    label: "Don't Walk Productions",
    genre: "Dance / Electronic",
    price: "$45.00",
  },
  {
    image: sza,
    artist: "SZA",
    album: "SOS",
    label: "Dead Oceans",
    genre: "Alternative / Indie",
    price: "$15.95",
  },
  {
    image: "/images/dope-lemon 1.png",
    artist: "Dope Lemon",
    album: "Smooth Big Cat",
    label: "BMG Rights Management",
    genre: "Alternative / Indie",
    price: "$20.99",
  },
  {
    image: gorillaz,
    artist: "Gorillaz",
    album: "Demon Days",
    label: "EMI",
    genre: "Alternative Rock / Hip-Hop / Pop",
    price: "$36.95",
  },
  {
    image: "/images/free-nationals.jpeg",
    artist: "Free Nationals",
    album: "Free Nationals",
    label: "EMPIRE Distribution",
    genre: "R&B / Soul",
    price: "$28.69",
  },
  {
    image: joeyBadass,
    artist: "Joey Bada$$",
    album: "1999",
    label: "PRO ERA / EMPIRE",
    genre: "Hip-Hop / Jazz Rap",
    price: "$28.69",
  },
];

const Collection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecords = hardcodedData.filter((record) =>
    record.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="relative">
        <img
          src={collectionGraphic}
          alt=""
          className="w-full object-cover "
        />
        <h1 className="absolute bottom-1 text-3xl font-bold text-black px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          BROWSE VINYLS
        </h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex items-center mt-6 bg-none border border-brown rounded-md px-4 py-2 w-1/4">
          <img src={searchIcon} alt="Search" className="h-5 w-5" />
          <input
            type="text"
            className="flex-grow bg-transparent ml-4 outline-none"
            placeholder="Search records"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Records */}
      <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 mb-8 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {filteredRecords.map((record, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 flex flex-col"
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Collection;

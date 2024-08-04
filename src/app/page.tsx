"use client"; // Ensure this component runs on the client-side

import React, { useEffect, useState } from "react";
import { fetchCountries, Country } from "./data/country";
import CountryCard from "./components/CountryCard";
import "./globals.css";
import { useLikes } from "./context/LikesContext";
import { AiFillLike } from "react-icons/ai";
import Link from "next/link"; // Correct import for Link from next/link

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const { likedCountries } = useLikes();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    };

    console.log(likedCountries);

    fetchData();
  }, []);

  return (
    <div className="country-container">
      <Link href="/country/favoris">
        <div className="favorite">
          <p>{likedCountries.length} Pays favoris</p> 
          <AiFillLike style={{ color: 'red', marginLeft: '8px' }} />
        </div>
      </Link>
      <div className="country-list">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;

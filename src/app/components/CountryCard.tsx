"use client";

import React from "react";
import { Country } from "../data/country";
import Link from "next/link";
import { useLikes } from "../context/LikesContext";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { likedCountries } = useLikes();
  const isFavorite = likedCountries.includes(country.cca3);

  return (
    <Link href={`/country/${country.cca3}`} >
      <div className="country-card">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.translations.fra.common}`}
        />
        <h3>{country.translations.fra.common}</h3>
        <p>{country.region}</p>
        {isFavorite && <span className="favorite-indicator">★</span>}
      </div>
    </Link>
  );
};

export default CountryCard;

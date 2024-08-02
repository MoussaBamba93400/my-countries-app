// src/components/CountryDetail.tsx

'use client';

import React from 'react';
import { Country } from '../data/country';
import { useLikes } from '../context/LikesContext';

interface CountryDetailProps {
    country: Country;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country }) => {
    const { likedCountries, toggleLike } = useLikes();
    const isFavorite = likedCountries.includes(country.cca3);

    return (
        <div className="country-detail">
            <h1>{country.translations.fra.common}</h1>
            <button onClick={() => toggleLike(country.cca3)}>
                {isFavorite ? 'Retirer des Favoris' : 'Ajouter aux Favoris'}
            </button>
            <p>Nom anglophone: {country.name.common}</p>
            <p>Nom officiel: {country.name.official}</p>
            <p>Capitale: {country.capital.join(', ')}</p>
            <p>TimeZone: {country.timezones.join(', ')}</p>
            <p>Langues: {Object.values(country.languages).join(', ')}</p>
            <p>Population: {country.population}</p>
            <p>Région: {country.region}</p>
        </div>
    );
};

export default CountryDetail;

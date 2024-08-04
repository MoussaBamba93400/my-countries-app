"use client";
import React from 'react';
import { useLikes } from '../../context/LikesContext';
import CountryCard from '../../components/CountryCard';
import { notFound } from 'next/navigation';



const FavorisPage: React.FC = () => {
    const { likedCountries } = useLikes();
  
    return (
      <div className="country-container">
        <h1>Les pays favoris</h1>
       {likedCountries.length === 0 ? <p>Vous n'avez pas encore de pays favoris</p> : likedCountries.map((elem) => <CountryCard country={elem} />) }
      </div>
    );
  }

export default FavorisPage;
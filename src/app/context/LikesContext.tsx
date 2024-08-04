'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Country {
  cca3: string;
  // Add other properties of the Country object as needed
}

interface LikesContextProps {
  likedCountries: Country[];
  toggleLike: (country: Country) => void;
}

const LikesContext = createContext<LikesContextProps | undefined>(undefined);

export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likedCountries, setLikedCountries] = useState<Country[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('likedCountries');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const toggleLike = (country: Country) => {
    setLikedCountries(prevLikedCountries => {
      const isLiked = prevLikedCountries.some(c => c.cca3 === country.cca3);
      const updatedLikes = isLiked
        ? prevLikedCountries.filter(c => c.cca3 !== country.cca3)
        : [...prevLikedCountries, country];
      localStorage.setItem('likedCountries', JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  return (
    <LikesContext.Provider value={{ likedCountries, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error('useLikes must be used within a LikesProvider');
  }
  return context;
};

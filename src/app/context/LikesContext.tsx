'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LikesContextProps {
    likedCountries: string[];
    toggleLike: (countryCode: string) => void;
}

const LikesContext = createContext<LikesContextProps | undefined>(undefined);

export const LikesProvider = ({ children }: { children: ReactNode }) => {
    const [likedCountries, setLikedCountries] = useState<string[]>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('likedCountries');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });

    const toggleLike = (countryCode: string) => {
        setLikedCountries(prevLikedCountries => {
            const isLiked = prevLikedCountries.includes(countryCode);
            const updatedLikes = isLiked
                ? prevLikedCountries.filter(code => code !== countryCode)
                : [...prevLikedCountries, countryCode];
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

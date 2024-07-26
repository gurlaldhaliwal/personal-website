"use client";

import { useState, useEffect } from 'react';
import { mont, serif_gurmukhi } from "./utilities/fonts";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <main>
        <h1 className="text-4xl">{"Gurlal Dhaliwal"}</h1>
        <div className="flex flex-col justify-center items-center py-4">
          <div className={serif_gurmukhi.className}>
            <h1 className="text-2xl">{"ਗੁਰਲਾਲ ਧਾਲੀਵਾਲ"}</h1>
          </div>
        </div>
      </main>
      <div className="flex flex-col items-center text-center">
        {loading && (
          <div className="w-32 h-32 flex justify-center items-center mb-4">
            <p className="text-lg font-semibold">Loading...</p>
            {/* Loading text placeholder */}
          </div>
        )}
        <img 
          src="/images/1.jpg"
          alt="Profile Picture" 
          loading="lazy"
          className={`w-32 h-32 rounded-full border-4 border-gray-300 mb-4 ${loading ? 'hidden' : ''}`}
        />
        <div className="text-wrap lg:text-lg lg:w-1/3 text-lg w-1/3">
          <p className={mont.className}>
            {
              "I am currently a senior at the University of Maryland, studying Information Sciences while working on personal projects and building my technical skills trying to break into the tech world. I enjoy playing video games, hanging out with friends, and competing in gatka competitions (sikh martial artis). Pretty chill dude always down for a short or long conversation about ANYTHING my ears are always open :D"
            }
          </p>
        </div>
      </div>
    </div>
  );
}

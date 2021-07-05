import React from "react";
import { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    // Should this function be created outside?
    // 19:47 Mark thinking this through
    // Will continue to follow to learn more about her thought process.
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div>

        {photoData.media_type === "image" ? (
            
            <img src={photoData.url} alt={photoData.url} />

        ) : (
            <iframe 
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture='media'
                allow='encrypted-media'
                allowFullScreen
                className='photo'
            />
)}


      <h1>{photoData.title}</h1>
      <p></p>
      <p>{photoData.explanation}</p>
    </div>
  );
}

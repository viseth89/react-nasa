import React, { useEffect } from 'react'

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        // Should this function be created outside? 
        // 19:47 Mark thinking this through
        // Will continue to follow to learn more about her thought process.
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=Txbals3ag1fH0pPbwrcjdn4MnIZbYbdVDhCIn7qm`
            )
            const data = await res.json();
            setPhotoData(data)
        }
    })

    return (

    )
}
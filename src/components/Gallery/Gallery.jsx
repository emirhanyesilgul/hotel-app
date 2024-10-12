import React from 'react'
import Lightroom from 'react-lightbox-gallery'
import '../../components/Gallery/gallery.css'
const Gallery = () => {
    const images = [
        {
            src: "https://hotel1207.com/storage/rooms/superiortwin/61920684d408f-770x460.jpeg",
            desc: "Superior Twin",
            sub: "Lüx"
        },
        {
            src: "https://hotel1207.com/storage/rooms/superiortwin/61920684eb943.jpeg",
            desc: "Superior Twin",
            sub: "Lüx"
        },
        {
            src: "https://hotel1207.com/storage/rooms/superiortwin/61920684e03df-770x460.jpeg",
            desc: "Superior Twin",
            sub: "Lüx"
        },
        {
            src: "https://hotel1207.com/storage/rooms/kingsuit/61920683d1098-770x460.jpeg",
            desc: "Deluxe Suite",
            sub: "Lüx"
        },
        {
            src: "https://hotel1207.com/storage/rooms/kingsuit/6192068391af9.jpeg",
            desc: "Deluxe Suite",
            sub: "Lüx"
        },
        {
            src: "https://hotel1207.com/storage/rooms/kingsuit/619206840a610.jpeg",
            desc: "Deluxe Suite",
            sub: "Lüx"
        },
    ];

    const settings = {
        columnCount: {
            default: 3,
            mobile: 2,
            tab: 3
        },
        mode: "dark",
        enableZoom: false,
    };

    return (
        <div style={{ zIndex: 1000 }}>
        <Lightroom className="gallery" images={images} settings={settings} />
      </div>
    );
}

export default Gallery
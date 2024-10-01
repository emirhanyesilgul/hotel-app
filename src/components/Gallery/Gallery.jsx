import React from 'react'
import Lightroom from 'react-lightbox-gallery'
import GalleryImg1 from "../../assets/images/gallery/g1.jpg"
import GalleryImg3 from "../../assets/images/gallery/g3.jpg"
import GalleryImg4 from "../../assets/images/gallery/g4.jpg"
import GalleryImg6 from "../../assets/images/gallery/g6.jpg"
import GalleryImg7 from "../../assets/images/gallery/g7.jpg"


const Gallery = () => {

    var images = [
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

    var settings = {
        columnCount: {
            default: 3,
            mobile: 2,
            tab: 3
        },
        mode: "dark",
        enableZoom:false,
    };
    return (
        <Lightroom images={images} settings={settings} />
   );
}

export default Gallery
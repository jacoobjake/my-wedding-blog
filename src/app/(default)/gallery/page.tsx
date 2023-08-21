'use client'

import PhotoAlbum from "react-photo-album";
// import photos from "./photos";

const photos = [
    { src: "https://onedrive.live.com/embed?resid=332220CB5ABF1FD3%21300&authkey=%21AEebshBMGB5bVQA&width=5397&height=3602", width: 5397, height: 3602 },
    { src: "https://onedrive.live.com/embed?resid=332220CB5ABF1FD3%21299&authkey=%21AM7VO_WRKvAF6zw&width=3602&height=5397", width: 3602, height: 5397 },
];

export default function Gallery() {
    return (
        <div className="px-24">
            <PhotoAlbum layout="rows" photos={photos} rowConstraints={() => {
                return {
                    minPhotos: 2,
                    maxPhotos: 4
                }
            }} />
        </div>
    )
}

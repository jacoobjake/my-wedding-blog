'use client'

import { useState } from "react";
import PhotoAlbum, { Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

export default async function PhotoAlbumComponent({photos} : {photos:Photo[]}) {
    const [index, setIndex] = useState(-1);

    return (
        <div className="px-24">
            <PhotoAlbum layout="rows" photos={photos} rowConstraints={() => {
                return {
                    minPhotos: 2,
                    maxPhotos: 4
                }
            }} onClick={({ index }) => setIndex(index)} />

            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen]}
            />
        </div>
    )
}
'use client'

import { Photo } from "react-photo-album";
import { useState, useEffect } from "react";
import PhotoAlbumComponent from "@/components/utils/photo-album";
import { gallery } from "@/lib/api/photo";

export default async function Gallery() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    async function getGallery() {
        const items = await gallery()
        setPhotos(items);
    }

    useEffect(() => {
        getGallery()
    }, []);

    return (
        <div className="md:px-24">
            <PhotoAlbumComponent photos={photos} />
        </div>
    )
}

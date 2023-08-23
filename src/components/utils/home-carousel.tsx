'use client'

import { Suspense, useEffect, useContext, useState } from 'react';
import { Photo } from 'react-photo-album';
import { ImgCarousel } from './img-carousel';
import { carousel } from '@/lib/api/photo';

export default async function HomeCarousel() {
    const [items, setItems] = useState<Photo[]>([]);

    async function getCarousel() {
        const items = await carousel()
        setItems(items);
    }

    useEffect(() => {
        getCarousel()
    }, []);

    return (
        <>
            <div>
                <ImgCarousel items={items} />
            </div>
        </>
    )
}

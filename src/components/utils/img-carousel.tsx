'use client'

import { Carousel } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['carousel'] = {
    scrollContainer: {
        base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none',
    },
};

interface ImgProps {
    src: string,
    alt?: string,
}

interface CarouselProps {
    items: ImgProps[],
}

export function ImgCarousel({ items }: CarouselProps) {
    return (
        <Carousel className="h-[18rem] sm:h-[28rem] md:h-[32rem] lg:h-[40rem] bg-gray-100" theme={customTheme}>
            {
                items.map((item, key) => {
                    return (
                        <img key={key} src={item.src} alt={item.alt ?? ''} className="overflow-x-hidden w-auto h-full" />
                    )
                })
            }
        </Carousel>
    )
}
'use client'

import { ImgCarousel } from "@/components/utils/img-carousel";

const items = [
    {
        src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
        alt: "...",
    },
    {
        src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
        alt: "...",
    },
    {
        src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
        alt: "...",
    },
    {
        src: "/gallery/main-1.jpg",
        alt: "...",
    },
]

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="z-10 items-center justify-between font-mono text-sm">
                <div>
                    <ImgCarousel items={items} />
                </div>
                <div className="px-24">
                    {children}
                </div>
            </div>
        </>
    )
}

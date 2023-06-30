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
]

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="z-10 w-full items-center justify-between font-mono text-sm">
                <div>
                    <ImgCarousel items={items} />
                </div>
                <div className="px-12 pt-2">
                    {children}
                </div>
            </div>
        </>
    )
}

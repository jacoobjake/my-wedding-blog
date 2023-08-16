'use client'

import { ImgCarousel } from "@/components/utils/img-carousel";

const items = [
    {
        src: "https://onedrive.live.com/embed?resid=332220CB5ABF1FD3%21278&authkey=%21AOaxc4SwDfgVfFw&width=5397&height=3602",
        alt: "...",
    },
    {
        src: "https://onedrive.live.com/embed?resid=332220CB5ABF1FD3%21315&authkey=%21APboKt_LtlKrOgI&width=5397&height=3602",
        alt: "...",
    },
    {
        src: "https://onedrive.live.com/embed?resid=332220CB5ABF1FD3%21289&authkey=%21AIFokYMu5OnSwYQ&width=5397&height=3602",
        alt: "...",
    },
    {
        src: "https://onedrive.live.com/embed?resid=332220CB5ABF1FD3%21300&authkey=%21AEebshBMGB5bVQA&width=5397&height=3602",
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
            <div className="items-center justify-between font-mono text-sm">
                <div>
                    <ImgCarousel items={items} />
                </div>
                <div className="md:px-24 sm:px-12">
                    {children}
                </div>
            </div>
        </>
    )
}

'use client'

import { useEffect, useState } from "react"
import { eventHeader } from "@/lib/api/photo"
import { Photo } from "react-photo-album";

export default async function Event() {
    // const [header, setHeader] = useState<Photo|undefined>();

    // async function getHeader() {
    //     const item = await eventHeader()
    //     setHeader(item);
    // }

    // useEffect(() => {
    //     getHeader()
    // }, []);

    return (
        <>
            <div className="w-full items-center text-center py-12 px-3">
                <div className="flex-column mx-auto sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 border-double border-8 items-center text-center">
                    <p className="text-xl pb-6 italic underline">Reception</p>
                    <img className="w-full h-auto" src="https://onedrive.live.com/embed?resid=332220CB5ABF1FD3%21388&authkey=%21AFJMjukNGlyuTws&width=1080&height=1080" alt="test"></img>
                    <p className="md:text-2xl pt-12 pb-3">Nov 4, 2023</p>
                    <p className="md:text-2xl py-6 leading-loose font-bold">Treasure Oasis Vegetarian Restaurant</p>
                    <p className="mx-auto md:text-base w-2/3">Viva Mall, Lot 2.07</p>
                    <p className="mx-auto md:text-base w-2/3">2nd Floor, Viva Home</p>
                    <p className="mx-auto md:text-base w-2/3">Jln Loke Yew, 55200 Kuala Lumpur</p>
                </div>
            </div>
            <div className="w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.891027003809!2d101.71593767575803!3d3.1235111533080793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3746e1e9b62b%3A0x99fd15f16230bf37!2zVHJlYXN1cmUgT2FzaXMgVmVnZXRhcmlhbiBSZXN0YXVyYW50IOaEj-e0oOi9qQ!5e0!3m2!1sen!2smy!4v1692629831309!5m2!1sen!2smy" height="450" className="border-none w-full" loading="lazy"></iframe>
            </div>
        </>
    )
}

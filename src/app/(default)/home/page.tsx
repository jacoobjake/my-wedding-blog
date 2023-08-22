'use client'

import { useEffect, useContext, useState } from 'react';
import { Photo } from 'react-photo-album';
import { UserDataObject, CurrentUserContext, OpenModalContext } from '@context-provider';
import { ImgCarousel } from '@/components/utils/img-carousel';
import { carousel } from '@/lib/api/photo';

async function RsvpButton()
{
    const { openModal, setOpenModal } = useContext(OpenModalContext);

    return (<a className='underline underline-offset-4 text-2xl md:text-4xl border-pink-300 p-4 hover:bg-pink-300 hover:text-white rounded-md' href="#" onClick={(e) => {
        e.preventDefault()
        setOpenModal('rsvp')
    }}>RSVP</a>)
}

export default async function Home() {
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
            <div className="md:px-24 sm:px-12">
                <div className="w-full bg-pink-50 items-center text-center py-12 item-center">
                    <div className="mx-auto pb-2 w-10/12">
                        <p className="md:text-base py-6">IN CELEBRATION OF OUR WEDDING</p>
                    </div>
                    <div className="mx-auto py-12 md:py-24 border-y-4 w-3/4">
                        <p className='text-3xl md:text-7xl font-bold py-4'>Jake</p>
                        <p className="md:text-3xl py-2 italic">- and -</p>
                        <p className='text-3xl md:text-7xl font-bold py-4'>Yee Huan</p>
                    </div>
                    <p className="md:text-base py-6 md:py-12 italic">THE POTATO MEETS OLENJI</p>
                    <div className="mx-auto w-3/4 md:w-2/3 xl:w-1/3">
                        <p className="text-lg md:text-2xl py-6 leading-loose">Jake and Yee Huan joyfully request the pleasure of your company as we celebrate our wedding</p>
                    </div>
                    <div className="mx-auto w-1/3 flex pt-12 justify-center">
                        <RsvpButton></RsvpButton>
                    </div>
                </div>
                <div className="w-full items-center text-center py-12">
                    <div className="flex-column mx-auto w-4/5 lg:w-3/5 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 border-double border-8 items-center text-center">
                        <p className="text-xl pb-6 italic underline">Reception</p>
                        <img className="w-full h-auto" src="/gallery/main-1.jpg" alt="test"></img>
                        <p className="md:text-2xl pt-12 pb-3">Nov 2, 2023</p>
                        <p className="md:text-2xl py-6 leading-loose font-bold">Treasure Oasis Vegetarian Restaurant</p>
                        <p className="mx-auto md:text-base w-2/3">Viva Mall, Lot 2.07</p>
                        <p className="mx-auto md:text-base w-2/3">2nd Floor, Viva Home</p>
                        <p className="mx-auto md:text-base w-2/3">Jln Loke Yew, 55200 Kuala Lumpur</p>
                    </div>
                </div>
            </div>
        </>
    )
}

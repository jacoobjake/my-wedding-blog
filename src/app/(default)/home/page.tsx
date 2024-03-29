'use client'

import { Suspense, useEffect } from 'react';
import HomeCarousel from '@/components/utils/home-carousel';
import Loading from '../loading';
import { RsvpButton } from './rsvpBtn';
import { useSearchParams } from 'next/navigation';
import ModalController from '@/components/utils/modal-controller';

export default async function Home() {
    const searchParams = useSearchParams()
    const queryGuestId = searchParams.get('guest_id')
    const queryRsvp = searchParams.get('rsvp')
    useEffect(() => {
        if (queryGuestId && queryRsvp) {
            ModalController.showModal()
        }
    }, []);

    return (
        <>
            <div>
                <Suspense fallback={<Loading></Loading>}>
                    <HomeCarousel/>
                </Suspense>
            </div>
            <div className="md:px-24 sm:px-12 text-gray-600">
                <div className="w-full bg-beige items-center text-center py-12 item-center">
                    <div className="mx-auto pb-2 w-10/12">
                        <p className="md:text-base py-6">IN CELEBRATION OF OUR WEDDING</p>
                    </div>
                    <div className="mx-auto py-12 md:py-24 border-y-4 border-french-beige w-3/4">
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
                    <div className="flex-column mx-auto w-4/5 px-6 sm:px-12 py-12 border-double border-8 items-center text-center">
                        <p className="text-xl pb-6 italic underline">Reception</p>
                        <img className="w-full h-auto" src="https://onedrive.live.com/embed?resid=332220CB5ABF1FD3%21388&authkey=%21AFJMjukNGlyuTws&width=1080&height=1080" alt="test"></img>
                        <p className="md:text-2xl pt-6 pb-6">Nov 4, 2023</p>
                        <p className="text-[10px] md:text-xs lg:md:text-sm text-gray-500 italic font-bold">Guest Check-In - 5:00 PM</p>
                        <p className="text-[10px] md:text-xs lg:md:text-sm text-gray-500 italic font-bold">Banquet Starts - 6:00 PM</p>
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

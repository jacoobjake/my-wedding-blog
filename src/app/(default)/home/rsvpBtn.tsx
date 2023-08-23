'use client'

import { useContext } from "react";
import { OpenModalContext } from "@/app/context-provider";
export async function RsvpButton() {
    const { openModal, setOpenModal } = useContext(OpenModalContext);

    return (<a className='transition duration-700 underline underline-offset-4 text-2xl md:text-4xl border-moss-green p-4 hover:bg-moss-green hover:text-white rounded-md' href="#" onClick={(e) => {
        e.preventDefault()
        setOpenModal('rsvp')
    }}>RSVP</a>)
}
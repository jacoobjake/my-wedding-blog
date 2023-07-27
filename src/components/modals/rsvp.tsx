'use client';

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { useState } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

const customTextInputTheme: CustomFlowbiteTheme['textInput'] = {
    field: {
        input: {
            base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 text-center placeholder:text-center focus:ring-pink-300 focus:border-pink-300",
            colors: {
                pink: "bg-white border-pink-200 text-gray-900 focus:border-pink-300 focus:ring-pink-300",
            }
        }
    },
};
const customModalTheme: CustomFlowbiteTheme['modal'] = {
    content: {
        inner: "relative rounded-lg bg-[url('/gallery/main-1.jpg')] bg-center flex flex-col max-h-[90vh] border-double border-[12px]",
    },
    header: {
        title: "text-xl font-medium text-gray-900 dark:text-white",
    }
};

interface UserDataObject{
    email: string,
    name: string,
    plus_one: string,
    invitation_status: string,
}

export default function Rsvp() {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const [userData, setUserData] = useState<UserDataObject>();
    const props = { openModal, userData, setOpenModal, setUserData };

    function RsvpForm() {
        if (props.userData) {
            return (
                <form id="invitation_form" onSubmit={(e) => {
                    e.preventDefault()
                    console.log(e)
                }}>
                    <p className='py-3 italic'>We are pleased to invite</p>
                    <p className='text-2xl italic font-bold'>{props.userData.name} and {props.userData.plus_one}</p>
                    <p className='py-3 italic'>to the wedding of</p>
                    <p className='text-4xl font-bold pb-3'>Jake & Yee Huan</p>
                    <p className="py-3">Please confirm your attendace for <input className="w-1/24 focus:ring focus:border-pink-200 focus:ring-pink-200 active:border-pink-100 active:ring-pink-200"></input> pax</p>
                </form>
            )
        }

        return (
            <form id="find_my_details" onSubmit={(e) => {
                e.preventDefault()
                const userDataTmp = {
                    email: "email@mail.com",
                    name: "Test Name",
                    plus_one: "Plus One",
                    invitation_status: "Some Status",
                }
                console.log(userDataTmp)
                setUserData(userDataTmp)
            }}>
                <TextInput
                    id="email"
                    placeholder="name@flowbite.com"
                    required
                    type="email"
                    className="p-6 w-1/2 mx-auto placeholder:mx-16"
                    theme={customTextInputTheme}
                    color="pink"
                />
                <Button className="bg-pink-300 hover:bg-pink-400 enabled:hover:bg-pink-400 focus:bg-pink-400 focus:ring-pink-200 mx-auto" type="submit">
                    Find My Details
                </Button>
            </form>
        )
    }

    return (
        <>
            <Button className="bg-pink-200 hover:bg-pink-400 enabled:hover:bg-pink-400 focus:bg-pink-400 focus:ring-pink-200 " onClick={() => props.setOpenModal('rsvp')}>
                RSVP
            </Button>
            <Modal dismissible show={props.openModal === 'rsvp'} size="7xl" onClose={() => props.setOpenModal(undefined)} theme={customModalTheme}>
                <Modal.Header className="flex items-center justify-center rounded-t dark:border-gray-600 border-none p-5"></Modal.Header>
                <Modal.Body className="flex-column sm:px-12 md:px-16 lg:px-24 xl:px-32 pb-6 items-center text-center">
                    <p className="text-5xl pb-6 font-bold">RSVP</p>
                    <RsvpForm/>
                </Modal.Body>
                <Modal.Footer className='border-none'>
                </Modal.Footer>
            </Modal>
        </>
    )
}



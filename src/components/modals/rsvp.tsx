'use client';

import { useContext } from 'react';
import { UserDataObject, CurrentUserContext, OpenModalContext } from '@context-provider';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { customTextInputTheme } from '@theme/flowbite';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { searchGuest } from '@/lib/api/guest_list';

const customModalTheme: CustomFlowbiteTheme['modal'] = {
    content: {
        inner: "relative rounded-lg bg-white flex flex-col max-h-[90vh] border-double border-[12px]",
    },
    header: {
        title: "text-xl font-medium text-gray-900 dark:text-white",
    }
};

export default function Rsvp() {
    const { openModal, setOpenModal }  = useContext(OpenModalContext);
    const { currentUser, setCurrentUser }  = useContext(CurrentUserContext);

    function RsvpForm() {
        if (currentUser) {
            return (
                <form id="invitation_form" onSubmit={(e) => {
                    e.preventDefault()
                    console.log(e)
                }}>
                    <p className='py-3 italic'>We are pleased to invite</p>
                    <p className='text-2xl italic font-bold'>{currentUser.name} and {currentUser.plus_one}</p>
                    <p className='py-3 italic'>to the wedding of</p>
                    <p className='text-4xl font-bold pt-3 pb-6'>Jake & Yee Huan</p>
                    <div className="flex flex-row items-center justify-center pb-6">
                        <p className="py-3">Please confirm your attendace for </p>
                        <TextInput type="text" theme={customTextInputTheme} className="px-3 w-1/12" color="pink" sizing={"md"} defaultValue={currentUser.pax}/>
                        <p>pax</p>
                    </div>
                    <div className="flex flex-row items-center justify-center px-[19rem] pt-6">
                        <Button size="xl" className="bg-pink-300 hover:bg-pink-400 enabled:hover:bg-pink-400 focus:bg-pink-400 focus:ring-pink-200 mx-auto px-12 py-2" type="submit">
                            I'll Be There!
                        </Button>
                    </div>
                    <div className="flex flex-row items-center justify-center px-[19rem] pt-6">
                        <Button className="bg-gray-300 hover:bg-gray-400 enabled:hover:bg-gray-400 focus:bg-gray-400 focus:ring-gray-200 mx-auto" type="submit" size="sm">
                            Sorry! Can't be there.
                        </Button>
                    </div>
                </form>
            )
        }

        return (
            <form id="find_my_details" onSubmit={async (e: React.SyntheticEvent) => {
                e.preventDefault()
                const target = e.target as typeof e.target & {
                    email: { value: string };
                }

                const res = await searchGuest(target.email.value);
                console.log(res)
                setCurrentUser(res)
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
            <Button className="bg-pink-200 hover:bg-pink-400 enabled:hover:bg-pink-400 focus:bg-pink-400 focus:ring-pink-200 " onClick={() => setOpenModal('rsvp')}>
                RSVP
            </Button>
            <Modal dismissible show={openModal === 'rsvp'} size="7xl" onClose={() => setOpenModal(undefined)} theme={customModalTheme}>
                <Modal.Header className="flex items-center justify-center rounded-t dark:border-gray-600 border-none p-5"></Modal.Header>
                <Modal.Body className="flex-column sm:px-12 md:px-16 lg:px-24 xl:px-32 pb-6 items-center text-center">
                    <p className="text-5xl pb-6 font-bold">RSVP</p>
                    <RsvpForm/>
                </Modal.Body>
                <Modal.Footer className='border-none flex flex-row justify-center items-center'>
                    {
                        currentUser ? 
                        <a className="text-sm italic underline underline-offset-2" onClick={() => setCurrentUser(undefined)}>Not you? Search again.</a>
                        : <></>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}



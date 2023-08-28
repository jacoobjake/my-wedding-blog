'use client';

import { useState, useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { UserDataObject, CurrentUserContext, OpenModalContext } from '@context-provider';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { customTextInputTheme } from '@theme/flowbite';
import { Button, Textarea, Label, Modal, TextInput } from 'flowbite-react';
import { searchGuest, update, get } from '@/lib/api/guest_list';
import ModalController, { ModalRef } from '../utils/modal-controller';
import { useSearchParams } from 'next/navigation';

const customModalTheme: CustomFlowbiteTheme['modal'] = {
    content: {
        inner: "relative rounded-lg bg-white flex flex-col max-h-[90vh] border-double border-[12px] border-dirty-white",
    },
    header: {
        title: "text-xl font-medium text-gray-900 dark:text-white",
    }
};

const RsvpModal = () => {
    const [openModal, setOpenModal] = useState<string|undefined>();
    const [currentUser, setCurrentUser] = useState<UserDataObject | undefined>();
    const modalRef = useRef<ModalRef>();
    const searchParams = useSearchParams()
    const queryGuestId = searchParams.get('guest_id')

    useEffect(() => {
        ModalController.setModalRef(modalRef)
    }, [])
    
    useImperativeHandle(
        modalRef,
        () => ({
            show: async () => {
                if (queryGuestId) {
                    const user = await get(queryGuestId);
                    setCurrentUser(user)
                }
                setOpenModal('rsvp');
            },
            hide: () => {
                setOpenModal(undefined);
            },
        }),
        []
    );

    async function updateInvitation(is_attending: boolean) {
        const pax = document.querySelector('#pax') as HTMLInputElement
        const guest_id = document.querySelector('#guest_id') as HTMLInputElement
        const remarks = document.querySelector('#remarks') as HTMLInputElement

        const data = {
            pax: pax.value,
            is_attending: is_attending,
            confirmed: true,
            format: 'json',
            remarks: remarks.value,
        }

        const currentUser = await update(guest_id.value, data)
        setCurrentUser(currentUser)
    }

    function RsvpForm() {
        if (currentUser) {
            if (currentUser.confirmed) {
                return (
                    <form id="invitation_form">
                        <input type="hidden" id="guest_id" defaultValue={currentUser.id}></input>
                        <div className="flex flex-col md:flex-row items-center justify-center pb-3">
                            <p className='py-3 italic'>Thank you for confirming your attendance for </p>
                            <TextInput id="pax" type="text" theme={customTextInputTheme} className="px-3 w-1/3 md:w-1/6 lg:1/12" color="mine" sizing={"md"} defaultValue={currentUser.pax} />
                            <p>pax</p>
                        </div>
                        <p className='text-2xl italic font-bold py-3 text-gray-600'>{currentUser.name + (currentUser.plus_one ? ' ' + currentUser.plus_one : '')}</p>
                        <p className='pt-3 pb-6 italic'>for the wedding of</p>
                        <div className='flex justify-center items-center py-3 md:py-9 border-8 border-double border-moss-green rounded-lg lg:mx-24 xl:mx-48'>
                            <p className='text-3xl md:text-5xl font-bold pt-3 pb-6'>Jake</p>
                            <p className='text-xl md:text-2xl font-bold pt-3 pb-6 px-3 md:px-6 italic'> & </p>
                            {/* <p className='text-5xl font-bold pt-3 pb-6'>Yee Huan</p> */}
                            <div className='flex-col justify-center items-center text-3xl md:text-5xl font-bold'>
                                <p>Yee</p>
                                <p>Huan</p>
                            </div>
                        </div>
                        {
                            currentUser.is_attending ? 
                            <div className="max-w-md mx-auto py-3">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="remarks"
                                        value="Your Remarks"
                                        className='italic'
                                    />
                                </div>
                                <Textarea
                                    id="remarks"
                                    placeholder="Reservation remarks, e.g: Allergen, number of infants, etc..."
                                    rows={2}
                                    value={currentUser.remarks}
                                    className='text-center'
                                />
                            </div> :
                            ''
                        }
                        <p className='text-xl font-bold italic pb-6 pt-6'>{currentUser.is_attending ? 'See You There!' : 'Maybe Next Time...'}</p>
                        <p className='italic text-sm'>Changed your mind?</p>
                        {
                            currentUser.is_attending ?
                                <div className="flex flex-row items-center justify-center xl:px-[19rem] pt-3">
                                    <Button className="bg-gray-300 hover:bg-gray-400 enabled:hover:bg-gray-400 focus:bg-gray-400 focus:ring-gray-200 mx-auto" size="lg" onClick={() => updateInvitation(false)}>
                                        Sorry! Something Came Up...
                                    </Button>
                                </div> :
                                <div className="flex flex-row items-center justify-center xl:px-[19rem] pt-3">
                                    <Button size="lg" className="bg-tea-green hover:bg-moss-green enabled:hover:bg-apple-green focus:bg-moss-green focus:ring-apple-green mx-auto" onClick={() => updateInvitation(true)} >
                                        I'll Be There!
                                    </Button>
                                </div>
                        }
                    </form>
                )
            }
            return (
                <form id="invitation_form">
                    <input type="hidden" id="guest_id" defaultValue={currentUser.id}></input>
                    <p className='py-3 italic'>We are pleased to invite</p>
                    <p className='text-2xl italic font-bold py-3 text-gray-600'>{currentUser.name + (currentUser.plus_one ? ' ' + currentUser.plus_one : '')}</p>
                    <p className='py-3 italic'>to the wedding of</p>
                    <div className='flex justify-center items-center py-3 md:py-9 border-8 border-double border-moss-green rounded-lg lg:mx-24 xl:mx-48'>
                        <p className='text-3xl md:text-5xl font-bold pt-3 pb-6'>Jake</p>
                        <p className='text-xl md:text-2xl font-bold pt-3 pb-6 px-3 md:px-6 italic'> & </p>
                        {/* <p className='text-5xl font-bold pt-3 pb-6'>Yee Huan</p> */}
                        <div className='flex-col justify-center items-center text-3xl md:text-5xl font-bold'>
                            <p>Yee</p>
                            <p>Huan</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center py-3">
                        <p className="py-3">Please confirm your attendace for </p>
                        <TextInput id="pax" type="text" theme={customTextInputTheme} className="px-3 w-1/3 md:w-1/6 lg:1/12" color="mine" sizing={"md"} defaultValue={currentUser.pax} />
                        <p>pax</p>
                    </div>
                    <div className="max-w-md mx-auto py-3">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="remarks"
                                value="Your Remarks"
                                className='italic'
                            />
                        </div>
                        <Textarea
                            id="remarks"
                            placeholder="Reservation remarks, e.g: Allergen, number of infants, etc..."
                            rows={2}
                            className='text-center'
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center md:px-[19rem] pt-3">
                        <Button size="xl" className="bg-tea-green hover:bg-moss-green enabled:hover:bg-apple-green focus:bg-moss-green focus:ring-apple-green mx-auto py-2" onClick={() => updateInvitation(true)} >
                            I'll Be There!
                        </Button>
                    </div>
                    <div className="flex flex-row items-center justify-center md:px-[19rem] pt-3">
                        <Button className="bg-gray-300 hover:bg-gray-400 enabled:hover:bg-gray-400 focus:bg-gray-400 focus:ring-gray-200 mx-auto" size="sm" onClick={() => updateInvitation(false)}>
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
                    // keyword: { value: string };
                    guest_id: { value: string };
                }

                // const user = await searchGuest(target.keyword.value);
                const user = await get(target.guest_id.value);
                setCurrentUser(user)
            }}>
                <div className='p-6'>
                    {/* <TextInput
                        id="keyword"
                        placeholder="Enter your email or phone"
                        helperText={<span className='italic text-gray-400'>Example: example@mail.com or 0123456788</span>}
                        required
                        type="text"
                        className="md:w-1/2 mx-auto placeholder:mx-16"
                        theme={customTextInputTheme}
                        color="mine"
                    /> */}
                    <TextInput
                        id="guest_id"
                        placeholder="Enter your Guest Id"
                        helperText={<span className='italic text-gray-400'>Example: 64eb6f89f8d6411820729459</span>}
                        required
                        type="text"
                        className="md:w-1/2 mx-auto placeholder:mx-16"
                        theme={customTextInputTheme}
                        color="mine"
                    />
                </div>
                <Button className="bg-tea-green hover:bg-moss-green enabled:hover:bg-apple-green focus:bg-moss-green focus:ring-apple-green mx-auto" type="submit">
                    Find My Details
                </Button>
            </form>
        )
    }

    return (
        <>
            <Modal dismissible show={openModal === 'rsvp'} size="7xl" onClose={() => setOpenModal(undefined)} theme={customModalTheme}>
                <Modal.Header className="flex items-center justify-center rounded-t dark:border-gray-600 border-none p-5"></Modal.Header>
                <Modal.Body className="flex-column sm:px-12 md:px-16 lg:px-24 xl:px-32 items-center text-center">
                    <p className="text-3xl md:text-5xl pb-6 font-bold">RSVP</p>
                    <RsvpForm />
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

export default forwardRef(RsvpModal)
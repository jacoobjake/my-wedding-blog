'use client';

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { useState } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['textInput'] = {
    field: {
        input: {
            base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 text-center placeholder:text-center focus:ring-pink-300 focus:border-pink-300",
            colors: {
                pink: "bg-white border-pink-200 text-gray-900 focus:border-pink-300 focus:ring-pink-300",
            }
        }
    },
};

export default function Rsvp() {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    return (
        <>
            <Button className="bg-pink-200 hover:bg-pink-400 enabled:hover:bg-pink-400 focus:bg-pink-400 focus:ring-pink-200 " onClick={() => props.setOpenModal('rsvp')}>
                RSVP
            </Button>
            <Modal dismissible show={props.openModal === 'rsvp'} size="7xl" onClose={() => props.setOpenModal(undefined)}>
                {/* <Modal.Header>Small modal</Modal.Header> */}
                <Modal.Body className="flex-column sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 border-double border-8 items-center text-center rounded-xl">
                    <p className="text-6xl pb-3 font-bold">RSVP</p>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        console.log(e)
                        }}>
                        <TextInput
                            id="email"
                            placeholder="name@flowbite.com"
                            required
                            type="email"
                            className="p-6 w-1/2 mx-auto placeholder:mx-16"
                            theme={customTheme}
                            color="pink"
                        />
                        <Button className="bg-pink-300 hover:bg-pink-400 enabled:hover:bg-pink-400 focus:bg-pink-400 focus:ring-pink-200 mx-auto" type="submit">
                            Find My Details
                        </Button>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
                    <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                        Decline
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}



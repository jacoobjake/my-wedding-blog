'use client';

import { Button, Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import ModalController from '@/components/utils/modal-controller';

const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Event & Venue', href: '/event' },
    { name: 'Gallery', href: '/gallery' },
]

export default function HeaderNav() {
    const pathname = usePathname();
    return (
        <Navbar
            fluid
            rounded
            className="h-16 rounded-none"
        >
            <Navbar.Brand href="https://flowbite-react.com">
                {/* <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/favicon.svg"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite React
                    </span> */}
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button className="transition duration-700 bg-tea-green hover:bg-moss-green enabled:hover:bg-apple-green focus:bg-moss-green focus:ring-apple-green " onClick={() => { ModalController.showModal()}}>
                    RSVP
                </Button>
                <Navbar.Toggle className="ml-3"/>
            </div>
            <Navbar.Collapse>
                {
                    navigation.map((nav, key, row) => (
                        <Navbar.Link
                            key={key}
                            active={pathname == nav.href}
                            href={nav.href}
                            className={"text-black active:bg-pink-400" + (pathname == nav.href? ' bg-pink-200 ' : ' bg-white ') + (key == 0? ' rounded-t-md ': key + 1 == row.length? ' rounded-b-md ' : ' rounded-none')}
                        >
                            <p>
                                {nav.name}
                            </p>
                        </Navbar.Link>
                    ))
                }
            </Navbar.Collapse>
        </Navbar>
    )
}



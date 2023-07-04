'use client';

import { Button, Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Event & Venue', href: '/event' },
    { name: 'Gallery', href: '#' },
]

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="fixed z-20 w-full">
            <div className="flex h-14 bg-white py-2">
                <Navbar
                    fluid
                    rounded
                    className="ml-auto h-10 bg-transparent"
                >
                    <Navbar.Brand>
                        {/* <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span> */}
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        {
                            navigation.map((nav, key) => (
                                <Navbar.Link
                                    key={key}
                                    active={pathname == nav.href}
                                    href={nav.href}
                                >
                                    <p>
                                        {nav.name}
                                    </p>
                                </Navbar.Link>
                            ))
                        }
                    </Navbar.Collapse>
                </Navbar>
                <div className="ml-auto mr-2">
                    <Button className="bg-pink-300 hover:bg-pink-200">
                        RSVP
                    </Button>
                </div>
            </div>
        </div>
    )
}



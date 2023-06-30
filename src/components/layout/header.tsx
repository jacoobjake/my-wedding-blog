'use client';

import { Button, Navbar } from 'flowbite-react';

const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Event & Venue', href: '/event' },
    { name: 'Gallery', href: '#' },
]

export default function Header() {
    return (
        <div className="h-24 bg-[url('/background-line-2.svg')] bg-cover flex items-end justify-center mb-2">
            <Navbar
                fluid
                rounded
                className='ml-auto'
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
                                active
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
                <Button>
                    RSVP
                </Button>
            </div>
        </div>
    )
}



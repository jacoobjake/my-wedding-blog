'use client';

import { Footer } from 'flowbite-react';

const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Event & Venue', href: '/event' },
    { name: 'Gallery', href: '#' },
]

export default function DefaultFooter() {
    return (
        <Footer container className="h-24 pb-12">
            <div></div>
            <Footer.LinkGroup>
                {
                    navigation.map((nav, key) => (
                        <Footer.Link
                            key={key}
                            href={nav.href}
                        >
                            <p>
                                {nav.name}
                            </p>
                        </Footer.Link>
                    ))
                }
            </Footer.LinkGroup>
            <div></div>
        </Footer>
    )
}



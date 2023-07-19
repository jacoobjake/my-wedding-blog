'use client';

import { usePathname } from 'next/navigation';
import HeaderNav from './nav/header-nav';

const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Event & Venue', href: '/event' },
    { name: 'Gallery', href: '#' },
]

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="fixed z-50 w-full">
            <HeaderNav/>
        </div>
    )
}



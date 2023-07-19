'use client'

import Header from '@/components/layout/header'
import DefaultFooter from '@/components/layout/footer'
import { useRouter, usePathname } from 'next/navigation'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <html className="h-full bg-white">
            <body className="h-full">
                <div className="min-h-full">
                    <Header />
                    <main className="pt-14">
                        {children}
                    </main>
                    <DefaultFooter></DefaultFooter>
                </div>
            </body>
        </html >
    )
}

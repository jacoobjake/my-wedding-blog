// 'use client'

import { ToastProvider } from '../context-provider'
import Header from '@/components/layout/header'
import DefaultFooter from '@/components/layout/footer'
import RsvpModal from '@/components/modals/rsvp'
import type { Metadata } from 'next'
export const metadata: Metadata = {
    openGraph: {
        title: "Jake & Yee Huan",
        images: "https://onedrive.live.com/embed?resid=332220CB5ABF1FD3%21388&authkey=%21AFJMjukNGlyuTws&width=1080&height=1080",
        alternateLocale: "Jake & Yee Huan",
    }
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="h-full bg-white">
            <body className="h-full">
                <div className="min-h-full">
                    <ToastProvider>
                        <Header />
                        <main className="pt-14">
                            {children}
                        </main>
                    </ToastProvider>
                    <RsvpModal></RsvpModal>
                    <DefaultFooter></DefaultFooter>
                </div>
            </body>
        </html >
    )
}

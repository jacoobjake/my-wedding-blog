// 'use client'
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: "Jake & Yee Huan",
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="items-center justify-between font-mono text-sm">
                {children}
            </div>
        </>
    )
}

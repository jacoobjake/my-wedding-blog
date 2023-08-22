'use client'

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

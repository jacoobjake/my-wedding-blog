'use client'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex py-6 mx-auto">
                {children}
            </div>
        </>
    )
}

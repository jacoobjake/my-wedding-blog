'use client'

export default function Home() {
    return (
        <>
            <div className="w-full bg-pink-50 items-center text-center py-12 item-center">
                <div className="mx-auto pb-2 w-10/12">
                    <p className="text-base py-6">IN CELEBRATION OF OUR WEDDING</p>
                </div>
                <div className="mx-auto py-24 border-y-4 w-3/4">
                    <h1>Jake</h1>
                    <p className="text-3xl py-2 italic">- and -</p>
                    <h1>Yee Huan</h1>
                </div>
                <p className="text-base py-12 italic">THE POTATO MEETS OLENJI</p>
                <div className="mx-auto w-1/3">
                    <p className="text-2xl py-6 leading-loose">Jake and Yee Huan joyfully request the pleasure of your company as we celebrate our wedding</p>
                </div>
                <div className="mx-auto w-1/3 flex pt-12 justify-center">
                    <a className='underline underline-offset-4 text-4xl border-pink-300 p-4 hover:bg-pink-300 hover:text-white rounded-md' href="#">RSVP</a>
                </div>

            </div>
        </>
    )
}

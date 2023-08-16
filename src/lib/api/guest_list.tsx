'use client'

const baseurl = process.env.NEXT_PUBLIC_API_URL

export async function searchGuest(keyword : string)
{
    console.log(baseurl);
    const url = `${baseurl}guests-by-details/?keyword=${keyword}`;
    const res = await fetch(url)
    return res.json();
}

export async function update()
{

}
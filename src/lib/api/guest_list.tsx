'use client'

export async function searchGuest(keyword : string)
{
    const url = `http://127.0.0.1:4201/guests-by-details/?keyword=${keyword}`;
    const res = await fetch(url)
    return res.json();
}

export async function update()
{
    
}
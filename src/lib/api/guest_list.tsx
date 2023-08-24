'use client'

import axiosHelper from "./axios";

const baseurl = process.env.NEXT_PUBLIC_API_URL

export async function searchGuest(keyword : string)
{
    const url = `${baseurl}guests-by-details/?keyword=${keyword}`;
    const response = await axiosHelper('get', url);
    if(response) {
        return response.data.data;
    }
}

export async function update(id:string, data:Object)
{
    const url = `${baseurl}guests/${id}/`;
    const response = await axiosHelper('patch', url, data)
    if (response) {
        return response.data.data;
    }
}

export async function get(id:string)
{
    const url = `${baseurl}guests/${id}/`;
    const response = await axiosHelper('get', url)
    if (response) {
        return response.data.data;
    }
}
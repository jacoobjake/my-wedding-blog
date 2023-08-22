'use client'

import axiosHelper from "./axios";
import { Photo } from "react-photo-album";
const baseurl = process.env.NEXT_PUBLIC_API_URL
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

interface PhotoObject {
    id: string,
    photo_id: string,
    src: string,
    height: number,
    width: number,
    is_carousel: boolean,
    is_event_cover: boolean,
}

function mapResult(data: Photo[])
{
    return data.map((photo) => ({
        src: photo.src,
        width: photo.width,
        height: photo.height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: photo.src,
                width: breakpoint,
                height,
            };
        }),
    })) as Photo[];
}

export async function carousel() {
    const url = `${baseurl}photos/carousel/`;
    const response = await axiosHelper('get', url);
    if (response) {
        return mapResult(response.data.data);
    }
    return []
}

export async function gallery() {
    const url = `${baseurl}photos/`;
    const response = await axiosHelper('get', url);
    if (response) {
        return mapResult(response.data.data);
    }
    return []
}
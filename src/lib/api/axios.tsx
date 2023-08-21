'use client'

import axios from 'axios';
import { toast } from 'react-toastify';

async function get(url: string) {
    const response = await axios.get(url).catch(function (error) {
        toast.error(error.response.data.message)
    })
    return response;
}

async function patch(url: string, data: object) {
    const response = await axios.patch(url, data).catch(function (error) {
        toast.error(error.response.data.message)
    })
    return response;
}

export default async function axiosHelper(method:string, url:string, data:Object = {}) 
{
    switch(method) {
        case 'get':
            return get(url)
        case 'patch':
            return patch(url, data)
        default:
            return {
                'message': "",
                'data': {}
            }
    }
}

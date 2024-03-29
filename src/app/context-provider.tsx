'use client'

import 'react-toastify/dist/ReactToastify.css';
import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'

export interface UserDataObject {
    id: string,
    email: string,
    name: string,
    plus_one: string,
    invitation_status: string,
    pax: number,
    is_attending: boolean,
    confirmed: boolean,
    remarks: string,
}

export interface OpenModalContextInterface {
    openModal: string|undefined,
    setOpenModal: Dispatch<SetStateAction<string|undefined>>,
}

export interface CurrentUserContextInterface {
    currentUser: UserDataObject |undefined,
    setCurrentUser: Dispatch<SetStateAction<UserDataObject|undefined>>,
}

export const OpenModalContext = createContext<OpenModalContextInterface>({} as OpenModalContextInterface)
export const CurrentUserContext = createContext<CurrentUserContextInterface>({} as CurrentUserContextInterface)

export function OpenModalContextProvider({ children }: { children:React.ReactNode })
{
    const [openModal, setOpenModal] = useState<string | undefined>()
    return (<OpenModalContext.Provider value={{ openModal, setOpenModal }}>{children}</OpenModalContext.Provider>)
}

export function CurrentUserContextProvider({ children }: { children:React.ReactNode })
{
    const [currentUser, setCurrentUser] = useState<UserDataObject | undefined>()
    return (<CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</CurrentUserContext.Provider>)
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    );
}


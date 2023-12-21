"use client"
import { IContextState } from '@/utils/types'
import React, { ReactNode, createContext, useEffect, useState } from 'react'

export const SessionContext = createContext<null | {
    state: IContextState
    logout: () => Promise<void>
    login: ({ token, user }: {
        token: string;
        user: any;
    }) => Promise<void>
}
>(null)

export const AuthContext = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<IContextState>({
        user: null,
        token: null
    })
    useEffect(() => {
        if (typeof window == undefined) return
        if (localStorage.getItem("token")) {
            setState({
                // @ts-expect-error
                user: JSON.parse(localStorage.getItem("user")),
                token: localStorage.getItem("token"),
            })
        }
    }, [])

    const logout = async () => {
        setState({
            user: null,
            token: null
        })
        if (typeof window == undefined) return
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

    const login = async ({
        token, user
    }: {
        token: string
        user: any
    }) => {
        setState({
            user: user,
            token: token
        })
        if (typeof window == undefined) return
        localStorage.setItem("token", JSON.stringify(token))
        localStorage.setItem("user", JSON.stringify(user))
    }

    return (
        <>
            <SessionContext.Provider value={{
                state, login, logout
            }} >
                {children}
            </SessionContext.Provider>
        </>
    )
}

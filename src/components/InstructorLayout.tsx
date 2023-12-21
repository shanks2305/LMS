"use client"
import React, { ReactNode, useContext } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from './UserAvatar'
import { SessionContext } from './AuthContext'
import Link from 'next/link'
import { MdMessage, MdOutlineOndemandVideo } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { FaTools } from "react-icons/fa";

const InstructorLayout = ({ children }: { children: ReactNode }) => {

    const context = useContext(SessionContext)

    if (!context) {
        return <></>
    }

    return (
        <>
            <aside id="default-sidebar" className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <h1 className='text-2xl font-bold text-white mt-4 mb-10' >Open LMS</h1>
                    <ul className="space-y-8 font-medium">
                        <li>
                            <Link href="/dashboard" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                                <span className='text-xl ' >
                                    <MdOutlineOndemandVideo />
                                </span>
                                <span className="ms-3">Cources</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/communication" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                                <span className='text-xl ' >
                                    <MdMessage />
                                </span>
                                <span className="ms-3">Communication</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/performance" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                                <span className='text-xl ' >
                                    <SiGoogleanalytics />
                                </span>
                                <span className="ms-3">Performance</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/tools" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                                <span className='text-xl ' >
                                    <FaTools />
                                </span>
                                <span className="ms-3">Tools</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64 border-l min-h-screen bg-white">
                <nav className='px-8 py-2 flex justify-between flex-row-reverse ' >
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className='w-48 p-2 h-full border flex items-center gap-2 text-sm font-semibold' >
                                <UserAvatar
                                    height={25} width={25} text={10}
                                    name={`${context.state.user?.firstName} ${context.state.user?.lastName}`}
                                />
                                {context.state.user?.firstName} {context.state.user?.lastName}
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-48' >
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                {context.state.user?.role === "USER" && <Link href="/learning" >My Courses</Link>}
                                {context.state.user?.role === "ADMIN" && <Link href="/admin" >Control Panel</Link>}
                                {context.state.user?.role === "INSTRUCTOR" && <Link href="/dashboard" >Dashboard</Link>}
                            </DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>
                                <button onClick={() => {
                                    context.logout()
                                }} >logout</button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
                <div className='container mx-auto p-4' >
                    {children}
                </div>
            </div>
        </>
    )
}

export default InstructorLayout
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const NewCource = () => {
    return (
        <>
            <div>
                <nav className='bg-slate-800 flex items-center h-16 px-8 shadow text-white gap-6 justify-between' >
                    <div className='flex items-center gap-4' >
                        <Link href="/dashboard" className='flex gap-2 items-center' >
                            <span className='text-xl' >
                                <IoIosArrowBack />
                            </span>
                            <span className='text-sm' >Back to cources</span>
                        </Link>
                        <span className='font-bold' >New Video</span>
                    </div>
                    <button className='bg-gray-500 px-4 py-1' >Save</button>
                </nav>
                <div className='grid grid-cols-12' >
                    <div className='col-span-3 p-4 flex flex-col gap-4 min-h-[85vh] border-r-2' >
                        <ul>
                            <li className='text-xl font-bold' >General Information</li>
                            <li className='text-lg px-4 my-2 flex gap-2 items-center' >
                                <span>
                                    <IoIosRadioButtonOff />
                                </span>
                                <span>Video Information</span>
                            </li>
                        </ul>
                        <ul>
                            <li className='text-xl font-bold' >Plan your course</li>
                            <li className='text-lg px-4 my-2 flex gap-2 items-center' >
                                <span>
                                    <IoIosRadioButtonOff />
                                </span>
                                <span>Intended Learner</span>
                            </li>
                            <li className='text-lg px-4 my-2 flex gap-2 items-center' >
                                <span>
                                    <IoIosRadioButtonOff />
                                </span>
                                <span>Course Structure</span>
                            </li>
                            <li className='text-lg px-4 my-2 flex gap-2 items-center' >
                                <span>
                                    <IoIosRadioButtonOff />
                                </span>
                                <span>Setup & test video</span>
                            </li>
                        </ul>
                        <ul>
                            <li className='text-xl font-bold' >Create your content</li>
                            <li className='text-lg px-4 my-2 flex gap-2 items-center' >
                                <span>
                                    <IoIosRadioButtonOff />
                                </span>
                                <span>Film & Edit</span>
                            </li>
                            <li className='text-lg px-4 my-2 flex gap-2 items-center' >
                                <span>
                                    <IoIosRadioButtonOff />
                                </span>
                                <span>Curriuculum</span>
                            </li>
                        </ul>
                        <ul>
                            <li className='text-xl font-bold' >Publish your course</li>
                            <li className='text-lg px-4 my-2 flex gap-2 items-center' >
                                <span>
                                    <IoIosRadioButtonOff />
                                </span>
                                <span>Cource and landing page</span>
                            </li>
                            <li className='text-lg px-4 my-2 flex gap-2 items-center' >
                                <span>
                                    <IoIosRadioButtonOff />
                                </span>
                                <span>Pricing</span>
                            </li>
                            <li className='text-lg px-4 my-2 flex gap-2 items-center' >
                                <span>
                                    <IoIosRadioButtonOff />
                                </span>
                                <span>Cource Message</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-9' >
                        <div className='p-8' >
                            <div className='my-8 border shadow p-4 flex items-center flex-col' >
                                <h2 className='text-2xl font-semibold' >How about a working title?</h2>
                                <p className='mt-4 text-sm px-2' >It's ok if you can't think of a good title now. You can change it later.</p>
                                <Input className='border-2 border-black w-1/2 mt-6 outline-none text-lg px-4' placeholder='eg. Learn python from scratch' />
                            </div>
                            <div className='my-8 border shadow p-4 flex items-center flex-col' >
                                <h2 className='text-2xl font-semibold' >What category best fits the knowledge you'll share?</h2>
                                <p className='mt-4 text-sm px-2' >If you're not sure about the right category, you can change it later.</p>
                                <Select>
                                    <SelectTrigger className='border-2 border-black w-1/2 mt-6 outline-none text-lg px-4'>
                                        <SelectValue placeholder="Choose a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCource
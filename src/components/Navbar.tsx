"use client"
import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const udemyCategories = [
    "Development",
    "Business",
    "Finance & Accounting",
    "IT & Software",
    "Office Productivity",
    "Personal Development",
    "Design",
    "Marketing",
    "Lifestyle",
    "Photography & Video"
];

const Navbar = () => {
    return (
        <>
            <header >
                <nav className='w-full h-16 bg-white shadow-xl hidden justify-between items-center p-4 md:flex' >
                    <h1 className='text-2xl font-sans col-span-1 ' >OpenLMS</h1>
                    <div className='flex gap-2 col-span-6' >
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                                    <NavigationMenuContent  >
                                        <ul className="bg-white w-[300px] p-4 ">
                                            {udemyCategories.map(item => (
                                                <li className="p-2" key={item}>
                                                    <NavigationMenuLink asChild>
                                                        <Link href='#'>{item}</Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}

                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <input className='border-2 outline-none border-black py-2 px-8 rounded-3xl w-[300px] lg:w-[350px] xl:w-[600px]' placeholder='Search for anything' />
                    </div>
                    <HoverCard>
                        <HoverCardTrigger className='cursor-pointer text-xs font-medium hidden lg:block' >OpenLMS Bussiness</HoverCardTrigger>
                        <HoverCardContent className='p-4 bg-white mt-4 w-96' >
                            <h2 className='text-xl font-semibold text-center' >Get your team access to over 25,000 top courses, anytime, anywhere.</h2>
                            <button className='my-2 bg-black text-white py-2 w-full' >Try Open LMS</button>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger className='cursor-pointer text-xs font-medium hidden lg:block' >Teach on OpenLMS</HoverCardTrigger>
                        <HoverCardContent className='p-4 bg-white mt-4 w-80' >
                            <h2 className='text-xl font-semibold text-center' >Turn what you know into an opportunity and reach millions around the world.</h2>
                            <button className='my-2 bg-black text-white py-2 w-full' >Learn More</button>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger className='cursor-pointer text-xl font-medium' >
                            <FaShoppingCart />
                        </HoverCardTrigger>
                        <HoverCardContent className='p-4 bg-white mt-4 w-80 text-center' >
                            <p className='text-lg' >Your cart is empty.</p>
                            <button className='my-2 text-blue-500 hover:underline text-sm' >Keep shopping</button>
                        </HoverCardContent>
                    </HoverCard>
                    <div className='hidden gap-2 col-span-2  lg:flex' >
                        <button className='px-4 py-1 border-2 border-black' >Login</button>
                        <button className='px-4 py-1 border-2 bg-black text-white border-black' >Signup</button>
                    </div>
                </nav>
                <nav className='w-full h-16 bg-white shadow-xl justify-between items-center p-4 md:hidden flex' >
                    <Sheet>
                        <SheetTrigger>
                            <span className='text-2xl cursor-pointer' >
                                <GiHamburgerMenu />
                            </span>
                        </SheetTrigger>
                        <SheetContent side={"left"} >
                            <div className='w-full h-full p-4 flex flex-col items-start gap-2 text-sm' >
                                <button className='uppercase text-blue-500 hover:underline' >Login</button>
                                <button className='uppercase text-blue-500 hover:underline' >Sign up</button>
                                <span />
                                <ul>
                                    {udemyCategories.map(item => (
                                        <li className='text-base uppercase py-2' key={item}>
                                            <Link href='#'>{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <h1 className='text-2xl font-sans col-span-1 ' >OpenLMS</h1>
                    <span className='text-2xl cursor-pointer' >
                        <FaShoppingCart />
                    </span>
                </nav>
            </header>
        </>
    )
}

export default Navbar
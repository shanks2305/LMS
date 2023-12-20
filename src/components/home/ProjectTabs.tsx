"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from 'next/image';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import Link from 'next/link';

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

const cardData = [
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        teacher: "John Wick",
        rating: 4.6,
        review: 771177,
        price: {
            original: 3999,
            sale: 499
        }
    },
]

const ProjectTabs = () => {
    return (
        <>
            <div>
                <Tabs defaultValue={udemyCategories[0]}>
                    <TabsList className='w-full flex justify-start flex-wrap gap-1' >
                        {
                            udemyCategories.slice(0, 7).map(item => (
                                <TabsTrigger className='uppercase font-semibold' value={item}>{item}</TabsTrigger>
                            ))
                        }
                    </TabsList>
                    {

                        udemyCategories.map(item => (
                            <TabsContent value={item} className='p-8 border-2 border-gray-400 shadow rounded' >
                                <h2 className='text-2xl font-semibold' >Expand your career opportunities with {item}</h2>
                                <p className='mt-4 text-sm leading-relaxed' >Take one of Udemys range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. Youll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.....
                                </p>
                                <button className='px-4 py-2 border-2 border-black mt-2' >Explore {item}</button>
                                <ScrollArea className="whitespace-nowrap rounded-md border" >
                                    <div className='p-4 flex gap-4 ' >
                                        {cardData.map((item, i) => (
                                            <div className='min-w-64' key={i} >
                                                <div className='p-1 w-full h-36 relative border' >
                                                    <Image
                                                        className="absolute top-0 left-0 right-0 bottom-0 object-cover"
                                                        src="/course.jpg"
                                                        alt={item.title}
                                                        quality={50}
                                                        loading='lazy'
                                                        fill
                                                    />
                                                </div>
                                                <Link href="/cource">
                                                    <h3 className='mt-2 text-sm font-semibold text-center' >{item.title.split("").slice(0, 50)}...</h3>
                                                </Link>
                                                <div className='text-xs font-light px-1' >{item.teacher}</div>
                                                <div className='flex gap-1 mt-2 items-center' >
                                                    <span className='text-sm font-semibold' >{item.rating}</span>
                                                    {/* @ts-ignore */}
                                                    <Rating
                                                        initialRating={item.rating}
                                                        readonly
                                                        emptySymbol={<FaRegStar />}
                                                        fullSymbol={<FaStar />}
                                                    />
                                                    <span className='text-xs font-semibold' >({item.review})</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                            </TabsContent>
                        ))
                    }
                </Tabs>
            </div>

        </>
    )
}

export default ProjectTabs
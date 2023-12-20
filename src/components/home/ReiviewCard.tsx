import React from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FaCommentAlt } from "react-icons/fa";
import UserAvatar from '../UserAvatar';

const reviews = [
    {
        name: "Sarah C.",
        review: "LearnWell is fantastic! The interactive lessons make learning enjoyable, and the quizzes helped solidify my understanding. Highly recommended!"
    },
    {
        name: "Alex H.",
        review: "The platform's user interface is intuitive, making navigation smooth. The variety of courses available caters to different interests and skill levels."
    },
    {
        name: "Emily M.",
        review: "LearnWell's responsive customer support is commendable. They promptly addressed my queries, ensuring a seamless learning experience."
    },
    {
        name: "Daniel K.",
        review: "I appreciate the flexibility to learn at my own pace. The site's flexibility allowed me to juggle learning with my busy schedule."
    },
    {
        name: "Maya S.",
        review: "The instructors are knowledgeable and engaging. Their teaching style kept me motivated throughout the course."
    },
    {
        name: "Max B.",
        review: "LearnWell's community forum is a gem! I enjoyed interacting with other learners, sharing insights, and learning from their experiences."
    },
    {
        name: "Olivia P.",
        review: "The mobile app is a game-changer! Being able to access the courses on the go has been incredibly convenient for me."
    },
    {
        name: "Liam T.",
        review: "The quality of content is top-notch. I found the course material well-structured and up-to-date."
    },
    {
        name: "Ava R.",
        review: "I've tried other platforms, but LearnWell stands out due to its affordability without compromising on quality. Great value for money!"
    },
    {
        name: "Ethan G.",
        review: "The gamified learning approach is brilliant! It made the learning process fun and engaging, keeping me motivated till the end."
    }
];


const ReiviewCard = () => {
    return (
        <>
            <ScrollArea className='p-8' >
                <div className='flex justify-between items-center gap-2' >
                    {reviews.map(review => (
                        <div key={review.name} className='p-4 border-2 shadow rounded w-[400px] h-72 flex flex-col justify-between' >
                            <span className='text-3xl' >
                                <FaCommentAlt />
                            </span>
                            <p className='mt-4 text-lg leading-relaxed' >{review.review}</p>
                            <div className='mt-4 flex gap-2 items-center' >
                                <UserAvatar name={review.name} width={50} height={50} text={20} /> <span className='text-xl font-semibold' >{review.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    )
}

export default ReiviewCard
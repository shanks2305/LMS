import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-black p-8 w-full ' >
                <div className='grid grid-cols-12' >
                    <div className='col-span-6 flex flex-col lg:flex-row justify-between text-white capitalize text-sm' >
                        <ul className='flex flex-col gap-1' >
                            <li>LMS Bussiness</li>
                            <li>Teach on Open LMS</li>
                            <li>Get the app</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul className='flex flex-col gap-1' >
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Help and support</li>
                            <li>Affilitate</li>
                            <li>Investors</li>
                        </ul>
                        <ul className='flex flex-col gap-1' >
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li>Cookie settings</li>
                            <li>Site Map</li>
                            <li>Accessibility statement</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full mt-8' >
                    <h1 className='text-3xl font-sans text-white ' >OpenLMS</h1>
                </div>
            </footer>
        </>
    )
}

export default Footer
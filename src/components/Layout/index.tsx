import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PublicLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className='container mx-auto p-8 min-h-[85vh]' >
                {children}
            </main>
            <Footer />
        </>
    )
}

export default PublicLayout
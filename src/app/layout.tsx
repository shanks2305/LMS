import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthContext } from '@/components/AuthContext'
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open LMS',
  description: 'This an online learing management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          {children}
        </AuthContext>
        <Toaster />
      </body>
    </html>
  )
}

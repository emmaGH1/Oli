import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { Inter } from "next/font/google"

import '../globals.css'

export const metadata = {
    title: 'Oli',
    description: 'An online community for thinkers'
}

type Props = {
    children: ReactNode
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children } : Props)  {
    return (
        <ClerkProvider>
           <html lang="en">
             <body className={` ${inter.className}`} >
                {children}
             </body>
           </html>
        </ClerkProvider>
    )
}
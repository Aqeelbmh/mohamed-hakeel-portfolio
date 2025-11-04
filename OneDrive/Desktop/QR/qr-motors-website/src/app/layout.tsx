import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Q.R Motors - Agricultural Spare Parts | Sri Lanka',
    description: 'Leading importers & distributors of tractor, rotavator and tiller spare parts across Sri Lanka since 2009. Quality parts, prompt delivery, expert support.',
    keywords: 'agricultural spare parts, tractor parts, rotavator parts, tiller parts, sri lanka, Q.R Motors',
    openGraph: {
        title: 'Q.R Motors - Agricultural Spare Parts | Sri Lanka',
        description: 'Leading importers & distributors of agricultural spare parts across Sri Lanka since 2009.',
        url: 'https://qrmotors.lk',
        siteName: 'Q.R Motors',
        locale: 'en_US',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
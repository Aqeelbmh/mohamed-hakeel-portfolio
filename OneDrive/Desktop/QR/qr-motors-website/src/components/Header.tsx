'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Brands', href: '/brands' },
        { name: 'Why Choose Us', href: '/why-choose-us' },
        { name: 'Dealers', href: '/dealers' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">QR</span>
                            </div>
                            <div className="ml-3">
                                <div className="text-xl font-bold text-gray-900">Q.R Motors</div>
                                <div className="text-xs text-gray-600">Since 2009</div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info & CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="text-sm text-gray-600">
                            <div className="font-medium">074 201 1033</div>
                        </div>
                        <a
                            href="https://wa.me/94742011033"
                            className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-600 transition-colors"
                        >
                            WhatsApp
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-primary p-2"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="border-t border-gray-200 pt-3 mt-3">
                                <div className="px-3 text-sm text-gray-600">
                                    <div className="font-medium">Call: 074 201 1033</div>
                                    <a
                                        href="https://wa.me/94742011033"
                                        className="inline-block mt-2 bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium"
                                    >
                                        Contact via WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
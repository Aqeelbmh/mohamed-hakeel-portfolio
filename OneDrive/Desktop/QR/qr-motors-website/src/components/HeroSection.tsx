import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    <div>
                        <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700">
                                Since 2009 • Trusted by Farmers Across Sri Lanka
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            Q.R Motors — Your Trusted
                            <span className="text-primary block">Agricultural Parts</span>
                            Partner
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Leading importers & distributors of tractor, rotavator and tiller spare parts across Sri Lanka.
                            Quality guaranteed parts, prompt delivery, and expert technical support for all your agricultural needs.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-semibold text-lg shadow-lg hover:bg-primary-600 transition-all duration-200 transform hover:scale-105"
                            >
                                Browse Products
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <a
                                href="https://wa.me/94742011033"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-accent bg-accent text-white font-semibold text-lg hover:bg-accent-600 transition-all duration-200"
                            >
                                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z" />
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                            <div className="flex items-center justify-center sm:justify-start">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <div className="text-sm font-medium text-gray-900">Quality Guaranteed</div>
                                    <div className="text-xs text-gray-500">Genuine OEM Parts</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center sm:justify-start">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <div className="text-sm font-medium text-gray-900">Fast Delivery</div>
                                    <div className="text-xs text-gray-500">Island-wide Service</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center sm:justify-start">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25v19.5M21.75 12H2.25" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <div className="text-sm font-medium text-gray-900">Expert Support</div>
                                    <div className="text-xs text-gray-500">Technical Assistance</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-gray-900">Need immediate assistance?</div>
                                    <div className="text-sm text-gray-600">Call us directly for urgent parts requirements</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-primary">074 201 1033</div>
                                    <div className="text-xs text-gray-500">Available 8 AM - 6 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0">
                        <div className="relative">
                            <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center overflow-hidden shadow-xl">
                                {/* Placeholder for hero image - replace with actual tractor/parts image */}
                                <div className="text-center">
                                    <div className="w-32 h-32 mx-auto bg-primary-200 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 font-medium">Agricultural Spare Parts</p>
                                    <p className="text-sm text-gray-500 mt-1">Tractor • Rotavator • Tiller</p>
                                </div>
                            </div>

                            {/* Floating stats cards */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border">
                                <div className="text-2xl font-bold text-primary">15+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>

                            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border">
                                <div className="text-2xl font-bold text-accent">1000+</div>
                                <div className="text-sm text-gray-600">Parts Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
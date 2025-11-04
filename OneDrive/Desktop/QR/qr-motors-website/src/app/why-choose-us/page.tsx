import Link from 'next/link'

export default function WhyChooseUsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Why Choose Q.R Motors?
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
                            15+ years of excellence in agricultural spare parts.
                            Your trusted partner for quality, reliability, and expert service across Sri Lanka.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Value Propositions */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We've built our reputation on delivering exceptional value through quality parts,
                            expert service, and unwavering commitment to our customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality You Can Trust</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Genuine OEM Parts</h4>
                                        <p className="text-gray-600">We source directly from manufacturers to ensure authenticity and perfect compatibility.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Aftermarket Options</h4>
                                        <p className="text-gray-600">Carefully selected alternatives that meet or exceed original specifications.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                                        <p className="text-gray-600">Every part undergoes rigorous quality checks before reaching you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h4>
                                <p className="text-gray-600 mb-4">All parts come with warranties and our quality assurance promise.</p>
                                <div className="bg-primary-50 rounded-lg p-4">
                                    <p className="text-primary-800 font-medium text-sm">
                                        "If it doesn't fit perfectly or perform as expected, we'll make it right - guaranteed."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">15+</div>
                            <div className="text-primary-100">Years of Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">1000+</div>
                            <div className="text-primary-100">Parts Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">500+</div>
                            <div className="text-primary-100">Satisfied Customers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">25</div>
                            <div className="text-primary-100">Districts Covered</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">More Than Just Parts</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We're your complete agricultural parts solution partner
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
                            <p className="text-gray-600">Best market prices with special rates for bulk orders and dealers.</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
                            <p className="text-gray-600">Island-wide delivery with next-day service in major cities.</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25v19.5M21.75 12H2.25" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
                            <p className="text-gray-600">Technical consultation and installation guidance from our experts.</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Large Inventory</h3>
                            <p className="text-gray-600">Extensive stock ensures immediate availability of common parts.</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Dealer Network</h3>
                            <p className="text-gray-600">Strong dealer relationships across Sri Lanka for better reach.</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Care</h3>
                            <p className="text-gray-600">Dedicated service team committed to your satisfaction and success.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Experience the Q.R Motors Difference
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Join hundreds of satisfied customers who choose Q.R Motors for their agricultural spare parts needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Browse Our Products
                        </Link>
                        <a
                            href="https://wa.me/94742011033"
                            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors"
                        >
                            Contact Us Today
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
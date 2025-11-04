import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About Q.R Motors
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
                            Your trusted partner in agricultural spare parts since 2009.
                            Serving farmers and dealers across Sri Lanka with quality, reliability, and expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <div className="space-y-4 text-lg text-gray-700">
                                <p>
                                    Founded in 2009, Q.R Motors has grown from a small local supplier to become one of
                                    Sri Lanka's most trusted names in agricultural spare parts. Our journey began with
                                    a simple mission: to provide farmers with reliable, high-quality parts for their
                                    agricultural equipment.
                                </p>
                                <p>
                                    Over the years, we have built strong relationships with leading manufacturers
                                    worldwide, ensuring that our customers have access to genuine OEM parts and
                                    premium aftermarket alternatives at competitive prices.
                                </p>
                                <p>
                                    Today, we serve hundreds of farmers, dealers, and agricultural service centers
                                    across Sri Lanka, helping them keep their equipment running efficiently and
                                    productively.
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary-50 rounded-2xl p-8">
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-primary">15+</div>
                                    <div className="text-gray-600">Years of Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary">1000+</div>
                                    <div className="text-gray-600">Parts Available</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary">500+</div>
                                    <div className="text-gray-600">Satisfied Customers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary">25</div>
                                    <div className="text-gray-600">Districts Covered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
                            <p className="text-gray-600">
                                We source only genuine OEM and premium aftermarket parts to ensure
                                reliability and longevity for your agricultural equipment.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
                            <p className="text-gray-600">
                                Our customers are at the heart of everything we do. We provide
                                personalized service and technical support to meet your specific needs.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
                            <p className="text-gray-600">
                                We maintain extensive inventory and efficient logistics to ensure
                                fast delivery and consistent availability of critical parts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive agricultural spare parts solutions for all your farming equipment needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900">Tractor Parts</h3>
                            <p className="text-sm text-gray-600 mt-1">Engine, transmission, hydraulic, and electrical components</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900">Rotavator Parts</h3>
                            <p className="text-sm text-gray-600 mt-1">Blades, gearboxes, PTO shafts, and cultivation implements</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900">Tiller Parts</h3>
                            <p className="text-sm text-gray-600 mt-1">Power tiller blades, engine components, and accessories</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25v19.5M21.75 12H2.25" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900">Technical Support</h3>
                            <p className="text-sm text-gray-600 mt-1">Expert consultation and parts identification assistance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Work with Us?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Join hundreds of satisfied customers who trust Q.R Motors for their agricultural spare parts needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Browse Our Products
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
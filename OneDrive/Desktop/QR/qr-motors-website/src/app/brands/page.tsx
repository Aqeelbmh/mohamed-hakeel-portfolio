import Link from 'next/link'
import { getPopularBrands, getProductsByCategory } from '@/data/products'

export default function BrandsPage() {
    // Define our actual trusted partners with image paths
    const trustedPartners = [
        { name: 'Bull Agro', count: 25, specialty: 'Son of the Soil', image: '/images/brands/bull-agro.png', color: 'red' },
        { name: 'Satyam Trac Parts', count: 18, specialty: 'Tractor Components', image: '/images/brands/satyam-trac.png', color: 'blue' },
        { name: 'Field Start', count: 22, specialty: 'Agricultural Solutions', image: '/images/brands/field-start.png', color: 'green' },
        { name: 'Geekan', count: 15, specialty: 'Spare Parts', image: '/images/brands/geekan.png', color: 'purple' },
        { name: 'QR Gold', count: 30, specialty: 'Premium Parts', image: '/images/brands/qr-gold.png', color: 'yellow' },
        { name: 'C.R.R Products', count: 20, specialty: 'Quality Components', image: '/images/brands/crr-products.png', color: 'indigo' },
        { name: 'Global X Automatic Components', count: 12, specialty: 'Auto Components', image: '/images/brands/global-x.png', color: 'teal' },
        { name: 'Plazma Genuine Spares', count: 28, specialty: 'Genuine Spares', image: '/images/brands/plazma-genuine.png', color: 'pink' },
        { name: 'ART Bearings', count: 16, specialty: 'Bearing Solutions', image: '/images/brands/art-bearings.png', color: 'orange' }
    ]

    const partnerDescriptions: Record<string, string> = {
        'Bull Agro': 'Son of the Soil - Specializing in authentic agricultural spare parts and equipment for farming excellence.',
        'Satyam Trac Parts': 'Premium tractor components and replacement parts with a focus on quality and reliability.',
        'Field Start': 'Comprehensive agricultural solutions provider offering innovative farming equipment and parts.',
        'Geekan': 'Trusted spare parts distributor with extensive inventory for various agricultural machinery.',
        'QR Gold': 'Our premium parts division offering top-quality components with enhanced performance guarantees.',
        'C.R.R Products': 'Quality-focused manufacturer of durable agricultural components and replacement parts.',
        'Global X Automatic Components': 'Advanced automatic components and systems for modern agricultural machinery.',
        'Plazma Genuine Spares': 'Genuine OEM spare parts supplier ensuring authentic quality and perfect compatibility.',
        'ART Bearings': 'Specialized bearing solutions for agricultural equipment with precision engineering and durability.'
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Trusted Brands
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
                            We partner with the world's leading agricultural equipment manufacturers
                            to bring you genuine OEM and premium aftermarket parts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Brands Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Meet our network of reliable partners who help us deliver quality agricultural parts and solutions across Sri Lanka.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trustedPartners.map((partner) => {
                            return (
                                <div key={partner.name} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-8">
                                        {/* Partner Logo */}
                                        <div className="flex justify-center mb-6">
                                            <div className="w-24 h-24 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
                                                {/* For now, using colored badges - replace with actual images when available */}
                                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-red-100">
                                                    <span className="text-red-600 font-bold text-sm">
                                                        {partner.name === 'Bull Agro' ? 'BA' :
                                                            partner.name === 'Satyam Trac Parts' ? 'STP' :
                                                                partner.name === 'Field Start' ? 'FS' :
                                                                    partner.name === 'Geekan' ? 'GK' :
                                                                        partner.name === 'QR Gold' ? 'QRG' :
                                                                            partner.name === 'C.R.R Products' ? 'CRR' :
                                                                                partner.name === 'Global X Automatic Components' ? 'GXA' :
                                                                                    partner.name === 'Plazma Genuine Spares' ? 'PGS' :
                                                                                        partner.name === 'ART Bearings' ? 'ART' :
                                                                                            partner.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-gray-900 text-center w-full">{partner.name}</h3>
                                        </div>

                                        <div className="text-center mb-4">
                                            <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                                                {partner.count}+ parts
                                            </span>
                                        </div>

                                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                            {partnerDescriptions[partner.name] || 'Quality agricultural equipment and spare parts.'}
                                        </p>

                                        {/* Specialty */}
                                        <div className="mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Specialty:</span>
                                                <span className="font-medium text-primary">{partner.specialty}</span>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/products?search=${encodeURIComponent(partner.name)}`}
                                            className="block w-full bg-primary text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                                        >
                                            View {partner.name} Products
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Brands */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Genuine Parts?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Investing in genuine OEM and premium aftermarket parts ensures optimal performance and longevity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect Fit</h3>
                            <p className="text-gray-600 text-sm">Engineered to exact specifications for seamless compatibility with your equipment.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Durability</h3>
                            <p className="text-gray-600 text-sm">Premium materials and manufacturing processes ensure long-lasting performance.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.268-3l-.737-2.91a1.004 1.004 0 00-1.933.004l-.737 2.91a5.002 5.002 0 00-3.531 6.174L8 15a3 3 0 01-3-3V9a3 3 0 013-3h8a3 3 0 013 3v3a3 3 0 01-3 3l-.67-.826a5.002 5.002 0 00-3.531-6.174z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Warranty</h3>
                            <p className="text-gray-600 text-sm">Manufacturer warranties and our quality guarantee for peace of mind.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25v19.5M21.75 12H2.25" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
                            <p className="text-gray-600 text-sm">Expert technical support and guidance for part selection and installation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* In Collaboration With Our Trusted Partners */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">In Collaboration With</h2>
                        <p className="text-xl text-gray-600 mb-2">Our Trusted Partners</p>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Working together with industry leaders to bring you the best agricultural solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {/* Partner 1 - Bull Agro */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                                    <span className="text-red-600 font-bold text-sm">BA</span>
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">Bull Agro</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">(Son of the Soil)</p>
                        </div>

                        {/* Partner 2 - Satyam Trac Parts */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-bold text-sm">STP</span>
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">Satyam Trac Parts</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Tractor Components</p>
                        </div>

                        {/* Partner 3 - Field Start */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold text-sm">FS</span>
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">Field Start</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Agricultural Solutions</p>
                        </div>

                        {/* Partner 4 - Geekan */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-purple-600 font-bold text-sm">GK</span>
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">Geekan</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Spare Parts</p>
                        </div>

                        {/* Partner 5 - QR Gold */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <span className="text-yellow-600 font-bold text-sm">QRG</span>
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">QR Gold</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Premium Parts</p>
                        </div>

                        {/* Partner 6 - C.R.R Products */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <span className="text-indigo-600 font-bold text-sm">CRR</span>
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">C.R.R Products</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Quality Components</p>
                        </div>

                        {/* Partner 7 - Global X Automatic Components */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                                    <span className="text-teal-600 font-bold text-sm">GXA</span>
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">Global X Automatic</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Auto Components</p>
                        </div>

                        {/* Partner 8 - Plazma Genuine Spares */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                                    <span className="text-pink-600 font-bold text-sm">PGS</span>
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">Plazma Genuine</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Genuine Spares</p>
                        </div>

                        {/* Partner 9 - ART Bearings */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                    <span className="text-orange-600 font-bold text-sm">ART</span>
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">ART Bearings</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Bearing Solutions</p>
                        </div>

                        {/* Partner 10 - Partner Name (to be specified) */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                                <span className="text-gray-600 font-bold text-sm">P10</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">Partner 10</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Coming Soon</p>
                        </div>

                        {/* Partner 11 - Partner Name (to be specified) */}
                        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                                <span className="text-slate-600 font-bold text-sm">P11</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-center text-sm">Partner 11</h4>
                            <p className="text-xs text-gray-500 text-center mt-1">Coming Soon</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg text-gray-600 mb-6">
                            Together, we ensure you get authentic parts with manufacturer warranty and expert support.
                        </p>
                        <Link
                            href="/products"
                            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                        >
                            Explore All Partner Products
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Can't Find Your Brand */}
            <section className="py-16 bg-primary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Can't Find Your Brand?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        We work with many more brands and can source parts for almost any agricultural equipment.
                        Contact us with your specific requirements.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/94742011033?text=Hi! I'm looking for parts for a specific brand that's not listed on your website."
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z" />
                            </svg>
                            Contact via WhatsApp
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors border border-primary"
                        >
                            Send Detailed Request
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
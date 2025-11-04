'use client'

import { useSearchParams } from 'next/navigation'
import ProductGrid from '@/components/ProductGrid'
import { sampleProducts } from '@/data/products'

export default function ProductsPage() {
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    const brand = searchParams.get('brand')
    const search = searchParams.get('search')

    // Pre-filter products based on URL parameters
    let filteredProducts = sampleProducts

    if (category) {
        filteredProducts = filteredProducts.filter(p => p.category === category)
    }

    if (brand) {
        filteredProducts = filteredProducts.filter(p => p.brand === brand)
    }

    if (search) {
        const searchLower = search.toLowerCase()
        filteredProducts = filteredProducts.filter(p =>
            p.title.toLowerCase().includes(searchLower) ||
            p.partNumber.toLowerCase().includes(searchLower) ||
            p.brand.toLowerCase().includes(searchLower) ||
            p.description?.toLowerCase().includes(searchLower)
        )
    }

    const getPageTitle = () => {
        if (category && brand) {
            return `${brand} ${category.charAt(0).toUpperCase() + category.slice(1)} Parts`
        } else if (category) {
            return `${category.charAt(0).toUpperCase() + category.slice(1)} Parts`
        } else if (brand) {
            return `${brand} Parts`
        } else if (search) {
            return `Search Results for "${search}"`
        }
        return 'Our Products'
    }

    const getPageDescription = () => {
        if (category && brand) {
            return `Browse ${brand} spare parts for ${category} equipment. Quality guaranteed parts with expert support.`
        } else if (category) {
            return `Find all ${category} spare parts from top brands. Quality components for your agricultural equipment.`
        } else if (brand) {
            return `Genuine ${brand} spare parts for agricultural equipment. Authorized distributor with island-wide delivery.`
        } else if (search) {
            return `Found ${filteredProducts.length} products matching "${search}". Browse our extensive agricultural parts catalog.`
        }
        return 'Browse our comprehensive collection of agricultural spare parts from tractor components to rotavator blades.'
    }
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {getPageTitle()}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {getPageDescription()}
                        </p>

                        {/* Filter badges */}
                        {(category || brand || search) && (
                            <div className="flex flex-wrap justify-center gap-2 mt-6">
                                {category && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                                        Category: {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </span>
                                )}
                                {brand && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-100 text-accent-800">
                                        Brand: {brand}
                                    </span>
                                )}
                                {search && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                        Search: "{search}"
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Product Grid with Filters */}
            <ProductGrid
                products={filteredProducts}
                title=""
                showFilters={true}
                initialCategory={category || 'all'}
                initialBrand={brand || 'all'}
                initialSearch={search || ''}
            />

            {/* Help Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary-50 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-primary-900 mb-4">
                            Need Help Finding the Right Part?
                        </h2>
                        <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
                            Our technical experts can help you identify the correct parts for your equipment.
                            Send us your tractor model, part number, or a photo of the part you need.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/94742011033?text=Hi! I need help finding a part for my agricultural equipment."
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z" />
                                </svg>
                                Get Expert Help via WhatsApp
                            </a>
                            <a
                                href="tel:+94742011033"
                                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Us: 074 201 1033
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
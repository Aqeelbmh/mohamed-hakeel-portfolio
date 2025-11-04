'use client'

import React, { useState, useMemo } from 'react'
import ProductCard, { Product } from './ProductCard'

interface ProductGridProps {
    products: Product[]
    title?: string
    showFilters?: boolean
    maxItems?: number
    initialCategory?: string
    initialBrand?: string
    initialSearch?: string
}

export default function ProductGrid({
    products,
    title = "Our Products",
    showFilters = false,
    maxItems,
    initialCategory = 'all',
    initialBrand = 'all',
    initialSearch = ''
}: ProductGridProps) {
    const [searchTerm, setSearchTerm] = useState(initialSearch)
    const [selectedCategory, setSelectedCategory] = useState(initialCategory)
    const [selectedBrand, setSelectedBrand] = useState(initialBrand)
    const [stockFilter, setStockFilter] = useState('all')

    // Get unique categories and brands for filters
    const categories = useMemo(() => {
        const cats = Array.from(new Set(products.map(p => p.category))).sort()
        return cats
    }, [products])

    const brands = useMemo(() => {
        const brandsList = Array.from(new Set(products.map(p => p.brand))).sort()
        return brandsList
    }, [products])

    // Filter products
    const filteredProducts = useMemo(() => {
        let filtered = products.filter(product => {
            const matchesSearch = searchTerm === '' ||
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchTerm.toLowerCase())

            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
            const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand
            const matchesStock = stockFilter === 'all' ||
                (stockFilter === 'in-stock' && product.inStock) ||
                (stockFilter === 'out-of-stock' && !product.inStock)

            return matchesSearch && matchesCategory && matchesBrand && matchesStock
        })

        // If maxItems is specified, limit the results
        if (maxItems) {
            filtered = filtered.slice(0, maxItems)
        }

        return filtered
    }, [products, searchTerm, selectedCategory, selectedBrand, stockFilter, maxItems])

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedCategory('all')
        setSelectedBrand('all')
        setStockFilter('all')
    }

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Browse our extensive collection of high-quality agricultural spare parts from trusted brands
                    </p>
                </div>

                {/* Filters */}
                {showFilters && (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            {/* Search */}
                            <div className="lg:col-span-2">
                                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                                    Search Products
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search by name, part number, or brand..."
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                >
                                    <option value="all">All Categories</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Brand Filter */}
                            <div>
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                                    Brand
                                </label>
                                <select
                                    id="brand"
                                    value={selectedBrand}
                                    onChange={(e) => setSelectedBrand(e.target.value)}
                                    className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                >
                                    <option value="all">All Brands</option>
                                    {brands.map(brand => (
                                        <option key={brand} value={brand}>
                                            {brand}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Stock Filter */}
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium text-gray-700">Stock Status:</span>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="stock"
                                        value="all"
                                        checked={stockFilter === 'all'}
                                        onChange={(e) => setStockFilter(e.target.value)}
                                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">All</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="stock"
                                        value="in-stock"
                                        checked={stockFilter === 'in-stock'}
                                        onChange={(e) => setStockFilter(e.target.value)}
                                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">In Stock</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="stock"
                                        value="out-of-stock"
                                        checked={stockFilter === 'out-of-stock'}
                                        onChange={(e) => setStockFilter(e.target.value)}
                                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Out of Stock</span>
                                </label>
                            </div>

                            {/* Clear Filters */}
                            {(searchTerm || selectedCategory !== 'all' || selectedBrand !== 'all' || stockFilter !== 'all') && (
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-primary hover:text-primary-600 font-medium flex items-center"
                                >
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Clear All Filters
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Results count */}
                <div className="flex justify-between items-center mb-6">
                    <p className="text-sm text-gray-600">
                        Showing {filteredProducts.length} of {products.length} products
                        {maxItems && ` (limited to ${maxItems})`}
                    </p>
                    {!maxItems && (
                        <div className="text-sm text-gray-500">
                            {filteredProducts.filter(p => p.inStock).length} in stock
                        </div>
                    )}
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-1.01-6-2.709M15 13a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Try adjusting your search criteria or clear the filters to see more results.
                        </p>
                        {(searchTerm || selectedCategory !== 'all' || selectedBrand !== 'all' || stockFilter !== 'all') && (
                            <button
                                onClick={clearFilters}
                                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-primary-50 hover:bg-primary-100"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* View More Button (when maxItems is set) */}
                {maxItems && products.length > maxItems && (
                    <div className="text-center mt-8">
                        <a
                            href="/products"
                            className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                            View All Products
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}
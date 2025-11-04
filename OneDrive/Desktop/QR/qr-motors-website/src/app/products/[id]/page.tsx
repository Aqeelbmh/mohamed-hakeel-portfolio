'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getProductById, sampleProducts, getProductsByCategory } from '@/data/products'

interface ProductDetailPageProps {
    params: {
        id: string
    }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
    const product = getProductById(params.id)

    if (!product) {
        notFound()
    }

    const relatedProducts = getProductsByCategory(product.category, 4)
        .filter(p => p.id !== product.id)
        .slice(0, 3)

    const handleWhatsAppQuote = () => {
        const message = encodeURIComponent(
            `Hi Q.R Motors,\n\n` +
            `I'm interested in:\n` +
            `Product: ${product.title}\n` +
            `Part Number: ${product.partNumber}\n` +
            `Brand: ${product.brand}\n` +
            `Category: ${product.category}\n\n` +
            `Please provide pricing and availability information.\n\n` +
            `Thank you!`
        )
        window.open(`https://wa.me/94742011033?text=${message}`, '_blank')
    }

    const handleCall = () => {
        window.open('tel:+94742011033', '_self')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex text-sm">
                        <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <Link href="/products" className="text-gray-500 hover:text-primary">Products</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <Link href={`/products?category=${product.category}`} className="text-gray-500 hover:text-primary capitalize">
                            {product.category}
                        </Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-900">{product.title}</span>
                    </nav>
                </div>
            </section>

            {/* Product Details */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-white rounded-2xl border border-gray-200 flex items-center justify-center overflow-hidden">
                                {product.image ? (
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={500}
                                        height={500}
                                        className="object-contain max-h-full max-w-full"
                                    />
                                ) : (
                                    <div className="text-center text-gray-400">
                                        <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                        <p className="text-lg font-medium">Product Image</p>
                                        <p className="text-sm">High-resolution image available upon request</p>
                                    </div>
                                )}
                            </div>

                            {/* Image thumbnails placeholder */}
                            <div className="grid grid-cols-4 gap-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-square bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Information */}
                        <div className="space-y-6">
                            {/* Header */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 capitalize">
                                        {product.category}
                                    </span>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${product.inStock
                                        ? 'bg-green-50 text-green-700'
                                        : 'bg-red-50 text-red-700'
                                        }`}>
                                        {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                                    </span>
                                    {product.featured && (
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-50 text-accent-700">
                                            ⭐ Featured
                                        </span>
                                    )}
                                </div>

                                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

                                {product.price ? (
                                    <div className="text-3xl font-bold text-primary mb-4">{product.price}</div>
                                ) : (
                                    <div className="text-lg text-gray-600 mb-4">Contact for pricing</div>
                                )}
                            </div>

                            {/* Key Specifications */}
                            <div className="bg-white rounded-lg p-6 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Specifications</h3>
                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Part Number</dt>
                                        <dd className="text-sm font-mono text-primary mt-1">{product.partNumber}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Brand</dt>
                                        <dd className="text-sm text-gray-900 mt-1">{product.brand}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Category</dt>
                                        <dd className="text-sm text-gray-900 mt-1 capitalize">{product.category} Parts</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Availability</dt>
                                        <dd className={`text-sm mt-1 font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Compatibility */}
                            {product.compatibility && product.compatibility.length > 0 && (
                                <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Compatible Models</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {product.compatibility.map((model, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                                            >
                                                {model}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Description */}
                            {product.description && (
                                <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={handleWhatsAppQuote}
                                        className="w-full bg-accent text-white py-4 px-6 rounded-lg font-semibold hover:bg-accent-600 transition-colors flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z" />
                                        </svg>
                                        Get Quote via WhatsApp
                                    </button>

                                    <button
                                        onClick={handleCall}
                                        className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Call: 074 201 1033
                                    </button>
                                </div>

                                <div className="text-center text-sm text-gray-500">
                                    <p>Need technical assistance? Our experts are available 8 AM - 6 PM</p>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-primary-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-primary-900 mb-3">Why Choose Q.R Motors?</h3>
                                <ul className="space-y-2 text-sm text-primary-800">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Genuine OEM and premium aftermarket parts
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Island-wide delivery across Sri Lanka
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        15+ years of experience in agricultural parts
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Expert technical support and consultation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Products</h2>
                            <p className="text-lg text-gray-600">
                                Other {product.category} parts you might be interested in
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProducts.map((relatedProduct) => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/products/${relatedProduct.id}`}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-full h-48 bg-gray-50 flex items-center justify-center">
                                        {relatedProduct.image ? (
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.title}
                                                width={200}
                                                height={150}
                                                className="object-contain h-full group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="text-gray-400">
                                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {relatedProduct.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2">
                                            Part No: <span className="font-mono text-primary">{relatedProduct.partNumber}</span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Brand: {relatedProduct.brand}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <Link
                                href={`/products?category=${product.category}`}
                                className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                            >
                                View All {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Parts
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
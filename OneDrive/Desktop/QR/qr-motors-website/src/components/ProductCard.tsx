import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface Product {
    id: string
    title: string
    partNumber: string
    brand: string
    category: string
    compatibility: string[]
    image?: string
    description?: string
    inStock: boolean
    featured?: boolean
    price?: string
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <Link href={`/products/${product.id}`} className="block">
                <div className="relative">
                    <div className="w-full h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                        {product.image ? (
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={300}
                                height={200}
                                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center text-gray-400">
                                <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                                <span className="text-sm">No Image</span>
                            </div>
                        )}
                    </div>

                    {/* Stock status badge */}
                    <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.inStock
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                            }`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    {/* Featured badge */}
                    {product.featured && (
                        <div className="absolute top-3 right-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-white">
                                Featured
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-4">
                    <div className="mb-2">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-primary-50 text-primary-700">
                            {product.category}
                        </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                            <span className="font-medium text-gray-700">Part No:</span>
                            <span className="ml-2 font-mono text-primary">{product.partNumber}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-medium text-gray-700">Brand:</span>
                            <span className="ml-2">{product.brand}</span>
                        </div>
                        {product.compatibility && product.compatibility.length > 0 && (
                            <div className="flex items-start">
                                <span className="font-medium text-gray-700 mt-0.5">Compatible:</span>
                                <span className="ml-2 text-xs leading-relaxed">
                                    {product.compatibility.slice(0, 2).join(', ')}
                                    {product.compatibility.length > 2 && ` +${product.compatibility.length - 2} more`}
                                </span>
                            </div>
                        )}
                    </div>

                    {product.description && (
                        <p className="text-sm text-gray-600 mb-4">
                            {product.description}
                        </p>
                    )}

                    <div className="flex items-center justify-between">
                        {product.price ? (
                            <div className="text-lg font-bold text-primary">
                                {product.price}
                            </div>
                        ) : (
                            <div className="text-sm text-gray-500">
                                Contact for price
                            </div>
                        )}

                        <div className="flex gap-2">
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.open(`https://wa.me/94742011033?text=Hi! I'm interested in ${product.title} (Part No: ${product.partNumber})`, '_blank')
                                }}
                                className="text-sm bg-accent text-white px-3 py-1.5 rounded-lg hover:bg-accent-600 transition-colors flex items-center"
                            >
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z" />
                                </svg>
                                Quote
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}
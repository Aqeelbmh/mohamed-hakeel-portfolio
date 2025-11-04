'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function DealersPage() {
    const [formData, setFormData] = useState({
        businessName: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        district: '',
        businessType: '',
        experience: '',
        currentSuppliers: '',
        estimatedVolume: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Create WhatsApp message for dealer inquiry
        const message = encodeURIComponent(
            `DEALER REGISTRATION INQUIRY\n\n` +
            `Business Name: ${formData.businessName}\n` +
            `Contact Person: ${formData.contactPerson}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Address: ${formData.address}\n` +
            `District: ${formData.district}\n` +
            `Business Type: ${formData.businessType}\n` +
            `Experience: ${formData.experience}\n` +
            `Current Suppliers: ${formData.currentSuppliers}\n` +
            `Estimated Monthly Volume: ${formData.estimatedVolume}\n\n` +
            `Message: ${formData.message}\n\n` +
            `Please contact me to discuss dealer partnership opportunities.`
        )

        window.open(`https://wa.me/94742011033?text=${message}`, '_blank')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Dealer Partnership Program
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
                            Join our network of authorized dealers and grow your agricultural parts business
                            with Q.R Motors' comprehensive support and competitive pricing.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Benefits Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dealer Benefits</h2>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Dealer Pricing</h3>
                                    <p className="text-gray-600">Attractive wholesale rates with volume discounts and seasonal promotions.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Extensive Product Range</h3>
                                    <p className="text-gray-600">Access to 1000+ parts from leading brands with regular inventory updates.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25v19.5M21.75 12H2.25" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Support</h3>
                                    <p className="text-gray-600">Dedicated technical team to help with part identification and customer queries.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                                    <p className="text-gray-600">Priority shipping to dealers with flexible delivery options and tracking.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Support</h3>
                                    <p className="text-gray-600">Product catalogs, promotional materials, and marketing assistance.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Training Programs</h3>
                                    <p className="text-gray-600">Product knowledge sessions and business development training.</p>
                                </div>
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Requirements</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Valid business registration and trade licenses
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Experience in agricultural equipment or parts business
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Adequate storage and display facilities
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Commitment to minimum monthly purchase volumes
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dealer Application</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="businessName"
                                        name="businessName"
                                        required
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                                        Contact Person *
                                    </label>
                                    <input
                                        type="text"
                                        id="contactPerson"
                                        name="contactPerson"
                                        required
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                    Business Address *
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    required
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">
                                        District *
                                    </label>
                                    <select
                                        id="district"
                                        name="district"
                                        required
                                        value={formData.district}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    >
                                        <option value="">Select District</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Gampaha">Gampaha</option>
                                        <option value="Kalutara">Kalutara</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Matale">Matale</option>
                                        <option value="Nuwara Eliya">Nuwara Eliya</option>
                                        <option value="Galle">Galle</option>
                                        <option value="Matara">Matara</option>
                                        <option value="Hambantota">Hambantota</option>
                                        <option value="Jaffna">Jaffna</option>
                                        <option value="Kilinochchi">Kilinochchi</option>
                                        <option value="Mannar">Mannar</option>
                                        <option value="Vanni">Vanni</option>
                                        <option value="Batticaloa">Batticaloa</option>
                                        <option value="Ampara">Ampara</option>
                                        <option value="Trincomalee">Trincomalee</option>
                                        <option value="Kurunegala">Kurunegala</option>
                                        <option value="Puttalam">Puttalam</option>
                                        <option value="Anuradhapura">Anuradhapura</option>
                                        <option value="Polonnaruwa">Polonnaruwa</option>
                                        <option value="Badulla">Badulla</option>
                                        <option value="Monaragala">Monaragala</option>
                                        <option value="Ratnapura">Ratnapura</option>
                                        <option value="Kegalle">Kegalle</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Type *
                                    </label>
                                    <select
                                        id="businessType"
                                        name="businessType"
                                        required
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    >
                                        <option value="">Select Type</option>
                                        <option value="Agricultural Equipment Dealer">Agricultural Equipment Dealer</option>
                                        <option value="Spare Parts Shop">Spare Parts Shop</option>
                                        <option value="Service Center">Service Center</option>
                                        <option value="Hardware Store">Hardware Store</option>
                                        <option value="Wholesale Distributor">Wholesale Distributor</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                                        Years in Business
                                    </label>
                                    <select
                                        id="experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    >
                                        <option value="">Select Experience</option>
                                        <option value="Less than 1 year">Less than 1 year</option>
                                        <option value="1-3 years">1-3 years</option>
                                        <option value="3-5 years">3-5 years</option>
                                        <option value="5-10 years">5-10 years</option>
                                        <option value="More than 10 years">More than 10 years</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="estimatedVolume" className="block text-sm font-medium text-gray-700 mb-2">
                                        Estimated Monthly Volume
                                    </label>
                                    <select
                                        id="estimatedVolume"
                                        name="estimatedVolume"
                                        value={formData.estimatedVolume}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    >
                                        <option value="">Select Volume</option>
                                        <option value="Under Rs. 100,000">Under Rs. 100,000</option>
                                        <option value="Rs. 100,000 - 500,000">Rs. 100,000 - 500,000</option>
                                        <option value="Rs. 500,000 - 1,000,000">Rs. 500,000 - 1,000,000</option>
                                        <option value="Over Rs. 1,000,000">Over Rs. 1,000,000</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="currentSuppliers" className="block text-sm font-medium text-gray-700 mb-2">
                                    Current Suppliers (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="currentSuppliers"
                                    name="currentSuppliers"
                                    placeholder="List your current parts suppliers"
                                    value={formData.currentSuppliers}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Additional Information
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us about your business goals, customer base, or any specific requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z" />
                                </svg>
                                Submit Application via WhatsApp
                            </button>

                            <p className="text-sm text-gray-500 text-center">
                                Your application will be sent via WhatsApp for immediate review by our dealer relations team.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Bulk Orders Section */}
                <section className="mt-16 bg-white rounded-lg shadow-sm p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Bulk Orders & Special Pricing</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Looking for bulk quantities or custom pricing? We offer special rates for large orders and institutional buyers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Volume Discounts</h3>
                            <p className="text-gray-600">Progressive discounts based on order quantity and frequency.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Quotations</h3>
                            <p className="text-gray-600">Tailored pricing and terms for large projects and tenders.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Priority Service</h3>
                            <p className="text-gray-600">Expedited processing and delivery for urgent bulk requirements.</p>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="https://wa.me/94742011033?text=Hi! I'm interested in bulk pricing and volume discounts for agricultural spare parts."
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                        >
                            Request Bulk Pricing
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
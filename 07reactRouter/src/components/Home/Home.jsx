import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                {/* Hero Section */}
                <aside className="relative overflow-hidden rounded-3xl bg-white shadow-2xl sm:mx-0">
                    {/* Decorative gradient blob */}
                    <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                New Release
                            </div>

                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Download Now
                                <span className="block mt-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                                    Lorem Ipsum
                                </span>
                            </h2>

                            <p className="max-w-lg mx-auto lg:mx-0 text-base text-gray-600 sm:text-lg leading-relaxed">
                                Experience the next generation of productivity with our cutting-edge platform. 
                                Join millions of satisfied users worldwide.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    to="/"
                                >
                                    <svg
                                        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 1a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9zm0 2a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7zm-1 3v4.414l2.293 2.293 1.414-1.414L11 9.586V6H9z"/>
                                    </svg>
                                    Download Now
                                    <svg
                                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>

                                <Link
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white/80 px-8 py-4 text-base font-semibold text-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                                    to="/learn-more"
                                >
                                    Learn More
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {['https://i.pravatar.cc/32?img=1', 'https://i.pravatar.cc/32?img=2', 'https://i.pravatar.cc/32?img=3', 'https://i.pravatar.cc/32?img=4'].map((src, i) => (
                                            <img
                                                key={i}
                                                className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-gray-200"
                                                src={src}
                                                alt={`User ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        <span className="font-bold text-gray-900">12k+</span> users
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                    <span className="text-sm text-gray-600 ml-1">(4.9/5)</span>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2 flex justify-center items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-200 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                                <img
                                    className="relative w-72 sm:w-80 lg:w-96 rounded-2xl shadow-2xl ring-1 ring-gray-200/50 object-cover"
                                    src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0"
                                    alt="Product showcase"
                                />
                                {/* Floating badge */}
                                <div className="absolute -bottom-3 -right-3 rounded-2xl bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                                        <span className="text-sm font-semibold text-gray-700">Live Demo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Feature Image Section */}
                <div className="mt-16 sm:mt-24">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-orange-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200/50 transition-all duration-500 hover:shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-10">
                                <div className="flex flex-col justify-center space-y-4 order-2 md:order-1">
                                    <div className="inline-flex items-center gap-2">
                                        <span className="text-3xl">🚀</span>
                                        <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Feature Highlight</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                        Built for <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Modern Teams</span>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Collaborate seamlessly with real-time updates, powerful analytics, and enterprise-grade security.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-sm text-green-700">
                                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            99.9% Uptime
                                        </span>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            24/7 Support
                                        </span>
                                    </div>
                                </div>
                                <div className="order-1 md:order-2 flex justify-center items-center">
                                    <img
                                        className="w-full max-w-sm rounded-xl shadow-lg ring-1 ring-gray-200/50 transition-transform duration-500 hover:scale-105"
                                        src="https://images.pexels.com/photos/3568792/pexels-photo-3568792.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Feature showcase"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title Section with decorative elements */}
                <div className="relative mt-16 sm:mt-24 text-center">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-orange-200/20 blur-2xl"></div>
                    <div className="relative">
                        <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700 mb-4">
                            Why Choose Us
                        </span>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            <span className="text-gray-900">Lorem Ipsum</span>
                            <span className="block mt-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                                Yojo
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto mt-6 text-base text-gray-600 sm:text-lg">
                            Join thousands of teams that trust us to deliver exceptional results every day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
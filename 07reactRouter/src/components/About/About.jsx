export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16 sm:py-24">
            <div className="container mx-auto px-6 md:px-12 xl:px-6">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700 mb-4">
                        About Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="text-gray-900">Who We</span>
                        <span className="block mt-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                            Are
                        </span>
                    </h2>
                </div>

                <div className="space-y-6 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-16">
                    {/* Image Section with decorative elements */}
                    <div className="md:w-5/12 lg:w-5/12 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-orange-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200/50 transition-transform duration-500 group-hover:scale-[1.02]">
                            <img
                                src="https://images.pexels.com/photos/4872025/pexels-photo-4872025.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Our team working together"
                                className="w-full h-auto object-cover"
                            />
                            {/* Floating badge */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto">
                                <div className="inline-flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50">
                                    <div className="flex -space-x-2">
                                        {['https://i.pravatar.cc/40?img=5', 'https://i.pravatar.cc/40?img=6', 'https://i.pravatar.cc/40?img=7'].map((src, i) => (
                                            <img
                                                key={i}
                                                className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-gray-200"
                                                src={src}
                                                alt={`Team member ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Team of 50+</p>
                                        <p className="text-xs text-gray-500">Passionate developers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-7/12 lg:w-6/12 space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-3xl">💡</span>
                                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                                    Our Mission
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                React development is carried out by{' '}
                                <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                                    passionate developers
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p className="text-base sm:text-lg">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                                accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                                aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                            </p>
                            <p className="text-base sm:text-lg">
                                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                            <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm transition-all hover:shadow-md hover:ring-orange-200">
                                <div className="text-2xl font-bold text-orange-600">5+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm transition-all hover:shadow-md hover:ring-orange-200">
                                <div className="text-2xl font-bold text-orange-600">200+</div>
                                <div className="text-sm text-gray-600">Projects Delivered</div>
                            </div>
                            <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm transition-all hover:shadow-md hover:ring-orange-200">
                                <div className="text-2xl font-bold text-orange-600">50+</div>
                                <div className="text-sm text-gray-600">Team Members</div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                                Meet Our Team
                                <svg
                                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trusted By Section */}
                <div className="mt-16 sm:mt-20 text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
                        Trusted by leading companies
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
                        {['Google', 'Microsoft', 'Amazon', 'Netflix', 'Spotify'].map((company) => (
                            <span
                                key={company}
                                className="text-lg sm:text-xl font-bold text-gray-500 transition-colors hover:text-gray-700"
                            >
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
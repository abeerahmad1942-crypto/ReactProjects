import React from 'react'

function Card({username, btnText = "Explore me"}) {
    // console.log(username);
    
  return (
    <>
    {/* Card with Image */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full">
        {/* Image */}
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop" 
          alt="Technology" 
          className="w-full h-48 object-cover"
        />
        
        {/* Content */}
        <div className="p-6">
          <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 leading-8">
            Noteworthy technology acquisitions 2021 by {username}
          </h5>
          <p className="text-gray-700 mb-4">
            Here are the biggest technology acquisitions of 2025 so far, in reverse chronological order.
          </p>
          <a 
            href="#" 
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            {btnText}
          </a>
        </div>
      </div>
      </>
  )
}

export default Card
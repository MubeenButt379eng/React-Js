import React from 'react'

function Card({username , btnText}) {
  return (
    <div className="max-w-sm mx-auto mt-5 bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img 
          className="w-full h-48 object-cover" 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60" 
          alt="Card Image" 
        />
        
        <div className="p-5">
            <div className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-1">
                Technology
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-2">
                {username}
            </h2>
            
            <p className="text-gray-700 text-base leading-relaxed mb-4">
                Tailwind CSS makes building modern websites incredibly fast and easy. Learn how to use utility classes effectively.
            </p>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                 {btnText}
            </button>
        </div>
      </div>
  )
}

export default Card

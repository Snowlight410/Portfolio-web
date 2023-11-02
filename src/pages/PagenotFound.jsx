import React from 'react'

const PagenotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="flex-col space-y-4 text-left px-6">
        <div className="text-7xl font-bold text-gray-800">404</div>
        <div className="text-stone-500 font-medium">Oops, you still haven't found what you lookng for?</div>
        <div className="flex space-x-4 items-center justify-start">
            <a href="/"><div className="bg-gray-800 px-4 py-1 text-white font-medium border-2 border-gray-400  hover:scale-105 cursor-pointer">Home</div></a>
            <div className="text-sm font-medium text-stone-500">Back to Home Page</div>
        </div>
    </div>
</div>

  )
}

export default PagenotFound
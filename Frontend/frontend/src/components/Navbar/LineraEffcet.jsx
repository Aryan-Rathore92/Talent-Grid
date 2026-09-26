import React from 'react'
import { useLocation } from 'react-router-dom';

const LineraEffcet = () => {
  const location = useLocation();

  if (['/login', '/register'].includes(location.pathname)) {
    return null;
  }

  return (
    <main className="pt-20 md:pt-22">
      <div className="overflow-hidden bg-[#c25700] text-white py-2">
        
        <div className="marquee flex w-max whitespace-nowrap text-sm md:text-base">
          
          <span className="mx-4 md:mx-8">
            🚀 Jobs • Courses • Placement • Internship •
          </span>

          <span className="mx-4 md:mx-8">
            🚀 Jobs • Courses • Placement • Internship •
          </span>

          <span className="mx-4 md:mx-8">
            🚀 Jobs • Courses • Placement • Internship •
          </span>

          <span className="mx-4 md:mx-8">
            🚀 Jobs • Courses • Placement • Internship •
          </span>

        </div>

      </div>
    </main>
  )
}

export default LineraEffcet
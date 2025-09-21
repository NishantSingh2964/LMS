import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext)

  return (
    <Link
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-200 hover:shadow-md transition rounded-xl overflow-hidden bg-white flex flex-col"
    >
      <img
        src={course.courseThumbnail}
        alt={course.courseTitle}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 text-left flex-grow">
        <h3 className="text-lg font-semibold line-clamp-1">{course.courseTitle}</h3>
        <p className="text-sm text-gray-500">Nishant Raj</p>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">{calculateRating(course)}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="w-4 h-4"
                src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                alt="star"
              />
            ))}
          </div>
          <span className="text-gray-500">{course.courseRatings?.length}</span>
        </div>

        {/* Price */}
        <p className="text-base font-semibold text-gray-800 mt-auto">
          {currency}
          {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  )
}

export default CourseCard

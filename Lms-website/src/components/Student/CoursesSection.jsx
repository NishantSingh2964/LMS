import CourseCard from './CourseCard'
import { AppContext } from '../../Context/AppContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CoursesSection = () => {

  const { allCourses } = useContext(AppContext);

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>
        Discover our top-rated courses across various categories. From coading and design to <br />
        business and wellness, our couses are created to deliver results.
      </p>

      {/* ✅ Responsive grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:my-16 my-10 px-4 md:px-0'>
        {allCourses.slice(0, 4).map((course, id) => {
          return (
            <div key={id}>
              <CourseCard course={course} />
            </div>
          )
        })}
      </div>

      <Link 
        to={'/course-list'} 
        onClick={() => scrollTo(0, 0)} 
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
      >
        Show all courses
      </Link>
    </div>
  )
}

export default CoursesSection

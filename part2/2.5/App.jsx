import { useState } from "react"
import Course from "./components/Course"

const App = (props) => {
  const [courses, setCourses] = useState(props.courses)
  return (
    <>
    {courses.map(course => 
      <Course course={course} />)}
    </>
  )
}

export default App
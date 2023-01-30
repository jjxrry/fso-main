const Course = ({course, total}) => {
  return (
    <>
      <h1>{course.name}</h1>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
      <h4>total of {total} exercises</h4>
      {/* {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} */}
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const total = course.parts.reduce((sum, obj) => sum + obj.exercises, 0)

  return (
    <>
    <Course course={course} total={total}/>
    </>
  )
}

export default App
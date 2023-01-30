import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    return (
      <>
        <Header course={course}/>
        {course.parts.map(parts => 
          <Content parts={parts.name} exercises={parts.exercises}/>
          )}
        <Total parts={course.parts}/>
      </>
    )
  }

export default Course

const Course = ({course}) => {
    console.log(course)
    const sumOfExercises = course.parts.reduce((sum, parts) => {
      console.log('counting sumOfExercises ', sum, parts)
      return sum + parts.exercises
    },0)  

    return (
      <div>
      <h2>{course.name}</h2>
      
      {course.parts.map(part =>
        
          <p key={part.id}> 
          {part.name} {part.exercises}</p>
        )}

     
      <p><strong>total of {sumOfExercises} exercises</strong></p>
      </div>
    )
  }

  export default Course
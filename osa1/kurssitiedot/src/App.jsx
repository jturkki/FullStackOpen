const Header = ({course}) => {
  console.log(course)
  return (
    <h1> {course.name} </h1>
  )
}


const Part = (props) => {
  console.log(props)
  return (
    <p> {props.part} {props.excercises} </p>
  )
}

const Content = ({course}) => {
  console.log(course)
  return (
    <div> 
      <Part part={course.parts[0].name} excercises={course.parts[0].excercises} />
      <Part part={course.parts[1].name} excercises={course.parts[1].excercises} />
      <Part part={course.parts[2].name} excercises={course.parts[2].excercises} />
    </div>
  )
  }


  const Total = ({course}) => {
    console.log(course)
    return (
      <p>
       Number of excercises {course.parts[0].excercises + course.parts[1].excercises + course.parts[2].excercises}
      </p>
    )
  }

const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
    {
      name:'Fundamentals of React',
      excercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of component',
      excercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course}/>
      <Content course = {course}/>
      <Total course = {course} />
    </div>
  )
}

export default App

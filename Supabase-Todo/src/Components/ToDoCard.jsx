import Btn from "./Button"
import '../App.css'

const Card = ({todo, CompleteTask, DeleteTask}) => {
    return(
    <li className='m-2 p-2 w-fit shadow-md rounded-lg'>
        <p>{todo.name}</p>

        <Btn
          onClick={() => CompleteTask(todo.id, todo.isCompleted)}
          className={"mx-1 border-blue-700"}
        >
          {todo.isCompleted ? "Undo" : "Complete Task"}
        </Btn>

        <Btn
          onClick={() => DeleteTask(todo.id)}
          className={"mx-1 border-blue-700"}
        >
          Delete Task
        </Btn>
      </li>
    )
}
  
export default Card
  
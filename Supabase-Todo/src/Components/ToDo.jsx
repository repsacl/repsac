import { useEffect, useState } from 'react'
import supabase from '../../supabase-client'

import '../App.css'

function ToDo() {

  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const {data, error} = await supabase
      .from("TodoList")
      .select("*")

    if (error){
      console.log('error fetching todos', error)
    }
    else {
      console.log('todos fetched', data)
      setTodoList(data)
    }

  }

  const addTodo = async () => {
    const newTodoData = {
      name: newTodo,
      isCompleted: false
    }

    const { data, error } = await supabase
      .from('TodoList')
      .insert([newTodoData])
      .single()

    if (error) {
      console.log('error adding todo', error)
    }
    else {
      console.log('todo added', newTodoData)
      setTodoList((prev) => [...prev, data])
      setNewTodo("")
      fetchTodos()
    }
  }


  const CompleteTask = async (id, isComlete) => {
    const { data, error } = await supabase
      .from('TodoList')
      .update({ isCompleted: !isComlete })
      .eq("id",id)
    
    if (error) {
      console.log('error toggling task', error)
    }
    else {
      console.log('task toggled')
      const updatedTodoList = todoList.map((todo) => todo.id == id ? {...todo, isCompleted: !isComlete} : todo)
      setTodoList(updatedTodoList)
    }
  }

  const DeleteTask = async (id) => {
    const { data, error } = await supabase
      .from('TodoList')
      .delete()
      .eq("id", id)
    
    if (error) {
      console.log('error deleting task', error)
    }
    else {
      console.log('task deleted')
      setTodoList((prev) => prev.filter((todo) => todo.id !== id))
    }
  }

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center p-1 w-2/3 min-h-100 mt-25 shadow-lg rounded-lg bg-neutral-800'>

          <h1 className="text-5xl text-center">Todo List</h1>

          <div className='flex justify-center'>
            <input
            type="text"
            className="m-2 outline-none border-2 border-gray-500 p-1 rounded-lg focus:border-[#36b7ff]"
            placeholder="What to do?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo} className="p-1 rounded-lg bg-amber-100">Add Item</button>

          </div>

        <ul className='flex flex-wrap justify-center mt-5'>
          {todoList.map((todo) => (
            todo && (
              <li key={todo.id} className='m-2 p-2 w-fit shadow-md rounded-lg'>
                <p>{todo.name}</p>

                <button
                  onClick={() => CompleteTask(todo.id, todo.isCompleted)}
                  className='p-1 m-2 rounded-lg'
                >
                  {todo.isCompleted ? "Undo" : "Complete Task"}
                </button>

                <button
                  onClick={() => DeleteTask(todo.id)}
                  className='p-1 m-2 rounded-lg'
                >
                  Delete Task
                </button>
              </li>
            )
          ))}
        </ul>
        </div>
      </div>
    </>
  )
}

export default ToDo

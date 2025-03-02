import React from 'react';
import Btn from "./Button";

interface ToDo {
    id: number;
    name: string;
    isCompleted: boolean;
}

interface CardProps {
    todo: ToDo;
    CompleteTask: (id: number, isCompleted: boolean) => void;
    DeleteTask: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ todo, CompleteTask, DeleteTask }) => {
    return (
        <li className='m-2 p-2 w-fit shadow-md shadow-black rounded-lg flex justify-between items-center bg-neutral-900 transition-all duration-300 hover:shadow-lg'>
            <p>{todo.name}</p>
            <span
                onClick={() => CompleteTask(todo.id, todo.isCompleted)}
                className="m-1 p-1 border-1 border-solid border-blue-700 rounded material-symbols-outlined transition-all duration-300 hover:bg-blue-700 hover:cursor-pointer"
            >
                {todo.isCompleted ? 'check_box' : 'check_box_outline_blank'}
            </span>
            <span
                onClick={() => DeleteTask(todo.id)}
                className="m-1 p-1 border-1 border-solid border-red-700 rounded material-symbols-outlined transition-all duration-300 hover:bg-red-700 hover:cursor-pointer"
            >
                delete
            </span>
        </li>
    );
}

export default Card;

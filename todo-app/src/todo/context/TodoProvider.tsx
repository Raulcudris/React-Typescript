import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { TodoReducer } from './TodoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 2 ,
  todos:[
      {
        id:'1',
        desc:'Recolectar las piedra del infinito',
        completed: false
      },
      {
        id:'2',
        desc:'Recolectar las piedra del Poder',
        completed: false
      }
  ],
  completed:0,
  pending: 2
}


interface props {
  children:JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props ) => {

  const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE)

  return (
    <TodoContext.Provider value = {{ todoState }} >
        { children }
    </TodoContext.Provider>
  )
}


//https://youtu.be/8HE657KssxE?list=PLCKuOXG0bPi26-eawizqyLOgM7j66H_4M&t=1879
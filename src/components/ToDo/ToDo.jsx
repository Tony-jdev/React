import React, { useReducer, useState } from 'react';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ToDoItem from './ToDoItem';
import Films from '../Film/Films';
import { toDoItems } from './toDoItems';
import './style.css';
import tasksReducer from './ToDoReducer';

const ToDo = () => {
    const [taskList, dispatch] = useReducer(tasksReducer, toDoItems);
    const [filter, setFilter] = useState('All');

    const addTask = (name) =>{
        dispatch({
            type: 'added',
            name: name
        });
    }

    const deleteTask = (id) => {
        //setTaskList(taskList.filter(task => task.id !== id));
    }

    const editTask = (id, name) => {
        const editedTaskList = taskList.map((task) => {
            if(task.id === id)return {...task, name}
            return task;
        })
        //setTaskList(editedTaskList);
    }

    const filter_map = {
        All: ()  => true,
        Active: (task) => !task.completed,
        Completed: (task) => task.completed
    };  

    const toggleTaskCompleted = (id) => {
        const updatedTasks = taskList.map(task => {
            if(task.id === id){
                return {...task, completed: !task.completed}
            }
            return task;
        });

        //setTaskList(updatedTasks);
    }

    const taskWord = taskList.length === 1 ? 'task' : 'tasks';
    const taskHeading = `${taskList.length} ${taskWord}`;

    return (
        <div>
            <h2 className='heading'>ToDo</h2>

            <AddToDo addTask={addTask}/>
            <FilterToDo filter_map={filter_map} filter={filter} setFilter={setFilter}/>

            <div>
                <h3>{taskHeading}</h3>
                <ul>
                    {taskList.filter(filter_map[filter]).map(task => <ToDoItem task={task} 
                    toggleTaskCompleted = {toggleTaskCompleted} 
                    deleteTask = {deleteTask} 
                    editTask = {editTask}
                    key={task.id} />)}
                </ul>
            </div>

            <Films />
        </div>

    );
}

export default ToDo;

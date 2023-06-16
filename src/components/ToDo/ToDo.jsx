import React, { useState } from 'react';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ToDoItem from './ToDoItem';
import Films from '../Film/Films';
import { toDoItems } from './toDoItems';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
    const [taskList, setTaskList] = useState(toDoItems);

    const addTask = (name) =>{
        setTaskList([...taskList, {
            id: uuidv4(),
            name: name,
            completed: false
        }]);
    }

    const deleteTask = (id) => {
        setTaskList(taskList.filter(task => task.id !== id));
    }

    const toggleTaskCompleted = (id) => {
        const updatedTasks = taskList.map(task => {
            if(task.id === id){
                return {...task, completed: !task.completed}
            }
            return task;
        });

        setTaskList(updatedTasks);
    }

    const taskWord = taskList.length === 1 ? 'task' : 'tasks';
    const taskHeading = `${taskList.length} ${taskWord}`;

    return (
        <div>
            <h2 className='heading'>ToDo</h2>

            <AddToDo addTask={addTask}/>
            <FilterToDo />

            <div>
                <h3>{taskHeading}</h3>
                <ul>
                    {taskList.map(task => <ToDoItem task={task} toggleTaskCompleted = {toggleTaskCompleted} deleteTask = {deleteTask} key={task.id} />)}
                </ul>
            </div>

            <Films />
        </div>

    );
}

export default ToDo;

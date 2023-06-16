import React from 'react';
import classNames from 'classnames';

const ToDoItem = ({task, toggleTaskCompleted, deleteTask}) => {
    return (
        <li>
            <input type='checkbox' defaultChecked={task.completed} onChange={() => { toggleTaskCompleted(task.id) }}/>
            <span className={classNames({completed: task.completed})}>{task.name}</span>
            <div>
                <button>Edit</button>
                <button onClick={() => {deleteTask(task.id)}}>Delete</button>
            </div>
        </li>
    );
}

export default ToDoItem;

import { v4 as uuidv4 } from 'uuid';

const tasksReducer = (taskList, action) => {
    switch (action.type) {
        case 'added':
            let newTask = {
                id: uuidv4(),
                name: action.name,
                completed: false
            };
            return [...taskList, newTask];
        case 'deleted':
            return taskList.filter(task => task.id !== action.id);
        case 'edited':
            let name = action.name;
            let editedTaskList = taskList.map((task) => {
                if (task.id === action.id) return { ...task, name }
                return task;
            })
            return editedTaskList;
        case 'completed':
            let updatedTasks = taskList.map(task => {
                if(task.id === action.id){
                    return {...task, completed: !task.completed}
                }
                return task;
            });
            return updatedTasks;
        default: break;
    }
}

export default tasksReducer;
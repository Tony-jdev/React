import { v4 as uuidv4 } from 'uuid';

const tasksReducer = (taskList, action) => {
    switch(action.type){
        case 'added':
            let newTask = {
                id: uuidv4(),
                name: action.name,
                completed: false
            };
            return [...taskList, newTask];

        default:break;
    }
}

export default tasksReducer;
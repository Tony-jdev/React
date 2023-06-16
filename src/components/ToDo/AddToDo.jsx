import React, { useState } from 'react';

const AddToDo = ({addTask}) => {
    const [name, setName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if(name.trim().length){
            addTask(name);
            setName('');
        }
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={name} onChange={handleChange}></input><button>Add</button>
            </form>
        </div>
    );
}

export default AddToDo;

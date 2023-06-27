import { Button, Form, Input, Modal } from 'antd';
import React, { useRef, useState } from 'react';

const AddToDo = ({ addTask }) => {
    const form = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };

    const submitHandler = (values) => {
        addTask(values.name);
        form.current.resetFields();
        handleOk();
    }

    return (
        <>
            <Button type="primary" onClick={showModal}> Open Modal </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form onFinish={submitHandler} ref={form}>
                    <Form.Item name="name" rules={[{required: true}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType='submit' type='primary'>Save</Button>
                    </Form.Item>
                </Form>
            </Modal> </>
    );

    //const [name, setName] = useState('');

    //const submitHandler = (e) => {
        //     e.preventDefault();
        //     if (name.trim().length) {
        //         addTask(name);
        //         setName('');
        //     }
        // }
    
        // const handleChange = (e) => {
        //     setName(e.target.value);
        // }

        
    // return (
    //     <div>
    //         <form onSubmit={submitHandler}>
    //             <input type='text' value={name} onChange={handleChange}></input><button>Add</button>
    //         </form>
    //     </div>
    // );
}

export default AddToDo;

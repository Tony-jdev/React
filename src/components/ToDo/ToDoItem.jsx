import { Button, Form, Input, Modal } from 'antd';
import React, { useRef, useState } from 'react';

const ToDoItem = ({ task, toggleTaskCompleted, deleteTask, editTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef(null);
  const [newName, setNewName] = useState('');
  const handleOk = () => { setIsModalOpen(false); };
  const handleCancel = () => { setIsModalOpen(false); };

  const showModal = () => {
    setIsModalOpen(true);
    setNewName(task.name);
  };
  
  const submitHandler = (values) => {
    editTask(task.id, values.name);
    setIsModalOpen(false);
  };

  return (
    <li>
      <div>
        <input
          type="checkbox"
          defaultChecked={task.completed}
          onChange={() => {
            toggleTaskCompleted(task.id);
          }}
        />
        <span>{task.name}</span>
        <div>
          <button onClick={showModal}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      </div>
      <Modal title="Edit Task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form onFinish={submitHandler} ref={form}>
          <Form.Item name="name" initialValue={newName} rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </li>
  );
};

export default React.memo(ToDoItem);

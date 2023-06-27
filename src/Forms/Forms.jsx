import React, { useRef } from 'react';
import { Button, Form, Input } from 'antd';

const initilaValues = {
    name: '',
    amount: 1,
    price: 0
};

const Forms = () => {

    const form = useRef(null);

    const submitHandler = (values) => {
        console.log(values);
        console.log(form);
        form.current.resetFields();
    }

    return (
        <div>
            <Form ref={form} onFinish={submitHandler} initialValues={initilaValues}
            labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }}>
                <Form.Item name="name" label="Product name:" rules={[{required:true, message:"Name is required"}]}>
                    <Input />
                </Form.Item>
                <Form.Item name="amount" label="Product amount:">
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="Product Price:" >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                    <Button htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Forms;

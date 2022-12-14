
import { Button, Form, Input } from 'antd';

const AddName = ({ handler }) => {
    const onFinish = (values) => {
        handler(values)
    };
    const onFinishFailed = (errorInfo) => {

    };
    return (
        <div className="">
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Add name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter a name'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

}

export default AddName
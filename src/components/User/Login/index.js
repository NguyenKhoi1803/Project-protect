import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { fetchAccount } from "../../../store/user/register";

const Login = () => {
  const dispatch = useDispatch();

  const loginArr = useSelector((state) => state.accountReducer.accounts);
  console.log("loginArr", loginArr);

  // const username = loginArr?.map((item) => item.email);
  // const password = loginArr?.map((item) => item.password);

  useEffect(() => {
    dispatch(fetchAccount());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    const succeed = loginArr.map((item) => ({
      username: item.email,
      password: item.password,
    }));

    const isSucceed = succeed.find(
      (item) =>
        item.username === values.username && item.password === values.password
    );
    if (isSucceed) {
      localStorage.setItem("account", JSON.stringify(values));
      alert("dangnhap thanh cong");
    } else {
      alert("ten dang nhap hoac mat khau sai")
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
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
      </Modal>
    </>
  );
};

export default Login;

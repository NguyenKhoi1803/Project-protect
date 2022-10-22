import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { fetchAccount } from "../../../store/user/register";
import { login } from "../../../Auth";
import "./styles.scss";
import { Nav } from "react-bootstrap";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginArr = useSelector((state) => state.accountReducer.accounts);
  console.log("loginArr", loginArr);

  useEffect(() => {
    dispatch(fetchAccount());
  }, [dispatch]);

  const onFinish = (values) => {
    console.log("Success:", values);
    login(values.username, values.password, loginArr, (user) => {
      console.log("user", user);
      navigate("/");
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="form__login">
      <div className="form__login--details">
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" onClick={handleToRegister}>
              Register
            </Button>
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
          <Form.Item></Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;

import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { fetchAccount } from "../../../store/user/register";
import { checkLogin, login, checkAdmin } from "../../../Auth";
import "./styles.scss";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginArr = useSelector((state) => state.accountReducer.accounts);

  useEffect(() => {
    if (checkLogin()) {
      navigate("/");
    }

    dispatch(fetchAccount());
  }, [dispatch, navigate]);

  const onFinish = (values) => {
    login(values.username, values.password, loginArr, (user) => {
      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    });

    Swal.fire({
      title: "Sweet!",
      text: "Success!",
      imageUrl:
        "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/271969923_2982746808704815_3723708290699300753_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Ud33S7PrnbsAX8dnqhq&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBJLNdf92ejBp1YeNla3u0Z4963dMb7JVmBjtOZ_8cmpQ&oe=6360AF3C",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  const onFinishFailed = (errorInfo) => {};

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
              {
                message: "Email này chưa đăng ký !",
                validator: (_, value) => {
                  if (
                    loginArr.find((item) =>
                      new RegExp(value, "i").test(item.email)
                    ) == null
                  ) {
                    return Promise.reject("Email này chưa đăng ký !");
                  } else {
                    return Promise.resolve();
                  }
                },
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
              {
                message: "Sai Mật Khẩu !",
                validator: (_, value) => {
                  if (
                    loginArr.find((item) =>
                      new RegExp(value, "i").test(item.password)
                    ) == null
                  ) {
                    return Promise.reject("Email này chưa đăng ký !");
                  } else {
                    return Promise.resolve();
                  }
                },
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

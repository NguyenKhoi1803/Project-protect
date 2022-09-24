import React from "react";
import { useDispatch /* , useSelector */ } from "react-redux";

import "antd/dist/antd.css";
import { paymentEdit } from "../../store/admin/paymentSlice";
import "antd/dist/antd.css";
import { Button, Form, Input, InputNumber } from "antd";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const PaymentMethods = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log(values);
    dispatch(paymentEdit(values));
  };

  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["tienMat", "dia-diem-thanh-toan"]}
          label="dia-diem-thanh-toan"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["tienMat", "sdt"]}
          label="sdt"
          rules={[
            {
              type: "number",
              required: true,
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name={["tienMat", "hot-line"]}
          label="hot-line"
          rules={[
            {
              type: "number",
              required: true,
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name={["tienMat", "website"]} label="Website">
          <Input />
        </Form.Item>

        <Form.Item name={["tienMat", "fanpage"]} label="fanpage">
          <Input />
        </Form.Item>

        <hr />

        <Form.Item
          name={["bank", "name-bank"]}
          label="name-bank"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["bank", "don-vi-huong-thu"]}
          label="don-vi-huong-thu"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["bank", "stk-bank"]}
          label="stk-bank"
          rules={[
            {
              type: "number",
              required: true,
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name={["bank", "ten-ngan-hang-chi-tiet"]}
          label="ten-ngan-hang-chi-tiet"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <hr />
        <Form.Item
          name={["truc-tuyen", "thanh-toan-truc-tuyen-qua"]}
          label="thanh-toan-truc-tuyen-qua"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <hr />
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default PaymentMethods;

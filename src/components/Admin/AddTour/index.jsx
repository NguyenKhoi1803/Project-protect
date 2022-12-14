import React from "react";
import { useDispatch /* , useSelector */ } from "react-redux";
import moment from "moment";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import "./styles.scss";
import { Button, Form, InputNumber, Select, Input, DatePicker } from "antd";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { checkAdmin, checkLogin } from "../../../Auth";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { addTour } from "../../../store/user/fetchTour";

const { RangePicker } = DatePicker;

const disabledDate = (current) => {
  return current && current < moment().endOf("day");
};

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const AddTour = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkLogin() || !checkAdmin()) {
      navigate("/");
    }
  });

  const dispatch = useDispatch();
  const rangeConfig = {
    rules: [
      {
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const onFinish = (fieldsValue) => {
    const rangeValue = fieldsValue["rangepicker"];
    const rangepicker = {
      startDate: rangeValue[0].format("YYYY-MM-DD"),
      endDate: rangeValue[1].format("YYYY-MM-DD"),
    };

    const startDay = new Date(rangepicker.startDate).getTime();
    const endDay = new Date(rangepicker.endDate).getTime();
    const numberDate = (endDay - startDay) / 86400000;

    const idTour = new Date().getTime();

    const dataSubmit = {
      codeTour: fieldsValue.codeTour + -idTour,
      from: fieldsValue.from,
      to: fieldsValue.to,
      numberDay: numberDate,
      startDate: rangepicker.startDate,
      endDate: rangepicker.endDate,
      img1: fieldsValue.img1,
      img2: fieldsValue.img2,
      img3: fieldsValue.img3,
      nameTour: fieldsValue.nameTour,
      priceAdult: fieldsValue.gia1,
      priceChildren: fieldsValue.gia2,
      priceBaby: fieldsValue.gia3,
      vehicle: fieldsValue.vehicle[0],
      quantity: fieldsValue.quantity,
      descriptions: fieldsValue.details,
    };

    dispatch(addTour(dataSubmit));
    navigate("/admin");
  };

  return (
    <div className="container__addProduct">
      <div className="container__addProduct--form">
        <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
          <Form.Item
            name="img1"
            label="Upload H??nh ???nh 1"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="img2"
            label="Upload H??nh ???nh 2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="img3"
            label="Upload H??nh ???nh 3"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nameTour"
            label="T??n tour"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="codeTour"
            label="M?? Tour"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gia1"
            label="Gi?? Ng?????i L???n"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="gia2"
            label="Gi?? Tr??? Em "
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="gia3"
            label="Gi?? Em B??"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="from"
            label="N??i Kh???i H??nh"
            rules={[
              {
                required: true,
                message: "ban c??n ch???n n??i kh???i h??nh!",
              },
            ]}
          >
            <Select placeholder="?????a ??i???m kh???i h??nh">
              <Option value="H?? N???i">H?? N???i</Option>
              <Option value="H??? Ch?? Minh">H??? Ch?? Minh</Option>
              <Option value="???? N???ng">???? N???ng</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="to"
            label="N??i ?????n"
            rules={[
              {
                required: true,
                message: "ban c???n ch???n n??i ?????n!",
              },
            ]}
          >
            <Select placeholder="?????a ??i???m ?????n">
              <Option value="H?? N???i">H?? N???i</Option>
              <Option value="H??? Ch?? Minh">H??? Ch?? Minh</Option>
              <Option value="???? N???ng">???? N???ng</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="vehicle"
            label="Ph????ng ti???n"
            rules={[
              {
                required: true,
                message: "ch???n phuong ti??n!",
                type: "array",
              },
            ]}
          >
            <Select mode="multiple" placeholder="Ph????ng Ti???n">
              <Option value="oto">?? T??</Option>
              <Option value="xe-bus">xe bus</Option>
              <Option value="m??y bay">M??y bay</Option>
            </Select>
          </Form.Item>
          <Form.Item name="quantity" label="S??? Ch??? Nh???n">
            <InputNumber addonAfter={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="rangepicker" label="RangePicker" {...rangeConfig}>
            <RangePicker disabledDate={disabledDate} />
          </Form.Item>
          <Form.Item
            name="details"
            label="L???ch Tr??nh"
            rules={[
              {
                required: true,
                message: "Please input details",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddTour;

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
  // Can not select days before today and today
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
      img: fieldsValue.img,
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
            name="img"
            label="Upload Hình ảnh"
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
            label="Tên tour"
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
            label="Mã Tour"
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
            label="Giá Người Lớn"
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
            label="Giá Trẻ Em "
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
            label="Giá Em Bé"
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
            label="Nơi Khởi Hành"
            rules={[
              {
                required: true,
                message: "ban càn chọn nơi khỏi hành!",
              },
            ]}
          >
            <Select placeholder="Địa điểm khỏi hành">
              <Option value="Hà Nội">Hà Nội</Option>
              <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
              <Option value="Đà Nẵng">Đà Nẵng</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="to"
            label="Nơi Đến"
            rules={[
              {
                required: true,
                message: "ban cần chọn nơi đến!",
              },
            ]}
          >
            <Select placeholder="Địa Điểm Đến">
              <Option value="Hà Nội">Hà Nội</Option>
              <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
              <Option value="Đà Nẵng">Đà Nẵng</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="vehicle"
            label="Phương tiện"
            rules={[
              {
                required: true,
                message: "chọn phuong tiên!",
                type: "array",
              },
            ]}
          >
            <Select mode="multiple" placeholder="Phương Tiện">
              <Option value="oto">ô Tô</Option>
              <Option value="xe-bus">xe bus</Option>
              <Option value="máy bay">Máy bay</Option>
            </Select>
          </Form.Item>
          <Form.Item name="quantity" label="Số Chỗ Nhận">
            <InputNumber addonAfter={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="rangepicker" label="RangePicker" {...rangeConfig}>
            <RangePicker disabledDate={disabledDate} />
          </Form.Item>
          <Form.Item
            name="details"
            label="Lịch Trình"
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

import React from "react";
import { useDispatch /* , useSelector */ } from "react-redux";
import moment from "moment";

import "antd/dist/antd.css";

import { InboxOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import "./styles.scss";
import {
  Button,
  Form,
  InputNumber,
  Select,
  Upload,
  Input,
  DatePicker,
} from "antd";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { addTour } from "../../../store/admin/addTourSlice";
import { checkAdmin, checkLogin } from "../../../Auth";

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

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
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

    const dataSubmit = {
      from: fieldsValue.from,
      to: fieldsValue.to,
      numberDay: numberDate,
      startDate: rangepicker.startDate,
      endDate: rangepicker.endDate,
      img: fieldsValue.img,
      nameTour: fieldsValue.nameTour,
      price: fieldsValue.gia1,
      vehicle: fieldsValue.vehicle,
      number: fieldsValue.number,
      descriptions: fieldsValue.details,
    };

    dispatch(addTour(dataSubmit));
    navigate("/chart");
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
            name="gia1"
            label="Giá"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
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
          s
          <Form.Item
            name="vehicle"
            label="phương tiện"
            rules={[
              {
                required: true,
                message: "chọn phuong tiên!",
                type: "array",
              },
            ]}
          >
            <Select mode="multiple" placeholder="phuong tien">
              <Option value="oto">ô Tô</Option>
              <Option value="xe-bus">xe bus</Option>
              <Option value="máy bay">Máy bay</Option>
            </Select>
          </Form.Item>
          <Form.Item name="number" label="Số lượng">
            <InputNumber addonAfter={<UserOutlined />} min={1} max={10} />
          </Form.Item>
          <Form.Item name="rangepicker" label="RangePicker" {...rangeConfig}>
            <RangePicker disabledDate={disabledDate} />
          </Form.Item>
          <Form.Item
            name="details"
            label="Intro"
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
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Dragger">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
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

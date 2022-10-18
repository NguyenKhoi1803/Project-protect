import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchFilterChange } from '../../../store/user/sortSlice';
const { Search } = Input;

function SearchForm() {

    const navigate = useNavigate()

    const dispatch = useDispatch()


    const onSearch = (value) => {
        console.log("val", value)

        dispatch(searchFilterChange(value));
        navigate("/searchlist")

    };


    return (
        <Space direction="vertical" >
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </Space>
    )
};
export default SearchForm;
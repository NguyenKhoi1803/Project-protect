import { AimOutlined, MailOutlined, PhoneFilled, PhoneOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import "./styles.scss"

function ContactPage(props) {
    const { TextArea } = Input;

    return (
        <div className='container__contactPage'>
            <div className='container__contactPage--wrap'>
                <h2> Liên Hệ Với Chúng Tôi </h2>
                <div className='container__contactPage--details'>
                    <div className='infor'>
                        <h3>CÔNG TY TNHH MỘT THÀNH VIÊN DỊCH VỤ LỮ HÀNH LOCAL TOURIST</h3>
                        <div className='infor__details'>
                            <p> <span className='spn-at'><AimOutlined /></span> <span className='spn-as'> <p>ĐỊA CHỈ</p>  <p>126 Xuân Thuỷ, Cẩm Lệ, Đà Nẵng</p></span></p>
                            <p> <span className='spn-at'><PhoneOutlined /></span> <span className='spn-as'> <p>TƯ VẤN & ĐẶT DỊCH VỤ</p>  <p>Điện thoại: 0779950318</p></span></p>
                            <p> <span className='spn-at'><MailOutlined /></span> <span className='spn-as'> <p>EMAIL</p>  <p>Nguyenkhoi180397@gmail.com</p></span></p>

                        </div>
                    </div>
                    <div className='input'>
                        <Input placeholder="Họ và Tên" className='ip' />
                        <Input placeholder="Email" className='ip' />
                        <Input placeholder="Số Điện Thoại" className='ip' />
                        <Input placeholder="Địa Chỉ" className='ip' />
                        <TextArea rows={4} placeholder="Nội Dung" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
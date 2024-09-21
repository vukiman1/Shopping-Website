import React from 'react';
import './index.scss';
import img1 from '../../../src/assets/about/1.jpg';
import img2 from '../../../src/assets/about/2.jpg';
import img3 from '../../../src/assets/about/3.jpg';

function About(props) {
    return (
        <div className="about">
            <div className="container">
                <div className="about__content">
                    <div className="about__container text-center">
                        <h1 className="about__title ">
                            <b>SẢN PHẨM CHẤT LƯỢNG - DỊCH VỤ CHU ĐÁO</b>
                        </h1>
                        <br />
                        <p className="about__slogan">
                            Chúng tôi luôn mang lại đến khách hàng những sản phẩm chất lượng nhất nhằm phục vụ nhu cầu
                            của khách hàng. Đồng thời làm tăng sự uy tín của trang web chúng tôi
                        </p>
                    </div>
                    <div className="about__preview">
                        <div className="about__img">
                            <img src={img1} alt="img" />
                        </div>
                        <div className="about__img">
                            <img src={img2} alt="img2" />
                        </div>
                        <div className="about__img">
                            <img src={img3} alt="img3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

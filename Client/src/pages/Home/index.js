import React from 'react';
import Products from '../../pages/Products';
import './index.scss';

function Home(props) {
    return (
        <div>
            <div className="bgr">
                <div className="bgr__intro">
                    <h3>SẢN PHẨM HOT TREND</h3>
                    <p>Lựa ngay kẻo hết!!</p>
                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;

import React from 'react';
import { Carousel } from 'antd';
import "../../../assets/css/common/banner/banner.css"
export default class BannerComponent extends React.Component {
    render() {
        return (
            <div className="BannerComponent">

                <Carousel autoplay>
                    <div className="BannerItem"><img src="http://imge.kugou.com/mobilebanner/20180616/20180616020619937097.jpg" className="BannerImg" alt=""/></div>
                    <div className="BannerItem"><img src="http://imge.kugou.com/mobilebanner/20180615/20180615000246280713.jpg" className="BannerImg" alt=""/></div>
                    <div className="BannerItem"><img src="http://imge.kugou.com/mobilebanner/20180615/20180615215714882680.jpg" className="BannerImg" alt=""/></div>
                    <div className="BannerItem"><img src="http://imge.kugou.com/mobilebanner/20180608/20180608204421999896.jpg" className="BannerImg" alt=""/></div>
                </Carousel>

            </div>
        );
    }
}

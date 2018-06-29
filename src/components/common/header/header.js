import React from 'react';
import "../../../assets/css/common/header/header.css"
import { Icon } from 'antd'; //引入图标
export default class HeaderComponent extends React.Component {
    render() {
        return (
        <div className="Header">
                <div className="HeaderLe"><Icon type="smile" className="IconSizeLe" /></div>
                <div className="HeaderTxt">网易云</div>
                <div className="HeaderRi"><Icon type="user" className="IconSizeRi"/></div>
        </div>
        );
    }
}


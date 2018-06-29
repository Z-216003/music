import React from 'react';
import HeaderComponent from '../../common/header/header'
import NavigatorComponent from '../../common/navigator/navigator'
import "../../../assets/css/home/hotSinger/hotSinger.css"
export default class HomeHotSinger extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <NavigatorComponent/>
                <div className="HomeHotSinger">
                    热门歌手--尚未开发
                </div>
            </div>

        );
    }
}

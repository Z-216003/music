import React from 'react';
import {NavLink} from 'react-router-dom';
import "../../../assets/css/common/navigator/navigator.css"
export default class NavigatorComponent extends React.Component {
    render() {
        return (
            <div className="navIgator">
                <NavLink to="/index/index" className="navItem">时下流行</NavLink>
                <NavLink to="/index/songList" className="navItem">歌单</NavLink>
                <NavLink to="/index/rankingList" className="navItem">排行榜</NavLink>
                <NavLink to="/index/hotSinger" className="navItem">热门歌手</NavLink>
            </div>
        );
    }
}
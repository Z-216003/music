import React from 'react';
import HeaderComponent from '../../common/header/header'
import NavigatorComponent from '../../common/navigator/navigator'
import  "../../../assets/css/home/rankingList/rankingList.css"
export default class HomeRankingList extends React.Component {
    render() {
        return (
            <div className="HomeRankingList">
                <div>
                    <HeaderComponent/>
                    <NavigatorComponent/>
                </div>
                <div className="HomeRankingList">
                    排行榜--尚未开发
                </div>
            </div>
        );
    }
}

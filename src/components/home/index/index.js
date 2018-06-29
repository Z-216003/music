import React from 'react';
import { Icon } from 'antd';
import {Link} from 'react-router-dom';
import  "whatwg-fetch" ;  //fetch渲染数据
import HeaderComponent from '../../common/header/header'
import NavigatorComponent from '../../common/navigator/navigator'
import BannerComponent from '../../common/banner/banner'
import "../../../assets/css/home/index/index.css"
export default class HomeIndexVogue extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            arr:[]
        }
    }
    componentDidMount(){
        var url = "http://39.108.8.219:3000/personalized";
        fetch(url).then((res)=>{
            return res.json()
        }).then((res)=>{
            // console.log(res)
            this.setState({
                arr:res.result
            })
        })
    }
    render() {
        return (
            <div className="HomeIndexVogue">
                {/*头部-导航-轮播*/}
                <HeaderComponent/>
                <NavigatorComponent/>
                <BannerComponent/>
                {/*推荐更多*/}
                <div className="wrapper">
                    <div className="g-title">
                        <div className="g-title-le">
                            <Icon type="calendar" className="g-title-le-icon"/>
                            <span className="g-title-le-txt">推荐更多</span>
                        </div>
                        <div className="g-title-ri">
                            <Link to="/index/songList" className="Linkcolor"><span className="g-title-ri-txt">更多</span></Link>
                            <Icon type="right" className="g-title-ri-icon"/>
                        </div>
                    </div>

                    <div className="mu-flexbox">
                        {
                            this.state.arr.map((ele,index)=>{
                                return(
                                    <Link to={`/playListDetail/${ele.id}`} className="LinkplayListDetail" key={index}>
                                        <div className="mu-flexbox-item"  >
                                            <div className="bar">{Math.ceil(ele.playCount/10000%1000)}万</div>
                                            <img className="item-img " src={ele.picUrl}  alt=""/>
                                            <div className="item-name">{ele.name}</div>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        );
    }
}

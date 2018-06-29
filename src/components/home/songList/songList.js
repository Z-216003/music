import React from 'react';
import  "whatwg-fetch" ;  //fetch渲染数据
import {Link} from "react-router-dom";
import HeaderComponent from '../../common/header/header'
import NavigatorComponent from '../../common/navigator/navigator'
import "../../../assets/css/home/songList/songLink.css"
export default class HomeSongList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            song:[]
        }
    }
    componentDidMount(){
        var url = "http://39.108.8.219:3000/personalized";
        fetch(url).then((ret)=>{
            return ret.json()
        }).then((ret)=>{
            this.setState({
                song:ret.result
            })
        })
    }
    render() {
        return (
            <div>
                <HeaderComponent/>
                <NavigatorComponent/>
                <div className="HomeSongList">
                    <div className="title">全部歌单</div>
                    <div className="mu-flexbox-song">
                        {
                            this.state.song.map((ele,index)=>{
                                return(
                                    <Link to="/playListDetail" className="mu-flexbox-songLink" key={index}>
                                        <div className="mu-flexbox-item-song" >
                                            <div className="bar-song">{Math.ceil(ele.playCount/10000%1000)}万</div>
                                            <img className="item-img-song " src={ele.picUrl} alt=""/>
                                            <div className="item-name-song">{ele.name}</div>
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


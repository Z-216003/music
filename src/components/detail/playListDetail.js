import React from 'react';
import {Icon} from 'antd'; //引入图标
import "whatwg-fetch" ;  //fetch渲染数据
import {Link} from "react-router-dom";
import "../../assets/css/detail/playListDetail.css"

export default class playListDetailComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            newstr: []
        }
    }

    componentWillMount() {
        var urls = "http://39.108.8.219:3000/playlist/detail?id=" + this.props.match.params.id;
        fetch(urls).then((ret) => {
            return ret.json()
        }).then((ret) => {
            this.setState({
                newstr: ret.result
            })
        })
    }

    componentDidMount() {
        var url = "http://39.108.8.219:3000/playlist/detail?id=" + this.props.match.params.id;
        fetch(url).then((res) => {
            return res.json()
        }).then((res) => {
            this.setState({
                arr: res.result.tracks
            })
        })
    }

    render() {
        return (
            <div className="playListDetail">
                <div className="palyTitle">
                    <div className="palyHeader">
                        <Link to="/" className="palyHeaderLink">
                            <div className="palyHeaderLe"><Icon type="arrow-left" className="palyHeaderLeIcon"/></div>
                            <div className="palyHeaderBill">歌单</div>
                        </Link>
                    </div>
                    <div className="playContentImg">
                        <div className="playContentImg-le">
                            <div
                                className="playContentImg-le-bar">{Math.ceil(this.state.newstr.playCount / 10000 % 1000)}万
                            </div>
                            <img className="playContentImg-le-item-img " src={this.state.newstr.coverImgUrl} alt=""/>
                        </div>
                        <div className="playContentImg-ri">{this.state.newstr.name}</div>
                    </div>
                </div>

                <div className="playList-content">
                    <div className="playList-title"><Icon type="plus-circle-o" className="playList-title-icon"/>全部播放
                    </div>
                    {
                        this.state.arr.map((ele, index) => {
                            return (
                                <Link to={`/bofang/${ele.id}`}  key={index}>
                                    <div className="playList-listfile">
                                        <div className="playList-listfile-item">
                                            <div className="playList-listfile-item-num">{index + 1}</div>
                                            <div className="playList-listfile-content">{ele.name}</div>
                                        </div>
                                    </div>
                                </Link>

                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

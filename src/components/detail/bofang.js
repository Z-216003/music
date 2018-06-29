import React from 'react';
import "whatwg-fetch" ;  //fetch渲染数据
export default class BofangDetail extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.match.params.id)
        this.state = {
            arr: ""
        }
    }
    componentDidMount(){
        var url = "http://39.108.8.219:3000/music/url?id="+this.props.match.params.id

        fetch(url).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res.data[0].url)
            this.setState({
                arr: res.data[0].url
            })
        })
    }
    render(){
        return (
            <div className="BofangDetail">

                <audio autoPlay controls src={this.state.arr}></audio>

            </div>
        );
    }
}

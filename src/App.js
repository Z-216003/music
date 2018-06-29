import React, { Component } from 'react';
//引入哈希
import {
    HashRouter as Router,
    Route
}from 'react-router-dom'
import HomeIndexVogue from "./components/home/index/index"
import HomeSongList from "./components/home/songList/songList"
import HomeRankingList from "./components/home/rankingList/rankingList"
import HomeHotSinger from "./components/home/hotSinger/hotSinger"
import PlayListDetail from "./components/detail/playListDetail"
import BofangDetail from "./components/detail/bofang"
class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={HomeIndexVogue}></Route>
                <Route path="/index/index"  component={HomeIndexVogue}></Route>
                <Route path="/index/songList"  component={HomeSongList}></Route>
                <Route path="/index/rankingList"  component={HomeRankingList}></Route>
                <Route path="/index/hotSinger"  component={HomeHotSinger}></Route>
                <Route path="/playListDetail/:id"  component={PlayListDetail}></Route>
                <Route path="/bofang/:id"  component={BofangDetail}></Route>

            </div>
        </Router>

    );
  }
}

export default App;

// import React, { Component } from 'react';
//
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//
//             <h1 className="App-title">Hello World</h1>
// ]
//         </div>
//     );
//     }
// }
//
// export default App;


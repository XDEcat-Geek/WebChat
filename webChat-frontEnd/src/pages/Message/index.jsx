import React, { Component } from 'react'
import style from './index.module.scss'
import { Switch, Route, withRouter } from 'react-router-dom'
import {adaptionContainerHeight} from '../../utils/dom_utils'
import FriendMessage from '../../components/MessageList/FriendMessage'
import LikeMessage from '../../components/MessageList/LikeMessage'
import RequestMessage from '../../components/MessageList/RequestMessage'

class MessageList extends Component {
  uid = JSON.parse(sessionStorage["user_info"])._id;
  state = {
    currentIndex: "title1"
  }
  //组件加载
  componentDidMount() {
    // 根据屏幕高度自动改变列表高度
    adaptionContainerHeight(this.containerElem);
    this.props.history.push("/message/friendMsg");
  }
  // 选择消息标题
  handelChange(item) {
    // 实现路由跳转和样式改变
    switch (item) {
      case "item1":
        this.setState({
          currentIndex: "title1"
        }, () => {
          this.props.history.push("/message/friendMsg");
        })
        break;
      case "item2":
        this.setState({
          currentIndex: "title2"
        }, () => {
          this.props.history.push("/message/requestMsg");
        })
        break;
      case "item3":
        this.setState({
          currentIndex: "title3"
        }, () => {
          this.props.history.push("/message/likeMsg");
        })
        break;
    }
  }
  render() {
    return (
      <div className={style.container} ref={c => {this.containerElem = c}}>
        {/* 消息标题栏 */}
        <div className={style.messageTitle}>
          <div className={`${style.titleItem } ${"title1"===this.state.currentIndex?style.active:null}`}>
            <span onTouchEnd={this.handelChange.bind(this,"item1")}></span>
          </div>
          <div className={`${style.titleItem2 } ${"title2"===this.state.currentIndex?style.active:null}`}>
            <span onTouchEnd={this.handelChange.bind(this,"item2")}></span>
          </div>
          <div className={`${style.titleItem3 } ${"title3"===this.state.currentIndex?style.active:null}`}>
            <span onTouchEnd={this.handelChange.bind(this,"item3")}></span>
          </div>
        </div>
        {/* 消息标题列表 */}
        <Switch>
          <Route path="/message" exact component={FriendMessage}></Route>
          <Route path="/message/friendMsg" component={FriendMessage}></Route>
          <Route path="/message/likeMsg" component={LikeMessage}></Route>
          <Route path="/message/requestMsg" component={RequestMessage}></Route>
        </Switch>
      </div>
    )
  }
}
export default withRouter(MessageList);
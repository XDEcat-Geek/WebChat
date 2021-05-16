import React, { Component } from 'react'
import style from './index.module.scss'
import { connect } from 'react-redux';
import {baseImgURL} from '../../utils/request'
import {
  createSendMessageAction,
  createInitMessageAction,
  createAppendMessageAction
} from '../../redux/action/chat_action'
import img_url from '../../assets/img/酒吞童子.png'
class PrivateChat extends Component {
  state = {
    
  }
  // 组件完成加载
  componentDidMount() {
    // 根据屏幕高度自动改变列表高度
    const bodyHeight = document.body.offsetHeight;
    // console.log("网页可视高度", bodyHeight);
    // 减去header和footer高度
    this.listBoxElem.style.height = (bodyHeight - 50 - 60 - 68) + "px";
    // 从store中加载聊天信息
    this.props.initMessage({ uid: this.state.uid });
    // console.log("所有的聊天信息:", this.props.chatInfo);
    this.scrollToBottom();
  }


  // 返回
  back = () => {
    setTimeout(() => {
      this.props.history.goBack();
    },200)
  }
  // 滚动条到底部的方法
  scrollToBottom = () => {
    if (this.listBoxElem) {
      const scrollHeight = this.listBoxElem.scrollHeight;
      const height = this.listBoxElem.clientHeight;
      const maxScrollTop = scrollHeight - (height);
      this.listBoxElem.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  }
  // 发送信息
  send = () => {
    // 获取输入框的内容、本地用户信息，路由中的用户id
    const content = this.inputElem.value;
    const { _id, user_name } = JSON.parse(sessionStorage["user_info"]);
    const {uid} = this.props.location.state;
    // 改变store状态
    this.props.sendMessage({
      uid: _id,  //用户id
      receiver_uid: uid,
      uname: user_name,
      message: content===""?"emmm...":content, // 信息
      time: new Date().toLocaleString(), //  时间
      status: "1" // 0-发送者   1-接受者
    });
    this.inputElem.value = "";
    this.scrollToBottom(); // 滑动到最底部
  }
  render() {
    const { chatInfo } = this.props;
    const { uid, user_name } = this.props.location.state;
    return (
      <div className={style.container}>
        {/* 顶部栏 */}
        <div className={style.topBar}>
          <span className={style.close} onTouchEnd={this.back}></span>
          {user_name}
          <span className={style.iconMore}></span>
        </div>
        <ul className={style.messageList} ref={c => { this.listBoxElem = c }}>
          {/* 消息框 */}
          {
            chatInfo.map((item, index) => {
              return (
                <li className={item.status==="1"?style.rightMessageBox:style.leftMessageBox} key={index}>
                  {/* <img src="https://www.keaidian.com/uploads/allimg/190415/15110727_19.jpg"></img> */}
                  <img src={baseImgURL+"/user/avatar?uid=" + (item.status==="1"?item.uid:uid)} alt=""/>
                  <div className={style.infoBox}>
                    <label><span>{item.uname}</span>{item.time}</label>
                    <div>{item.message}</div>
                  </div>
                </li>
              )
            })
          }
          {/* <li className={style.rightMessageBox}>
            <img src="https://img2.woyaogexing.com/2018/08/08/1eb8ede3f2a666c5!400x400_big.jpg"></img>
            <div>
              <label><span>小喵酱</span>2021/5/16</label>
              <div>你也好呀,很高兴认识你~</div>
            </div>
          </li> */}
        </ul>
        {/* 底部栏 */}
        <div className={style.bottomBar}>
          <span></span>
          <input type="text" ref={c => {this.inputElem = c}} placeholder="和ta聊聊吧~" />
          <span></span>
          <span onTouchEnd={this.send}></span>
        </div>
      </div>
    )
  }
}
export default connect(
  // 映射reducer中的state
  state => ({
    chatInfo: state.chatInfo
  }),
  // 映射action中的方法，自动调用dispatch
  {
    sendMessage: createSendMessageAction,
    initMessage: createInitMessageAction,
    appendMessage: createAppendMessageAction
  }
)(PrivateChat);
import React, { Component } from 'react'
import style from './index.module.scss'
import avatarUrl from '../../assets/img/默认头像.png'
import SexMan_url from '../../assets/img/性别男.png';
import SexWoman_url from '../../assets/img/性别女.png';
import PopupBox from '../../components/PopupBox'
import Button from '../../components/Button'
import { request } from '../../utils/request'
export default class Profile extends Component {
  // 组件状态
  state = {
    user: {
      uid: "",
      account: "",
      user_name: "",
      age: "",
      sex: "",
      avatar_url: ""
    },
    // 模态框是否关闭
    showSetName: false
  }
  // 组件state更新的时候
  componentDidUpdate(prevProps, prevState) {
    console.log("Profile组件更新...");
    const { user } = this.state; // 用户信息
    // 更新sessionStorage
    
    // console.log("原来的头像", prevState);
    // console.log("现在的头像",user.avatar_url);
    // console.log(user);
    if (user.avatar_url !== "") {
      // 获取新头像
      this.getAvatar(user.uid);
    }
  }
  // 组件加载
  componentDidMount() {
    console.log("Profile组件加载...");
    // 组件加载的时候，获取用户信息和头像
    const user_info = JSON.parse(window.sessionStorage.getItem("user_info"));
    if (user_info.avatar_url !== "") {
      // 获取新头像
      this.getAvatar(user_info._id);
      this.setState({
        user: {
          uid: user_info._id,
          account: user_info.account,
          user_name: user_info.user_name,
          age: user_info.age,
          sex: user_info.sex,
          avatar_url: user_info.avatar_url
        }
      })
    } else {
      // 默认头像
      this.setState({
        user: {
          uid: user_info._id,
          account: user_info.account,
          user_name: user_info.user_name,
          age: user_info.age,
          sex: user_info.sex,
          avatar_url: ""
        }
      })
    }
  }
  // 触摸头像
  HandleAvatar = () => {
    alert("喵呜~");
  }
  // 获取头像
  getAvatar(uid) {
    // 发送设置用户请求
    request({
      url: "/user/avatar",
      method: "get",
      params: {
        uid
      },
      responseType: "blob"
    }).then((res) => {
      // 创建头像的url
      const avatar_url = window.URL.createObjectURL(res.data);
      // 设置头像
      this.avatarElem.src = avatar_url;
    }).catch(err => {
      console.log(err);
    })
  }
  // 上传头像
  uploadAvatar = () => {
    // 拿到文件信息
    const img = this.uploadElem.files[0];
    if (img.type === "image/jpeg" || img.type === "image/png") {
      const { user } = this.state;
      // console.log(user);
      // 封装表单数据
      const formData = new FormData();
      formData.append("avatar", img);
      formData.append("uid", user.uid);
      // 发送请求
      request({
        url: "/user/upload/profile",
        method: "post",
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData
      }).then((result) => {
        // 上传成功
        console.log(result.data);
        if (result.data.setAvatar) {
          alert("设置成功!");
          // 更新sessionStorage
          const user_info = JSON.parse(window.sessionStorage.getItem("user_info"));
          user_info.avatar_url = result.data.url;
          window.sessionStorage.setItem("user_info", JSON.stringify(user_info));
          // 更新state
          this.setState({
            user: {
              uid: user_info._id,
              account: user_info.account,
              user_name: user_info.user_name,
              age: user_info.age,
              sex: user_info.sex,
              avatar_url: result.data.url
            }
          })
        }
      }).catch((err) => {
        console.log(err);
      });
    } else {
      alert("请选择jpg或者png格式的图片~");
    }
  }
  // 设置用户名
  setUserName = () => {
    // 获取输入框内容
    const inputValue = this.inputNameElem.value;
    if (inputValue === "") {
      alert("没有输入~");
    } else {
      // 发送请求
      request({
        url: "/user/profile/setName",
        method: "post",
        data: {
          uid: this.state.user.uid,
          user_name: inputValue
        }
      }).then((res) => {
        const { isSet, user_name } = res.data;
        // 如果设置成功,更新state
        if (isSet) {
          alert("设置成功!");
        } else {
          alert("设置失败!");
        }
      }).catch((err) => {
        console.log(err);
      })
    }

  }
  // 退出登录
  backLogin = () => {
    setTimeout(() => {
      if (confirm("确定要退出吗?")) {
        // 清除本地sessionStorage,设置本地存储密码为空
        const account = JSON.parse(window.sessionStorage.getItem("user_info")).account;
        window.localStorage.setItem("user_login", JSON.stringify({ account, password: "" }));
        window.sessionStorage.clear();
        window.location.reload(); // 刷新页面
      } else {
        // 取消
      }
    }, 200);
  }

  // 打开设置昵称模态框
  openPopup = () => {
    setTimeout(() => {
      this.setState({
        showSetName: true
      })
    }, 200)
  }

  render() {
    const { user } = this.state; // 用户信息
    const SetNameBox = PopupBox(
      <>
        <input ref={c => { this.inputNameElem = c }} type="text" className={style.input_box} placeholder="输入你的新名字吧..." />
        <Button type="success" click={this.setUserName}>确定修改</Button>
      </>
    );
    return (
      <div>
        <SetNameBox showPopup={this.state.showSetName} />
        <div className={style.container}>
          {/* 展示用户名和头像 */}
          <div className={style.showInfo}>
            {/* 头像上传 */}
            <span onTouchEnd={this.HandleUpload}>
              <input type="file" ref={c => { this.uploadElem = c }} onChange={this.uploadAvatar} />
            </span>
            {/* 头像图片 */}
            <img src={avatarUrl} ref={c => { this.avatarElem = c }} alt="" onTouchEnd={this.HandleAvatar} />
            <span>{user.user_name === "" ? user.account : user.user_name}</span>
            <label><img src={user.sex === "男" ? SexMan_url : SexWoman_url}></img> {user.age}岁</label>
            <p>喜欢音乐、游戏、编程、美食爱好者</p>
          </div>
          {/* 显示用户的记录 */}
          <ul className={style.recordList}>
            <li>
              {111}
              <label>喜欢</label>
            </li>
            <li>
              {222}
              <label>共发消息</label>
            </li>
            <li>
              {333}
              <label>点赞</label>
            </li>
          </ul>
          {/*菜单项  */}
          <ul className={style.menuList}>
            <li onTouchEnd={this.openPopup}><span></span>设置昵称</li>
            <li><span></span>编辑资料</li>
            <li><span></span>设置背景</li>
            <li><span></span>修改密码</li>
          </ul>
          <button className={style.backLogin} onTouchEnd={this.backLogin}>退出登录</button>
        </div>
      </div>
    )
  }
}

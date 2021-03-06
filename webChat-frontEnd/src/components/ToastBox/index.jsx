import React, { useRef, useEffect } from 'react'
import style from './index.module.scss'
import closeImg_url from '../../assets/img/取消.png'
function ToastBox(props) {
  const { type, time, text, position, isShow } = props;
  // 根据props自定义的样式
  let customStyle = {
    type: "",
    position: ""
  }
  const box = useRef(null);
  useEffect(() => {
    // 判断是否显示 和 自动关闭
    let timer;
    if (isShow) {
      showBox();
      timer = setTimeout(() => {
        closeBox();
      }, time);
    }
    return () => {
      clearTimeout(timer);
    }
  },[])
  // 显示MessageBox
  function showBox() {
    // box.current.style.display = "flex";
    box.current.style.transform = "none";
  }
  // 关闭box
  function closeBox() {
    // box.current.style.display = "none";
    box.current.style.transform = "translateY(-200%)";
  }
  return (
    <div className={style.messageBox} ref={box}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={type==="success"?'#icon-chenggong':type==="warning"?'#icon-jinggao':'#icon-shibai'}></use>
      </svg>
      <div className={style.content}>
        <h3>{type === "success" ? "成功" : type==="warning"?"警告":"错误"}</h3>
        <p>{text}</p>
      </div>
      <img className={style.close} src={closeImg_url} onTouchEnd={closeBox}></img>
    </div>
  )
}
export default ToastBox;
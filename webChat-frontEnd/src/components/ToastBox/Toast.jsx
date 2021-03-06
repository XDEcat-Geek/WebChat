import React from 'react'
import ReactDOM from 'react-dom'
import ToastBox from './index'
export default function Toast(options){
  const { type, time, text } = options;
  let element = document.getElementById("toast-box");
  if (!element) {
    let element = document.createElement('div');
    element.id = 'toast-box';
    document.body.appendChild(element);
    ReactDOM.render(<ToastBox type={type} time={time} text={text} isShow={true} />, element);
  } else {
    ReactDOM.unmountComponentAtNode(element); // 卸载组件
    ReactDOM.render(<ToastBox type={type} time={time} text={text} isShow={true} />, element);
  }
}
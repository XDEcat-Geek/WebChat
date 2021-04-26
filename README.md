# WebChat
>* web上面的聊天应用
>* 🍉作者: XDEcat
>* 包含前端和服务端
>* ✨前端技术栈：JavaSript、WebSocket、React、Sass、socket.io-client
>* ✨后端技术栈: Node、Express、Nodejs-websocket、socket.io
>* ✨数据库: MongoDB

### 开发日志
* **2021/4/12**:<br/>
  1.axios请求封装,登录与注册功能实现，格式验证🍗<br/>
  2.node,登录与注册接口完善🍗
* **2021/4/13**:<br/>
  1.记住密码功能 🍗 <br/>
  2.个人资料修改功能(修改用户名、密码、年龄、性别)、上传头像功能、退出登录 🍖
* **2021/4/14**:<br/>
  1.弹出框 √ 🍗<br/>
  2.上传头像功能
* **2021/4/15**:<br/>
  1.react模态框组件的封装，设置用户头像接口调用 √ 🍖<br/>
  2.node后端保存用户头像接口，获取用户头像接口 √ 🍖<br/>
* **2021/4/16**:<br/>
  解决bug: 用户注册接口异常🍗 get请求跨域问题🍗<br/>
  1.上传头像功能实现 (基本实现)，multer的使用 🍗
* **2021/4/17**:<br/>
  1.头像上传优化，node后端放弃用multer保存文件，采用fs模块保存文件，每个用户头像只产生一个文件🍗
* **2021/4/18**:<br/>
  1.修改用户昵称功能实现 🍗 <br/>
  2.用户信息增加、性别和年龄的显示 🍗
* **2021/4/19**:<br/>
  解决bug: 上传完头像时，弹出的框会引发设置昵称的弹出框显示 🍗<br/>
  1.消息弹窗组件🍗<br/>
  2.优化了设置头像和设置昵称后的显示弹窗以及询问窗口🍗
* **2021/4/20**:<br/>
  解决bug: 获取头像请求同时调用引发后端数据库session共用问题、组件更新时，头像闪烁🍗<br/>
  1.socekt.io学习、案例、项目中引入🍗<br/>
  2.我的好友，我的消息、路由组件编写🍗
* **2021/4/21**:<br/>
  1.socket.io 后端服务搭建🍗<br/>
  2.前端socket.io引入，工具类
* **2021/4/22**:<br/>
  解决bug: 用户设置昵称完成后，显示之前昵称问题🍗<br/>
  1.socket-client 用户连接与关闭，工具类编写🍗<br/>
  2.获取好友列表与添加好友接口🍗
* **2021/4/23**:<br/>
  1.界面主题色变换、个人资料页优化🍗<br/>
  2.消息页面、消息标题栏🍗
* **2021/4/25**:<br/>
  1.我的消息，消息栏切换🍗<br/>
  2.获取好友列表接口优化🍗
* **2021/4/26**:<br/>
  1.新增好友列表页🍗<br/>
  2.部分优化🍗
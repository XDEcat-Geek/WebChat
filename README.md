# WebChat
>* web上面的聊天应用
>* 🍉作者: XDEcat
>* 包含前端和服务端
>* ✨前端技术栈：JavaSript、WebSocket、React、Sass、socket.io-client
>* ✨后端技术栈: Node、Express、Nodejs-websocket、socket.io
>* ✨数据库: MongoDB
### 功能需求
* 广场：<br/>
  1. 晒照片
  2. 水果摊
  3. 小卖部
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
* **2021/4/27**:<br/>
  1.点击所选的好友项，弹出信息框🍗<br/>
  2.聊天界面🍗
* **2021/4/28**:<br/>
  1.应用底部栏优化，去除加号🍗<br/>
  2.聊天界面优化🍗
* **2021/4/29**:<br/>
  1.编辑用户资料接口🍗<br/>
  2.好友列表信息显示🍗
* **2021/5/6**:<br/>
  1.好友列表显示优化，对每个li元素的key进行用户id绑定，解决了内部渲染问题🍗<br/>
  2.用户的编辑资料功能实现🍗
* **2021/5/10**:<br/>
  1.解决了每个页面的高度自适应，利用了js获取body的高度，减去header和height的高度🍗<br/>
  2.好友列表信息展示，以及单击好友显示对应的信息🍗<br>
  3.编辑资料和修改昵称显示的优化🍗
* **2021/5/15**:<br/>
  1.增加了redux模块，对聊天信息的状态进行管理 🍗<br/>
  2.私聊界面优化 🍗
* **2021/5/16**:<br/>
  1.聊天界面好友信息显示 🍗<br/>
  2.聊天功能实现,发送信息与接收信息🍗<br/>
  2.个人页面优化，私聊界面优化 🍗
* **2021/5/17**:<br/>
  1.聊天界面优化，消息框高度和宽度自适应 🍗<br/>
  2.消息缓存机制，搭建成功，消息保存，添加记录🍗<br/>
  2.根据用户id获取消息列表接口🍗
* **2021/6/22**:<br/>
  1.熟悉之前的项目流程工作以及代码 🍗<br/>
  2.完成消息历史记录功能 🍗<br/>
* **2021/6/23**:<br/>
  1.完成了清除消息记录功能 🍗<br/>
  2.编写了确认框组件和toast组件 🍗<br/>
* **2021/7/21**:<br/>
  1.完成了好友搜索、好友添加以及删除功能 🍗<br/>
  2.接口优化、页面优化、一些小bug修复 🍗<br/>
* **2021/8/4**:<br/>
  1.界面更新，个人中心，好友列表页，好友信息页 🍗<br/>
  2.更新密码功能，编辑资料,喜欢与被喜欢 🍗<br/>
  3.部分功能优化 🍗<br/>
* **2021/8/5**:<br/>
  1.解决bug,聊天界面用户昵称显示问题 🍗<br/>
  2.更新密码功能，编辑资料,喜欢与被喜欢 🍗<br/>
  3.部分功能优化 🍗<br/>
* **2021/8/27**:<br/>
  1.解决bug,聊天界面信息滑动到底部问题 🍗<br/>
* **2021/9/14**:<br/>
  1.好友申请功能，同意或者拒绝🍗<br/>
  2.信息查看页🍗<br/>
  3.开发群聊系统🍗<br/>
* **2021/9/19**:<br/>
  1.解决bug---字母过长无法换行问题导致聊天框超出屏幕🍗<br/>
  2.解决bug---首次进入聊天界面时，消息列表无法自动滑到底部问题🍗<br/>
  2.优化默认头像以及头像显示🍗<br/>
  3.开发消息弹窗组件🍗<br/>
  4.大世界聊天(群聊系统)🍗<br/>
  5.通知组件优化🍗<br/>
  6.部分界面优化🍗<br/>
* **2021/9/20**:<br/>
  1.解决bug---默认路由问题🍗<br/>
  2.优化了聊天界面和通知组件，界面调整🍗<br/>
  3.聊天背景🍗<br/>
* **2021/10/9**:<br/>
  1.表情模块🍗<br/>
  2.解决bug：接收聊天数据错乱，无法接收指定好友的信息。🍗<br/>
  3.优化了好友信息通知🍗<br/>
  4.重构了好友聊天组件的代码，class--->function🍗<br/>
******
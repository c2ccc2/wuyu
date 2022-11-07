(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{328:function(t,s,_){"use strict";_.r(s);var a=_(7),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"直接进行部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接进行部署"}},[t._v("#")]),t._v(" 直接进行部署")]),t._v(" "),s("h2",{attrs:{id:"_0-相关环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-相关环境准备"}},[t._v("#")]),t._v(" 0.相关环境准备")]),t._v(" "),s("p",[t._v("相关软件：mysql（或者mariaDB）、redis5.0、nginx。\n环境需要：jdk1.8")]),t._v(" "),s("p",[t._v("假设已经装好相关mysql，redis和nginx环境了。")]),t._v(" "),s("h2",{attrs:{id:"_1-下载后端程序和前端程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载后端程序和前端程序"}},[t._v("#")]),t._v(" 1.下载后端程序和前端程序")]),t._v(" "),s("h2",{attrs:{id:"_2-部署后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署后端"}},[t._v("#")]),t._v(" 2. 部署后端")]),t._v(" "),s("h3",{attrs:{id:"_2-1-创建数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建数据库"}},[t._v("#")]),t._v(" 2.1.创建数据库")]),t._v(" "),s("p",[t._v("库名：wy_project ( 必须是这个，请不要自行定义库名）\n字符集：utf8mb4\n排序规则：utf8mb4_general_ci")]),t._v(" "),s("p",[s("img",{attrs:{src:"vx_images/456490515240275.png",alt:""}})]),t._v(" "),s("p",[t._v("导入sql，使用命令行或者navicat 等工具导入mysql文件中的\nwy_project_init  文件到 wy_project 数据库中")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/385240815236830.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2-2-部署后端程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-部署后端程序"}},[t._v("#")]),t._v(" 2.2.部署后端程序")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("创建程序目录\nmkdir /usr/local/wysoft")])]),t._v(" "),s("li",[s("p",[t._v("移动文件")])])]),t._v(" "),s("p",[t._v("cp   wy_project.jar  /usr/local/wysoft/\ncp   wy_ctl.sh  /usr/local/wysoft/")]),t._v(" "),s("p",[t._v("3.进入程序目录，并修改配置信息\n主要修改内容：\n数据库密码\nredis端口号\nredis密码\n上传文件路径 # 可不修改  默认为当前目录下的uploadPath下")]),t._v(" "),s("p",[t._v("cd  /usr/local/wysoft\nvi  wy_ctl.sh")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/220081515232584.png",alt:""}})]),t._v(" "),s("p",[t._v("4.启动")]),t._v(" "),s("p",[t._v("./wy_ctl.sh  start")]),t._v(" "),s("p",[t._v("访问localhostL8080  出现这个界面说明后端部署成功。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/518433613227440.png",alt:""}})]),t._v(" "),s("p",[t._v("5.其他管理\n停止\n./wy_ctl.sh  stop\n重启\n./wy_ctl.sh  restart\n查看状态和日志\n./wy_ctl.sh  status")]),t._v(" "),s("h2",{attrs:{id:"_3-部署前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署前端"}},[t._v("#")]),t._v(" 3.部署前端")]),t._v(" "),s("p",[t._v("1.解压前端文件\nunzip wy_web.zip")]),t._v(" "),s("p",[t._v("2.复制到程序目录\ncp -r  将wy_web  /usr/local/wysoft/")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("复制nginx配置文件")])]),t._v(" "),s("p",[t._v("将wy_nginx.conf  放到nginx的conf.d 目录下")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("修改配置文件（可选，如有冲突，则需要修改对应端口）")])]),t._v(" "),s("p",[t._v("默认是端口是80，主机是localhost，可根据自己需求进行修改。")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("重新载入nginx 配置 或者重启nginx。")])]),t._v(" "),s("li",[s("p",[t._v("访问 localhost\n能够出现验证码说明前后端均已部署成功。")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/297943913247606.png",alt:""}})]),t._v(" "),s("h1",{attrs:{id:"docker方式部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker方式部署"}},[t._v("#")]),t._v(" docker方式部署")])])}),[],!1,null,null,null);s.default=r.exports}}]);
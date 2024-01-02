(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{345:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"安装部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[a._v("#")]),a._v(" 安装部署")]),a._v(" "),s("h2",{attrs:{id:"分结构部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分结构部署"}},[a._v("#")]),a._v(" 分结构部署")]),a._v(" "),s("h3",{attrs:{id:"_0-相关环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-相关环境准备"}},[a._v("#")]),a._v(" 0.相关环境准备")]),a._v(" "),s("p",[a._v("相关软件：mysql（或者mariaDB）、redis5.0、nginx。")]),a._v(" "),s("p",[a._v("环境需要：jdk1.8")]),a._v(" "),s("p",[a._v("工具：ssh工具，navicat（或其他数据库工具）")]),a._v(" "),s("p",[a._v("假设已经装好相关mysql，redis、jks和nginx环境了。")]),a._v(" "),s("h3",{attrs:{id:"_1-下载后端程序和前端程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载后端程序和前端程序"}},[a._v("#")]),a._v(" 1.下载后端程序和前端程序")]),a._v(" "),s("p",[a._v("通过下载页面选择下载")]),a._v(" "),s("p",[a._v("直接下载最新版本\n下载地址：\n"),s("a",{attrs:{href:"https://gitee.com/wy-soft/wyproject/releases/",target:"_blank",rel:"noopener noreferrer"}},[a._v("工时系统下载"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("下载后将程序包上传到服务器上。")]),a._v(" "),s("h3",{attrs:{id:"_2-部署后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署后端"}},[a._v("#")]),a._v(" 2. 部署后端")]),a._v(" "),s("h4",{attrs:{id:"_2-1-创建数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建数据库"}},[a._v("#")]),a._v(" 2.1.创建数据库")]),a._v(" "),s("p",[a._v("库名：wy_project ( 必须是这个，请不要自行定义库名）")]),a._v(" "),s("p",[a._v("字符集：utf8mb4")]),a._v(" "),s("p",[a._v("排序规则：utf8mb4_general_ci")]),a._v(" "),s("p",[s("img",{attrs:{src:"vx_images/456490515240275.png",alt:""}})]),a._v(" "),s("p",[a._v("导入sql，使用命令行或者navicat 等工具导入mysql文件中的\nwy_project_init  文件到 wy_project 数据库中")]),a._v(" "),s("p",[s("img",{attrs:{src:"vx_images/385240815236830.png",alt:""}})]),a._v(" "),s("h4",{attrs:{id:"_2-2-部署后端程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-部署后端程序"}},[a._v("#")]),a._v(" 2.2.部署后端程序")]),a._v(" "),s("p",[a._v("1.创建程序目录")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mkdir /usr/local/wysoft\n")])])]),s("p",[a._v("2.移动文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cp   wy_project.jar  /usr/local/wysoft/\ncp   wy_ctl.sh  /usr/local/wysoft/\n")])])]),s("p",[a._v("3.进入程序目录，并修改配置信息")]),a._v(" "),s("p",[a._v("主要修改内容：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("数据库密码")])]),a._v(" "),s("li",[s("p",[a._v("redis端口号")])]),a._v(" "),s("li",[s("p",[a._v("redis密码")])]),a._v(" "),s("li",[s("p",[a._v("上传文件路径 # 可不修改  默认为当前目录下的uploadPath下")])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd  /usr/local/wysoft\nvi  wy_ctl.sh\n")])])]),s("p",[s("img",{attrs:{src:"vx_images/220081515232584.png",alt:""}})]),a._v(" "),s("p",[a._v("4.启动")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./wy_ctl.sh  start\n")])])]),s("p",[a._v("访问localhostL8080  出现这个界面说明后端部署成功。")]),a._v(" "),s("p",[s("img",{attrs:{src:"vx_images/518433613227440.png",alt:""}})]),a._v(" "),s("p",[a._v("5.其他管理")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#停止\n./wy_ctl.sh  stop\n#重启\n./wy_ctl.sh  restart\n#查看状态和日志\n./wy_ctl.sh  status\n")])])]),s("h3",{attrs:{id:"_3-部署前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署前端"}},[a._v("#")]),a._v(" 3.部署前端")]),a._v(" "),s("p",[a._v("1.解压前端文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("unzip wy_web.zip\n")])])]),s("p",[a._v("如果没有unzip，需要先进行安装.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#centos\nyum install unzip\n\n#ubuntu\napt install unzip\n")])])]),s("p",[a._v("2.复制到程序目录")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cp -r  wy_web  /usr/local/wysoft/ \n")])])]),s("p",[a._v("3.复制nginx配置文件")]),a._v(" "),s("p",[a._v("将wy_nginx.conf  放到nginx的conf.d 目录下")]),a._v(" "),s("p",[a._v("这里需要的nginx的安装目录")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("## 安装在 /etc/nginx/下\ncp  wy_nginx.conf /etc/nginx/conf.d/\n\n## nginx安装在/usr/local/nginx下\ncp -r  wy_web  /usr/local/nginx/conf/conf.d/\n")])])]),s("h3",{attrs:{id:"_4-修改配置文件-可选-如有冲突-则需要修改对应端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改配置文件-可选-如有冲突-则需要修改对应端口"}},[a._v("#")]),a._v(" 4.修改配置文件（可选，如有冲突，则需要修改对应端口）")]),a._v(" "),s("p",[a._v("默认是端口是80，主机是localhost，可根据自己需求进行修改。")]),a._v(" "),s("h3",{attrs:{id:"_5-重新载入nginx-配置-或者重启nginx。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-重新载入nginx-配置-或者重启nginx。"}},[a._v("#")]),a._v(" 5.重新载入nginx 配置 或者重启nginx。")]),a._v(" "),s("h3",{attrs:{id:"_6-访问-localhost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-访问-localhost"}},[a._v("#")]),a._v(" 6.访问 localhost")]),a._v(" "),s("p",[a._v("能够出现验证码说明前后端均已部署成功。")]),a._v(" "),s("h3",{attrs:{id:"_7-登录访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-登录访问"}},[a._v("#")]),a._v(" 7.登录访问")]),a._v(" "),s("p",[a._v("使用默认账号登录")]),a._v(" "),s("p",[a._v("默认管理员： admin")]),a._v(" "),s("p",[a._v("密码：12345678")]),a._v(" "),s("h2",{attrs:{id:"docker-compose-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-部署"}},[a._v("#")]),a._v(" docker compose 部署")]),a._v(" "),s("p",[a._v("docker 建议版本23.0.1或以上，可使用docker --version 查看。")]),a._v(" "),s("p",[a._v("compose 建议版本 v2.16.0或以上，可使用docker compose version 查看。")]),a._v(" "),s("p",[a._v("下载代码文件后，地址同上。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//进入install/compose 目录\n# cd install/compose   \n// 设置程序运行权限\nsudo  chmod +x conf/app/ctl-tools.sh  conf/app/start.sh  conf/app/wuyu-cost.jar \n\n//方式1.前台启动 用于启动看日志\n\ndocker compose up\n\n// 方式2.后台启动，用于日常使用\n\ndocker compose up -d\n\n\n")])])]),s("p",[a._v("停止/删除服务")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//使用方式1 停止服务\nshell下 按 ctrl +c 或者直接关掉shell即可。\n//使用方式2 停止服务\n# docker compose stop\n\n// 删除服务\ndocker compose down\n")])])]),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),s("p",[a._v("默认管理账号：\nadmin\n默认密码：\n12345678")])])}),[],!1,null,null,null);s.default=r.exports}}]);
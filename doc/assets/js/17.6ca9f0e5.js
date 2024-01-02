(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{273:function(t,s,a){t.exports=a.p+"assets/img/200532214227463.7fbe9a8d.png"},274:function(t,s,a){t.exports=a.p+"assets/img/428362214247629.77ea38e2.png"},275:function(t,s,a){t.exports=a.p+"assets/img/82192314240298.4db0df9b.png"},320:function(t,s,a){t.exports=a.p+"assets/img/faq3.88b66f35.png"},321:function(t,s,a){t.exports=a.p+"assets/img/faq2.c2abf203.png"},322:function(t,s,a){t.exports=a.p+"assets/img/faq1.42279153.png"},323:function(t,s,a){t.exports=a.p+"assets/img/faq4.8b6485a6.png"},351:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h2",{attrs:{id:"后端编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端编译"}},[t._v("#")]),t._v(" 后端编译")]),t._v(" "),s("p",[t._v("拉取代码后，用mvn 命令或者ide 进行编译。")]),t._v(" "),s("h2",{attrs:{id:"前端编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端编译"}},[t._v("#")]),t._v(" 前端编译")]),t._v(" "),s("h3",{attrs:{id:"构建环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建环境"}},[t._v("#")]),t._v(" 构建环境")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#克隆前端代码\n\ngit clone https://gitee.com/wy-soft/wyproject-web\n\n# 安装依赖  如果网速太慢，请使用下方明年了\nnpm install\n\n# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题\nnpm install --registry=https://registry.npm.taobao.org\n\n\n#  如遇到node-sass安装问题可执行以下命令通过cnpm单独安装\n\nnpm uninstall node-sass\n\n# 安装cnpm\nnpm install -g cnpm --registry=https://registry.npmmirror.com\n\n# 重新安装node-sass\n\ncnpm install -D node-sass@5.0.0 --save\n\n# 启动服务\nnpm run dev\n\n")])])]),s("h3",{attrs:{id:"打包发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包发布"}},[t._v("#")]),t._v(" 打包发布")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 构建测试环境\nnpm run build:stage\n\n# 构建生产环境\nnpm run build:prod\n\n")])])]),s("h2",{attrs:{id:"node-sass报错说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-sass报错说明"}},[t._v("#")]),t._v(" node-sass报错说明")]),t._v(" "),s("p",[t._v("在使用node对前端代码进行编译时，有时会出现编译错误。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(273),alt:""}})]),t._v(" "),s("p",[t._v("原因\n这是因为node-sass与node版本不匹配导致。\nNode和node-sass的版本存在绑定关系，关系对照表如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(274),alt:""}})]),t._v(" "),s("p",[t._v("本项目使用的是node-sass5.0版本，官方也有对应版本说明。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(275),alt:""}})]),t._v(" "),s("p",[t._v("解决方案")]),t._v(" "),s("p",[t._v("如果你使用的node版本在官方推荐的版本列表中，编译就没有没有，否则就会出现上文描述的bug，有两种解决方案")]),t._v(" "),s("p",[t._v("node 升级或降级到目标版本")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}\n# 从下面的网址下载对应系统安装包，\n点击安装即可\n# https://nodejs.org/download/release/v14.18.2/\n")])])]),s("p",[t._v("使用cnpm 单独安装")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 安装cnpm\nnpm install -g cnpm --registry=https://registry.npmmirror.com\n\n# 卸载之前的node-sass\n\nnpm uninstall node-sass\n\n# 重新安装node-sass\ncnpm install -D node-sass@5.0.0 --save\n")])])]),s("h2",{attrs:{id:"swagger相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swagger相关"}},[t._v("#")]),t._v(" swagger相关")]),t._v(" "),s("p",[t._v("swagger是单独的服务，可通过swagger-ui/index.html路径进行访问 如后端地址是127.0.0.1:8080，\n那么swagger访问地址则是 127.0.0.1:8080/swagger-ui/index.html")]),t._v(" "),s("p",[t._v("使用swagger需要在配置中启用。")]),t._v(" "),s("h2",{attrs:{id:"前端页面无法登录或者登录失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端页面无法登录或者登录失败"}},[t._v("#")]),t._v(" 前端页面无法登录或者登录失败")]),t._v(" "),s("p",[t._v("前端页面无法登录，或者没有验证码。这种情况一般为无法连接后端导致。请按一下步骤进行排查：")]),t._v(" "),s("ol",[s("li",[t._v("查看前端所访问的后端地址是否正确")])]),t._v(" "),s("p",[t._v("确认前端所访问的后端地址是否正确，可以通过f12查看访问记录。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("查看后端地址是否可以直接访问。如出现以下状态则说明后端没有正常启动。")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(320),alt:"Alt text"}})]),t._v(" "),s("h2",{attrs:{id:"后端启动提示-redisconnectionexception-unable-to-connect-to-127-0-0-1-6379"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端启动提示-redisconnectionexception-unable-to-connect-to-127-0-0-1-6379"}},[t._v("#")]),t._v(" 后端启动提示 RedisConnectionException: Unable to connect to 127.0.0.1:6379")]),t._v(" "),s("p",[t._v("后端启动提示如下错误：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'captchaController': Unsatisfied dependency expressed through field 'configService'; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sysConfigServiceImpl': Invocation of init method failed; nested exception is org.springframework.data.redis.RedisConnectionFailureException: Unable to connect to Redis; nested exception is org.springframework.data.redis.connection.PoolException: Could not get a resource from the pool; nested exception is io.lettuce.core.RedisConnectionException: Unable to connect to 127.0.0.1:6379\n")])])]),s("p",[t._v("该问题一般存在自建环境，\n查看redis能否有访问权限（ip/账号密码等）或者正常启动。")]),t._v(" "),s("h2",{attrs:{id:"找不到sql文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找不到sql文件"}},[t._v("#")]),t._v(" 找不到sql文件")]),t._v(" "),s("p",[t._v("每次发布版本中都有对应的sql文件，请查看对应版本文件。")]),t._v(" "),s("h1",{attrs:{id:"业务问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务问题"}},[t._v("#")]),t._v(" 业务问题")]),t._v(" "),s("h2",{attrs:{id:"某功能提示没有权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#某功能提示没有权限"}},[t._v("#")]),t._v(" 某功能提示没有权限")]),t._v(" "),s("p",[t._v("用户使用某些模块提示当前操作没有权限\n"),s("img",{attrs:{src:a(321),alt:"Alt text"}})]),t._v(" "),s("p",[t._v("该问题需要管理员在后台为该用户所在角色赋予对应权限。\n因权限缓存在redis中，所以不会马上生效，或者手动重启后端服务。")]),t._v(" "),s("h2",{attrs:{id:"用户是9月1日加入的项目-如何填报之前的工时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户是9月1日加入的项目-如何填报之前的工时"}},[t._v("#")]),t._v(" 用户是9月1日加入的项目，如何填报之前的工时")]),t._v(" "),s("p",[t._v("在项目管理中，加入用户时，可以选择用户填报的时间是从加入项目时或者不限（从项目创建时间即可填报）。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(322),alt:"Alt text"}})]),t._v(" "),s("h2",{attrs:{id:"用户是9月22日创建的项目-如何填报之前的工时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户是9月22日创建的项目-如何填报之前的工时"}},[t._v("#")]),t._v(" 用户是9月22日创建的项目，如何填报之前的工时")]),t._v(" "),s("p",[t._v("如图，用户是9月22日创建的账号，只能看到9月22日之前的记录，如何填报之前的工时。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(323),alt:"Alt text"}})]),t._v(" "),s("p",[t._v("该问题在0.7版本中解决，最早可填报时间为所加入的填报方式为不限的项目创建时间。")])])}),[],!1,null,null,null);s.default=n.exports}}]);
# 使用docker compose进行部署

## 0.相关环境准备
相关软件：docker 以及docker compose

假设已经装好docker 和compose了。

##  1.下载 

###  通过下载页面选择下载
下载相关文件
```
# 方式1 
git clone  https://gitee.com/wy-soft/wyproject.git

# 方式2
wget https://gitee.com/wy-soft/wyproject/repository/archive/master.zip
unzip master.zip
```

##  2.复制文件

将install下的compose文件夹复制到对应目录，以下操作均以compose文件夹为操作目录


##  3.启动
3.1
```
# 设置程序运行权限
# root权限下不需要加sudo
sudo  chmod +x conf/app/*

```




3.2  启动
```
# 方式1.前台启动

docker compose up

# 方式2.后台启动

docker compose up -d

```

删除服务
```
docker compose down
```

浏览器访问 http://localhost

相关配置请查看docker-compose.yml文件

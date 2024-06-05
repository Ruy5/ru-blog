# ubuntu 部署 docker

桌面版：https://www.docker.com/products/docker-desktop

服务器版：https://docs.docker.com/engine/install/#server

官网：https://docs.docker.com

参考文档：https://docker.easydoc.net/

## apt安装

### apt新增软件库
deepin仓库中软件的版本比较低，或者官方仓库中没有，需要自己新增软件库（如果是ubantu就不需要）

```shell
# 注：本文是在Deepin20上安装

# 卸载旧版本或残留
sudo apt-get remove docker.io docker-engine

# 安装密钥管理与下载相关的工具
sudo apt-get install apt-transport-https ca-certificates curl python-software-properties software-properties-common

# 下载并安装密钥
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/debian/gpg | sudo apt-key add -
# 官方源，能否成功可能需要看运气。
# curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

# 查看密钥是否安装成功
sudo apt-key fingerprint 0EBFCD88
# 成功返回下面内容
  pub   4096R/0EBFCD88 2017-02-22              Key fingerprint = 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88  
  uid     Docker Release (CE deb) <docker@docker.com>  
  sub   4096R/F273FCD8 2017-02-22
  
# 在 source.list 中添加 docker-ce 软件源
sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"

# 如果是deepin可以用以下方法
# sudo vim /etc/apt/sources.list.d/docker.list
# 写入一条内容如下：
# deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/debian buster stable 
# 这里 buster 是 debain 版本的代号，deepin20 是debain10 代号为 buster，编辑完成后保存
# 注意： 使用 cat /etc/debian_version 查看自己的 debain 版本
```
### 安装
```shell
# 更新仓库
sudo apt update

# 安装 docker
apt install docker-ce docker-ce-cli containerd.io

# 为 docker 更换用户组
sudo usermod -aG docker $USER

# 验证
docker -v # 输出以下信息
 
sudo docker run hello-world # 正常下载并输出说明安装成功
```

## yum安装

```shell
# yum 更新
yum update

# 安装软件包
yum install -y yum-utils device-mapper-persistent-data lvm2

# 更改yum源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 安装命令
yum -y install docker-ce

docker -v
```

## 设置USTC的镜像

```shell
mkdir -p /etc/docker
sudo deepin-editor /etc/docker/daemon.json
# sudo vim /etc/docker/daemon.json (其他Linux中使用此命令)
```

写入以下json

```json
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

## 启动Docker

```shell
systemctl start docker # 启动docker

systemctl status docker # 检查docker状态

systemctl stop docker # 停止docker

systemctl restart docker # 重启docker

systemctl enable docker # 开机自启

docker info # 查看docker相关信息

# service docker restart
```
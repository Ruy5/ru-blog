# centos7安装docker

## 添加docker yum源

```bash
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

## 安装docker

```bash
yum install -y docker-ce docker-ce-cli containerd.io
```

## 添加docker守护配置文件

```bash
vim /etc/docker/daemon.json
```
内容如下:
```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```

## 重新加载下守护进程配置文件

```bash
sudo systemctl daemon-reload
```

## 启用docker

```
systemctl enable docker
systemctl start docker
```

## 查看docker状态

```
systemctl status docker
```
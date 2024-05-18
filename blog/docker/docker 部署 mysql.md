# docker 部署 mysql 命令

## 取最新版的 MySQL 镜像
```bash
docker pull mysql:latest
```

## 查看本地镜像
```bash
docker images
```

## 运行容器
```bash
$ docker run -itd --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```
参数说明：
 - -p 3306:3306 ：映射容器服务的 3306 端口到宿主机的 3306 端口，外部主机可以直接通过 宿主机ip:3306 访问到 MySQL 的服务。
 - MYSQL_ROOT_PASSWORD=123456：设置 MySQL 服务 root 用户的密码。
# docker-compose安装

## 1. 下载最新版的docker-compose文件

```bash
sudo curl -L https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

## 2. 添加可执行权限
```bash
sudo chmod +x /usr/local/bin/docker-compose
```

## 3. 测试安装结果
```bash
docker-compose --version
```


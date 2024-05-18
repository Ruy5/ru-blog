# docker 部署 redis 命令

## 取最新版的 Redis 镜像
```bash
docker pull redis:latest
```

## 查看本地镜像
```bash
docker images
```

## 运行容器
```bash
docker run -itd --name redis-test -p 6379:6379 redis
```
参数说明：
 - -p 6379:6379：映射容器服务的 6379 端口到宿主机的 6379 端口。外部可以直接通过宿主机ip:6379 访问到 Redis 的服务
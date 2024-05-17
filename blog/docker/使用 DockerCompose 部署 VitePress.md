# 使用 DockerCompose 部署 VitePress

## 准备工作

在开始之前，确保你已经安装了 Docker 和 Docker Compose。如果没有，你可以根据官方文档进行安装：Docker 和 Docker Compose

## 编写 Docker Compose 配置文件

首先，我们需要创建一个 Docker Compose 配置文件，用来定义我们的服务。在项目根目录下创建一个名为 docker-compose.yml 的文件，并将以下内容复制到其中：

```yml
version: '3.8'
services:  
  vitepress-nginx:
    image: nginx
    container_name: vitepress-nginx
    ports:
      - "80:80"
    volumes:
      - "./.vitepress/dist:/usr/share/nginx/html/vitepress"
      - "./nginx.conf:/etc/nginx/nginx.conf"
    networks:
      - vitepress-net

networks:
  vitepress-net:
    name: vitepress

```

这个配置文件定义了一个名为 vitepress-nginx 的服务，使用了 Nginx 官方的 Docker 镜像，并将容器的 80 端口映射到主机的 80 端口。此外，它还挂载了 VitePress 编译后的静态文件目录和自定义的 Nginx 配置文件。

## 编写 Nginx 配置文件

接下来，我们需要创建一个 Nginx 配置文件，用来配置 Nginx 服务器。在项目根目录下创建一个名为 nginx.conf 的文件，并将以下内容复制到其中：

```js
#user  nobody;
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/json;

    sendfile        on;

    keepalive_timeout  65;


    server {
        listen       80;
        server_name  localhost;
        charset utf-8;

        location / {
            root  /usr/share/nginx/html/vitepress;
            try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```

这个配置文件定义了一个简单的 Nginx 服务器，监听在 80 端口，将请求代理到 VitePress 编译后的静态文件目录。

## 构建和启动容器

对VitePress项目进行打包

```bash
npm run docs:build
```

运行后，将在.vitepress/dist目录下生成打包结果

一切就绪后，我们可以构建并启动我们的容器了。在终端中运行以下命令：

```bash
docker compose up -d
```

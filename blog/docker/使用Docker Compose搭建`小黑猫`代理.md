# 使用Docker Compose搭建`小黑猫`代理

`小黑猫`是一个功能强大且灵活的代理工具，可以帮助我们实现网络代理功能。而使用Docker Compose可以简化`小黑猫`的部署和管理过程，使我们能够快速搭建和配置`小黑猫`代理服务。本篇博客将介绍如何使用Docker Compose在服务器上搭建`小黑猫`代理。

### 一、安装Docker Compose

首先，我们需要安装Docker Compose。请按照以下指南进行操作：

1.  执行以下命令以安装Docker Compose：

    ```
    sudo apt install docker-compose
    ```

1.  安装完成后，您可以通过运行以下命令来验证Docker Compose是否成功安装：

    ```
    docker-compose --version
    ```

    如果安装成功，终端将显示Docker Compose的版本号信息。

### 二、创建目录结构和配置文件

在服务器上创建一个目录，命名为`svc`，并在其中创建一个名为`docker-compose.yml`的文件。
```
mkdir /svc
cd /svc

vim docker-compose.yml
```

文件的内容如下：

```
version: "3"

services:
  # Clash
  svc-clash:
    image: dreamacro/clash:v1.10.6
    container_name: svc-clash
    volumes:
      - ./svc-clash/config.yaml:/root/.config/clash/config.yaml
    ports:
      - "7890:7890/tcp"
      - "7890:7890/udp"
      - "9090:9090"
    restart: always
    networks:
      - svc
  # Clash Dashboard
  svc-clash-dashboard:
    image: centralx/clash-dashboard
    container_name: svc-clash-dashboard
    ports:
      - "80:80"
    restart: always
    networks:
      - svc

# Networks
networks:
  svc:
    driver: bridge
```

此配置文件使用了两个容器，一个是Clash代理服务(`svc-clash`)，另一个是Clash的可视化界面(`svc-clash-dashboard`)。

### 三、编辑配置文件

编辑配置文件`config.yaml`，根据您的订阅信息和需求进行相应配置。这个文件决定了Clash的代理规则、节点配置等内容。根据您的情况进行相应的修改即可。
```
mkdir /svc/svc-clash
cd /svc/svc-clash

wget "飞机场地址" -O config.yaml
```
修改`config.yaml`文件，将文件中所有的`127.0.0.1`替换为`0.0.0.0`
### 四、启动服务

在`svc`目录下使用以下命令启动服务：

```
cd /svc
docker-compose up -d
```

这将自动拉取Clash和Clash Dashboard的镜像，并根据配置文件进行容器的创建和配置。

### 五、访问Clash可视化界面

等待`docker-compose`执行完毕后，您可以通过访问`http://服务器IP地址:80`来访问Clash的可视化界面。在可视化界面中，您可以通过简单的操作来控制代理功能。

请注意，根据您的实际情况，可能需要修改Clash可视化界面的外部控制设置，将其更改为当前服务器的IP和端口，以确保正确地控制代理功能。

### 结语

通过本篇博客，我们了解了使用Docker Compose搭建Clash代理的步骤。借助Docker Compose，我们可以快速部署和管理Clash代理服务，并通过Clash的可视化界面轻松控制代理功能。希望本篇博客对您有所帮助，并能带来更便利和高效的代理体验。

如果在安装和配置过程中遇到任何问题，或者对其他相关主题有任何疑问或建议，请在评论区与我们分享。感谢您的阅读！
# github 配置 ssh key 方法 (Linux版)

## 第一步：检查本地主机是否已经存在ssh key
```bash
cd ~/.ssh
ls
//看是否存在 id_rsa 和 id_rsa.pub文件，如果存在，说明已经有SSH Key
```

## 第二步：生成ssh key
```bash
ssh-keygen -t rsa -C "xxx@xxx.com"
//执行后一直回车即可 如果提示 Overwrite 则输入 y
```

如果忘记邮箱，可以到 github settings 页面查看

![alt text](/blog/github-email.png)

## 第三步：获取ssh key公钥内容（id_rsa.pub）

```bash
cd ~/.ssh
cat id_rsa.pub
```
内容大概如下图：

![alt text](/blog/linux-rsa.png)

## 第四步：Github账号上添加公钥

进入Settings设置页面

![alt text](/blog/github-ras-ssh1.png)

添加ssh key，把刚才复制的内容粘贴上去保存即可

![alt text](/blog/github-rsa-ssh2.png)

第五步：验证是否设置成功

```bash
ssh -T git@github.com
```

如果返回 ` You've successfully authenticated, but GitHub does not provide shell access. ` 就说明成功了
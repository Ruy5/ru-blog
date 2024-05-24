# git 同时 push 到两个仓库

## 添加多个远程仓库

首先，确保你已经有一个 Git 仓库，并且至少已经配置了一个远程仓库。

使用以下命令添加第二个远程仓库。例如，如果你已经有一个名为 origin 的远程仓库，并且想要添加一个名为 backup 的远程仓库：

```bash
git remote add backup https://your-second-repository-url.git
```

## 确认远程仓库添加成功

使用以下命令查看配置的远程仓库，确认是否添加成功：

```bash
git remote -v
```

## 推送到多个远程仓库

有两种方法可以推送到多个远程仓库：手动推送和配置多个 pushurl。

**方法一：手动推送**

每次推送时，手动推送到两个远程仓库：

```bash
git push origin main
git push backup main
```



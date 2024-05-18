# github https 切换至 ssh

最初是为了解决github无法通过账号密码push项目的问题

> remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead

接着我对ssh key进行了配置，且ssh -T git@github.com验证成功，但是在 git push 阶段依然提示我输入账号密码

使用 `git config --get remote.origin.url` 可以看到我 clone 时采用的是 https 协议而非 ssh

所以需要更改remote协议

```bash
git remote set-url origin git@github.com:Ruy5/Personal-tools.git
```

配置完后，重新执行git push就没有问题了

# apt换源后NO_PUBKEY问题

报错如下：

E: The repository 'https://mirrors.ustc.edu.cn/ubuntu bionic-updates InRelease' is not signed.
W: GPG error: https://mirrors.ustc.edu.cn/ubuntu bionic-backports InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32

> Ubuntu 系统在尝试从 USTC（中国科学技术大学）的镜像站获取软件包更新时遇到了问题。这些问题通常是由于缺少 GPG 公钥导致的，这会阻止系统验证软件包的来源。

## 添加缺少的 GPG 公钥

缺少的公钥 ID 是 3B4FE6ACC0B21F32。可以使用以下命令添加这个公钥：

```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3B4FE6ACC0B21F32
```
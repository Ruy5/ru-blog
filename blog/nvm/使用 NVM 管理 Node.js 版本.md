# 使用 NVM 管理 Node.js 版本

在开发 JavaScript 应用程序时，管理不同版本的 Node.js 和 npm 是一项常见需求。Node Version Manager (NVM) 是一个强大的工具，允许你轻松地安装、切换和管理多个 Node.js 版本。本文将介绍 NVM 的基本命令，帮助你更高效地管理你的 Node.js 环境。

## 安装 Node.js 版本

使用 NVM 安装 Node.js 非常简单。以下是一些常用的命令：

### 安装最新的 LTS 版本（长期支持版）

```bash
nvm install --lts
```

### 安装最新版本

```bash
nvm install node
```

### 安装指定版本

```bash
nvm install 14.17.0
```

### 查看已安装的 Node.js 版本

```bash
nvm list
```

## 切换 Node.js 版本

安装了多个版本的 Node.js 后，你可以轻松地在它们之间切换。以下是切换 Node.js 版本的命令：

### 切换到特定版本

```bash
nvm use 14.17.0
```

### 设置默认版本
如果你希望某个版本作为默认版本，可以使用以下命令:

```bash
nvm alias default 14.17.0
```
之后，每次打开新的终端窗口时，NVM 都会自动使用该默认版本。

## 卸载 Node.js 版本

如果你不再需要某个版本的 Node.js，可以使用以下命令卸载它：

```bash
nvm uninstall 14.17.0
```

## 其他常用命令

### 显示可安装的 Node.js 版本列表

```bash
nvm ls-remote
```

### 显示当前使用的 Node.js 版本

```bash
nvm current
```

### 刷新可用的 Node.js 版本列表：

```bash
nvm cache clear
```





# windows激活方法

## Win11

以管理员身份 运行 cmd
依次输入以下代码

```shell
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms kms.03k.org
slmgr /ato
```

## Win Server 2016

以管理员身份 打开cmd控制台，按顺序输入以下命令，有报错不要管它

```shell
slmgr /upk
slmgr.vbs /ipk CB7KF-BWN84-R7R2Y-793K2-8XDDG
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
```

进入电脑属性激活服务器

```shell
Windows Server 2016 数据中心
CB7KF-BWN84-R7R2Y-793K2-8XDDG

Windows Server 2016 标准版
WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY

Windows Server 2016 嵌入式版
JCKRF-N37P4-C2D82-9YXRT-4M63B
```


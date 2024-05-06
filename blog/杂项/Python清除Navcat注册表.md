# Python清除Navcat注册表

## 原理

原本清除注册表需要进行以下手动操作

```
1.第一步很重要，先关闭Navicat程序

2.win+R 打开“运行”程序，输入regedit调出Windows系统注册表

3.删除HKEY_CURRENT_USER\SOFTWARE\PremiumSoft

4.展开HKEY_CURRENT_USER\SOFTWARE\Classes\CLSID，
  然后展开每一个子文件夹查看，找到只包含一个名为Info的文件夹，删掉它即可
```

然后重新打开就可以继续试用了

但是在这个过程中，找文件夹过程十分漫长，且浪费时间，所以我就想着用python代码代替人去操作

## 代码实现

```python
import winreg
import ctypes


# 判断是否拥有超级管理员权限
def admin():
    return ctypes.windll.shell32.IsUserAnAdmin() == 1

# 删除 key0 目录下的 key1 及其 所有子目录
def deleteSubkey(key0, key1, key2=""):
    if key2=="":
        currentkey = key1
    else:
        currentkey = key1+ "\\" +key2
    open_key = winreg.OpenKey(key0, currentkey, 0, winreg.KEY_ALL_ACCESS)
    infokey = winreg.QueryInfoKey(open_key)
    for x in range(0, infokey[0]):
        subkey = winreg.EnumKey(open_key, 0)
        try:
            winreg.DeleteKey(open_key, subkey)
            print("Removed %s\\%s " % (currentkey, subkey))
        except:
            deleteSubkey( key0, currentkey, subkey )

    winreg.DeleteKey(open_key,"")
    open_key.Close()
    print("Removed %s" % (currentkey))
    return

# 删除 PremiumSoft
def deletePremium():
    try:
        Parentkey = winreg.OpenKey(winreg.HKEY_CURRENT_USER, r'SOFTWARE', 0, winreg.KEY_ALL_ACCESS)
        subkey = 'PremiumSoft'
        deleteSubkey(Parentkey, subkey, '')
    except FileNotFoundError as err:
        return

# 删除 CLSID 下 只包含 info 的 文件夹
def deleteInfo():
    sub = r'SOFTWARE\Classes\CLSID'
    # 打开 SOFTWARE\Classes\CLSID 文件夹
    parentKey = winreg.OpenKey(winreg.HKEY_CURRENT_USER, sub, 0, winreg.KEY_ALL_ACCESS)
    # 获取 SOFTWARE\Classes\CLSID 文件夹下 有多少个子目录
    KeyLength = winreg.QueryInfoKey(parentKey)[0]
    # 便利子目录
    for index in range(0, KeyLength):
        # 拼接 SOFTWARE\Classes\CLSID 下的第 index 个文件名
        clsidNode = winreg.EnumKey(parentKey, index)
        temp_key = winreg.OpenKey(winreg.HKEY_CURRENT_USER, sub+"\\"+clsidNode, 0, winreg.KEY_ALL_ACCESS)
        # 如果该文件夹下不止一个子目录 直接跳过
        if winreg.QueryInfoKey(temp_key)[0] != 1:
            continue
        fileName = winreg.EnumKey(temp_key, 0)
        if fileName == "Info":
            deleteSubkey(parentKey, clsidNode, '')
            break


if __name__ == '__main__':
    if admin():
        # 打开句柄
        reg = winreg.ConnectRegistry('你的计算机名称',winreg.HKEY_LOCAL_MACHINE)#返回值是所开打键的句柄

        deletePremium()
        deleteInfo()

        # 关闭句柄
        winreg.CloseKey(reg)
        print("清除完成")
    else:
        print("权限不足")
```

如果出现特殊情况，大家酌情修改就行

如果出现权限不足 需要注意，不能直接在开发环境中右键运行，因为右键所使用的权限是当前用户，这里需要以管理员身份打开CMD，然是使用 **python+脚本名** 去运行
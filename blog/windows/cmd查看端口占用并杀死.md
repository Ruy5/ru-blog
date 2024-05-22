# windows 查看端口占用并杀死

## 查看运行的所有端口号

```bash
netstat -ano

netstat -aon|findstr 7009
```
> 如果已知被占用的端口时，可以用命令 `netstat -aon|findstr 7009` 直接找到端口号为7009的进程PID

## 根据PID杀死进程
```bash
taskkill /pid 4628 -t -f
```
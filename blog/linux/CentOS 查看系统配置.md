# CentOS 查看系统配置

## 查看 CPU 物理个数

```bash
grep 'physical id' /proc/cpuinfo | sort -u | wc -l
```

## 查看 CPU 核心数量

```bash
grep 'core id' /proc/cpuinfo | sort -u | wc -l
```

## 查看 CPU 线程数

```bash
grep 'processor' /proc/cpuinfo | sort -u | wc -l
```

## 查看 CPU  型号

```bash
dmidecode -s processor-version
```

## 查看 CPU 的详细信息

```bash
cat /proc/cpuinfo
```
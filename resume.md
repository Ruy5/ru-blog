 <center>
     <h1>游瑞的个人简历</h1>
 </center>

 ## 个人信息 

<PI />

## 教育经历

- 专科
  - 学校：[苏州信息职业技术学院](https://www.szitu.edu.cn/)
  - 专业：软件技术
  - 时间：2020.9~2023.7
  - 绩点：3.84，年级前10

- 本科
  - 学校： [苏州大学](https://www.suda.edu.cn/)
  - 专业： 软件工程专业
  - 时间：2023.9~至今

- 获奖证书


<PR />


<script setup>
    import PR from "./resumePr.vue"
    import PI from "./personalInformation.vue"

</script>
## 开源项目


### rui 

github地址：https://github.com/Ruy5/rui-v3

npm地址：https://www.npmjs.com/package/rui-v3

相关技术：Vue3、Lerna、Vite

项目介绍：Rui 是一套基于 Vue 3 构建的 UI 组件库 。

### img-cache-v3

star数量：☆ 5

github地址：https://github.com/Ruy5/img-cache-v3

npm地址：https://www.npmjs.com/package/img-cache-v3

相关技术：IndexeDB、Fetch、Vue3、Lerna、Vite

项目详情：在某次项目中，因涉及到大量的重复图片渲染，且当时后端服务器性能有限(硬件性能有限，后端无法彻底解决)，于是我主动提出了一种基于IndexeDB的优化方法。对原生Image标签进行封装，添加一层中间层ImgCacheV3，通过src属性将已经加载过的图片，缓存至IndexeDB中，且在每次加载图片之前对IndexeDB进行检查，是否已经存在相同的URL，如果已经存在，则直接返回IndexeDB中缓存的图片信息。经过实战检验，效果十分显著，后来为了方便多个项目复用，我将项目发布至npm中，同时在开源社区也受到了大家的好评

### color-grab-plugin

github地址：https://github.com/Ruy5/color-grab-plugin

相关技术：TinyColor、Canvas、EyeDropper

项目详情：这是一款基于 Chrome 95 的推出 EyeDropper API 实现的 系统级取色器(不仅仅可以取浏览器中颜色，还可以取浏览器外的颜色)，由于是通过 EyeDropper 实现，故仅仅支持工作于 Chrome 和 Edge 中 ,在EyeDropper 取色完成后，通过 TinyColor 将取色结果转化为 RGB, Hex, HSL三种格式，除此之外我还通过Canvas实现了一个调色盘，调色盘与EyeDropper同步进行取色工作

## 项目经历

- **XXXX 项目**

  *使用到的技术*

  使用一两句话描述项目的主要功能，然后介绍自己在项目中的角色，解决了什么问题，使用什么方式解决，比别人的方法相比有什么优势（尽量用数据来说明）。

## 技能清单

- ★★★ Java
- ★★☆ C++、Python
- ★★★ MySQL
- ★★★ Redis
- ★★☆ Spring
- ★☆☆ RabbitMQ、ZooKeeper
- ★★☆ JavaScript
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

::: tip
rui、img-cache-v3、color-grab-plugin三个项目均由我一人主导并长期维护

alex-ui项目我并未直接参与其中，仅是向作者提了3个PR, 其中两个PR被作者接受并合并
:::

### rui-v3

github地址：https://github.com/Ruy5/rui-v3

npm地址：https://www.npmjs.com/package/rui-v3

相关技术：*Vue3、Lerna、Vite*

项目介绍：Rui 是一套基于 Vue 3 构建的 简约风格 UI 组件库。目前已经包含菜单、分页、表格、卡片、瀑布流、富文本编辑器、markdown等组件。并使用VitePress搭建了组件文档，项目目前正在开发中...(按计划，后续还会加入无限滚动、时间线、消息提示等功能)

### img-cache-v3

star数量：☆ 5

github地址：https://github.com/Ruy5/img-cache-v3

npm地址：https://www.npmjs.com/package/img-cache-v3

相关技术：*IndexeDB、Fetch、Vue3、Lerna、Vite*

项目详情：在某次项目中，因涉及到大量的重复图片渲染，且当时后端服务器性能有限(硬件性能有限，后端无法彻底解决)，于是我主动提出了一种基于IndexeDB的优化方法。对原生Image标签进行封装，添加一层中间层ImgCacheV3，通过src属性将已经加载过的图片，缓存至IndexeDB中，且在每次加载图片之前对IndexeDB进行检查，是否已经存在相同的URL，如果已经存在，则直接返回IndexeDB中缓存的图片信息。经过实战检验，效果十分显著，后来为了方便多个项目复用，我将项目发布至npm中，同时在开源社区也受到了大家的好评

### color-grab-plugin

github地址：https://github.com/Ruy5/color-grab-plugin

相关技术：*TinyColor、Canvas、EyeDropper*

项目详情：这是一款基于 Chrome 95 的推出 EyeDropper API 实现的 系统级取色器(不仅仅可以取浏览器中颜色，还可以取浏览器外的颜色)，由于是通过 EyeDropper 实现，故仅仅支持工作于 Chrome 和 Edge 中 ,在EyeDropper 取色完成后，通过 TinyColor 将取色结果转化为 RGB, Hex, HSL三种格式，除此之外我还通过Canvas实现了一个调色盘，调色盘与EyeDropper同步进行取色工作

## 项目经历

### 农业种植教学平台

  *Spring Boot、Spring Security、Redis、FFmpeg、Vue3、Element-Plus*

  这是一个在线课程平台，前台功能包括课程学习、课程推荐，后台功能包括课程管理、学院管理。我在项目中做了以下事情：
  1. 实现用户注册接口，后端接受 username 和 password，对 password 进行 MD5 摘要或其他安全加密处理，将加密后的用户名和密码存储到用户数据库中，返回适当的响应，表示注册是否成功
  2. 实现用户登录接口，后端接受 username 和 password，对比数据库中存储的加密密码和用户输入的密码是否匹配，如果匹配，生成并返回一个安全的身份验证令牌（token），用于后续的身份验证和授权，如果不匹配或出现其他错误，返回相应的错误信息
  3. 实现前端上传功能，并将视频文件发送到后端，后端接受视频文件，并使用 FFmpeg 进行视频处理和转码，转换为m3u8格式并返回索引文件的url地址
  4. 使用 HLS（HTTP Live Streaming）库来实现视频播放
  5. 编写docker-compose.yml文件和nginx.conf文件，使用docker compose部署前后端及数据库



### 云藏搜索引擎

  *Vue3、Pinia、Qrcode、xgplayer、vue-waterfall2、vue-i18n、element-plus、axios*

  这是一个以藏语为主题的类似bing的搜索引擎。在项目中我仅负责前台页面(1:1按照甲方原型图实现前端效果)，后台CMS和后端均由兰州大学研究生实验室完成。我在该项目中完成了以下工作：
  1. 配置 vue-i18n 插件，设置藏语（bo）和汉语（zh）两个语言包，在项目的各个组件中添加国际化支持，使用 $t 方法进行文本转换，在用户首次访问时，自动检测并设置默认语言为藏语，同时提供切换语言的功能
  2. 集成 xgplayer 作为视频播放器，并配置播放器的基本功能，如播放、暂停、音量控制等，实现视频弹幕功能，允许用户在视频播放时发送和查看弹幕，提升互动性
  3. 引入 vue-waterfall2 组件，以瀑布流方式展示图片搜索结果，处理图片数据的异步加载，确保在用户滚动页面时动态加载更多图片
  4. 使用 Qrcode 生成二维码，允许用户分享搜索结果页面
  5. 使用rem布局，配置根元素的字体大小，根据设备的屏幕宽度动态调整 rem 的基准值，在各个组件和样式文件中使用 rem 进行尺寸设置，确保所有元素在不同屏幕尺寸下的比例一致


###  文旅类学科就业指导 综合服务平台

  *Ruoyi-Vue(若依前后端分离版本)、Vue、html2canvas、wangeditor、Vue-Tour*

  这是一个就业指导平台，该项目后端与后台直接基于若依生成的低代码二次开发实现，仅有前台是从0到1开发出来的，我在该项目中完成了以下工作：
  1. 设计并优化数据库表结构，确保与业务需求和数据关系模型匹配，使用若依提供的低代码模块，生成后端 API 接口和管理后台界面
  2. 集成并配置 html2canvas 库，实现将在线简历页面转换为图片的功能，以便用户可以下载或分享他们的简历
  3. 使用递归算法遍历评论，确保评论以树状结构正确显示在页面上, 并正确实现用户发布评论、回复评论等功能
  4. 实现用户参与霍兰德职业兴趣测试的功能，包括问题选择和答案提交，统计用户的测试结果，分析和计算用户的职业兴趣类型，使用 ECharts 图表库，将测试结果以可视化方式展示给用户，帮助用户更好地理解和分析自己的职业倾向
  5. 在用户第一次进入页面时，使用Vue-Tour对用户行为进行引导


###  甘肃中医药大学官网

  *SpringBoot、MyBatis-plus、Vue、Element-Plus、axios*

  1. 编写docker-compose.yml文件和nginx.conf文件，使用docker compose部署前后端及数据库
  2. 项目结束时，对前端打包进行优化，使用rollup-plugin-visualizer对打包体积进行分析，将较大依赖排除，使用CDN方式引入，并对模块进行拆分包，使用vite-plugin-compression对打包文件进行压缩
  3. 实现文件上传功能，将文件转存至七牛云对象存储空间中，并向前端返回七牛云外链URL
  4. 管理整个开发团队，积极与甲方沟通，编写需求文档

## 实习经历

- 苏州矿冶猎手信息科技有限公司
   - 岗位：爬虫工程师
   - 实习时间：2022年4月-2022年12月
   - 薪资：4.2k

::: tip
2022年11月导师叫我回学校参加比赛，故于2022年11月底提出离职，2022年12月中旬完成工作交接后离开

2022年12月-2023年5月期间，参与学校比赛集训，并在学校向学弟学妹进行授课，传授比赛经验和相关知识

2023年5月比赛结束后，导师将我留在学校参与他手上的多个横向项目(给导师打工，基本上是他把项目丢给我，我来全权负责)
:::

## 技能清单

- 前端
  - ★★★ Vue
  - ★★★ Element-Plus
  - ★★★ Echarts
  - ★☆☆ Uniapp
  - ★★☆ Vite、Rollup
  - ★★☆ Jquery
  - ★☆☆ Gsap
  - ★☆☆ Babel


- 后端
  - ★★☆ SpringBoot
  - ★★☆ MYSQL
  - ★☆☆ Redis
  - ★☆☆ FFmpeg

- 运维
  - ★★☆ Linux
  - ★★☆ Docker、Docker Compose
  - ★★☆ Nginx

- 区块链
  - ★★☆ Web3.js
  - ★★☆ 智能合约
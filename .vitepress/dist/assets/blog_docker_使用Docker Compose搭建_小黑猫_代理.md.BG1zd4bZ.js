import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.eSehZVqP.js";const k=JSON.parse('{"title":"使用Docker Compose搭建小黑猫代理","description":"","frontmatter":{},"headers":[],"relativePath":"blog/docker/使用Docker Compose搭建`小黑猫`代理.md","filePath":"blog/docker/使用Docker Compose搭建`小黑猫`代理.md"}'),p={name:"blog/docker/使用Docker Compose搭建`小黑猫`代理.md"},o=e(`<h1 id="使用docker-compose搭建小黑猫代理" tabindex="-1">使用Docker Compose搭建<code>小黑猫</code>代理 <a class="header-anchor" href="#使用docker-compose搭建小黑猫代理" aria-label="Permalink to &quot;使用Docker Compose搭建\`小黑猫\`代理&quot;">​</a></h1><p><code>小黑猫</code>是一个功能强大且灵活的代理工具，可以帮助我们实现网络代理功能。而使用Docker Compose可以简化<code>小黑猫</code>的部署和管理过程，使我们能够快速搭建和配置<code>小黑猫</code>代理服务。本篇博客将介绍如何使用Docker Compose在服务器上搭建<code>小黑猫</code>代理。</p><h3 id="一、安装docker-compose" tabindex="-1">一、安装Docker Compose <a class="header-anchor" href="#一、安装docker-compose" aria-label="Permalink to &quot;一、安装Docker Compose&quot;">​</a></h3><p>首先，我们需要安装Docker Compose。请按照以下指南进行操作：</p><ol><li><p>执行以下命令以安装Docker Compose：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo apt install docker-compose</span></span></code></pre></div></li><li><p>安装完成后，您可以通过运行以下命令来验证Docker Compose是否成功安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker-compose --version</span></span></code></pre></div><p>如果安装成功，终端将显示Docker Compose的版本号信息。</p></li></ol><h3 id="二、创建目录结构和配置文件" tabindex="-1">二、创建目录结构和配置文件 <a class="header-anchor" href="#二、创建目录结构和配置文件" aria-label="Permalink to &quot;二、创建目录结构和配置文件&quot;">​</a></h3><p>在服务器上创建一个目录，命名为<code>svc</code>，并在其中创建一个名为<code>docker-compose.yml</code>的文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir /svc</span></span>
<span class="line"><span>cd /svc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim docker-compose.yml</span></span></code></pre></div><p>文件的内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>version: &quot;3&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  # Clash</span></span>
<span class="line"><span>  svc-clash:</span></span>
<span class="line"><span>    image: dreamacro/clash:v1.10.6</span></span>
<span class="line"><span>    container_name: svc-clash</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./svc-clash/config.yaml:/root/.config/clash/config.yaml</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;7890:7890/tcp&quot;</span></span>
<span class="line"><span>      - &quot;7890:7890/udp&quot;</span></span>
<span class="line"><span>      - &quot;9090:9090&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - svc</span></span>
<span class="line"><span>  # Clash Dashboard</span></span>
<span class="line"><span>  svc-clash-dashboard:</span></span>
<span class="line"><span>    image: centralx/clash-dashboard</span></span>
<span class="line"><span>    container_name: svc-clash-dashboard</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;80:80&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - svc</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Networks</span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>  svc:</span></span>
<span class="line"><span>    driver: bridge</span></span></code></pre></div><p>此配置文件使用了两个容器，一个是Clash代理服务(<code>svc-clash</code>)，另一个是Clash的可视化界面(<code>svc-clash-dashboard</code>)。</p><h3 id="三、编辑配置文件" tabindex="-1">三、编辑配置文件 <a class="header-anchor" href="#三、编辑配置文件" aria-label="Permalink to &quot;三、编辑配置文件&quot;">​</a></h3><p>编辑配置文件<code>config.yaml</code>，根据您的订阅信息和需求进行相应配置。这个文件决定了Clash的代理规则、节点配置等内容。根据您的情况进行相应的修改即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir /svc/svc-clash</span></span>
<span class="line"><span>cd /svc/svc-clash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wget &quot;飞机场地址&quot; -O config.yaml</span></span></code></pre></div><p>修改<code>config.yaml</code>文件，将文件中所有的<code>127.0.0.1</code>替换为<code>0.0.0.0</code></p><h3 id="四、启动服务" tabindex="-1">四、启动服务 <a class="header-anchor" href="#四、启动服务" aria-label="Permalink to &quot;四、启动服务&quot;">​</a></h3><p>在<code>svc</code>目录下使用以下命令启动服务：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd /svc</span></span>
<span class="line"><span>docker-compose up -d</span></span></code></pre></div><p>这将自动拉取Clash和Clash Dashboard的镜像，并根据配置文件进行容器的创建和配置。</p><h3 id="五、访问clash可视化界面" tabindex="-1">五、访问Clash可视化界面 <a class="header-anchor" href="#五、访问clash可视化界面" aria-label="Permalink to &quot;五、访问Clash可视化界面&quot;">​</a></h3><p>等待<code>docker-compose</code>执行完毕后，您可以通过访问<code>http://服务器IP地址:80</code>来访问Clash的可视化界面。在可视化界面中，您可以通过简单的操作来控制代理功能。</p><p>请注意，根据您的实际情况，可能需要修改Clash可视化界面的外部控制设置，将其更改为当前服务器的IP和端口，以确保正确地控制代理功能。</p><h3 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h3><p>通过本篇博客，我们了解了使用Docker Compose搭建Clash代理的步骤。借助Docker Compose，我们可以快速部署和管理Clash代理服务，并通过Clash的可视化界面轻松控制代理功能。希望本篇博客对您有所帮助，并能带来更便利和高效的代理体验。</p><p>如果在安装和配置过程中遇到任何问题，或者对其他相关主题有任何疑问或建议，请在评论区与我们分享。感谢您的阅读！</p>`,25),c=[o];function l(i,t,d,r,h,m){return n(),a("div",null,c)}const v=s(p,[["render",l]]);export{k as __pageData,v as default};

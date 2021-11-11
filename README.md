# yang-1213 博客

## vuepress-theme-vdoing

* [文档 (国内源)](https://doc.xugaoyi.com/)
* [文档 (github源)](https://xugaoyi.github.io/vuepress-theme-vdoing-doc/)
* [效果：Evan's blog](https://xugaoyi.com/)
* [**更新日志**](https://github.com/xugaoyi/vuepress-theme-vdoing/releases)

### 这个主题可以做什么？
* 案例1：[知识库兼博客站](https://xugaoyi.com/)
* 案例2：[仅博客站](https://xugaoyi.github.io/vdoing-demo-blog/)
* 案例3：[仅知识库](https://xugaoyi.github.io/vdoing-demo-repository/)
* 案例4：[文档站](https://xugaoyi.github.io/vuepress-theme-vdoing-doc/)

## 快速上手

```bash
# clone the project
git clone https://github.com/xugaoyi/vuepress-theme-vdoing.git

# enter the project directory
cd vuepress-theme-vdoing

# install dependency
npm install # or yarn install

# develop
npm run dev # or yarn dev
```

## 构建结构化站点的核心配置和约定

> [文档](https://doc.xugaoyi.com/pages/33d574/)

## 自动生成front matter

> [文档](https://doc.xugaoyi.com/pages/088c16/)

## 目录结构
```lua
.
├── .github   (可选，GitHub Actions所需文件)
│   ├── workflows
│   │   ├── baiduPush.yml (可选，百度定时自动推送)
│   │   └── ci.yml (可选，自动部署)
├── docs (必须，不要修改文件夹名称)
│   ├── .vuepress （同官方，查看：https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构）
│   ├── @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)
│   ├── _posts (可选，专门存放碎片化博客文章的文件夹)
│   ├── <结构化目录>
│   └── index.md (首页)
├── theme-vdoing (可选，本地的vdoing主题)
├── utils  (可选，vdoing主题使用的node工具)
│   ├── modules
│   ├── config.yml (可选，批量操作front matter配置)
│   ├── editFrontmatter.js (可选，批量操作front matter工具)
├── baiduPush.sh (可选，百度推送命令脚本)
├── deploy.sh (可选，部署命令脚本)
│
└── package.json
```


## 全局引入js
- jquery
- jqToast
- clipboard
- aPlayer
- clickLove

## 谷歌收录网站
- https://search.google.com/search-console

## 评论系统
- https://waline.netlify.app/

## 动漫壁纸
- https://wallhaven.cc/
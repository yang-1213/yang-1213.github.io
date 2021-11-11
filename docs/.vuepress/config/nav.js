// nav
module.exports = [
  { text: '😀首页', link: '/' },
  {
    text: '😁前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: '🍕JavaScript', link: '/pages/8143cc480faf9a11/' },
          { text: '🍤Css', link: '/pages/734e0d/' },
        ],
      },
    ],
  },
  {
    text: '😊工具技巧',
    link: '/utils/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'google浏览器',
        items: [
          { text: '🍜google浏览器的骚操作', link: '/pages/617d57/' },
        ],
      },
      {
        text: 'github',
        items: [
          { text: '🍘使用GitHub Actions 部署博客', link: '/pages/92777f/' },
        ],
      },
    ],
  },
//   {
//     text: '更多',
//     link: '/more/',
//     items: [
//       { text: '学习', link: '/pages/f2a556/' },
//       { text: '面试', link: '/pages/aea6571b7a8bae86/' },
//       { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
//       { text: '实用技巧', link: '/pages/baaa02/' },
//       { text: '友情链接', link: '/friends/' },
//     ],
//   },
  {
    text: '😃收藏',
    link: '/pages/b05f2a/',
    items: [
      { text: '🍔收藏夹', link: '/pages/b05f2a/' },
      { text: '🍟前端文档', link: '/pages/2f56c7/' },
      { text: '🌭css工具', link: '/pages/46a9f4/' },
      { text: '🥓git仓库', link: '/pages/fa603c/' },
    ],
  },
  {
    text: '😉索引',
    link: '/archives/',
    items: [
      { text: '🍿分类', link: '/categories/' },
      { text: '🥓标签', link: '/tags/' },
      { text: '🧇归档', link: '/archives/' },
    ],
  },
]

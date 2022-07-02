module.exports = {
  title: '米修·记忆',
  description: '道格拉斯·米修',
  // base: '/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'keywords', content: 'Torrk,博客,conimi,nico'}],
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxxxxxx"; 
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`]
  ],
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { text: '米修JavaScript博客', 
        items: [
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        // collapsable: false, // 不折叠
        children: [
            { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "基础学习",
        path: '/handbook/ConditionalTypes',
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" }
        ],
      },
      {
        title: '计算机基础',
        path: '/computer-basics/1',
        children: [
          { title: "基础", path: "/computer-basics/2" },
          { title: "进阶", path: "/computer-basics/3" }
        ],
      },
      {
        title: '计算机网络'
      },
      {
        title: '前端'
      },
      {
        title: '后端'
      },
      {
        title: '服务器'
      }
    ]
  },
  markdown: {
    lineNumbers: true,
  },
  // theme: 'reco',
  // themeConfig: {
  //   nav: [
  //     { text: '主页', link: '/', icon: 'reco-home' },
  //     { text: '归档', link: '/archives.html', icon: 'reco-date' },
  //     { text: '标签', link: '/tags.html', icon: 'reco-tag'},
  //     { text: '域名', link: '/domains.html', icon: 'reco-other' },
  //     { text: '回顾', link: '/review.html', icon: 'reco-blog' },
  //     { text: '关于', link: '/about.html', icon: 'reco-account' },
  //   ],

  //   type: 'blog',
  //   blogConfig: {
  //     category: {
  //       location: 2, // 在导航栏菜单中所占的位置，默认2
  //       text: '分类' // 默认 “分类”
  //     },
  //     // tag: {
  //     //   location: 3, // 在导航栏菜单中所占的位置，默认3
  //     //   text: '标签' // 默认 “标签”
  //     // },
  //     socialLinks: [
  //       { icon: 'reco-github', link: 'https://github.com/To2rk' },
  //     ]
  //   },
  //   valineConfig: {
  //     appId: 'xxxxxxxxxxxx-xxxxxx',
  //     appKey: 'xxxxxxxxxxxxxxxxx',
  //   },
  //   logo: '/avatar.jpg',
  //   authorAvatar: '/avatar.jpg',
  //   search: true,
  //   searchMaxSuggestions: 10,
  //   subSidebar: 'auto',
  //   sidebarDepth: 4,
  //   lastUpdated: '上次更新',
  //   author: 'Torrk',
  //   record: 'xxxxxxxxxxxxxx',
  //   startYear: '2017',
  //   /**
  //    * 密钥 (if your blog is private)
  //    */
  //   friendLink: [
  //     {
  //       title: '午后南杂',
  //       desc: 'Enjoy when you can, and endure when you must.',
  //       email: '1156743527@qq.com',
  //       link: 'https://www.recoluan.com'
  //     },
  //     {
  //       title: 'Torrk\'s Blog',
  //       desc: '记录，成为更好的自己。',
  //       logo: 'https://conimi.com/files/images/i.jpg',
  //       link: 'https://conimi.com'
  //     },
  //   ],
  //   /**
  //    * support for
  //    * '' | 'default'
  //    * 'coy'
  //    * 'dark'
  //    * 'funky'
  //    * 'okaidia'
  //    * 'solarizedlight'
  //    * 'tomorrow'
  //    * 'twilight'
  //    */
  // },
  // plugins: [
  //   // 更新刷新插件
  //   ['@vuepress/pwa', {
  //     serviceWorker: true,
  //     updatePopup: {
  //         message: "发现新内容可用",
  //         buttonText: "刷新"
  //     }
  //   }],
  // // 代码复制弹窗插件
  //   ["vuepress-plugin-nuggets-style-copy", {
  //     copyText: "copy",
  //     tip: {
  //         content: "复制成功!"
  //     }
  //   }],
  //   ['@vuepress/last-updated', 
  //     {
  //       transformer: (timestamp, lang) => {
  //         return (new Date(timestamp)).toUTCString() 
  //         //或者用下面这段
  //         // const moment = require('moment')
  //         // moment.locale(lang)
  //         // return moment(timestamp).toLocaleString()
  //       }
  //     }],
  //   ['@vuepress-reco/vuepress-plugin-pagation', {
  //     perPage: 16
  //   }],
  //   ['sitemap', {
  //     hostname: 'https://conimi.com'
  //   }],
  // ]
}
module.exports = {
  host: 'localhost',
  port: '3001',
  title: '米修·记忆',
  description: '道格拉斯·米修',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/common/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'keywords', content: '米修,博客,conimi,mixiu'}]
  ],
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { text: '米修博客', 
        items: [
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
    sidebar: [
      {
        title: '起点',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "关于", path: "/handbook/about" },
          { title: 'markdown语法', path: '/handbook/grammar'}
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
        title: '代码管理',
        path: '/code',
        children: [
          { title: 'git管理', path: '/code/git' },
          { title: '代码规范', path: '/code/standard'}
        ]
      },
      {
        title: '计算机基础',
        path: '/computer-basics/composition-principle',
        children: [
          { title: "组成原理", path: "/computer-basics/composition-principle" },
          { title: "操作系统", path: "/computer-basics/operating-system" },
          { title: "网路", path: "/computer-basics/computer-network" }
        ],
      },
      {
        title: '前端',
        path: '/frontend',
        children: [
          { title: 'CSS', path: '/frontend/styles' },
          { title: 'JavaScript', path: '/frontend/javascript' },
          { 
            title: '框架', 
            path: '/frontend/frame',
            children: [
              { title: 'Vue', path: '/frontend/frame/vue' },
              { title: 'React', path: '/frontend/frame/react' }
            ]
          }
        ]
      },
      {
        title: '后端',
        path: '/backend',
        children: [
          { 
            title: 'Java', 
            path: '/backend/java', 
            children: [
              { title: '基础', path: '/backend/java/basic' },
              { 
                title: '框架', 
                path: '/backend/java/iframe',
                children: [
                  { title: 'Spring', path: '/backend/java/iframe/spring' },
                  { title: 'SpringBoot', path: '/backend/java/iframe/springboot' },
                  { title: 'SpringCloud', path: '/backend/java/iframe/springcloud' },
                  { title: 'Mybatis', path: '/backend/java/iframe/mybatis' }
                ] 
              }
            ],
          },
          { title: 'Python', path: '/backend/python', 
            children: [
              { title: 'Django', path: '/backend/python/django' },
              { title: '数据分析', path: '/backend/python/django' },
              { title: '爬虫', path: '/backend/python/django' },
            ]
          }
        ]
      },
      {
        title: '服务器'
      },
      {
        title: '数学',
        path: '/math',
        children: [
          { title: '线性代数', path: '/math/Linear-Algebra' },
          { title: '微积分', path: '/math/Calculus' },
          { title: '统计学', path: '/math/Statistics' }
        ]
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
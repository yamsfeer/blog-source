const { readdirSync } = require('fs')
const path = require('path')

function getSidebar(dirname) {
  let files = readdirSync(path.resolve(`${__dirname}/../${dirname}`))
  return files.map(filename => {
    return {
      text: filename,
      link: filename
    }
  })
}

const navbar = [
  {
    text: 'YDKJS笔记',
    ariaLabel: 'Language Menu',
    children: [
      { text: '上卷', link: '/YDKJS笔记（上卷）/1-1 作用域与编译器.md' },
      { text: '中卷', link: '/YDKJS笔记（中卷）/1-1 类型.md' },
      { text: '下卷', link: '/YDKJS笔记（下卷）/1-1 深入编程.md' },
    ]
  },
  {
    text: '计算机基础',
    children: [
      { text: '计算机科学', link: '/计算机基础/计算机科学/计算理论.md' },
      { text: '计算机体系结构', link: '/计算机基础/计算机体系结构/冯诺依曼结构.md' },
      { text: '汇编语言', link: '/计算机基础/汇编语言/MIPS汇编入门.md' },
      { text: '操作系统', link: '/计算机基础/操作系统/进程.md' },
      { text: '编译原理', link: '/计算机基础/编译原理/1. 编译器介绍.md' },
      { text: '计算机图形学', link: '/计算机基础/计算机图形学/渲染管道.md' },
      { text: '计算机网络', link: '/计算机基础/计算机网络/' },
    ]
  },
  { text: '算法', link: '/算法设计与分析/开始.md' },
  { text: '浏览器', link: '/浏览器/图解Google V8.md' },
  { text: '源码', link: '/源码/vue/1. 准备工作.md' },
  { text: 'css', link: '/css世界/1.块级元素与width、height.md' },
  { text: '杂谈', link: '/杂谈/网址收藏.md' },
  { text: 'Github', link: 'https://github.com/melogra' },
];

const sidebar = {
  '/杂谈/': [
    {
      text: '杂谈',
      children: getSidebar('杂谈')
    }
  ],
  '/YDKJS笔记（上卷）/': [
    {
      text: '你不知道的JS笔记（上卷）',
      children: getSidebar('YDKJS笔记（上卷）')
    }
  ],
  '/YDKJS笔记（中卷）/': [
    {
      text: '你不知道的JS笔记（中卷）',
      children: getSidebar('YDKJS笔记（中卷）')
    }
  ],
  '/YDKJS笔记（下卷）/': [
    {
      text: '你不知道的JS笔记（下卷）',
      children: getSidebar('YDKJS笔记（下卷）')
    }
  ],
  '/算法设计与分析/': [
    {
      text: '开始',
      children: [{ text: '开始', link: '/算法设计与分析/开始.md' }]
    },
    {
      text: '分治',
      prefix: '分治/',
      children: getSidebar('算法设计与分析/分治')
    },
    {
      text: '动态规划',
      prefix: '动态规划/',
      children: getSidebar('算法设计与分析/动态规划')
    },
    {
      text: '贪心',
      prefix: '贪心/',
      children: getSidebar('算法设计与分析/贪心')
    },
    {
      text: '回溯',
      prefix: '回溯/',
      children: getSidebar('算法设计与分析/回溯')
    },
    {
      text: '分支限界',
      prefix: '分支限界/',
      children: getSidebar('算法设计与分析/分支限界')
    },
    {
      text: '总结',
      children: [{ text: '总结', link: '/算法设计与分析/总结.md' }]
    },
  ],

  '/计算机基础/计算机科学': [
    {
      text: '计算机科学',
      children: getSidebar('计算机基础/计算机科学')
    },
  ],
  '/计算机基础/计算机体系结构': [
    {
      text: '计算机体系结构',
      children: getSidebar('计算机基础/计算机体系结构')
    },
  ],
  '/计算机基础/汇编语言': [
    {
      text: '汇编语言',
      children: getSidebar('计算机基础/汇编语言')
    },
  ],
  '/计算机基础/操作系统': [
    {
      text: '操作系统',
      children: getSidebar('计算机基础/操作系统')
    },
  ],
  '/计算机基础/编译原理': [
    {
      text: '编译原理',
      children: getSidebar('计算机基础/编译原理')
    },
  ],
  '/计算机基础/计算机图形学': [
    {
      text: '计算机图形学',
      children: getSidebar('计算机基础/计算机图形学')
    },
  ],
  '/计算机基础/计算机网络': [
    {
      text: '计算机网络',
      children: getSidebar('计算机基础/计算机网络')
    },
  ],
  '/浏览器': [
    {
      text: 'webkit技术内幕',
      prefix: 'webkit技术内幕',
      children: getSidebar('浏览器/webkit技术内幕')
    },
    {
      text: '其他',
      children: getSidebar('浏览器')
    }
  ],
  '/源码/vue': [
    {
      text: 'vue',
      children: getSidebar('源码/vue')
    }
  ],
  '/css世界/': [
    {
      text: 'css',
      children: getSidebar('css世界')
    }
  ]
};

module.exports = {
  navbar,
  sidebar
};

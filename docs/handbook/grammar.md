---
title: 'Markdown语法'
author: '米修'
date: '2022-07-07'
---

## 禁止解析Markdown语法
 - 加\转义  
  > \\#  
  > \\*  
  > \\>  
 - 输出
 ::: tip
  \#
  \*
  \>
 :::

## 标题 
 - 输入
  ```
    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
  ```
 - 输出
 <h1>一级标题</h1>
 <h2>二级标题</h2>
 <h3>三级标题</h3>
 <h4>四级标题</h4>
 <h5>五级标题</h5>

## 换行
换行方式
- 直接在一句话后面加两个空格
- 两句话之间加空行
- 如果你在编辑的时候，想让一行文字分成几段在显示的时候换行，就在中间加
- \<br/>

## 字体
 - 输入
  ```
  *斜体文本*
  _斜体文本_
  **粗体文本**
  __粗体文本__
  ***粗斜体文本***
  ___粗斜体文本___
  ```
  - 输出
<!-- <table><tr><td bgcolor="MistyRose"> -->
::: tip
*斜体文本*  
_斜体文本_  
**粗体文本**  
__粗体文本__  
***粗斜体文本***  
___粗斜体文本___
:::  
<!-- </td></tr></table> -->

## 分割线
```
分割线  
***
* * *
*****
- - -
----------
```
::: tip
***  
* * *  
*****  
- - -  
----------  
:::
## 删除线，下划线
```
~~~删除线~~~

<u>下划线</u>
```
::: tip
~~~删除线~~~

<u>下划线</u>
:::

## 脚注
脚注是对文本的补充说明。  
[^要注明的文本]：

## 列表及嵌套
markdown可以通过 * - + 开头作为列表标记  
```
* 第一行
* 第二行

- 第一行
- 第二行

+ 第一行
+ 第二行
```
::: tip
* 第一行
* 第二行

- 第一行
- 第二行

+ 第一行
+ 第二行
::: 
## 区块
### 以\>开头作为区块
> 这是一个区块

### 区块嵌套\>> 或\>>>
> 一层嵌套
>> 二层嵌套
>>> 三层嵌套
>>>> 四层嵌套
>>>>> 以此类推

### 区块中使用列表
> 1. 第一项
> 2. 第二项
>> + 子一项
>> + 子二项

# 进阶

## 插入代码
- 插入一行代码  
`int a = 1;`
- 插入代码块
```javascript
let a = 1;
const PI = 3.1415926;
```

### 插入链接
```
[链接名称](链接地址)
或者
<链接地址>
```
[头像](https://avatars.githubusercontent.com/u/108465082?v=4)  
<https://avatars.githubusercontent.com/u/108465082?v=4>

### 插入图片
```
![图片描述](图片地址)
```
![头像](https://avatars.githubusercontent.com/u/108465082?v=4)

### 表格
```
每排单元格用|分开，表头与内容用-分开
加:可以实现左对齐，右对齐，居中。不加则默认为左对齐
| 表头 | 标题 | 标题 |
| :--- | :---: | ---: |
| 内容 | 内容 | 内容 |
| 内容 | 内容 | 内容 |
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 | 

### 支持HTML元素
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写 
```
使用<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```
使用<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑



# 高级语法-在VuePress中使用

## 任务列表(Task lists)
类似于checkbox，多选框效果
```
- [x] 已完成的计划
- [ ] 待完成 1
- [ ] 待完成 2
- [x] 已完成的计划
- [ ] 待完成 1
- [ ] 待完成 2
```

- [x] 已完成的计划
- [ ] 待完成 1
- [ ] 待完成 2
- [x] 已完成的计划
- [ ] 待完成 1
- [ ] 待完成 2

@github/support what do you think about these updates?

[@zuoxiaobai ](/zuoxiaobai) what do you think about these updates? 

## badge 徽章[![huizhan](https://img.shields.io/travis/rust-lang/rust/master.svg#alt=Travis%20branch)]()
通过链接引入小的徽章图片，一般可以自定义
```
[![](https://img.shields.io/travis/rust-lang/rust/master.svg#alt=Travis%20branch)]()
[![](https://img.shields.io/packagist/l/doctrine/orm.svg#alt=Packagist)]()
[![](https://img.shields.io/scrutinizer/coverage/g/phpmyadmin/phpmyadmin/master.svg#alt=Scrutinizer%20branch)]()
[![](https://img.shields.io/badge/zuoxiaobai-testBadge-orange.svg#alt=zuoxiaobai)]()
```
[![](https://img.shields.io/travis/rust-lang/rust/master.svg#alt=Travis%20branch)]()
[![](https://img.shields.io/packagist/l/doctrine/orm.svg#alt=Packagist)]()
[![](https://img.shields.io/scrutinizer/coverage/g/phpmyadmin/phpmyadmin/master.svg#alt=Scrutinizer%20branch)]()
[![](https://img.shields.io/badge/zuoxiaobai-testBadge-orange.svg#alt=zuoxiaobai)]()

## 内部链接
```
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```

## Emoji
```
:tada: :100:
```
:tada: :100:

可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的 Emoji。

## 目录
```
[[toc]]
```
[[toc]]

## 自定义容器
```
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

自定义标题
```
::: danger STOP
危险区域，禁止通行
:::
```
::: danger STOP
危险区域，禁止通行
:::


## 代码块中的语法高亮
<pre style="color: #fff;">
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
</pre>

``` js
export default {
  name: 'MyComponent',
  // ...
}
```
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

## 代码块中的行高亮
<pre style="color: #fff;">
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
</pre>
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
除了单行以外，你也可指定多行，行数区间，或是两者都指定。

- 行数区间: 例如 {5-8}, {3-10}, {10-17}
- 多个单行: 例如 {4,7,9}
- 行数区间与多个单行: 例如 {4,7-13,16,23-27,40}

<pre style="color: #fff;">
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
</pre>
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```



## 行号


## 导入代码段
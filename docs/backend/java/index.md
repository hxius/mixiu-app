---
title: '后端体系'
author: '米修'
date: '2022-07-09'
---

# Java体系
> Java一共有三个体系，分别是JavaSE、JavaME以及JavaEE。JavaSE是桌面应用；JavaME属于企业级应用，用于网络编程，是对JavaSE的拓展而JavaEE则是移动设备，是手机类嵌入式编程，是对JavaSE的缩减。我们最先接触的肯定是最基础的技术JavaSE，学完JavaSE之后可以选择向JavaME或JavaEE方向发展。但是只有将JavaSE知识学扎实了，才能继续之后的学习，否则越到后面学习起来越困难。JavaSE（Java Standard Edition）是Java技术的核心和基础也是 JavaEE（Java Enterprise Edition）和 JavaME (Java Micro Edition) 编程的基础

![Java知识体系](/pics/Java体系.jpeg)

## JavaSE
<font color="#02a2ff">**JavaSE (JavaStandardEdition) :标准版，定位在个人计算机上的应用**</font>
- 基础语法：Java关键字，类型转换、循环语句、方法、运算符、递归。
- 面向对象编程：面向对象设计思想、对象与内存、方法重载、对象创建使用、this的使用、final的使用、super的使用、static的使用、package和import的运用、对象转型、多态、抽象类、接口等基本的知识点。其中重点掌握有封装、继承、多态、抽象类、接口。
- 异常处理：try,……,catch(Exceptione),……,、异常的分类、finally的使用、方法异常的抛出、自定义异常。

![javase异常处理](/pics/javase异常处理.jpeg)

- 数组：基本的数组操作。二维数组的使用。
- 常用类：String类、StringBuffer类、Math类、File类、包装类、StringBuilder类、Date类、DateFormat类、Calendar类、JDK8的日期类、Math类、Random类、枚举
- 容器：Java.util包下，有三个接口List、Set、Map，List下面有ArrayList、Vector、LinkedList，Set下有HashSet、TreeSet，Map下有HashMap、HashSet，当然了，还有Dictionary下的HashTable，HashTable下的子类Properties

![javase异常处理](/pics/容器.jpeg)

- Java.IO包：学过继承、多态、接口之后，容器和这一节就要用上，一开始是比较难理解，一旦理解了，通过触类旁通，其他也就是这样子学，这个IO里面最典型的设计模式是：装饰设计模式，大家学习的时候也可以结合这个设计模式来学。
- 线程：线程的两种实现方式，Synchronized关键字——同步，死锁等问题。
- GUI:现在用的不多，MVC，在swing中体现得淋漓尽致。
- 日期处理、正则表达式。

### 数据结构与算法
- 冒泡排序
- 选择排序
- 递归算法
- 折半查找
- 数据结构概述
- 线性表
- 栈和队列
- 树和二叉树

## JavaME
<font color="#02a2ff">**JavaEE (Java Enterprise Edition) :企业版，定位在服务器端的应用**</font>

> JavaEE 是 JavaSE的扩展，增加了用于服务器开发的类库。如：JDBC 是让程序员能直接在 Java 内使用的 SQL 的语法来访问数据库内的数据：Servlet 能够延伸服务器的功能，通过请求-响应的模式来处理客户端的请求；JSP是一种可以将Java程序代码内嵌在网页内
的技术.

## JavaEE
<font color="#02a2ff">**JavaME (Java Micro Edition) :微型版，定位在消费性电子产品的应用上**</font>

> JavaME 是 JavaSE 的内伸，包含J2SE的一部分核心类，也有自己的扩展类,增加了适合微小装置的类库： javax.microedition.io.* 等。该版本针对资源有限的电子消费产品的需求精简核心类库，并提供了模块化的架构让不同类型产品能够随时增加支持的能力。很多人开始会误解为安卓开发就是JavaME,这两个是完全不同的内容。
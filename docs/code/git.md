---
title: 代码管理
author: 道格拉斯·米修
date: '2022-07-02'
---

## Git管理
-   回退到pull之前的版本<由于冲突处理失败返回pull前的状态>
    ```
    $ git reflog  
    $ git reset --hard HEAD@{n}   n是从0最近开始
    ```

-   删除分支
    ```
    $ git branch -d 本地分支名   // 删除本地分支
    $ git branch -D 本地分支名   // 强制删除
    $ git push origin --delete 远程分支名    // 删除分支名
    ```
    
-   拉取远程分支
    ```
    $ git pull   在master分支下git pull可以拉取远程新建分支
    ```
    
-   切换分支
    ```
    $ git checkout 分支名
    $ git checkout -b 新建分支名
    ```
    
-   撤销合并
    ```
    $ git reset --hard HEAD    // 未提交时
    $ git reset --hard ORIG_HEAD   // 已提交时
    ```
    
-   免密码git pull
    ```
    $ git config --global credential.helper store
    ```
    
-   回退合并前
    ```
    $ git reset --merge
    ```
    
    
-  Node报错
    ```
    [Node]报错：gyp verb check python checking for Python executable "python2" in the PATH
    
    $ npm install --global --production windows-build-tools
    ```
   
- 剔除commit
    ```
    1.使用git log 命令，查看已提交的记录。例如红色圈出的commit是本次要删除的commit。
    ```
  
- 设置文件名是否忽略大小写
  ```
    $ git config core.ignorecase  // 检查是否忽略大小写 true: 是，false: 否
    $ git config core.ignorecase false // 设置为不忽略大小写
    $ git rm <文件> // 删除原文件、文件名(找到对应路径)
    $ git rm -r <文件夹> // 删除原文件、文件名(找到对应路径)
    $ git add newFileNames // 新增文件、文件名
    $ git commit -m 'MISC:add files'
    $ git push origin
    // 如提交后远程仓库会存在两个同名文件(原文件未被删除)，需要远程删除  
    $ git rm -r -n --cached components\introduce  // 确认远程文件
    $ git rm -r --cached components\introduce  // 删除远程文件
    $ git commit -m "修改提交"
    $ git push origin <分支名>
  ```
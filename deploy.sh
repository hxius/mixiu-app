#!/usr/bin/env sh

set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M main
git config --global user.name "hxius"
git config --global user.email "bebe1757@163.com"
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hxius/hxius.github.io.git main
rm -rf ./docs/.vuepress/dist
cd -
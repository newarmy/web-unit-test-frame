搭建unit测试框架

1. 需要安装的项目：
"jasmine-core": "^2.8.0",  单元测试库
"karma": "^1.7.1",  测试框架， --- http://karma-runner.github.io/0.10/intro/installation.html
"karma-chrome-launcher": "^2.2.0", 配置选择chrome浏览器
"karma-growl-reporter": "^1.0.0", 测试报告插件
"karma-jasmine": "^1.1.0",  karma操作jasmine的插件
"karma-junit-reporter": "^1.2.0",  测试报告插件
"karma-phantomjs-launcher": "^1.0.4",配置选择phantomjs浏览器
"karma-webpack": "^2.0.4",  webpack与karma的连接
"webpack": "^3.5.6"
安装karma命令行 npm install -g karma-cli

2.创建karma配置文件my.conf.js
 karma init my.conf.js --> 创建karma配置文件
  在specs文件夹中创建测试用例
  使用jasmine 编写


3 运行Karma:  （--reporters junit 指定测试报告方式）
$ ./node_modules/karma/bin/karma start my.conf.js --single-run   --reporters junit



-------------------------------------------------------
e2e或者端到端（end-to-end）或者UI测试是一种测试方法，
它用来测试一个应用从头到尾的流程是否和设计时候所想的一样。
简而言之，它从一个用户的角度出发，认为整个系统都是一个黑箱，只有UI会暴露给用户。

https://zhuanlan.zhihu.com/p/26034302
-------------------------------------------------------
#  mock 文档参考:https://github.com/nuysoft/Mock/wiki/Syntax-Specification

# vue-mock

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 1.首先安装mockjs  
# 2.首先在mock文件夹下创建index.js文件，这里就是我们注册所有mock服务的地方  
# 3.服务注册好之后，在main.js中引入   
 ** // main.js  
 **  require('./mock');  
 # 4.在mock文件夹下随便创建一个文件demoList.js
     在该文件中，我们可以按照index注册服务的格式来写我们的mock
 # 5. 当我们在页面发起了ajax请求，路径是'/parameter/query'，并且请求方式是get时，就会返回我们写好的mock数据。
 # 生成数据
      ** let demoList = {    
        ** status: 200,  
        ** message: 'success',  
        ** data: {  
          ** total: 100,  
          ** 'rows|10': [{  
          **   id: '@guid',  随机id
           **  name: '@cname',  随机中文名
          **   'age|20-30': 23,  20-30之内的数字
           **  'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']  
           **}]  
       **  }  
      ** };  
     **  export default {  
      **     'get|/parameter/query': demoList  
    **   }         
     
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

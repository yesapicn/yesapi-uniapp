[toc]
# yesapi-uniapp
小白接口打造uniapp源代码，开箱即用
## 首先下载源码
https://github.com/yesapicn/yesapi-uniapp

从git上面拿下来的代码用HBuilder打开，会看的如下画面![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425135643365.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)

## 第二步配置参数

配置自己的微信AppID（已经配过的跳过这一步）
在根目录下面的manifest.json配置，如图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425140136220.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
然后配置自己的小白账号信息，[点击查看](http://open.yesapi.cn/?r=App/Mine)
在根目录的component/okayapi/okayapi.js里面输入自己的app_key和app_secret，如图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425140442282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
然后点开根目录下面main.js配置上自己的小白专属域名即可（注意！http要改成https！并且要在微信小程序平台上面配置自己的合法域名。配置过的可以跳过这一步）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425140606595.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
## 开发者平台配置域名
下载好源码之后需配置服务器域名（已配置过的可以跳过这一步）

+ 登录微信公众号平台
+ 设置 - 开发设置 - 服务器域名，修改request合法域名，uploadFile合法域名，修改为你当前所在的小白接口域名(小白接口已支持HTTPS访问)。如下：
![在这里插入图片描述](http://cdn7.phalapi.net/20180325091907_c20c1b1cb2a0f9822c4faad47557be7c)

> 特别注意！在微信服务器域名配置request合法域名时，一定要注意，域名前后不能有空格，最后不能有斜杠！！
否则会出现类似以下的错误提示：
![在这里插入图片描述](http://cdn7.okayapi.com/20180820224318_af9c1b0360728a590ce0879a2a6f0c93.png)

搞定啦~已经可以调用所有的实用接口了，如图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425141121971.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425141252675.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425141431533.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425141520819.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)

## 接下来一起去小白免费数据库上建个模型吧
如果您是小白会员（九块钱终身会员），只需两步即可完成
# 1.导入模型
打开[小白接口-数据](http://open.yesapi.cn/?r=Data/ImportModelFromJson)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425142926145.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
导入成功后在[我的数据](http://open.yesapi.cn/?r=Data/MyModelsManager)查看刚刚导入的模型并选择导入csv文件，如图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425143144470.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425143334186.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
然后刷新小程序 将会看到
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425143420846.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190425143457468.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
# 联系我们
如有问题，欢迎提交Issue到这里，我们会尽快回复您的，或者联系我们[@sHuXnHs](https://github.com/shuxnhs) [@WillFang1997](https://github.com/WillFang1997)

如果喜欢，那就点个小心心呗，biu~~~


## 开源不易，需要鼓励。您的支持就是我们最大的前进动力！


# PowerBy——YesAPI

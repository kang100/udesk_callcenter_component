获取agent_api_token
=======

请求地址
-----------------
+ URL 'https://{您在udesk注册的二级域名}/open_api_v1/get_agent_token'
+ VERB POST

请求头
---
```
open_api_token: xxxxxx
content_type: application/json
```
[open_api_token获取方法](http://www.udesk.cn/website/doc/api/%E7%99%BB%E5%BD%95%E6%8E%A5%E5%8F%A3/)


请求参数
----
需要传一段json
```javascript
{
  "email": "admin@demo.com",  // 管理员邮箱
  "agent_email": "agent@demo.com", //客服邮箱
  "timestamp": "1490410834", //当前时间的Unix timestamps
  "sign": sha1(adminEmail+"&"+openApiToken+"&"+timestamp) //签名，adminEmail(管理员邮箱),openApiToken,当前的时间戳用&拼接，然后用sha1加密后的结果
}
```

返回结果
-----------------

```json
{
"code":1000,
"agent_api_token":"xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```













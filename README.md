# exam-01

## 需求

请使用 Vue.js 和 [Clair](https://clair-design.github.io/component/install) UI 组件库实现如下图需求：

![screen](https://p1.ssl.qhimg.com/t011a5c1f28d1df0b3a.png)

具体要求：

1. 广告主资料可以按照「广告主名称」和「审核状态」进行查询，默认列出所有广告主。审核状态选项可以是**全部**、**待审核**、**审核通过**和**审核拒绝**。
2. 广告主资料列表中的网址需要可以点击。
3. 列表分页显示，每页显示 10 条数据。

## 服务器端接口

> 注意：接口和前端页面处于同一域名。

GET /advertiser/list

参数列表：
- query 按照广告主名称查询的关键词
- status 审核状态，0为待审核、1为审核通过、2为审核拒绝
- ps 每页多少条数据
- pn 当前页码，从0开始

返回值示例：

```javascript
{
  "errno": 0,
  "total": 110,
  "list": [
    {
      "name": "准先儿方公司",
      "url": "http://www.acvrucgyuk.com",
      "status": 1
    },
    {
      "name": "织就记团共公司",
      "url": "http://www.nzflb.com",
      "status": 0
    }
  ]
}
```

返回字段说明：

- errno 错误代码，如果返回正确则为0
- total 数据总条数
- list 数据列表
- name 广告主名称
- url 广告主 URL
- status 审核状态

## 开发说明

1. Fork 并克隆代码到本地
2. 运行 `npm install` 或 `yarn` 安装依赖
3. 运行 `npm start` 启动开发服务
4. 修改 `src/pages/AdvertiserList.vue` 实现页面


const Mock = require('mockjs')

module.exports = {
  'GET /advertiser/list': (req, res) => {
    const { query } = req
    const { status } = query
    const ps = Number(query.ps) || 10
    const itemDefinition = {
      name: `@ctitle()${query.query || ''}公司`,
      url: 'http://www.@domain()'
    }
    if (status === undefined) {
      itemDefinition['status|0-2'] = 0
    } else {
      itemDefinition.status = status
    }
    const json = Mock.mock({
      errno: 0,
      total: 100,
      [`list|${ps}`]: [
        itemDefinition
      ]
    })
    res.json(json)
  }
}

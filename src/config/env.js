module.exports = {
  baseUrl: 'https://api.github.com/orgs/takenet/repos?per_page=6',
  port: 5050,
  headers:  {
    cors: {'Access-Control-Allow-Origin': '*'},
    method: {'Access-Control-Allow-Methods': 'GET'}
  }
}

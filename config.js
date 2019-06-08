module.exports = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,

  pagination: {
    defaultPage: 0,
    defaultCount: 15,
    maxCount: 100
  }
}
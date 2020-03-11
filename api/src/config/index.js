const env = {
  app: {
    name: 'react',
    version: '1.0.0'
  },
  expiresInToken: '24hr',
  secretKeyToken: '$react-demo',
  port: 5000,
  apiName: 'api',
  saltBcrypt: 10,
  database: 'demo',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

export default env
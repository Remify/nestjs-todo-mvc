const ConnectionString = require('connection-string').ConnectionString;
const config = require('dotenv').config;
const path = require('path');

const connectionString = new ConnectionString(process.env.DATABASE_URL);

config();

if (connectionString.protocol === 'sqlite') {
    module.exports = {
        type: 'sqlite',
        database: './' + connectionString.host + (connectionString.segments.length ? '/' + connectionString.segments[0] : ''),
        entities: [
            'src/**/entities/**/*.entity.ts',
        ]
    }
} else {
    module.exports = {
        type: connectionString.protocol,
        host: connectionString.host,
        port: +connectionString.port,
        username: connectionString.user,
        password: connectionString.password,
        database: connectionString.segments[0],
        entities: [
            'src/**/entities/**/*.entity.ts',
        ]
    }
}
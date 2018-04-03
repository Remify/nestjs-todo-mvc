export const DB_CONFIG = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'todo-mvc',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
}
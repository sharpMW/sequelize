//Configuration options for different environments

module.exports = {
    development: {
        postgres : {
            options: {
                host: 'localhost',
                port: '5432',
                database: 'seq',
                dialect: 'postgres',
                username: 'sarim', //password not needed
                logging: console.log(),
            },
            client:  null,
        }
    }
}
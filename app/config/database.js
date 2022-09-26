module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi1'),
        username: env('DATABASE_USERNAME', 'strapi1'),
        password: env('DATABASE_PASSWORD', 'strapi1'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

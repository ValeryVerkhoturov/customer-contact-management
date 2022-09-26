module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi1'),
      user: env('DATABASE_USERNAME', 'strapi1'),
      password: env('DATABASE_PASSWORD', 'strapi1'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

const env = process.env;

interface IConfig {
  db: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
  server: string;
}

export const config: IConfig = {
  db: {
    host: env.DB_HOST || 'db',
    user: env.DB_USER || 'msmf_global_db_admin',
    password: env.DB_PASSWORD || 'msmf_db_admin@2021',
    database: env.DB_NAME || 'msmf_global_db',
  },
  server: env.SERVER || 'http://server:8000',
};

module.exports = {
  production: {
    username: 'bdJorge',
    password: '#Gf32910561836',
    database: 'bdProjetoIndividual',
    host: 'bdbebett3r.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 

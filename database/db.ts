const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './configdb.sqlite'
  });

class Database {

    dialect: string;
    storage: string;

    constructor(dialect: string,storage: string){
        this.dialect = dialect;
        this.storage = storage;
    }

    async run(): Promise<Boolean>{
        const sequelize = new Sequelize({
            dialect: this.dialect,
            storage: this.storage
          });
          try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            return true;
          } catch (error) {
            console.error('Unable to connect to the database:', error);
            return false;
          } 
    }
}



export = {Database};
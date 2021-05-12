const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/configdb.sqlite'
  });

class User  {
    static  async init() {
        const user = sequelize.define('User', {
            firstName: {
                type: DataTypes.STRING,
           
            },
            lastName: {
                type: DataTypes.STRING,
           
            },
            email: {
                type: DataTypes.STRING,
            
            },
            password: {
                type: DataTypes.STRING,
             
            }
        })
        console.log( user === sequelize.models.User);
         await user.sync({force: true});
         
    }
}

export {User};